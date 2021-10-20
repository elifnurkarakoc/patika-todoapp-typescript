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
    deleted: false,
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
  const [selectedTodoItems, setSelectedTodoItems] =
    useState<ITodoItemProps[]>(defaultTodoItemContext.todoItems);

  const addTodoItem = (todoItem: ITodoItemProps) => {
    setTodoItems([...todoItems, todoItem]);
  };

  const getSelectedTodoItems = (selectedFeature: string) => {
    var tempArray = todoItems.filter((todoItem) => todoItem.completed); //selectedFeature
    console.log(tempArray);
    return tempArray;
  };
  const completedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.completed);
    setSelectedTodoItems(tempArray);
    //return kalkıcak
    return tempArray;
  };
  const deletedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.deleted);
    setSelectedTodoItems(tempArray);
    return tempArray;
  };
  const importantTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.important);
    setSelectedTodoItems(tempArray);
    return tempArray;
  };
  const activeTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => !todoItem.completed);
    setSelectedTodoItems(tempArray);
    console.log("setslected",selectedTodoItems)
    return tempArray;
  };
  const tagTodoItems = () => {
    var tempArray = todoItems.filter(
      (todoItem) => todoItem.tag === "Low"
    );
    setSelectedTodoItems(tempArray);
    return tempArray;
  };

  //important,active,low,medium,high,tags

  const values = {
    todoItems,
    addTodoItem,
    selectedTodoItems,
    getSelectedTodoItems,
    completedTodoItems,
    deletedTodoItems,
    importantTodoItems,
    activeTodoItems,
    tagTodoItems,
  };
  return (
    <TodoItemContext.Provider value={values}>
      {children}
    </TodoItemContext.Provider>
  );
};

export const useTodoItem = () => useContext(TodoItemContext);
