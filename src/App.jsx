import React from "react";
import Navbar from "./components/navbar";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "makan",
      isCompleted: false,
    },
    {
      text: "minum",
      isCompleted: false,
    },
    {
      text: "tidur",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="todo-list bg-gray-400 h-screen p-4">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <h1 className="text-2xl font-bold">Mau melakukan Apa Hari Ini?</h1>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
