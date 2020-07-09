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
  font-size: 23px;
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
  width: 86%;
  margin-right: 7px;
`;

export const IconSearch = styled(SimpleLineIcons)`
  color: ${props => props.theme.colors.white};
  font-size: 23px;
`;

export const ButtonSearch = styled.TouchableOpacity `
  background: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 10px; 
  justify-content: center;
  align-items: center;
`;

export const TitleMusic = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
`;

export const ArtistMusic = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.dark};
`;
