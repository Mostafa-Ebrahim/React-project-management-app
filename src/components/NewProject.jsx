import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

export default function NewProject({ onSave, onCanel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onSave({
      title,
      description,
      dueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h1 className="font-bold">Invalid input</h1>
        <p className="font-normal mb-6">Please fill out all the fields</p>
      </Modal>
      <div className="w-3/4 p-32">
        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} label="Due date" type="date" />
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button onClick={onCanel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </>
  );
}
