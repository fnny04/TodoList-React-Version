import React from "react";
import { useState } from "react";
import Layout from "./components/Layout";
import CustomForm from "./components/CustomForm";
import Button from "./components/Button";
import TaskList from "./components/TaskList";

const App = () => {
  const [task, setTask] = useState([
    {
      name: "Minum",
      cheked: true,
    },
    {
      name: "Modol",
      cheked: false,
    },
  ]);

  const [isEdit, setIsEdit] = useState(false);

  const addTask = (task) => {
    setTask((prevState) => [...prevState, task]);
  };

  const handleRemoveTodo = (index) =>
    index > -1 && setTask((prev) => [...prev.splice(index, 1), ...prev]);

  const handleCheckTodo = (index, checked) => {
    const newItem = task.map((item, ind) => {
      if (ind === index) {
        return { ...item, cheked: checked };
      }
      return item;
    });
    setTask(newItem);
  };

  const handleEditTodo = (index) => {
    setIsEdit(true);
    setInputTodo(task[index]);
    console.log("click");
  };

  return (
    <>
      <Layout>
        <h1 className="text-blue-600 font-bold text-2xl">My Task List</h1>
        <div className="flex flex-row gap-2">
          <CustomForm addTask={addTask}>
            <Button />
          </CustomForm>
        </div>
        {task.map((item, index) => (
          <TaskList
            key={index}
            index={index}
            tasks={item}
            checkTodo={handleCheckTodo}
            removeTodo={() => handleRemoveTodo(index)}
            editTodo={() => handleEditTodo(index)}
          />
        ))}
      </Layout>
    </>
  );
};

export default App;
