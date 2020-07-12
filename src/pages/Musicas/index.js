import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import ItemMusica from '../../components/ItemMusica/index';
import TouchButtonLight from '../../components/TouchButtonLight/index';
import { 
  Container, 
  Header,
  Body,
  ItemBody,
  Wrapper, 
  TextHeader,
  ContainerSearch,
  InputSearch
} from './styles'

export default function Musicas() {
  const [musicas, setMusicas] = useState(null)
  const [loading, setLoading] = useState(true)

  async function loadData() {
    await api.get(`/musicas`)
    .then((response) => {
      setMusicas(response.data.data)
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
          {loading ? <TextHeader>Carregando</TextHeader> : <> 
            {musicas.map((musica) =>
              <ItemBody>
                <ItemMusica title={musica.titulo} artist={musica.artista}/>
              </ItemBody>
            )}
          </>}
        </Body>
        <TouchButtonLight>CARREGAR MAIS</TouchButtonLight>
      </Container>
    </Wrapper>
  );
}