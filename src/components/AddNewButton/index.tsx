import React from "react";
import { Button } from "./AddNewButton.styled";
import { usePopUp } from "../../contexts/PopUpContext";
import { ITodoItemProps } from "../../types/index";

const AddNewButton: React.FC = () => {
  const { handleClick } = usePopUp();

  return (
    <Button onClick={() => handleClick({} as ITodoItemProps)}>
      Add New Task
    </Button>
  );
};

export default AddNewButton;
