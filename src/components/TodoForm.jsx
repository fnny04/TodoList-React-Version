function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Masukan kegiatan mu"
        className="input rounded p-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
