import React, { useState, useEffect } from "react";
import * as styles from "./styles";
import { usePopUp } from "../../contexts/PopUpContext";

interface IButtonProps{
    handleClick: () => void;
}
const AddNewButton:React.FC = () => {
  const {isOpen,handleClick} = usePopUp();
  
  return (
    <styles.Button onClick={handleClick} >Add New Task</styles.Button>
  );
};

export default AddNewButton;
