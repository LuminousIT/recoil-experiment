import React, { ChangeEvent, FormEvent, useState, } from 'react'
import { useRecoilState } from 'recoil'
import Input from '../components/Input'
import ListTodos from '../components/ListTodos';
import { inputState, todoListData } from '../recoil/atoms';


const Home = () => {
  const [value, setValue] = useRecoilState(inputState);
  const [todoList, setTodoList] = useRecoilState(todoListData)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTodoList((prevList) => [
      ...prevList,
      {
        id: Math.floor(Math.random() * 100) + 1,
        task: value,
        isComplete: false
      }
    ])
  }
  return (
    <div className="App">
      <h2>Recoil TODO</h2>

      <div className='todo-container'>
        <form onSubmit={handleSubmit}>
          <Input value={value} onChangeInput={handleInputChange} />
        </form>
        <div>{value}</div>
        <ListTodos />
      </div>

    </div>
  )
}

export default Home