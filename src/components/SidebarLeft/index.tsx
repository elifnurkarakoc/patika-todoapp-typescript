import React from "react";
import * as styles from "./styles";
import {
  TaskIcon,
  ImportantIcon,
  CompletedIcon,
  DeletedIcon,
} from "../../icons/icons";
import { AddNewButton, SidebarButton } from "../index";
import { usePopUp } from "../../contexts/PopUpContext";

const SidebarLeft = () => {
  const {isOpen,handleClick} = usePopUp();

  return (
    <>
      <styles.SidebarLeft>
        <AddNewButton />
        <SidebarButton text="My task" icon={<TaskIcon />} />
        <SidebarButton text="Important" icon={<ImportantIcon />} />
        <SidebarButton text="Completed" icon={<CompletedIcon />} />
        <SidebarButton text="Deleted" icon={<DeletedIcon />} />
        <p>Tags</p>
        <SidebarButton text="Low" icon={TaskIcon} />
        <SidebarButton text="Medium" icon={TaskIcon} />
        <SidebarButton text="High" icon={TaskIcon} />
      </styles.SidebarLeft>
    </>
  );
};

export default SidebarLeft;
