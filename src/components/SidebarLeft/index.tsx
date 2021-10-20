import React from "react";
import { Sidebar } from "./SidebarLeft.styled";
import { useTodoItem } from "../../contexts/TodoItemContext";
import {
  TaskIcon,
  ImportantIcon,
  CompletedIcon,
  DeletedIcon,
  ActiveIcon,
  LowTagIcon,
  MediumTagIcon,
  HighTagIcon,
} from "../../icons/icons";
import { AddNewButton, SidebarButton } from "../index";

const SidebarLeft = () => {
  const {
    completedTodoItems,
    deletedTodoItems,
    importantTodoItems,
    activeTodoItems,
    tagTodoItems,
  } = useTodoItem();
  return (
    <Sidebar>
      <AddNewButton />
      <SidebarButton
        text="My task"
        icon={<TaskIcon />}
        handleClick={activeTodoItems}
      />
      <SidebarButton
        text="Active"
        icon={<ActiveIcon />}
        handleClick={activeTodoItems}
      />
      <SidebarButton
        text="Important"
        icon={<ImportantIcon />}
        handleClick={importantTodoItems}
      />
      <SidebarButton
        text="Completed"
        icon={<CompletedIcon />}
        handleClick={completedTodoItems}
      />
      <SidebarButton
        text="Deleted"
        icon={<DeletedIcon />}
        handleClick={deletedTodoItems}
      />
      <p>Tags</p>
      <SidebarButton
        text="Low"
        icon={<LowTagIcon />}
        handleClick={tagTodoItems}
      />
      <SidebarButton
        text="Medium"
        icon={<MediumTagIcon />}
        handleClick={tagTodoItems}
      />
      <SidebarButton
        text="High"
        icon={<HighTagIcon />}
        handleClick={tagTodoItems}
      />
    </Sidebar>
  );
};

export default SidebarLeft;
