import React, { useState, useEffect, createContext}  from 'react'
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import {View, ActivityIndicator} from 'react-native';
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
        setUser(storagedUser);
      }
      
      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(credentials){    
    const response = await api.post('/auth/login', credentials);
    
    setUser(response.data.access_token);
    
    api.defaults.headers.Authorization = `Baerer ${response.data.access_token}`;

    await AsyncStorage.setItem("@userToken:user", 'true');
    storeToken(response.data.access_token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#665" />
      </View>
    );
  }

  return (    
    <AuthContext.Provider value={{signed: !!user, signIn, signOut}}>
      {children}
    </AuthContext.Provider> 
  );
}

export default AuthContext;