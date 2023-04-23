import { useEffect, useState } from "react";
import { Fetch, Method } from "@Api/fetch";
import { Get } from "@Api/routes";
import _ from "lodash";
import { setStorage, getStorege } from "@Utils/storage";
import { BankModel } from "@ModelsbankModel";

const useData = () => {
  const [DATA, setData] = useState<BankModel>({});

  //Get storage or call api
  const handleStore = () => {
    getStorege().then((result: BankModel) => {
      return _.isEmpty(result)
        ? getData(Method.GET, Get.ListOfBanks)
        : setData(result);
    });
  };

  useEffect(() => {
    handleStore();
  }, []);

  //Generic data collection
  const getData = async (Method: Method, Url: string) => {
    const { status, response } = await Fetch(Method, Url);
    if (status) {
      setData(response.data);
      setStorage(response.data);
    }
  };

  return { DATA };
};

export { useData as useListOfBanks };
