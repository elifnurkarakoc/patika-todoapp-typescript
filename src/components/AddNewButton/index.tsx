import React, { useState, useEffect } from "react";
import {Button} from "./AddNewButton.styled";
import { usePopUp } from "../../contexts/PopUpContext";

interface IButtonProps{
    handleClick: () => void;
}
const AddNewButton:React.FC = () => {
  const {isOpen,handleClick} = usePopUp();
  
  return (
    <Button onClick={handleClick} >Add New Task</Button>
  );
};

export default AddNewButton;
