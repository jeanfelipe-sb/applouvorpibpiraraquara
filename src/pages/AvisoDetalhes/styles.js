import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #ffffff;
  padding: 10px;
`;

export const Title = styled.Text`
   font-size: ${props => props.size || '25px'};
   color: ${props => props.theme.colors.black};  
`;

export const BodyText = styled.Text`
   font-size: ${props => props.size || '20px'};
   color: ${props => props.theme.colors.dark};  
`;

export const HeaderText = styled.Text`
   font-size: ${props => props.size || '15px'};
   color: ${props => props.theme.colors.dark};  
`;

export const ViewTitle = styled.TouchableOpacity`
  padding: 5px 10px 10px 10px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
  margin-bottom: 12px;
`; 
