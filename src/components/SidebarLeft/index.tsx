import React from "react";
import { Sidebar}from "./SidebarLeft.styled";
import {
  TaskIcon,
  ImportantIcon,
  CompletedIcon,
  DeletedIcon,
} from "../../icons/icons";
import { AddNewButton, SidebarButton } from "../index";

const SidebarLeft = () => {
  return (
      <Sidebar>
        <AddNewButton />
        <SidebarButton text="My task" icon={<TaskIcon />} />
        <SidebarButton text="Important" icon={<ImportantIcon />} />
        <SidebarButton text="Completed" icon={<CompletedIcon />} />
        <SidebarButton text="Deleted" icon={<DeletedIcon />} />
        <p>Tags</p>
        <SidebarButton text="Low" icon={TaskIcon} />
        <SidebarButton text="Medium" icon={TaskIcon} />
        <SidebarButton text="High" icon={TaskIcon} />
      </Sidebar>
  );
};

export default SidebarLeft;
