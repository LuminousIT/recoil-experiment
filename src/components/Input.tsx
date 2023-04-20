import React, { ChangeEvent } from 'react'

interface InputProps {
    value: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ value, onChangeInput, ...rest }: InputProps) => {
    return (
        <input className='input' value={value} onChange={onChangeInput} />
    )
}

export default Input