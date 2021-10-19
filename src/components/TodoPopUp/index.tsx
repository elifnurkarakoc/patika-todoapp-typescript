import React from "react";
import * as styles from "./styles";
import { usePopUp } from "../../contexts/PopUpContext";
import {ImportedIcon} from "../../icons/icons"
import styled from "styled-components";
const TodoPopUp = () => {
  const { isOpen, handleClick } = usePopUp();
  return (
    <styles.TodoPopUp>
      <styles.TodoPopUpContent>
          <styles.Header>Add Task<styles.ImportedButton><ImportedIcon/></styles.ImportedButton></styles.Header>
        <styles.CloseButton onClick={handleClick}>x</styles.CloseButton>
        <styles.Form>
          <styles.Input type="text" placeholder="Task Title"></styles.Input>
          <styles.Input type="date" placeholder="Date"></styles.Input>
          <styles.Select name="tags">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </styles.Select>
          <styles.TextArea placeholder="Description"></styles.TextArea>
          <styles.Button>Add</styles.Button>
          <styles.Button>Reset</styles.Button>
        </styles.Form>
      </styles.TodoPopUpContent>
    </styles.TodoPopUp>
  );
};

export default TodoPopUp;
