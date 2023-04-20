import React from "react";
import { TodoListItemProps } from "../recoil/atoms";
import styles from './todoitem.module.css'

const TodoItem = ({ id, task, isComplete }: TodoListItemProps) => {
    const handleDelete = () => {

    }
    return (
        <div className={styles.todoitem}>
            <input type="checkbox" name={id + ""} checked={isComplete} />
            <p>{task}</p>
            <button onClick={handleDelete} >delete</button>
        </div>
    )
}

export default TodoItem