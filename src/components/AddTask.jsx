export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTasklist = tasklist.map((todo) =>
        task.id === todo.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTasklist);
      setTask({});
    } else {
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add a new Task"
          maxLength="25"
          value={task.name || ''}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />

        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};
