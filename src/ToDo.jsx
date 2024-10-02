import { useState } from "react";
import Task from "./Task";

function ToDo() {
  const [values, setValues] = useState(["Eat", "Shower"]);
  const [value, setValue] = useState("");

  function addTask() {
    if (value.trim() !== "") {
      setValues((t) => [...t, value]);
      setValue("");
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center m-10">
        <h1 className="text-white text-3xl font-Arial">doer</h1>
      </div>
      <div className="flex justify-center">
        <input
          className="border-2 border-gray-300 peer h-10 w-50% rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter a task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      <div className="p-10 flex justify-center">
        <ol>
          {values.map((task, index) => (
            <div
              key={index}
              className="m-5 p-10 flex border-2 bg-gray-500 justify-around"
            >
              <li>
                <Task
                  index={index}
                  values={values}
                  task={task}
                  setValues={setValues}
                />
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDo;
