import React, { useState, useEffect } from 'react';

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
  CardRight,
  Button1Text,
  Button1Container
} from './styles'

export default function Avisos({navigation}) {
  const [avisos, setAvisos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showLoadMore, setShowLoadMore] = useState(true)
  const [page, setPage] = useState(2)
  
  useEffect(() => {    
    async function loadData() {
      await api.get(`/avisos`)
      .then((response) => {
        const dados = response.data;
        setShowLoadMore(dados.current_page !== dados.last_page)
        setAvisos(dados.data)
      });      
      setLoading(false);
    }
    loadData();
  },[]);

  const loadMoreData = () => {
    api.get(`/musicas?page=`+page)
    .then((response) => {
      const dados = response.data;
      setShowLoadMore(dados.current_page !== dados.last_page)

      setMusicas(musicas.concat(dados.data));
      setPage(page+1);
    });      
    setLoading(false);
  }

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
          { showLoadMore ? <>
            <Button1Container onPress={() => loadMoreData()}>
              <Button1Text>
                Carregar Mais
              </Button1Text>
            </Button1Container>
          </> : false}
        </Container>
      </>}
    </Wrapper>
  );
}