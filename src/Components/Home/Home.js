import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [toDo, setToDo] = useState();

  const onSubmit = (data) => {
    const url = `http://localhost:5000/todo`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setToDo(data));
  }, []);

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control flex ">
          <div class="input-group justify-center">
            <input
              type="text"
              placeholder="enter your task"
              class="input input-bordered"
              {...register("todo")}
            />
            <button class="btn btn-square">Add</button>
          </div>
        </div>
      </form>

      <div className="my-11">
        <h2 className="text-center font-bold text-2xl mb-7">Your Tasks</h2>
        <div>
          <div class="overflow-x-auto flex justify-center">
            <table class="table w-2/4 ">
              <thead>
                <tr>
                  <th>Todo List</th>
                </tr>
              </thead>
              <tbody>
                {toDo?.map((el) => (
                  <tr key={el._id}>
                    <td>{el.todo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
