"use client"
import React, { useState } from "react";

interface Task {
  task: string;
  detail: string;
}

function ToDo() {
  let [task, setTask] = useState("");
  let [detail, setDetail] = useState("");
  let [mainTask, setMainTask] = useState<Task[]>([]);

  // Function to handle adding a task
  function taskHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setMainTask([...mainTask, { task, detail }]);
    setTask("");
    setDetail("");
  }

  // Function to handle deleting a task
  function deleteTask(index: number) {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  }

  let savedTasks: React.ReactNode = (
    <div className="font-bold text-center pt-10 text-4xl">
      No Task Available
    </div>
  );
  if (mainTask.length > 0) {
    savedTasks = mainTask.map((task, index) => (
      <div key={index} className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-lg font-bold">{task.task}</h2>
        <p>{task.detail}</p>
        <button
          onClick={() => deleteTask(index)}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    ));
  }

  return (
    <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">My To Do App</h1>

        {/* Input form */}
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter Task Here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Details Here"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={taskHandler}
            type="button"
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none"
          >
            Add Task
          </button>
        </form>
        {/* Display saved tasks */}
        <div>{savedTasks}</div>
      </div>
    </div>
  );
}

export default ToDo;
