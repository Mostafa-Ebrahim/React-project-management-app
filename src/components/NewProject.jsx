import Input from "./Input";
import Button from "./Button";

export default function NewProject() {
  return (
    <div className="w-1/3">
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due date" type="date" />
      </div>
      <div className="flex flex-row justify-end gap-5">
        <Button title="Cancel" />
        <Button title="Save" />
      </div>
    </div>
  );
}
