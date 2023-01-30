import React from "react";
import { useState } from "react";

const CustomForm = ({ addTask, children }) => {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
    });
    setTask("");
    console.log(task);
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    setTask((prev) => [...prev, inputTodo]);
    setInputTodo({ ...inputTodo, name: "" });
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const newItem = task.map((item) => {
      if (item.id === inputTodo.id) {
        return { ...item, name: inputTodo.name };
      }
      return item;
    });
    setTask(newItem);
    setInputTodo({
      id: "",
      name: "",
    });
    setIsEdit(false);
  };

  return (
    <div className="flex flex-row gap-2">
      <form onSubmit={handleFormSubmit} className="relative">
        <input
          value={task}
          onChange={handleChange}
          type="text"
          id="floating_outlined"
          className="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg focus:outline border-gray-300 appearance-none  focus:outline-none focus:border-blue-600 peer"
          placeholder="Input Your Task"
        />
        <label className="absolute text-sm text-gray-300 px-8  duration-300 transform translate-y-4 scale-75 origin-[0] bg-white peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ">
          Input Your Task
        </label>
      </form>
      {children}
    </div>
  );
};

export default CustomForm;
