import { BankModel } from "@ModelsbankModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorage = async (value: BankModel) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_data", jsonValue);
  } catch (e) {
    // Tracking error
  }
};

const getStorege = async (): Promise<BankModel> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_data");
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    // Tracking error
    return {};
  }
};

export { setStorage, getStorege };
