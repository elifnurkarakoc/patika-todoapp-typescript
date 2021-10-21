import { DefaultTheme } from "styled-components";
import { FormikErrors } from 'formik';

export interface ITodoItemProps {
  id: number;
  title: string;
  date: Date;
  tag: string; //"Low" | "Medium" | "High";
  description: string;
  important: boolean;
  completed: boolean;
  deleted: boolean;
}

export interface IPopUpContext {
  isOpen: boolean;
  handleClick: (todo: ITodoItemProps) => void;
}

export interface ITodoItemContext {
  todoItems: ITodoItemProps[];
  selectedTodoItems: ITodoItemProps[];
  addTodoItem: (todo: ITodoItemProps) => void;
  updateTodoItem: (todo: ITodoItemProps) => void;
  // getSelectedTodoItems:(selected:string)  => void ;
  getTodoItems: () => void;
  completedTodoItems: () => void;
  deletedTodoItems: () => void;
  importantTodoItems: () => void;
  activeTodoItems: () => void;
  lowTagTodoItems: () => void;
  mediumTagTodoItems: () => void;
  highTagTodoItems: () => void;
  todoItem: ITodoItemProps;
  setTodoItem: React.Dispatch<React.SetStateAction<ITodoItemProps>>;
  handleCompleted: (todo: ITodoItemProps) => void;
  handleImportant: (todo: ITodoItemProps) => void;
  handleDelete: (todo: ITodoItemProps) => void;
}
export interface IButtonProps {
  text: string;
  icon: JSX.Element | JSX.IntrinsicElements | any;
  handleClick: () => void;
  handleTag?: (selected: string) => ITodoItemProps[];
}

export interface IStyledProps {
  theme: DefaultTheme;
}

export interface ITagsProps {
  theme: DefaultTheme;
  colorTag: string;
}
export interface IImportedButtonProps {
  theme: DefaultTheme;
  important: boolean;
}

export interface IErrorProps{
  message:string | FormikErrors<Date>;
}