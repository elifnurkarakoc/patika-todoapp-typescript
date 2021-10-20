import React from "react";
import { useTodoItem } from "../../contexts/TodoItemContext";
import { TodoItem } from "../index";
import { TodoItemListContainer } from "./TodoItemList.styled";

const TodoItemList:React.FC = () => {
  const { todoItems,selectedTodoItems } = useTodoItem();

  return(
    <TodoItemListContainer>
      {selectedTodoItems.map((todo, index) => (
        <TodoItem {...todo} key={index} />
      ))}
    </TodoItemListContainer>
  );
};

export default TodoItemList;
