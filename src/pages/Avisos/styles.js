import styled from 'styled-components/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Icon = styled(SimpleLineIcons)`
  color: ${props => props.theme.colors.danger};
  font-size: 26px;
`;
export const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #ffffff;
  padding: 15px 10px;
`;

export const Title = styled.Text`
   font-size: 20px;
   color: ${props => props.theme.colors.primary};  
`;

export const TitleDate = styled.Text`
   font-size: 15px;
   color: ${props => props.theme.colors.dark};  
`;

export const CardBody = styled.View `
  width: 85%;
`;

export const CardRight = styled.View `
  align-items: center;
  flex-direction: row;
`;

export const CardTouch = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${props => props.theme.colors.lighter};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 7px; 
  margin-bottom: 13px;
`;

export const Button1Container = styled.TouchableOpacity `
  border-radius: 7px; 
  border-width: 1px;
  border-color: ${props => props.theme.colors.danger};
  padding: 10px;
  align-items: center;
`;

export const Button1Text = styled.Text `
  font-size: 16px;
  color: ${props => props.theme.colors.danger};
`;