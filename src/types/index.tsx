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
  // getSelectedTodoItems:(selected:string)  => void ;
  getTodoItems: () => void;
  completedTodoItems: () => void;
  deletedTodoItems: () => void;
  importantTodoItems: () => void;
  activeTodoItems: () => void;
  lowTagTodoItems: () => void;
  mediumTagTodoItems: () => void;
  highTagTodoItems: () => void;
}
export interface IButtonProps {
  text: string;
  icon: JSX.Element | JSX.IntrinsicElements | any;
  handleClick: () => void;
  handleTag?: (selected: string) => ITodoItemProps[];
}
