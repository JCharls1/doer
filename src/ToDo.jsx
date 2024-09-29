import { useState } from "react";

function ToDo() {
  const [values, setValues] = useState(["Eat", "Shower"]);
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
    <div className="flex flex-col">
      {/* border-2 border-red-300 */}
      <div className="flex justify-center m-10 ">
        <h1 className="text-white text-3xl font-Arial">doer</h1>
      </div>
      {/* border-2 border-green-300 */}
      <div className="flex justify-center ">
        <input
          className="border-2 border-gray-300 peer h-10 w-50% rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          name="asdasd"
          placeholder="Enter a task"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      <div className="p-10 flex justify-center">
        <ol>
          {values.map((task, index) => (
            <div className="m-5 flex justify-around">
              <li key={index}>
                <span className="font-Arial flex justify-around text-white m-10">
                  {task}
                </span>
                <button
                  className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
                  onClick={() => moveTaskUp(index)}
                >
                  Move Up
                </button>
                <button
                  className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
                  onClick={() => moveTaskDown(index)}
                >
                  Move Down
                </button>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDo;
