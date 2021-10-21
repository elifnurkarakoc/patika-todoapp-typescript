import React from "react";
import {
  Card,
  CardContent,
  TodoText,
  Date,
  Tags,
  UpdateButton,
  CardLeft,
  CardRight,
  DeletedButton,
} from "./TodoItem.styled";
import { ITodoItemProps } from "../../types";
import { usePopUp } from "../../contexts/PopUpContext";
import { useTodoItem } from "../../contexts/TodoItemContext";
import {
  CompletedIcon,
  DeletedIcon,
  EditIcon,
  ImportantIcon,
} from "../../icons/icons";
const TodoItem: React.FC<ITodoItemProps> = (todo: ITodoItemProps) => {
  console.log(todo.title);
  const { isOpen, handleClick } = usePopUp();
  const {
    handleDelete,
  } = useTodoItem();

  return (
    <Card>
      <CardContent>
        <CardLeft>
          <TodoText>
            {" "}
            {todo.title} {todo.completed && <CompletedIcon />}{" "}
            {todo.important && <ImportantIcon />}{" "}
            {todo.deleted && <DeletedIcon />}{" "}
          </TodoText>
          <Date>{todo.date.toDateString()}</Date>
          <Tags colorTag={todo.tag}>{todo.tag}</Tags>
        </CardLeft>
        <CardRight>
          {!todo.deleted && (
            <UpdateButton onClick={() => handleClick(todo)}>
              <EditIcon /> Update
            </UpdateButton>
          )}
          {!todo.deleted && (
            <DeletedButton onClick={() => handleDelete(todo)}>
              <DeletedIcon /> Delete
            </DeletedButton>
          )}
          {todo.deleted && (
            <DeletedButton onClick={() => handleDelete(todo)}>
              <DeletedIcon /> Cancel
            </DeletedButton>
          )}
        </CardRight>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
