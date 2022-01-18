import React from "react";

export function TodoItem({ todo, onCheckTodo }) {

    const {id, name, selected} = todo;  

    //Cambiamos el estado(true o false) del checkbox seleccionado por id.
    const handleChange = () => {
        onCheckTodo(id);
    }

    return(
        <li className="text-white font-semibold"><input type="checkbox" onChange={handleChange} checked={selected}/> {name}</li>
    )
}