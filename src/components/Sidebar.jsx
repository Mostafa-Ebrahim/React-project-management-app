import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="w-1/5 flex flex-col px-4 py-4 md:px-8 ">
      <h1 className="font-black uppercase text-center text-gray-800">
        PROJECTS
      </h1>
      <ul className="top-12 flex flex-col gap-2 p-2 border rounded-xl bg-gray-400 text-base font-extralight">
        <li className="px-3 py-1 text-gray-800 font-semibold hover:bg-indigo-50 rounded-md">
          Project 1
        </li>
        <li className="px-3 py-1 text-gray-800 font-semibold hover:bg-indigo-50 rounded-md">
          Project 2
        </li>
        <li className="px-3 py-1 text-gray-800 font-semibold hover:bg-indigo-50 rounded-md">
          Project 3
        </li>
        <Button title="New project" />
      </ul>
    </aside>
  );
}
