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

export const Container = styled.ScrollView``;

export const Header = styled.View`
  margin: 15px 0px 10px 0px;
`;

export const Card = styled.View `
  padding: 12px 12px 0 12px;
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 7px; 
  margin: 5px 15px ;
`;

export const CardHeader = styled.View `
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const CardTextDate = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.dark};
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

export const CardBodyScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})) `
  margin-top: 10px;
  margin-bottom: 8px;
  flex-direction: row;
`;

export const CardBody = styled.View `
  width: 100%;
  margin-top: 10px;
`;

export const CardBodyText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.darker};
`;


export const Icons = styled(SimpleLineIcons)`
  color: ${props => props.theme.colors.primary};
  font-size: 22px;
`;

export const NextPriorMonth = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
`;

export const SelectMonthContent = styled.View`
    flex-direction: row;
    /* background-color: #666; */
    align-items: center;
    justify-content: space-around;
`;   
export const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
`;
