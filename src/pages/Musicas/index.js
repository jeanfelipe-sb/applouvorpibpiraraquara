import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import ItemMusica from '../../components/ItemMusica/index';
import Loader from '../../components/Loader/index';
import { 
  Container, 
  Header,
  Body,
  ItemBody,
  Wrapper, 
  TextHeader,
  ContainerSearch,
  InputSearch,
  Footer,
  Button1Text,
  Button1Container
} from './styles'

export default function Musicas({navigation}) {
  const [musicas, setMusicas] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [showLoadMore, setShowLoadMore] = useState(true)
  const [page, setPage] = useState(2)
 

  const searchApi = () => {
    api.get(`/musicas/search/search=`+search+`?page=1`)
    .then((response) => {
      const dados = response.data;
      setShowLoadMore(dados.current_page !== dados.last_page)
      console.log(dados)
    });      
    setLoading(false);
  }
  
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

  const onChangeSearch = (text) => {
    setSearch(text);
  }
  
    
  return (   
    <Wrapper>
      <Container>
        <Header>
          <TextHeader>Músicas</TextHeader>
          <ContainerSearch>
            <InputSearch 
              placeholder="Pesquisar"
              returnKeyType="search"
              onChangeText={text => onChangeSearch(text)}
              onSubmitEditing={() => searchApi()}
              />
          </ContainerSearch>
        </Header>
        {loading ? <Loader/> : <> 
         { 
            (musicas.length > 0) ? <>
              <Body>
                  {musicas.map((musica) =>
                    <ItemBody key={musica.id}>
                      <ItemMusica navigation={navigation} title={musica.titulo} artist={musica.artista} musica={musica}/>
                    </ItemBody>
                  )}
              </Body>
              { showLoadMore ? <>
                <Footer>            
                  <Button1Container onPress={() => loadMoreData()}>
                    <Button1Text>
                      Carregar Mais
                    </Button1Text>
                  </Button1Container>
                </Footer>
              </> : false}
           </> : false
         }
        </>}
      </Container>
    </Wrapper>
  );
}