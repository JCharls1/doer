const Task = (props) => {
  function deleteTask(index) {
    const updatedValues = props.values.filter((_, i) => i !== index);
    props.setValues(updatedValues);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...props.values];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      props.setValues(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < props.values.length - 1) {
      const updatedTasks = [...props.values];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      props.setValues(updatedTasks);
    }
  }

  return (
    <div>
      {/* <h1>{props.index}</h1> */}
      <span className="font-Arial flex justify-around text-white m-10">
        {props.task}
      </span>
      <button
        className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
        onClick={() => deleteTask(props.index)}
      >
        Delete
      </button>
      <button
        className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
        onClick={() => moveTaskUp(props.index)}
      >
        Move Up
      </button>
      <button
        className="ml-10 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
        onClick={() => moveTaskDown(props.index)}
      >
        Move Down
      </button>
    </div>
  );
};

export default Task;
