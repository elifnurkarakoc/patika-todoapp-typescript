import React from "react";
import { TodoItemList, SidebarLeft, TodoPopUp } from "../components";
import * as styles from "./styled";
import { usePopUp } from "../contexts/PopUpContext";

const Content = () => {
  const {isOpen,handleClick} = usePopUp();

  return (
    <styles.Content>
      <SidebarLeft />
      <TodoItemList />

    {
      isOpen && <TodoPopUp/>
    }
    </styles.Content>
  );
};

export default Content;
