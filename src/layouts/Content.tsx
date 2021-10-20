import React from "react";
import { TodoItemList, SidebarLeft, TodoPopUp } from "../components";
import { ContentContainer } from "./layouts.styled";
import { usePopUp } from "../contexts/PopUpContext";
import { ITodoItemProps } from "../types";
import { useTodoItem } from "../contexts/TodoItemContext";

const Content = () => {
  const { isOpen, handleClick } = usePopUp();
  const { todoItem, setTodoItem } = useTodoItem();

  return (
    <ContentContainer>
      <SidebarLeft />
      <TodoItemList />
      {isOpen && <TodoPopUp {...todoItem} />}
    </ContentContainer>
  );
};

export default Content;
