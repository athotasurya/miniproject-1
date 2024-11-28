// In-memory data store
let tasks = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tasks);
  } else if (req.method === "POST") {
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    res.status(200).json({ message: "Task deleted" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
