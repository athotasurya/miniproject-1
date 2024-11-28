import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded px-2 py-1 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
