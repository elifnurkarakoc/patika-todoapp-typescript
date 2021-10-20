import React from "react";
import {
  Card,
  CardContent,
  TodoText,
  Date,
  Tags,
  CheckBox,
} from "./TodoItem.styled";
import { TagKeys, ITodoItemProps } from "../../types";

const TodoItem: React.FC<ITodoItemProps> = ({
  title,
  date,
  tag,
  description,
  completed,
  deleted,
  important,
}) => {
  console.log(title);
  return (
    <Card>
      <CardContent>
        <CheckBox type="checkbox" />
        <TodoText>{title}</TodoText>
        <Date>{date.toDateString()}</Date>
        <Tags colorTag={tag} >{tag}</Tags>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
