import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  TodoText,
  Date,
  Tags,
  CheckBox,
  UpdateButton,
  CardLeft,
  CardRight,
  ImportantButton,
  DeletedButton,
} from "./TodoItem.styled";
import { TagKeys, ITodoItemProps } from "../../types";
import { usePopUp } from "../../contexts/PopUpContext";
import { useTodoItem } from "../../contexts/TodoItemContext";
const TodoItem: React.FC<ITodoItemProps> = (todo: ITodoItemProps) => {
  console.log(todo.title);
  const { isOpen, handleClick } = usePopUp();
  const {
    todoItem,
    setTodoItem,
    handleCompleted,
    handleImportant,
    handleDelete,
  } = useTodoItem();

  return (
    <Card>
      <CardContent>
        <CardLeft>
          <CheckBox onClick={() => handleCompleted(todo)} type="checkbox" />
          <TodoText>{todo.title}</TodoText>
          <Date>{todo.date.toDateString()}</Date>
          <Tags colorTag={todo.tag}>{todo.tag}</Tags>
        </CardLeft>
        <CardRight>
          <UpdateButton onClick={() => handleClick(todo)}>Update</UpdateButton>
          <ImportantButton onClick={() => handleImportant(todo)}>
            Important
          </ImportantButton>
          <DeletedButton onClick={() => handleDelete(todo)}>
            Delete
          </DeletedButton>
        </CardRight>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
