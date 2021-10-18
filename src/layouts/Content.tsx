import React from "react";
import { TodoItem, AddNewButton, Button } from "../components";
import * as styles from "./styled";
const Content = () => {
  return (
    <styles.Content>
      {/* <styles.SidebarLeftButton>
        <div />
        <div />
        <div />
      </styles.SidebarLeftButton> */}
      <styles.SidebarLeft>
        <AddNewButton />
        <Button text="My task" />
        <Button text="Important" />
        <Button text="Completed" />
        <Button text="Deleted" />
        <p>Tags</p>
        <Button text="Low" />
        <Button text="Medium" />
        <Button text="High" />
      </styles.SidebarLeft>

      {/* <TodoItem/>
            <TodoItem/>
            <TodoItem/> */}
    </styles.Content>
  );
};

export default Content;
