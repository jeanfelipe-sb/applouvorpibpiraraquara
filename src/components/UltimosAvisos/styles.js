import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather';

export const Icon = styled(Feather)`
  color: ${props => props.theme.colors.danger};
  font-size: 30px;
`;

export const Container = styled.View`
  margin: 20px 0 35px;
`;

export const BodyError = styled.View`
  padding: 10px;
`;

export const TextBodyError = styled.Text `
  font-size: 18px;
  color: ${props => props.theme.colors.danger};
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 0 16px;
`;

export const TitleContainer = styled.View `
  justify-content: flex-end;
`;

export const Title = styled.Text `
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const Button1Container = styled.TouchableOpacity `
  border-radius: 7px; 
  border-width: 1px;
  border-color: ${props => props.theme.colors.danger};
  padding: 3px 24px;
`;

export const Button1Text = styled.Text `
  font-size: 14px;
  color: ${props => props.theme.colors.danger};
`;

export const CardsContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{
    paddingLeft: 16
  } 
})) `
  margin-top: 22px;
`;

export const Card = styled.TouchableOpacity`
  background:  ${props => props.theme.colors.lighter};
  width: 150px;
  border-radius: 15px; 
  padding: 10px;
  height: 200px; 
  margin-right: 16px;
`;

export const TitleCard = styled.Text `
  color: ${props => props.theme.colors.dark};
`;

export const TextBodyCard = styled.Text `
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
`;

export const FootherCard = styled.View `
  height: 28%;
  align-items: flex-end;
  justify-content: center;
  margin-right: 0px;  
`;

export const BodyCard = styled.View `
  margin-top: 10px;
  height: 60%;
  align-items: center;
  justify-content: center;
`;



