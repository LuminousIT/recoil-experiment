import { atom } from 'recoil'


export const inputState = atom({
    key: 'inputState',
    default: ''
})

export type TodoListItemProps = {
    id: number
    task: string
    isComplete: boolean
}

export const todoListData = atom({
    key: 'todoListData',
    default: [] as TodoListItemProps[]
})