import React from "react";
import { TodoItemList, SidebarLeft, TodoPopUp } from "../components";
import { ContentContainer } from "./layouts.styled";
import { usePopUp } from "../contexts/PopUpContext";

const Content = () => {
  const { isOpen, handleClick } = usePopUp();

  return (
    <ContentContainer>
      <SidebarLeft />
      <TodoItemList />
      {isOpen && <TodoPopUp />}
    </ContentContainer>
  );
};

export default Content;
