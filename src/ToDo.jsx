import { useState } from "react";

function ToDo() {
  const [values, setValues] = useState(["asdasd", "Asdw"]);
  const [value, setValue] = useState("");
  var test = "asd";

  function addTask() {
    if (value.trim() !== "") {
      setValues((t) => [...t, value]);
      setValue("");
    }
  }

  function deleteTask(index) {
    const updatedValues = values.filter((_, i) => i !== index);
    setValues(updatedValues);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...values];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setValues(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < values.length - 1) {
      const updatedTasks = [...values];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setValues(updatedTasks);
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">ToDo</h1>
      {console.log("ASdasdsa")}
      <input
        type="text"
        name="asdasd"
        placeholder="Enter a task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ol>
        {values.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>Move Up</button>
            <button onClick={() => moveTaskDown(index)}>Move Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
