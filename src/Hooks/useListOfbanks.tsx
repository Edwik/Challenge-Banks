import { useEffect, useState } from "react";
import { Fetch, Method } from "@Api/fetch";
import { Get } from "@Api/routes";

const useData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData(Method.GET, Get.ListOfBanks);
  }, []);

  //Generic data collection
  const getData = async (Method: Method, Url: string) => {
    const { status, data } = await Fetch(Method, Url);
    if (status) {
      setData(data.data);
    }
  };

  return { data };
};

export { useData as useListOfBanks };
