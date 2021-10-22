import React from "react";
import { TodoItemList, SidebarLeft, TodoPopUp } from "../components";
import { ContentContainer } from "./layouts.styled";
import { usePopUp } from "../contexts/PopUpContext";
import { useTodoItem } from "../contexts/TodoItemContext";

const Content = () => {
  const { isOpen } = usePopUp();
  const { todoItem} = useTodoItem();

  return (
    <ContentContainer>
      <SidebarLeft />
      <TodoItemList />
      {isOpen && <TodoPopUp {...todoItem} />}
    </ContentContainer>
  );
};

export default Content;
