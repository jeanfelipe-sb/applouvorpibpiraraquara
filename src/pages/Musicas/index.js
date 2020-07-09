import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth';
import api from '../../services/api';

import ItemMusica from '../../components/ItemMusica/index';
import TouchButtonLight from '../../components/TouchButtonLight/index';
import { 
  Container, 
  Header,
  Wrapper, 
  TextHeader,
  TitleMusic,
  ArtistMusic,
  ContainerSearch,
  InputSearch,  
  ButtonSearch,
  IconSearch 
} from './styles'

export default function Muscas() {
  const { signOut } = useContext(AuthContext);
    
  return (   
    <Wrapper>
      <Container>
        <Header>
          <TextHeader>Músicas</TextHeader>
          <ContainerSearch>
            <InputSearch 
              placeholder="Pesquisar"/>
            <ButtonSearch>
              <IconSearch name="magnifier"/>
            </ButtonSearch>
          </ContainerSearch>
        </Header>
        <ItemMusica>
          <TitleMusic numberOfLines={1}>Nome da música teste</TitleMusic>
          <ArtistMusic numberOfLines={1}>Nome do artista</ArtistMusic>
        </ItemMusica>
        <ItemMusica>
          <TitleMusic numberOfLines={1}>Nome da música</TitleMusic>
          <ArtistMusic numberOfLines={1}>Nome do artista</ArtistMusic>
        </ItemMusica>
        <ItemMusica>
          <TitleMusic numberOfLines={1}>Nome da música</TitleMusic>
          <ArtistMusic numberOfLines={1}>Nome do artista</ArtistMusic>
        </ItemMusica>
        <ItemMusica>
          <TitleMusic numberOfLines={1}>Nome da música</TitleMusic>
          <ArtistMusic numberOfLines={1}>Nome do artista</ArtistMusic>
        </ItemMusica>
        <TouchButtonLight>CARREGAR MAIS</TouchButtonLight>
      </Container>
    </Wrapper>
  );
}