import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Icons = styled(MaterialIcons)`
  color: ${props => props.theme.colors.dark};
  font-size: 20px;
`;

export const Content = styled.View`
    padding-top: 5px;  
    border-top-width: 1px;
    border-top-color: #dddddd;
`;   
export const Title = styled.Text`
   font-size: 20px;
   color: ${props => props.theme.colors.dark};  
`;
export const Body = styled.View`
`; 

export const ViewTitle = styled.View`
  align-items: center;
  justify-content: center;
`; 
