import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <h2>Todo Application</h2>

      <input
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;