import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="pt-8">
      <h2 className="text-xl font-semibold">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-sm my-8">This project doesn't have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className="py-4 px-6 mt-4 rounded-xl flex flex-col align-middle bg-gray-200">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2">
              <span className="font-normal">{task.text}</span>
              <button
                className="text-red-500 font-medium hover:underline focus:outline-none"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
