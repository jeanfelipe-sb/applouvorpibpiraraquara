import styled from 'styled-components/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Icon = styled(SimpleLineIcons)`
  color: ${props => props.theme.colors.danger};
  font-size: 26px;
`;

export const Card = styled.View `
  padding: 10px;
  background-color: ${props => props.theme.colors.lighter};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 7px; 
`;

export const CardBody = styled.View `
  margin-left: 20px;
`;

export const CardRight = styled.View `
  align-items: center;
  flex-direction: row;
`;

export const CardLeft = styled.View `
  align-items: center;
  flex-direction: row;
  width: 80%;
`;

export const CardRightTouch = styled.TouchableOpacity``;

export const TitleMusic = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.darker};
`;

export const ArtistMusic = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.dark};
`;




