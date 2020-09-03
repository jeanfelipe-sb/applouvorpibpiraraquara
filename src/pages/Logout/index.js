import React, { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/auth';
import Loader from '../../components/Loader/index';

export default function Logout({navigation}) {
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    signOut();
  },[]);

  return (   
    <>
      <Loader/>
    </>
  );
}