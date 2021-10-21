import { createContext, useState, useContext, FC } from "react";
import { ITodoItemContext, ITodoItemProps } from "../types";
import { defaultTodoItemContext, defaultTodoItem } from "../constants";

const TodoItemContext = createContext<ITodoItemContext>({} as ITodoItemContext);

export const TodoItemProvider: FC = ({ children }) => {
  const [todoItems, setTodoItems] = useState<ITodoItemProps[]>(
    defaultTodoItemContext.todoItems
  );
  const [selectedTodoItems, setSelectedTodoItems] = useState<ITodoItemProps[]>(
    defaultTodoItemContext.todoItems
  );
  const [todoItem, setTodoItem] = useState<ITodoItemProps>(defaultTodoItem);

  // Added to new to-do list
  const addTodoItem = (todoItem: ITodoItemProps) => {
    setTodoItems([...todoItems, todoItem]);
  };

  //Todo update is done.
  const updateTodoItem = (todoItem: ITodoItemProps) => {
    const index = todoItems.findIndex((t) => t.id === todoItem.id);
    todoItems[index] = todoItem;
    setTodoItems(todoItems);
  };

  //Changing the delete property is done.
  const handleDelete = (todo: ITodoItemProps) => {
    todoItems.map((t) => (t.id === todo.id ? (t.deleted = !todo.deleted) : ""));
    setTodoItems(todoItems);
    getTodoItems();
  };


  //All todos are fetched except todos that are not deleted
  const getTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => !todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };

  //The todo list with the desired feature is displayed.
  const completedTodoItems = () => {
    var tempArray = todoItems.filter(
      (todoItem) => todoItem.completed && !todoItem.deleted
    );
    setSelectedTodoItems(tempArray);
  };
  const deletedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };
  const importantTodoItems = () => {
    var tempArray = todoItems.filter(
      (todoItem) => todoItem.important && !todoItem.deleted
    );
    setSelectedTodoItems(tempArray);
  };
  const activeTodoItems = () => {
    var tempArray = todoItems.filter(
      (todoItem) => !todoItem.completed && !todoItem.deleted
    );
    setSelectedTodoItems(tempArray);
  };

  // Tag selection functions
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

  
  const values = {
    todoItems,
    addTodoItem,
    updateTodoItem,
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
    todoItem,
    setTodoItem,
    handleDelete,
  };
  return (
    <TodoItemContext.Provider value={values}>
      {children}
    </TodoItemContext.Provider>
  );
};

export const useTodoItem = () => useContext(TodoItemContext);
