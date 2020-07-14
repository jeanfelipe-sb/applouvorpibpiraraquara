import React, { useState, useEffect, useCallback } from 'react';
import Moment from 'react-moment';

import PanelCollapse from '../../components/PanelCollapse/index';
import { RefreshControl } from 'react-native';
import ItemMusica from '../../components/ItemMusica/index';
import api from '../../services/api';
import { 
  Container, 
  Header, 
  Wrapper,  
  Card, 
  CardTextDate, 
  CardHeader,Button1Container, 
  Button1Text,  
  CardBody,
  CardBodyText,
  CardBodyScroll,
  SelectMonthContent,
  Title,
  Icons,
  NextPriorMonth
} from './styles'

export default function Escalas() {
  const monthToText=(param)=>{
    switch(param) {
      case 1:
        return 'Janeiro';
        break;    
      case 2:
        return 'Fevereiro';
        break;
      case 3:
        return 'Março';
        break;
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
        break;    
      case 6:
        return 'Junho';
        break;
      case 7:
        return 'Julho';
        break;
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
        break;    
      case 10:
        return 'Outubro';
        break;
      case 11:
        return 'Novembro';
        break;
      case 12:
        return 'Dezembro';
        break;
      default:
      return '';  
    }
  }
  var monthNow = new Date().getMonth() + 1;
  var yearNow = new Date().getFullYear();
  
  const [textMonth, setTextMonth] = useState(monthToText(monthNow))
  const [year, setYear] = useState(yearNow)
  const [numberMonth, setNumberMonth] = useState(monthNow)
  const [escalas, setEscalas] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = React.useState(false);

  async function loadData() {
    await api.get(`/escalasmes/`+numberMonth+`-`+year)
    .then((response) => {
      setEscalas(response.data.data)
    });      
    setLoading(false);
  }
  
  useEffect(() => {
    loadData();
  },[]);

  async function onRefresh(){
    setRefreshing(true);
    await api.get(`/escalasmes/`+numberMonth+`-`+year)
    .then((response) => {
      console.log(response.data.data)
      setEscalas(response.data.data);
      setRefreshing(false);
    });   
  }
  
  async function changeMonth(next){
    var newNumberMonth = numberMonth;
    var newTextMonth = textMonth;
    var newYear = year;
    if(next){
      if(numberMonth == 12){
        newNumberMonth = 1;
        newTextMonth = monthToText(1);
        newYear = year + 1; 
      }
      else{
        newNumberMonth = numberMonth+1;
        newTextMonth = monthToText(numberMonth+1)            
      }
    }
    else{
      if(numberMonth == 1){
        newNumberMonth = 12;
        newTextMonth = monthToText(12);
        newYear = year - 1; 
      }
      else{
        newNumberMonth = numberMonth-1;
        newTextMonth = monthToText(numberMonth-1);            
      }
    }
    setNumberMonth(newNumberMonth)
    setTextMonth(newTextMonth);
    setYear(newYear); 

    setLoading(true);
    await api.get(`/escalasmes/`+newNumberMonth+`-`+newYear)
    .then((response) => {
      setEscalas(response.data.data)
    });      
    setLoading(false);
  }

  return (   
    <Wrapper>
      <Container 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header>
          <SelectMonthContent>        
            <NextPriorMonth  
              onPress={() => {changeMonth(false)}}
              underlayColor="#f1f1f1">
              <Icons name="arrow-left" />
            </NextPriorMonth>                    
            <Title>{textMonth}</Title>
            <Title>{year}</Title>
            <NextPriorMonth  
              onPress={() => {changeMonth(true)}}
              underlayColor="#f1f1f1">  
              <Icons name="arrow-right"/>
            </NextPriorMonth>   
          </SelectMonthContent>
        </Header>
        {loading ? <CardTextDate>Carregando</CardTextDate> : <> 
          {escalas.map((escala) =>
            <Card key={escala.id}>
              <CardHeader>                   
                <Moment element={CardTextDate} format="DD/MM/YYYY">
                  {escala.data}
                </Moment>  
                <Button1Container>
                  <Button1Text>Detalhes</Button1Text>
                </Button1Container>
              </CardHeader>
              <CardBodyScroll>
                <CardBody>
                  <CardBodyText>{escala.equipe_detalhe.split('<br>').join('\n')}</CardBodyText>
                </CardBody>
              </CardBodyScroll>
                <PanelCollapse title="Músicas">
                  {escala.musicas.map((musica) =>
                    <ItemMusica key={musica.id} title={musica.titulo} artist={musica.artista}/>
                  )}
                </PanelCollapse> 
            </Card>
          )}
        </>}
      </Container>
    </Wrapper>
  );
}