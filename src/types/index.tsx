import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export type TagKeys = "Low" | "Medium" | "High";

export interface UserProps {
  username: string;
  name: string;
  surname: string;
}

export interface ITodoItemProps {
  id:number;
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
  handleClick?: () => void;
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
  setTodoItem:React.Dispatch<React.SetStateAction<ITodoItemProps>>;
}
export interface IButtonProps {
  text: string;
  icon: JSX.Element | JSX.IntrinsicElements | any;
  handleClick: () => void;
  handleTag?: (selected: string) => ITodoItemProps[];
}

export interface IStyledProps{
  theme: DefaultTheme;
}

export interface ITagsProps {
  theme: DefaultTheme;
  colorTag: string
}
export interface IImportedButtonProps {
  theme: DefaultTheme;
  important: boolean;
}