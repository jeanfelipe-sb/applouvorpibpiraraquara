import React, { useState, useEffect } from 'react';
import CardProximaEscala from '../../components/CardProximaEscala/index';
import UltimosAvisos from '../../components/UltimosAvisos/index';
import HeaderHome from '../../components/HeaderHome/index';
import api from '../../services/api';
import Loader from '../../components/Loader/index';

import { Container, Wrapper } from './styles'

export default function Home({navigation}) {
  const [avisos, setAvisos] = useState(null)
  const [proximaEscala, setProximaEscala] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {    
    async function loadData() {
      await api.get(`/ultimos-avisos`)
      .then((response) => {
        setAvisos(response.data.data)
      });      

      await api.get(`/escalasproxima`)
      .then((response) => {
        setProximaEscala(response.data.data[0])
      });  
      
      setLoading(false);
    }
    loadData();
  },[]);

  return (
    <Wrapper>
      {loading ? <Loader/> : <>           
        <Container>
          <HeaderHome/>          
          <UltimosAvisos avisos={avisos} navigation={navigation}/>
          <CardProximaEscala proximaEscala={proximaEscala} navigation={navigation}/>
        </Container>
      </>}
    </Wrapper>
  );
}