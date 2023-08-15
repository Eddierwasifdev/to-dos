import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, tasks }) => {
  const [value, setValue] = useState(tasks.input);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, tasks.id);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-3 mt-5"
    >
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Update Task"
        className="w-full rounded-md font-semibold bg-gray-300"
      />

      <button className="w-[120px] bg-slate-800 py-2 rounded-md font-bold text-zinc-100 cursor-pointer">
        Update Task
      </button>
    </form>
  );
};
