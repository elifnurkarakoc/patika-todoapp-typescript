import React from "react";
import {
  Card,
  CardContent,
  TodoText,
  Date,
  Tags,
  CheckBox,
} from "./TodoItem.styled";
import { TagKeys, TodoProps } from "../../types";

const TodoItem: React.FC<TodoProps> = ({
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
        <Tags>{tag}</Tags>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
