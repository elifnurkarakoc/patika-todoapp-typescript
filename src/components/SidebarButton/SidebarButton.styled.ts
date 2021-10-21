import styled from "styled-components";
import { IStyledProps } from "../../types";

export const Button = styled.button<IStyledProps>`
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
&:focus {
  color: ${({ theme }) => theme.colors.primary};
}
/* &:active {
  color: ${({ theme }) => theme.colors.primary};
} */

`;

export const ButtonContent = styled.div<IStyledProps>`
display: flex;

`;
export const ButtonIcon = styled.div<IStyledProps>`
float: left;

`;
export const ButtonText = styled.div<IStyledProps>`
margin-left: 20px;;

`;