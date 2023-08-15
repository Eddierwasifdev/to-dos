import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todoform } from "./components/TodoformLocalStorage";

export default function App() {
  return (
    <main className="bg-slate-900 w-full h-screen flex items-center justify-between">
      <BrowserRouter>
        <Routes>
          <Route index element={<Todoform />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
