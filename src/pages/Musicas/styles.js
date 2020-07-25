import styled from 'styled-components/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  padding: 16px;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
`;

export const ContainerSearch = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const InputSearch = styled.TextInput`
  border-radius: 3px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 7px; 
  border-width: 1px;
  font-size: 16px;
  border-color: ${props => props.theme.colors.primary};
  width: 100%;
  margin-right: 7px;
`;
export const Body = styled.View`
  margin-bottom: 10px;
`;

export const ItemBody = styled.View`
  margin: 5px 15px;
`;

export const Footer = styled.View`
  margin: 5px 15px;
`;
