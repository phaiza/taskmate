export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id == id);
    setTask(selectedTask);
  };
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTaskList);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              onClick={() => handleDelete(task.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
