import { ITodoItemProps } from "../types";

export const defaultTodoItems = [
    {
      id: 1,
      title: "💻 Refactor Code and fix bugs and test",
      date: new Date(),
      tag: "High",
      description: "Refactor Code,fix bugs",
      important: true,
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      title: "🚀 Finish documentation and make it live",
      date: new Date(),
      tag: "Medium",
      description: "Deploy th project",
      important: true,
      completed: true,
      deleted: false,
    },
    {
      id: 3,
      title: "🎉 Push the project to Github",
      date: new Date(),
      tag: "High",
      description: "Push the project to github",
      important: false,
      completed: true,
      deleted: false,
    },
    {
      id: 4,
      title: "🎉 Start to Todo app",
      date: new Date("Tue Oct 19 2021 13:38:49 GMT+0300 (GMT+03:00)"),
      tag: "Low",
      description: "Start to Todo app",
      important: false,
      completed: true,
      deleted: true,
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
  