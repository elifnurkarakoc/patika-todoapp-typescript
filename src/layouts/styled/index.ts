import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface LayoutProps {
  theme: DefaultTheme;
}

export const Header = styled.h1<LayoutProps>`
  padding:20px;
  width: 90vh;
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.secondary};
  border-radius:  7px 7px 7px 7px;
  border:1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div<LayoutProps>`
width:100vh;
height:100vh;
background-color:${({ theme }) => theme.colors.white};
color:${({ theme }) => theme.colors.secondary};
border-radius: 7px 7px 7px 7px;
border:1px solid ${({ theme }) => theme.colors.border};
overflow:hidden;

`;
export const SidebarLeftButton =styled.button<LayoutProps>`
  display: flex;
  flex-direction: column;
  height:100%;
  justify-content: space-around;
  width: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }


`;
export const SidebarLeft = styled.div<LayoutProps>`
background-color:${({ theme }) => theme.colors.white};
color:${({ theme }) => theme.colors.secondary};
//border-radius: 7px 7px 7px 7px;
border-right:1px solid ${({ theme }) => theme.colors.border};
display: flex;
flex-direction: column;
justify-content: center;
height:100%;
text-align: left;
padding-left:20px;
padding-right:20px;
position: absolute;
transition: transform 0.3s ease-in-out;
  
@media (max-width: ${({ theme }) => theme.colors.primary}) {
  width: 100%;
}
`;

export const ContentRight = styled.div<LayoutProps>``;


export const Footer = styled.footer<LayoutProps>`
flex-shrink: 0;
color:${({ theme }) => theme.colors.secondary};
`;