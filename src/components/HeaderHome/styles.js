import styled from 'styled-components/native'

export const HeaderText = styled.Text `
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;

export const Header = styled.View`  
  padding: 10px;
  align-items: center;
  height: 30%;
`;

export const Logo = styled.Image``;

export const Container = styled.View `
  background: ${props => props.theme.colors.primary};
  height: 200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const LogoContainer = styled.View`  
  align-items: center;
  height: 70%;
`;
