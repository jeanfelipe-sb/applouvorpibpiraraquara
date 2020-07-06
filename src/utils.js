import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';

export async function getUser() {
  try {
    return await AsyncStorage.getItem('@userToken:token');
  } catch (e) {
    throw e;
  }
}

export async function storeToken(userToken) {
  try {
    return await AsyncStorage.setItem('@userToken:token', userToken);
  } catch (e) {
    throw e;
  }
}

export async function deleteUser() {
  try {
    return await AsyncStorage.removeItem('@userToken:token');
  } catch (e) {
    throw e;
  }
}

export async function getToken() {
  try {
    return await AsyncStorage.getItem('@userToken:token');
  } catch (e) {
    throw e;
  }
}

// NavigationService

// export function navigate(routeName, params) {
//   navigator.dispatch(
//     CommonActions.navigate({
//       routeName,
//       params,
//     }),
//   );
// }
