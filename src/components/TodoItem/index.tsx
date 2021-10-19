import React from 'react'
import * as styles from "./styles"
import { TagKeys ,TodoProps } from '../../types'

const TodoItem:React.FC<TodoProps> = ({title,date,tag,description,completed,deleted, important}) => {
    console.log(title)
    return (
        <styles.Card>
            <styles.CardContent>
            <styles.CheckBox type="checkbox"/>
            <styles.TodoText>{title}</styles.TodoText>
            <styles.Date>{date.toDateString()}</styles.Date>
            <styles.Tags>{tag}</styles.Tags>
            
            </styles.CardContent>
        </styles.Card>
    )
}

export default TodoItem
