import { createContext, useState, useContext, FC } from "react";
import { ITodoItemContext, ITodoItemProps } from "../types";

const defaultTodoItems = [
  {
    title: "Todo Item1 completed important",
    date: new Date(),
    tag: "Low",
    description: "First todo item content",
    important: true,
    completed: true,
    deleted: false,
  },
  {
    title: "Todo Item2 completed deleted",
    date: new Date(),
    tag: "Low",
    description: "Second todo item content",
    important: false,
    completed: true,
    deleted: true,
  },
  {
    title: "Todo Item2 completed",
    date: new Date(),
    tag: "Medium",
    description: "Second todo item content",
    important: false,
    completed: true,
    deleted: false,
  },
  {
    title: "Todo Item2 active deleted",
    date: new Date(),
    tag: "High",
    description: "Second todo item content",
    important: false,
    completed: false,
    deleted: true,
  },
  {
    title: "Todo Item2 active",
    date: new Date(),
    tag: "High",
    description: "Second todo item content",
    important: false,
    completed: false,
    deleted: false,
  },
  {
    title: "Todo Item2 active important",
    date: new Date(),
    tag: "High",
    description: "Second todo item content",
    important: true,
    completed: false,
    deleted: false,
  },
];
const defaultTodoItemContext = {
  todoItems: defaultTodoItems,
};
const TodoItemContext = createContext<ITodoItemContext>({} as ITodoItemContext);

export const TodoItemProvider: FC = ({ children }) => {
  const [todoItems, setTodoItems] = useState<ITodoItemProps[]>(
    defaultTodoItemContext.todoItems
  );
  const [selectedTodoItems, setSelectedTodoItems] = useState<ITodoItemProps[]>(
    defaultTodoItemContext.todoItems
  );

  const addTodoItem = (todoItem: ITodoItemProps) => {
    setTodoItems([...todoItems, todoItem]);
  };

  //   const getSelectedTodoItems = (selectedFeature: string) => {
  //     var tempArray: ITodoItemProps[] = todoItems;
  //     if (selectedFeature === "completed") {
  //       tempArray = todoItems.filter((todoItem) => todoItem.completed);
  //     } else if (selectedFeature === "deleted") {
  //       tempArray = todoItems.filter((todoItem) => todoItem.deleted);
  //     } else if (selectedFeature === "important") {
  //       tempArray = todoItems.filter((todoItem) => todoItem.important);
  //     } else if (selectedFeature === "active") {
  //       tempArray = todoItems.filter((todoItem) => !todoItem.completed);
  //     } else if (selectedFeature === "Low") {
  //       tempArray = todoItems.filter((todoItem) => todoItem.tag === "Low");
  //     } else if (selectedFeature === "Medium") {
  //       tempArray = todoItems.filter((todoItem) => todoItem.tag === "Medium");
  //     } else if (selectedFeature === "High") {
  //       tempArray = todoItems.filter((todoItem) => todoItem.tag === "High");
  //     }
  //     setSelectedTodoItems(tempArray);
  //   };
  const getTodoItems = () =>{
    var tempArray = todoItems.filter((todoItem) => !todoItem.deleted);
    setSelectedTodoItems(tempArray);
  }
  const completedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.completed);
    setSelectedTodoItems(tempArray);
  };
  const deletedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };
  const importantTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.important);
    setSelectedTodoItems(tempArray);
  };
  const activeTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => !todoItem.completed && !todoItem.deleted );
    setSelectedTodoItems(tempArray);
  };
  const lowTagTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.tag === "Low");
    setSelectedTodoItems(tempArray);
  };
  const mediumTagTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.tag === "Medium");
    setSelectedTodoItems(tempArray);
  };
  const highTagTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.tag === "High");
    setSelectedTodoItems(tempArray);
  };
  //important,active,low,medium,high,tags

  const values = {
    todoItems,
    addTodoItem,
    selectedTodoItems,
    // getSelectedTodoItems,
    getTodoItems,
    completedTodoItems,
    deletedTodoItems,
    importantTodoItems,
    activeTodoItems,
    lowTagTodoItems,
    mediumTagTodoItems,
    highTagTodoItems,
  };
  return (
    <TodoItemContext.Provider value={values}>
      {children}
    </TodoItemContext.Provider>
  );
};

export const useTodoItem = () => useContext(TodoItemContext);
