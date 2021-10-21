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
import { SidebarButton } from "..";
import { CompletedIcon, DeletedIcon, EditIcon, ImportantIcon } from "../../icons/icons";
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
          {/* <CheckBox type="checkbox" checked={todo.completed} onClick={() => handleCompleted(todo)}  /> */}
          <TodoText> {todo.title} {todo.completed && <CompletedIcon/>} {todo.important && <ImportantIcon/>} </TodoText>
          <Date>{todo.date.toDateString()}</Date>
          {/* {todo.completed && <CompletedIcon/>} */}
          <Tags colorTag={todo.tag}>{todo.tag}</Tags>
          {/* {todo.completed && <CompletedIcon/>} */}
        </CardLeft>
        <CardRight>
          <UpdateButton onClick={() => handleClick(todo)}><EditIcon /> Update</UpdateButton>
          {/* <ImportantButton onClick={() => handleImportant(todo)}>
            Important
          </ImportantButton> */}
          {!todo.deleted && <DeletedButton onClick={() => handleDelete(todo)}>
          <DeletedIcon /> Delete
          </DeletedButton>}
          {todo.deleted && <DeletedButton onClick={() => handleDelete(todo)}>
          <DeletedIcon /> Cancel
          </DeletedButton>}

          {/* <SidebarButton
            text="Update"
            icon={<EditIcon />}
            handleClick={() => handleClick(todo)}
          />
          <SidebarButton
            text="Delete"
            icon={<DeletedIcon />}
            handleClick={() => handleDelete(todo)}
          /> */}
        </CardRight>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
