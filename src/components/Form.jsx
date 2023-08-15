import { PlusCircle } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput) {
      // Focus on the input when showing
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
      setShowInput(false);
    }
  };

  const handleToggleInput = () => {
    setShowInput(!showInput);
    setValue("");
  };

  return (
    <div className="mt-5">
      {showInput ? (
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between gap-6"
        >
          <input
            ref={inputRef}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Add a new task"
            className="w-full rounded-md font-semibold bg-white"
            required
          />
        </form>
      ) : (
        <div className="flex items-center justify-center">
          <button
            onClick={handleToggleInput}
            className="bg-slate-900 h-10 w-20 rounded-md flex items-center justify-center"
          >
            <PlusCircle size={28} className="text-green-400" />
          </button>
        </div>
      )}
    </div>
  );
};
