import { useEffect, useState } from "react";
import { Fetch, Method } from "@Api/fetch";
import { Get } from "@Api/routes";
import _ from "lodash";
import { setStorage, getStorege } from "@Utils/storage";

const useData = () => {
  const [DATA, setData] = useState([]);

  useEffect(() => {
    // _.isEmpty(getStorege())
    //   ? setData(getStorege())
    //   : getData(Method.GET, Get.ListOfBanks);
    handleStorage();
  }, []);

  const handleStorage = () => {
    console.log("1. ", getStorege());
    if (_.isEmpty(getStorege())) {
      console.log("Esta vacio");
      saveData();
      console.log("se lleno");
    } else {
      console.log("Esta lleno");
      setData(getStorege());
    }

    setStorage(getData(Method.GET, Get.ListOfBanks));
  };

  //Generic data collection
  const getData = async (Method: Method, Url: string) => {
    const { status, response } = await Fetch(Method, Url);
    if (status) {
      setData(response.data);
    }
  };

  return { DATA };
};

export { useData as useListOfBanks };
