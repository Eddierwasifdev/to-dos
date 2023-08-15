import React, { useState } from "react";
import { PopupDelete } from "./PopupDelete";
import { PenSquare, Trash2 } from "lucide-react";

export const Todo = ({ tasks, editTodo, toggleComplete, todos, setTodos }) => {
  const [openDelete, setOpenDelete] = useState(false);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleCheckboxChange = () => {
    toggleComplete(tasks.id);
  };

  return (
    <div
      className={`flex items-center justify-between mt-5 border-b text-white ${
        tasks.completed ? "line-through text-gray-800" : ""
      }`}
    >
      <p>{tasks.input}</p>

      <div className="w-[120px] py-2 rounded-md font-bold text-zinc-100 cursor-pointer flex items-center justify-evenly ">
        <input
          type="checkbox"
          name="checkbox"
          value="checked"
          className="w-6 h-6 rounded border-2 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          checked={tasks.completed}
          onChange={handleCheckboxChange}
        ></input>

        <i onClick={() => editTodo(tasks.id)}>
          <PenSquare className="text-teal-500" />
        </i>
        <span className="">
          <i onClick={() => setOpenDelete(true)}>
            <Trash2 className="text-red-500" />
          </i>
          {openDelete && (
            <div className={``}>
              <PopupDelete
                tasks={tasks}
                deleteItem={() => deleteTodo(tasks.id)}
                cancel={() => setOpenDelete(false)}
              />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
