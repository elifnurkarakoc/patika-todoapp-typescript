import React from "react";
import {
  TodoPopUpContainer,
  TodoPopUpContent,
  Header,
  CloseButton,
  Form,
  Input,
  Select,
  TextArea,
  Button,
  Label,
} from "./TodoPopUp.styled";
import { usePopUp } from "../../contexts/PopUpContext";
import { useFormik } from "formik";
import { ITodoItemProps } from "../../types";
import { validationSchema } from "./validations";
import { useTodoItem } from "../../contexts/TodoItemContext";
import { Error } from "..";

const TodoPopUp: React.FC<ITodoItemProps> = ({
  title,
  date,
  tag,
  description,
  completed,
  deleted,
  important,
}) => {
  const { handleClick } = usePopUp();
  const { addTodoItem, todoItem, updateTodoItem } = useTodoItem();
  let defaultTodoItem;
  if (title) {
    defaultTodoItem = {
      title: title,
      date: date,
      tag: tag,
      description: description,
      important: important,
      completed: completed,
      deleted: deleted,
    };
  } else {
    defaultTodoItem = {
      title: "",
      date: new Date().getDate(),
      tag: "",
      description: "",
      important: false,
      completed: false,
      deleted: false,
    };
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
        id:todoItem.id||8,
        title: values.title,
        date: new Date(values.date),
        tag: values.tag,
        description: values.description,
        important: values.important,
        completed: values.completed,
        deleted: false,
      };
      if (todoItem.title) {
        updateTodoItem(tempTodoItem);
        //console.log("update", tempTodoItem);
        handleClick({} as ITodoItemProps);
      } else {
        addTodoItem(tempTodoItem);
        handleClick({} as ITodoItemProps);
        //console.log("add", tempTodoItem);
      }
    },
    validationSchema,
  });

  return (
    <TodoPopUpContainer>
      <TodoPopUpContent>
        <Header>
          {title ? "Update Task" : "Add Task"}

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
          {errors.title && touched.title && <Error message={errors.title} />}
          <Input
            type="date"
            name="date"
            placeholder="Date"
            value={values.date.toString()}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>
          {errors.date && touched.date && <Error message={errors.date} />}
          <Select
            name="tag"
            value={values.tag}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" selected disabled hidden>Choose here</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          {errors.tag && touched.tag && <Error message={errors.tag} />}
          <TextArea
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextArea>
          {errors.description && touched.description && (
            <Error message={errors.description} />
          )}
          
          <Label htmlFor="important">
           <input
            type="checkbox"
            name="important"
            id="important"
            checked={values.important}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           Important</Label>
           <Label htmlFor="completed">
           <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={values.completed}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           Completed</Label>
          <Button type="submit">{title ? "Update" : "Add"}</Button>
          {title ? (
            <></>
          ) : (
            <Button type="button" onClick={handleReset}>
              Reset
            </Button>
          )}
        </Form>
      </TodoPopUpContent>
    </TodoPopUpContainer>
  );
};

export default TodoPopUp;
