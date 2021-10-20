import styled from "styled-components";
import { IStyledProps } from "../../types";


export const Button = styled.button<IStyledProps>`
font-size:18px;
justify-content:center;
align-items:center;
text-align:center;
background-color:${({ theme }) => theme.colors.primary};
border-color:${({ theme }) => theme.colors.primary};
color:${({ theme }) => theme.colors.white};
border-radius: 7px 7px 7px 7px;
border: 1px solid transparent;
padding:10px;
margin-top: 50px;
margin-bottom: 50px;
cursor: pointer;
&:hover {
  background-color:${({ theme }) => theme.colors.purple};
}
`;
