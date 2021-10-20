import React, { useEffect } from "react";
import { usePopUp } from "../../contexts/PopUpContext";
import { useTodoItem } from "../../contexts/TodoItemContext";
import { TodoItem } from "../index";
import { TodoItemListContainer } from "./TodoItemList.styled";

const TodoItemList:React.FC = () => {
  const { todoItems,selectedTodoItems,getTodoItems } = useTodoItem();
  const {isOpen} =usePopUp();
  
  useEffect(()=>{
    getTodoItems();
  },[todoItems,isOpen])
  return(
    <TodoItemListContainer>
      {selectedTodoItems.map((todo, index) => (
        <TodoItem {...todo} key={index} />
      ))}
    </TodoItemListContainer>
  );
};

export default TodoItemList;
