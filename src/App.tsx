import React, { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";
import Button from "./components/Button";
import type { Items } from "./types/utils";
import ItemList from "./components/ItemList";

export default function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) {
      setError("Input cannot be empty");
      return;
    }
    setItems((prev) => [
      ...prev,
      { title: trimmedInput, id: Date.now().toString() },
    ]);
    setInputValue("");
    setError("");
  };

  const handlerReset = () => {
    setInputValue("");
    setError("");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-br from-indigo-500 via-purple-300 to-blue-400">
      <div className="w-87.5 pt-10">
        <ImageHeader></ImageHeader>
        <form onSubmit={handlerSubmit} className="mb-5">
          <Input inputValue={inputValue} setInputValue={setInputValue}></Input>
          <div className="flex gap-2">
            <Button
              title="Add"
              className="bg-blue-600 hover:bg-blue-700 flex-1 p-2 text-white"
            ></Button>
            <Button
              title="Reset"
              className="bg-blue-600 hover:bg-blue-700 flex-1 p-2 text-white"
              onClick={handlerReset}
              type="reset"
            ></Button>
          </div>
          {error && (
            <label
              id="lblError"
              className="bg-red-400 block w-full p-0.5 text-center"
            >
              {error}
            </label>
          )}
        </form>
      </div>
      <div className="w-87.5 flex-1 min-h-0 overflow-y-auto space-y-1">
        <ItemList items={items} setItems={setItems}></ItemList>
      </div>
    </div>
  );
}
