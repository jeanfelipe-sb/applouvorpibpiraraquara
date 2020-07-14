import React, { useState, useEffect } from 'react';
import CardProximaEscala from '../../components/CardProximaEscala/index';
import UltimosAvisos from '../../components/UltimosAvisos/index';
import HeaderHome from '../../components/HeaderHome/index';
import api from '../../services/api';

import { Container, Wrapper, UserNameText } from './styles'

export default function Home() {
  const [avisos, setAvisos] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {    
    async function loadData() {
      await api.get(`/avisos`)
      .then((response) => {
        console.log(response.data.data)
        setAvisos(response.data.data)
      });      
      setLoading(false);
    }
    loadData();
  },[]);

  return (
    <Wrapper>
      {loading ? <UserNameText>Carregando</UserNameText> : <>           
        <Container>
          <HeaderHome/>          
            <UltimosAvisos avisos={avisos}/>
          <CardProximaEscala/>
        </Container>
      </>}
    </Wrapper>
  );
}