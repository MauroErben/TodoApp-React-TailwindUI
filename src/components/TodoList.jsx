import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onCheckTodo, onDeleteTodo }) {
    return (
        <div className="container bg-gray-300 w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-1/2 mt-4 rounded-md shadow-md shadow-black">
            <h1 className="text-center">Productos</h1>
            {todos.length > 0 && <ul className="p-4 bg-gray-500">
                {todos.map((t) => (
                    <TodoItem key={t.id} todo={t} onCheckTodo={onCheckTodo}/>
                ))}
                <button onClick={onDeleteTodo} className=" bg-red-500 mt-2 p-1 w-full text-white font-bold hover:bg-red-600 transition-colors duration-300">Eliminar</button>
            </ul>}
            <p className="text-center">Tienes: {todos.filter(t => t).length} productos</p>
        </div>
    )
}