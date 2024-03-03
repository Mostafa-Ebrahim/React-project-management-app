import Button from "./Button";

export default function Project({ project, onDelete }) {
  const date = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-3/4 m-16 p-16">
      <header className="pb-4 mb-4 border-b-2 border-blue-700">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className="text-xl mt-8 font-normal whitespace-pre-wrap">
          {project.description}
        </p>
        <p className="text-sm mt-16 italic">Due date: {date}</p>
      </header>
    </div>
  );
}
