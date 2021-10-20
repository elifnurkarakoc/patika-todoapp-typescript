import { createContext, useState, useContext, FC } from "react";
import { ITodoItemProps } from "../types";
import { useTodoItem } from "./TodoItemContext";

interface IPopUpContext {
  isOpen: boolean;
  handleClick: (todo: ITodoItemProps) => void;
}
const defaultState = {
  isOpen: false,
};
const PopUpContext = createContext<IPopUpContext>({} as IPopUpContext); //defaultState

export const PopUpProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { todoItem, setTodoItem } = useTodoItem();

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
