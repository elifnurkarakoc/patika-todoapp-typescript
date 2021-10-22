import styled from "styled-components";
import { IStyledProps } from "../../types";


export const Sidebar = styled.div<IStyledProps>`
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.secondary};
  border-right:1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-left:20px;
  padding-right:20px;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  height: -webkit-fill-available;
`;