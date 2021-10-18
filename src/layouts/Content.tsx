import React from "react";
import { TodoItem, AddNewButton, Button } from "../components";
import * as styles from "./styled";
import {
  TaskIcon,
  ImportantIcon,
  CompletedIcon,
  DeletedIcon,
} from "../icons/icons";
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
        <Button text="My task" icon={<TaskIcon />} />
        <Button text="Important" icon={<ImportantIcon />} />
        <Button text="Completed" icon={<CompletedIcon />} />
        <Button text="Deleted" icon={<DeletedIcon />} />
        <p>Tags</p>
        <Button text="Low" icon={TaskIcon} />
        <Button text="Medium" icon={TaskIcon} />
        <Button text="High" icon={TaskIcon} />
      </styles.SidebarLeft>

      {/* <TodoItem/>
            <TodoItem/>
            <TodoItem/> */}
    </styles.Content>
  );
};

export default Content;
