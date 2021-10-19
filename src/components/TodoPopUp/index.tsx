import React from "react";
import {
  TodoPopUpContainer,
  TodoPopUpContent,
  Header,
  CloseButton,
  ImportedButton,
  Form,
  Input,
  Select,
  TextArea,
  Button,
} from "./TodoPopUp.styled";
import { usePopUp } from "../../contexts/PopUpContext";
import { ImportedIcon } from "../../icons/icons";

const TodoPopUp = () => {
  const { isOpen, handleClick } = usePopUp();
  return (
    <TodoPopUpContainer>
      <TodoPopUpContent>
        <Header>
          Add Task
          <ImportedButton>
            <ImportedIcon />
          </ImportedButton>
        </Header>
        <CloseButton onClick={handleClick}>x</CloseButton>
        <Form>
          <Input type="text" placeholder="Task Title"></Input>
          <Input type="date" placeholder="Date"></Input>
          <Select name="tags">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          <TextArea placeholder="Description"></TextArea>
          <Button>Add</Button>
          <Button>Reset</Button>
        </Form>
      </TodoPopUpContent>
    </TodoPopUpContainer>
  );
};

export default TodoPopUp;
