import logo from "../logo.png";
import Button from "./Button";

export default function NoProjectSelected({ newProject }) {
  return (
    <div className="w-5/6 text-center mt-40">
      <img
        src={logo}
        alt="No project selected"
        className="w-32 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-gray-800">No project selected</h2>
      <p className="text-gray-500 mb-4">Select a project or create a new one</p>
      <Button onClick={newProject}>New project</Button>
    </div>
  );
}
