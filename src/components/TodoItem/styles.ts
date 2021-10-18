import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface TodoItemProps {
    theme: DefaultTheme;
}

export const Card = styled.div<TodoItemProps>`
  padding-top:20px;
  margin-top:1px;
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.secondary};
 // border-radius: 10px 10px 10px 10px;
`;