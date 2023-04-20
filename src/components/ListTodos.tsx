import React from "react";
import { useRecoilValue } from "recoil";
import { todoListData } from "../recoil/atoms";
import TodoItem from './TodoItem'

const ListTodos = () => {
    const todoList = useRecoilValue(todoListData);
    return (
        <div>
            {todoList.map(({ task, isComplete, id }, idx) => (<TodoItem key={idx} task={task} isComplete={isComplete} id={id} />))}
        </div>
    )
}

export default ListTodos