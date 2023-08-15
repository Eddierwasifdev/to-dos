import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const Todoform = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), input: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (input, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, input, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const completedTasks = todos.filter((todo) => todo.completed);
  const remainingTasks = todos.filter((todo) => !todo.completed);

  return (
    <section className="m-auto sm:w-[80%] xl:w-[40%] bg-slate-600 px-5 py-5 rounded-md z-40 h-full overflow-y-auto">
      <div className="py-5 border-b">
        <h1 className="text-4xl text-white font-semibold text-center tracking-widest   ">
          To-dos
        </h1>
      </div>

      <Form addTodo={addTodo} />
      {remainingTasks.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} tasks={todo} key={index} />
        ) : (
          <Todo
            setTodos={setTodos}
            todos={todos}
            tasks={todo}
            key={index}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )
      )}

      <div className="border-b mt-28">
        <h1 className="text-slate-900 font-semibold">COMPLETE TASK</h1>
      </div>

      {completedTasks.map((completedTodo, index) => (
        <div
          key={index}
          className="flex items-center justify-between mt-5 border-b  line-through text-gray-800 py-2 "
        >
          <p>{completedTodo.input}</p>
          <input
            type="checkbox"
            className="w-6 h-6 rounded border-2 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 mr-20 cursor-pointer"
            checked={completedTodo.completed}
            onChange={() => toggleComplete(completedTodo.id)}
          />
        </div>
      ))}
    </section>
  );
};
