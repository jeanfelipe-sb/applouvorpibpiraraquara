import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #ffffff;
  padding: 10px;
`;

export const Title = styled.Text`
   font-size: 20px;
   color: ${props => props.theme.colors.dark};  
`;

export const ViewTitle = styled.TouchableOpacity`
  padding: 15px 15px 15px 15px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`; 