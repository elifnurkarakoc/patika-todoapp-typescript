import { createContext, useState, useContext, FC } from "react";
import { ITodoItemProps,IPopUpContext } from "../types";
import { useTodoItem } from "./TodoItemContext";

const PopUpContext = createContext<IPopUpContext>({} as IPopUpContext);

export const PopUpProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { setTodoItem } = useTodoItem();

  const handleClick = (todo: ITodoItemProps | null) => {
    setIsOpen(!isOpen);
    if (todo) {
      setTodoItem(todo);
    }
  };

  const values = {
    isOpen,
    handleClick,
  };

  return (
    <PopUpContext.Provider value={values}>{children}</PopUpContext.Provider>
  );
};

export const usePopUp = () => useContext(PopUpContext);
