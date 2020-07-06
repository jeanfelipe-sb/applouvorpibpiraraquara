import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 16px;
  margin-bottom: 16px;
`;

export const Bold = styled.Text `
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;

export const TextBodyError = styled.Text `
  font-size: 18px;
  color: ${props => props.theme.colors.success};
`;


export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;  
  margin: 0 0 16px ;
`;

export const TitleContainer = styled.View `
  justify-content: flex-end;
`;

export const Title = styled.Text `
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
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
