import { useState } from "react";

function ToDo() {
  const [values, setValues] = useState(["asdasd", "Asdw"]);
  const [value, setValue] = useState("");
  var test = "asd"
	
  function addTask() {
    setValues((t) => [...t, value]);
    setValue("");
  }

  return (
    <div>
      <h1>ToDo</h1>
      <input
        type="text"
        name="asdasd"
        placeholder="Enter a task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>

      <ol>
        {values.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
