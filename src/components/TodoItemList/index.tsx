import React from "react";
import { TodoItem } from "../index";
import { TodoItemListContainer } from "./TodoItemList.styled";

const todoitems = [
  {
    title: "Todo Item1 fdsfsdgdgfhyujuykuykuıkuıkıkuıksdfsdfsdfsd",
    date: new Date(),
    tag: "Low",
    description: "First todo item content",
    important: false,
    completed: true,
    deleted: false,
  },
  {
    title: "Todo Item2",
    date: new Date(),
    tag: "Low",
    description: "Second todo item content",
    important: false,
    completed: true,
    deleted: false,
  },
];

const TodoItemList = () => {
  return (
    <TodoItemListContainer>
      {todoitems.map((todo, index) => (
        <TodoItem {...todo} key={index} />
      ))}
    </TodoItemListContainer>
  );
};

export default TodoItemList;
