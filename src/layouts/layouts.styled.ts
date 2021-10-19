import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface LayoutProps {
  theme: DefaultTheme;
}

export const HeaderContainer = styled.h1<LayoutProps>`
  margin:3;
  padding:2px;
  text-align:center;
  width: 55%;
  //background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.primary};
  //border-radius:  7px 7px 7px 7px;
 // border:1px solid ${({ theme }) => theme.colors.border};
`;

export const ContentContainer = styled.div<LayoutProps>`
height:100vh;
width: 800px;
background-color:${({ theme }) => theme.colors.white};
color:${({ theme }) => theme.colors.secondary};
border-radius: 7px 7px 7px 7px;
border:1px solid ${({ theme }) => theme.colors.border};
display:flex;
flex-direction: column;
flex-wrap: wrap;

`;

// export const SidebarLeftButton = styled.button<LayoutProps>`
//   display: flex;
//   flex-direction: column;
//   height:100%;
//   justify-content: space-around;
//   width: 10px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;
//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ theme }) => theme.colors.primary};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;
//   }


// `;
// export const SidebarLeft = styled.div<LayoutProps>`
// background-color:${({ theme }) => theme.colors.white};
// color:${({ theme }) => theme.colors.secondary};
// //border-radius: 7px 7px 7px 7px;
// border-right:1px solid ${({ theme }) => theme.colors.border};
// display: flex;
// flex-direction: column;
// justify-content: center;
// height:100%;
// text-align: left;
// padding-left:20px;
// padding-right:20px;
// position: absolute;
// transition: transform 0.3s ease-in-out;

// @media (max-width: ${({ theme }) => theme.colors.primary}) {
//   width: 100%;
// }
// `;

export const FooterContainer = styled.footer<LayoutProps>`
flex-shrink: 0;
color:${({ theme }) => theme.colors.secondary};
`;

// export const ContentBody = styled.div<LayoutProps>`
// margin-left: 23%;
// `;
// export const TodoList = styled.div<LayoutProps>`

// `;

// export const ContentLeft =styled.div<LayoutProps>`

// `;
// export const ContentRight =styled.div<LayoutProps>`

// `;
// export const ContentRow =styled.div<LayoutProps>`


// `;