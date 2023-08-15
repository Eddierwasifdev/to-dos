import React from "react";

export const PopupDelete = ({ deleteItem, tasks, cancel }) => {
  const handleDelete = () => {
    deleteItem(tasks.id);
    cancel();
  };

  return (
    <section className="bg-slate-700/50 fixed inset-0 flex items-center justify-center z-50">
      <main className="dropTop transition bg-slate-900 px-5 py-4 rounded-md flex flex-col items-center justify-center ">
        <h1 className="text-white font-bold text-2xl mt-5">
          Are you sure you want to delete this item? {""}
        </h1>
        <div className="flex items-center gap-5">
          <button
            onClick={handleDelete}
            className="bg-green-800 w-[120px] py-2 rounded-md font-semibold text-zinc-100 mt-10"
          >
            Delete
          </button>
          <button
            onClick={() => cancel()}
            className="bg-green-800 w-[120px] py-2 rounded-md font-semibold text-zinc-100 mt-10"
          >
            Cancel
          </button>
        </div>
      </main>
    </section>
  );
};
