import React from "react";

const TaskList = ({ tasks, removeTodo, checkTodo, editTodo, index }) => {
  console.log(tasks);
  return (
    <div className="flex gap-4">
      <input
        onChange={(e) => checkTodo(index, e.target.checked)}
        checked={tasks.cheked}
        className="w-8 h-8 rounded"
        id="default-checkbox"
        type="checkbox"
      />
      <div
        className={`flex items-center justify-center bg-gray-200 py-1 w-36 rounded-md outline outline-blue-400 text-blue-600 ${
          tasks.cheked && "line-through"
        }`}
      >
        {tasks.name}
      </div>
      <div className="flex gap-2">
        <button onClick={removeTodo}>
          <img
            className="cursor-pointer"
            width="25"
            src="https://img.icons8.com/parakeet/48/null/trash.png"
          />
        </button>
        <button onClick={editTodo}>
          <img
            className="cursor-pointer"
            src="https://img.icons8.com/office/30/null/pencil--v1.png"
          />
        </button>
      </div>
    </div>
  );
};

export default TaskList;
