import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.Text`
   font-size: ${props => props.size || '22px'};
   color: ${props => props.theme.colors.dark};  
`;

export const TitleDanger = styled.Text`
   font-size: ${props => props.size || '17px'};
   color: ${props => props.theme.colors.danger};  
`;

export const BodyScroll = styled.ScrollView.attrs(() => ({
   horizontal: true
}))`
   border-radius: 10px;
   background-color: ${props => props.theme.colors.lighter}; 
   padding: 10px 10px 10px 15px;
`; 

export const Body = styled.View` 
   padding: 10px 10px 10px 15px;
`; 

export const BodyText = styled.Text`
   font-size: ${props => props.size || '16px'};
   color: ${props => props.theme.colors.dark};  
`;

export const HeaderText = styled.Text`
   font-size: ${props => props.size || '15px'};
   color: ${props => props.theme.colors.dark};  
`;

export const RowTitle = styled.View`  
  flex-direction: row;
`; 

export const Header = styled.View`  
   padding: 10px;
`; 

export const HeaderBody = styled.View`  
   padding: 0px 0px 5px 7px;
`; 

export const Item = styled.View`  
   margin-bottom: 10px;
`; 

export const Card = styled.View`  
   border-radius: 10px;
   background-color: ${props => props.theme.colors.lighter}; 
   padding: 10px 10px 10px 15px;
`; 

