import { ITodoItemProps } from "../types";

export const defaultTodoItems = [
    {
      id: 1,
      title: "Todo Item1",
      date: new Date(),
      tag: "Low",
      description: "First todo item content",
      important: false,
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      title: "Todo Item2",
      date: new Date(),
      tag: "Low",
      description: "Second todo item content",
      important: true,
      completed: false,
      deleted: false,
    },
    {
      id: 3,
      title: "Todo Item3",
      date: new Date(),
      tag: "High",
      description: "Third todo item content",
      important: false,
      completed: true,
      deleted: false,
    },
  ];


  export const defaultTodoItem: ITodoItemProps = {
    id:(new Date()).getTime(),
    title: "",
    date: new Date(),
    tag: "",
    description: "",
    important: false,
    completed: false,
    deleted: false,
  };

  export const defaultTodoItemContext = {
    todoItems: defaultTodoItems,
  };
  