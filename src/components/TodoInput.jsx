import { useState } from "react";

export default function TodoInput(props){
    //destructure the props
    const { handleAddTodos } = props;
    const [todoValue, setTodoValue] = useState('');
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value);
            }} placeholder="Enter todo..."/>
            <button 
            onClick={() => {
                handleAddTodos(todoValue);
                //reset the input to empty string when click on Add
                setTodoValue('');
            }}>
                Add
            </button>
        </header>
    )
}