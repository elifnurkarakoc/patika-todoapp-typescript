import React from "react";
import { TodoItem } from "../index";
import * as styles from "./styles";

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
    <styles.TodoItemList>
      {todoitems.map((todo, index) => (
        <TodoItem {...todo} key={index} />
      ))}
      {/* <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem /> */}
    </styles.TodoItemList>
  );
};

export default TodoItemList;
