import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface TodoItemListProps {
  theme: DefaultTheme;
}


export const TodoItemList = styled.div<TodoItemListProps>`
margin-left: 23%;
`;