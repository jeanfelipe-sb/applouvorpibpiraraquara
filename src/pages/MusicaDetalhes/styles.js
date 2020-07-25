import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather';

export const Icon = styled(Feather)`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.size || '40px'};
  color: ${props => props.theme.colors.dark};
`;

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.Text`
   font-size: ${props => props.size || '20px'};
   color: ${props => props.theme.colors.primary};  
`;

export const HeaderTitle = styled.Text`
   font-size: ${props => props.size || '20px'};
   color: ${props => props.theme.colors.black};  
`;

export const BodyCardText = styled.Text`
  font-size: ${props => props.size || '20px'};
  color: ${props => props.theme.colors.darker};  
`;

export const ViewTitle = styled.TouchableOpacity`
  padding: 15px 15px 15px 15px;
  justify-content: center;
`; 


export const Card = styled.TouchableOpacity`
  background:  ${props => props.theme.colors.lighter};
  border-radius: 15px; 
  padding: 10px 15px 10px 15px;
  margin: 5px 10px 5px 10px;
`;

export const BodyCard = styled.View `
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;