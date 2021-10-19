import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface TodoItemListProps {
  theme: DefaultTheme;
}


export const TodoItemListContainer = styled.div<TodoItemListProps>`
margin-left: 23%;
`;