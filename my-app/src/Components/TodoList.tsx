import React from 'react';
import './TodoList.css';

interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <div>
            <ul>
                {
                    props.items.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <span>{todo.text}</span>
                                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList