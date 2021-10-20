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
import { useFormik } from "formik";
import { ITodoItemProps } from "../../types";
import { validationSchema } from "./validations";
import { useTodoItem } from "../../contexts/TodoItemContext";

const TodoPopUp = () => {
  const { isOpen, handleClick } = usePopUp();
  const { addTodoItem,todoItems } = useTodoItem();
  const defaultTodoItem = {
    title: "",
    date: new Date(),
    tag: "",
    description: "",
    important: false,
    completed: false,
    deleted: false,
  };
  const {
    values,
    handleSubmit,
    handleReset,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      date: "",
      tag: "",
      description: "",
      important: false,
      completed: false,
      deleted: false,
    },
    onSubmit: (values, bag) => {
      const defaultTodoItem: ITodoItemProps = {
        title: values.title,
        date: new Date(values.date),
        tag: values.tag,
        description: values.description,
        important: false,
        completed: false,
        deleted: false,
      };
      console.log(defaultTodoItem);
      addTodoItem(defaultTodoItem);
      console.log(todoItems);
    },
    validationSchema,
  });
  //TODO buraya tekrar bakıcam, renk değişikliğini tutamadım.
  //Error mesajları eklenicek.
  let importantValue = false;
  const setImportantValues = (value: boolean) => {
    importantValue = !value;
    values.important = !value;
    console.log(importantValue);
    console.log(values.important);
  };
  return (
    <TodoPopUpContainer>
      <TodoPopUpContent>
        <Header>
          Add Task
          <ImportedButton
            important={importantValue}
            onClick={() => setImportantValues(importantValue)}
          >
            <ImportedIcon />
            imported
          </ImportedButton>
        </Header>
        <CloseButton onClick={handleClick}>x</CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Task Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>
          <Input
            type="date"
            name="date"
            placeholder="Date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>
          <Select
            name="tag"
            value={values.tag}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          <TextArea
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextArea>
          <Button type="submit">Add</Button>
          <Button type="button" onClick={handleReset}>
            Reset
          </Button>
        </Form>
      </TodoPopUpContent>
    </TodoPopUpContainer>
  );
};

export default TodoPopUp;
