import { createContext, useState, useContext, FC } from "react";
import { ITodoItemContext, ITodoItemProps } from "../types";

const defaultTodoItems = [
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
    important: false,
    completed: false,
    deleted: false,
  },
  {
    id: 3,
    title: "Todo Item3",
    date: new Date(),
    tag: "Medium",
    description: "Second todo item content",
    important: false,
    completed: false,
    deleted: false,
  },
  // {
  //   id: 4,
  //   title: "Todo Item2 active deleted",
  //   date: new Date(),
  //   tag: "High",
  //   description: "Second todo item content",
  //   important: false,
  //   completed: false,
  //   deleted: false,
  // },
  // {
  //   id: 5,
  //   title: "Todo Item2 active",
  //   date: new Date(),
  //   tag: "High",
  //   description: "Second todo item content",
  //   important: false,
  //   completed: false,
  //   deleted: false,
  // },
  // {
  //   id: 6,
  //   title: "Todo Item2 active important",
  //   date: new Date(),
  //   tag: "High",
  //   description: "Second todo item content",
  //   important: false,
  //   completed: false,
  //   deleted: false,
  // },
];
const defaultTodoItemContext = {
  todoItems: defaultTodoItems,
};

const defaultTodoItem: ITodoItemProps = {
  id: 33,
  title: "",
  date: new Date(),
  tag: "",
  description: "",
  important: false,
  completed: false,
  deleted: false,
};

const TodoItemContext = createContext<ITodoItemContext>({} as ITodoItemContext);

export const TodoItemProvider: FC = ({ children }) => {
  const [todoItems, setTodoItems] = useState<ITodoItemProps[]>(
    defaultTodoItemContext.todoItems
  );
  const [selectedTodoItems, setSelectedTodoItems] = useState<ITodoItemProps[]>(
    defaultTodoItemContext.todoItems
  );
  const [todoItem, setTodoItem] = useState<ITodoItemProps>(defaultTodoItem);
  const addTodoItem = (todoItem: ITodoItemProps) => {
    setTodoItems([...todoItems, todoItem]);
  };
  const updateTodoItem = (todoItem: ITodoItemProps) => {
    const index = todoItems.findIndex((t) => t.id === todoItem.id);
    todoItems[index] = todoItem;
    //console.log(todoItems);
    setTodoItems(todoItems);
    //console.log("after set", todoItems);
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
  const getTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => !todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };
  const completedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.completed  && !todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };
  const deletedTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };
  const importantTodoItems = () => {
    var tempArray = todoItems.filter((todoItem) => todoItem.important && !todoItem.deleted);
    setSelectedTodoItems(tempArray);
  };
  const activeTodoItems = () => {
    var tempArray = todoItems.filter(
      (todoItem) => !todoItem.completed && !todoItem.deleted
    );
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

  const handleCompleted = (todo: ITodoItemProps) => {
    console.log("handlecompleted before", todo);
    todoItems.map((t) =>
      t.id === todo.id ? (t.completed = !todo.completed) : ""
    );
    console.log("handlecompleted after", todoItems);
    setTodoItems(todoItems);
    getTodoItems();
  };
  const handleImportant =(todo: ITodoItemProps) => {
    console.log("important before", todo);
    todoItems.map((t) =>
      t.id === todo.id ? (t.important = !todo.important) : ""
    );
    console.log("important after", todoItems);
    setTodoItems(todoItems);
    getTodoItems();
  }
  const handleDelete =(todo: ITodoItemProps) => {
    console.log("important before", todo);
    todoItems.map((t) =>
      t.id === todo.id ? (t.deleted = !todo.deleted) : ""
    );
    console.log("important after", todoItems);
    setTodoItems(todoItems);
    getTodoItems();
  }

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
    handleCompleted,
    handleImportant,
    handleDelete,
  };
  return (
    <TodoItemContext.Provider value={values}>
      {children}
    </TodoItemContext.Provider>
  );
};

export const useTodoItem = () => useContext(TodoItemContext);
