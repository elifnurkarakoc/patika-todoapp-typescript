import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface LayoutProps {
  theme: DefaultTheme;
}

export const HeaderContainer = styled.h1<LayoutProps>`
  padding-left:10px;
  text-align:left;
  width: 60%;
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.primary};
  border-radius:  7px 7px 7px 7px;
  border:1px solid ${({ theme }) => theme.colors.border};
  position:absolute; top:0px; height:50px; overflow:hidden;
`;

export const ContentContainer = styled.div<LayoutProps>`
//height:100vh;
//width: 800px;
background-color:${({ theme }) => theme.colors.white};
color:${({ theme }) => theme.colors.secondary};
border-radius: 7px 7px 7px 7px;
border:1px solid ${({ theme }) => theme.colors.border};
display:flex;
flex-direction: column;
//flex-wrap: wrap;
position:absolute; 
top:100px; 
left:20%; 
right:20%;  
bottom:80px; 
overflow:auto; //left:0px; right:0px; 
`;

export const FooterContainer = styled.footer<LayoutProps>`
flex-shrink: 0;
color:${({ theme }) => theme.colors.secondary};
position:absolute; bottom:0px; height:50px;  overflow:hidden; //left:0px; right:0px;
`;

