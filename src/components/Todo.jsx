function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo items-center"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button
          className="bg-blue-300 p-2 m-2 rounded"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="bg-red-400 p-2 rounded"
          onClick={() => removeTodo(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
