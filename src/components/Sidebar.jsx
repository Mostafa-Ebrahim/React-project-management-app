import Button from "./Button";

export default function Sidebar({
  projects,
  newProject,
  onSelect,
  selectedProjectId,
}) {
  return (
    <div className="px-10 py-8 flex flex-col align-middle bg-gray-200 text-left rounded-br-3xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My projects</h1>
      <Button onClick={newProject}>New project</Button>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            <button
              onClick={() => onSelect(project.id)}
              className="text-blue-950 font-normal hover:text-blue-600 active:text-orange-500"
              style={{
                fontWeight: selectedProjectId === project.id ? "bold" : "normal",
              }}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
