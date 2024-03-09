import Button from "./Button";
import Tasks from "./Tasks";

export default function Project({
  project,
  onDelete,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  const date = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-3/4 m-16 p-16 border rounded-3xl h-max bg-white ">
      <header className="pb-4 mb-4 border-b-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className="text-md mt-8 font-normal whitespace-pre-wrap">
          {project.description}
        </p>
        <p className="text-sm mt-16 italic">Due date: {date}</p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
