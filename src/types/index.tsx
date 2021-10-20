export type TagKeys = "Low" | "Medium" | "High";

export interface UserProps {
  username: string;
  name: string;
  surname: string;
}

export interface ITodoItemProps {
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
  addTodoItem?: (todo: ITodoItemProps) => void;
  getSelectedTodoItems:(selectedFeature:string)  => ITodoItemProps[] ;
  completedTodoItems:()=> ITodoItemProps[] ;
  deletedTodoItems:()=> ITodoItemProps[] ;
  importantTodoItems:()=> ITodoItemProps[] ;
  activeTodoItems:()=> ITodoItemProps[] ;
  tagTodoItems:()=> ITodoItemProps[] ;
}

export interface IButtonProps {
  text: string;
  icon: JSX.Element | JSX.IntrinsicElements | any;
  handleClick?: () => ITodoItemProps[];
  handleTag?:(selected:string)=> ITodoItemProps[] ;
}