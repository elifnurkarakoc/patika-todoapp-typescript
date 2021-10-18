import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
    theme: DefaultTheme;
}

export const Button = styled.button<ButtonProps>`
font-size:15px;
padding: 10px;
margin:10px;
color: ${({ theme }) => theme.colors.main};
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