import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
}

export const Button = styled.button<ButtonProps>`
font-size:15px;
padding: 3px;
margin:4px;
color: ${({ theme }) => theme.colors.blue};
background-color:${({ theme }) => theme.colors.white};
border:none;
text-align:left;
@media (max-width: ${({ theme }) => theme.colors.primary}) {
  font-size: 1.5rem;
  text-align: left;
}

&:hover {
  color: ${({ theme }) => theme.colors.primary};
}
`;

export const ButtonContent = styled.div<ButtonProps>`
display: flex;
/* justify-content: space-around;
align-items:center; */
`;
export const ButtonIcon = styled.div<ButtonProps>`
float: left;

`;
export const ButtonText = styled.div<ButtonProps>`
margin-left: 20px;;

`;