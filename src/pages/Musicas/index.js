import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import ItemMusica from '../../components/ItemMusica/index';
import Loader from '../../components/Loader/index';
import TouchButtonLight from '../../components/TouchButtonLight/index';
import { 
  Container, 
  Header,
  Body,
  ItemBody,
  Wrapper, 
  TextHeader,
  ContainerSearch,
  InputSearch,
  Footer
} from './styles'

export default function Musicas({navigation}) {
  const [musicas, setMusicas] = useState(null)
  const [countMusicas, setcountMusicas] = useState(0)
  const [loading, setLoading] = useState(true)

  async function loadData() {
    await api.get(`/musicas`)
    .then((response) => {
      setMusicas(response.data.data)
      setcountMusicas(response.data.data.length)
    });      
    setLoading(false);
  }
  
  async function loadMoreData() {
    await api.get(`/musicas?page=`+1)
    .then((response) => {
      setMusicas(musicas.concat(response.data.data))
      setcountMusicas(countMusicas + response.data.data.length)
      console.log(response)
    });      
    setLoading(false);
  }
  
  useEffect(() => {
    loadData();
  },[]);
    
  return (   
    <Wrapper>
      <Container>
        <Header>
          <TextHeader>Músicas</TextHeader>
          <ContainerSearch>
            <InputSearch 
              placeholder="Pesquisar"
              returnKeyType="search"/>
          </ContainerSearch>
        </Header>
        <Body>
          {loading ? <Loader/> : <> 
            {musicas.map((musica) =>
              <ItemBody key={musica.id}>
                <ItemMusica navigation={navigation} title={musica.titulo} artist={musica.artista} musica={musica}/>
              </ItemBody>
            )}
          </>}
        </Body>
        <Footer>
          <TouchButtonLight onPress={() => loadMoreData()}>
              CARREGAR MAIS
          </TouchButtonLight>
        </Footer>
      </Container>
    </Wrapper>
  );
}