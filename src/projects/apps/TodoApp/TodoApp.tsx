import { useState } from "react";

interface Todo {
id: number;
text: string;
}

const TodoApp = () => {
const [task, setTask] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);
const [editId, setEdit] = useState<number | null>(null);

const updateTodo = () => {
if (editId !== null) {
const updatedTodos = todos.map((item) => {
if (item.id === editId) {
return {
...item,
text: task,
};
}
return item;
});


  setTodos(updatedTodos);
  setEdit(null);
  setTask("");
  return;
}

if (!task.trim()) return;

const newTodo: Todo = {
  id: Date.now(),
  text: task,
};

setTodos([...todos, newTodo]);
setTask("");


};

const editTodo = (id: number) => {
const todoToEdit = todos.find(
(todo) => todo.id === id
);


if (!todoToEdit) return;

setTask(todoToEdit.text);
setEdit(todoToEdit.id);


};

const deleteTodo = (id: number) => {
const updatedTodos = todos.filter(
(item) => item.id !== id
);


setTodos(updatedTodos);


};

return (

  <div className="todo-container">
    <h2 className="todo-title">
      Todo Application
    </h2>

 
<div className="todo-input-group">
  <input
    type="text"
    value={task}
    onChange={(e) =>
      setTask(e.target.value)
    }
    placeholder="Enter a task..."
    className="todo-input"
  />

  <button
    onClick={updateTodo}
    className="todo-submit-btn"
  >
    {editId ? "Update" : "Add Task"}
  </button>
</div>

<ul className="todo-list">
  {todos.map((item) => (
    <li
      key={item.id}
      className="todo-item"
    >
      <span>{item.text}</span>

      <div className="todo-actions">
        <button
          onClick={() =>
            editTodo(item.id)
          }
          className="todo-edit-btn"
        >
          Edit
        </button>

        <button
          onClick={() =>
            deleteTodo(item.id)
          }
          className="todo-delete-btn"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
 

  </div>
);


};

export default TodoApp;
