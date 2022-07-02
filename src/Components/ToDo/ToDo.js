import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState();
  const [completeTasks, setCompleteTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setToDo(data));
  }, []);

  const handleChange = (id) => {
    const complete = toDo.filter((comtask) => comtask._id === id);
    // console.log(complete);
    const finalComplete = [...completeTasks, ...complete];
    setCompleteTasks(finalComplete);
    console.log(completeTasks);

    const url = `http://localhost:5000/todo/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = toDo.filter((comtask) => comtask._id !== id);
        setToDo(remaining);
      });
  };

  return (
    <div className="mt-7">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Complete</th>
              <th>Todo List</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {toDo?.map((el) => (
              <tr key={el._id}>
                <th>
                  <input
                    onChange={() => handleChange(el._id)}
                    type="radio"
                    id={el._id}
                    class="radio"
                  />
                </th>
                <td>{el.todo}</td>
                <td>
                  <button className="bg-gray-400 p-2 rounded-lg">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
