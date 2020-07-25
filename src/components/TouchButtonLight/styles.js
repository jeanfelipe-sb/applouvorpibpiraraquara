import styled from 'styled-components/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Button1Container = styled.TouchableOpacity `
  border-radius: 7px; 
  border-width: 1px;
  border-color: ${props => props.theme.colors.danger};
  padding: 10px;
  align-items: center;
`;

export const Button1Text = styled.Text `
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.danger};
`;


