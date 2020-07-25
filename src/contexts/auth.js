import React, { useState, useEffect, createContext}  from 'react'
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './../components/Loader/index';
import { storeToken } from '../utils';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@userToken:user");
      const storagedToken = await AsyncStorage.getItem("@userToken:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      
      setLoading(false);
    }

    loadStorageData();
  },[]);

  async function signIn(credentials){    
    const response = await api.post('/auth/login', credentials);
    api.defaults.headers.Authorization = `Baerer ${response.data.access_token}`;
    await AsyncStorage.setItem("@userToken:user", JSON.stringify(response.data.user));
    storeToken(response.data.access_token);
    setUser(response.data.user);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (    
    <AuthContext.Provider value={{signed: !!user, signIn, signOut, user}}>
      {children}
    </AuthContext.Provider> 
  );
}

export default AuthContext;