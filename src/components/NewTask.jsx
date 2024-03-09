import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  }

  return (
    <div className="flex items-center justify-between">
      <Input onChange={handleChange} value={task} autoFocus />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
