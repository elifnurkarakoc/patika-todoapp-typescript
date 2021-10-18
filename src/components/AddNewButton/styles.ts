import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
}

export const Button = styled.button<ButtonProps>`
font-size:18px;
justify-content:center;
  align-items:center;
  text-align:center;
  background-color:${({ theme }) => theme.colors.primary};
  color:${({ theme }) => theme.colors.white};
  //border-radius: 10px 10px 10px 10px;
`;