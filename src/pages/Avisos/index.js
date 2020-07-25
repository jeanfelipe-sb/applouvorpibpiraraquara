import React, { useState, useEffect } from 'react';

import TouchButtonLight from '../../components/TouchButtonLight/index';
import api from '../../services/api';
import Loader from '../../components/Loader/index';

import {
  Wrapper, 
  Icon,
  Container,
  TitleDate,
  Title,
  CardTouch,
  CardBody,
  CardRight
} from './styles'

export default function Avisos({navigation}) {
  const [avisos, setAvisos] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {    
    async function loadData() {
      await api.get(`/avisos`)
      .then((response) => {
        setAvisos(response.data.data)
      });      
      setLoading(false);
    }
    loadData();
  },[]);

  return (
    <Wrapper>
      {loading ? <Loader/> : <> 
        <Container>     
          {avisos.map((aviso) =>         
            <CardTouch key={aviso.id} 
              onPress={() => navigation.navigate('AvisoDetalhes', {aviso: aviso})}>
              <CardBody>
                <TitleDate numberOfLines={1}>14/05/2020</TitleDate>
                <Title numberOfLines={1}>{aviso.titulo}</Title>
              </CardBody>
              <CardRight>
                <Icon name="arrow-right"/>
              </CardRight>
            </CardTouch> 
          )}
          <TouchButtonLight>CARREGAR MAIS</TouchButtonLight>
        </Container>
      </>}
    </Wrapper>
  );
}