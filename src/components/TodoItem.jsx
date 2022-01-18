import React from "react";

export function TodoItem({ todo, onCheckTodo }) {

    const {id, name, selected} = todo;  

    const handleChange = () => {
        onCheckTodo(id);
    }

    return(
        <li className="text-white font-semibold"><input type="checkbox" onChange={handleChange} checked={selected}/> {name}</li>
    )
}