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

const TodoPopUp: React.FC<ITodoItemProps> = ({
  title,
  date,
  tag,
  description,
  completed,
  deleted,
  important,
}) => {
  const { isOpen, handleClick } = usePopUp();
  const { addTodoItem, todoItems, todoItem, updateTodoItem } = useTodoItem();
  let defaultTodoItem ;
  if(title){
    defaultTodoItem = {
      title: title,
      date: date,
      tag: tag,
      description: description,
      important: important,
      completed: completed,
      deleted: deleted,
    };
  }
  else{
    defaultTodoItem = {
      title: "",
      date: new Date().getDate(),
      tag: "",
      description: "",
      important: false,
      completed: false,
      deleted: false,
    }
  }
 
  const {
    values,
    handleSubmit,
    handleReset,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: defaultTodoItem,
    onSubmit: (values, bag) => {
      const tempTodoItem: ITodoItemProps = {
        title: values.title,
        date: new Date(values.date),
        tag: values.tag,
        description: values.description,
        important: false,
        completed: false,
        deleted: false,
      };
      if (todoItem.title) {
       
        updateTodoItem(tempTodoItem);
        console.log("update",tempTodoItem);
      }
      addTodoItem(tempTodoItem);
      console.log("add",tempTodoItem);
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
        <CloseButton onClick={() => handleClick({} as ITodoItemProps)}>
          x
        </CloseButton>
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
            value={values.date.toString()}
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
