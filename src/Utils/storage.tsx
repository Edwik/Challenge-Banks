import { BankModel } from "@ModelsbankModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorage = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_data", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getStorege = async (): Promise<BankModel> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_data");
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    // error reading value
    return {};
  }
};

export { setStorage, getStorege };
