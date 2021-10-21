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
    getTodoItems,
    completedTodoItems,
    deletedTodoItems,
    importantTodoItems,
    activeTodoItems,
    lowTagTodoItems,
    mediumTagTodoItems,
    highTagTodoItems,
  } = useTodoItem();
  return (
    <Sidebar>
      <AddNewButton />
      <SidebarButton
        text="My task"
        icon={<TaskIcon />}
        handleClick={getTodoItems}
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
        handleClick={lowTagTodoItems}
      />
      <SidebarButton
        text="Medium"
        icon={<MediumTagIcon />}
        handleClick={mediumTagTodoItems}
      />
      <SidebarButton
        text="High"
        icon={<HighTagIcon />}
        handleClick={highTagTodoItems}
      />
    </Sidebar>
  );
};

export default SidebarLeft;
