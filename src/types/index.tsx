export type TagKeys = "Low" | "Medium" | "High";

export interface UserProps {
  username: string;
  name: string;
  surname: string;
}

export interface TodoProps {
  title: string;
  date: Date;
  tag: string,//"Low" | "Medium" | "High";
  description: string;
  important: boolean;
  completed: boolean;
  deleted: boolean;
}

export interface IPopUpContext{
  isOpen:boolean;
  handleClick?:() => void;
}