import React, { useRef } from 'react';
import './NewTodo.css'

interface NewTodoProps  {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText)
    }

    return (
        <div>
            <form onSubmit={todoSubmitHandler}>
                <div>
                    <label htmlFor="todo-text">Todo Text</label>
                    <input type="text" id='todo-text' ref={textInputRef}/>
                </div>
                <button type='submit'>ADD TODO</button>
            </form>
        </div>
    )
}

export default NewTodo;