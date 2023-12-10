import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // Saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Value previously stored
      return JSON.parse(value)
    } else {
      return 0;
    }
  } catch (e) {
    // Error reading value
  }
};

export const clearStorage = async() => {
  AsyncStorage.clear();
};