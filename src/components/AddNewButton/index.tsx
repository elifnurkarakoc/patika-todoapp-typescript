import React, { useState, useEffect } from "react";
import { Button } from "./AddNewButton.styled";
import { usePopUp } from "../../contexts/PopUpContext";
import { ITodoItemProps } from "../../types/index";
interface IButtonProps {
  handleClick: () => void;
}
const AddNewButton: React.FC = () => {
  const { isOpen, handleClick } = usePopUp();

  return (
    <Button onClick={() => handleClick({} as ITodoItemProps)}>
      Add New Task
    </Button>
  );
};

export default AddNewButton;
