import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
    console.log('====== AsyncStorage setItem error: ', e);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const jsonValue = JSON.parse(value);
    return JSON.parse(jsonValue);
  } catch (e) {
    console.log(
      `==== parsing error while read ${key} data in local storage:`,
      JSON.stringify(e),
    );
  }

  return null;
};

export const removeItem = async (key) => {
  await AsyncStorage.removeItem(key);
};

export default {
  setItem,
  getItem,
  removeItem,
};
