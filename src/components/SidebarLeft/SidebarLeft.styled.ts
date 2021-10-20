import styled from "styled-components";
import { IStyledProps } from "../../types";


export const Sidebar = styled.div<IStyledProps>`
background-color:${({ theme }) => theme.colors.white};
color:${({ theme }) => theme.colors.secondary};
//border-radius: 7px 7px 7px 7px;
border-right:1px solid ${({ theme }) => theme.colors.border};
display: flex;
flex-direction: column;
justify-content: center;
height:auto;//100%
text-align: left;
padding-left:20px;
padding-right:20px;
position: absolute;
transition: transform 0.3s ease-in-out;
 
@media (max-width: ${({ theme }) => theme.colors.primary}) {
  width: 100%;
}
`;