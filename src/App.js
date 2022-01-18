import React, { useState, useRef, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';

function App() {

  const KEY = 'todo-tailwind';
  const [todo, setTodo] = useState([]);
  const todoRef = useRef();
  
  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(KEY));
    storeTodos && setTodo(storeTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todo))
  }, [todo])

  const handleAddTodo = (evt) => {
    evt.preventDefault();
    const todoItem = todoRef.current.value;
    if(todoItem === '') return;
    setTodo([...todo, {id: uuidv4(), name: todoItem, selected: false}]);
    todoRef.current.value = null;
  }

  const handleCheckTodo = (id) => {
    const copy = [...todo];
    const todoFind = copy.find(t => t.id === id);
    todoFind.selected = !todoFind.selected;
    setTodo(copy);
  }

  const handleDeleteTodo = () => {
    const newTodo = todo.filter(t => !t.selected);
    setTodo(newTodo);
  }

  return (
    <div className="container flex justify-center flex-col items-center p-4">
      <form onSubmit={handleAddTodo} className="flex flex-col w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-gray-500 rounded-md p-4 shadow-md shadow-black">
        <input ref={todoRef} className="text-sm p-1 text-center border-2 border-black outline-none" type="text" placeholder="ingresa un producto" />
        <input className="mt-4 p-1 bg-green-500 hover:bg-green-600 font-bold text-white transition-colors duration-300" type="submit" value="Agregar"/>
      </form>
      <TodoList todos={todo} onCheckTodo={handleCheckTodo} onDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}

export default App;
