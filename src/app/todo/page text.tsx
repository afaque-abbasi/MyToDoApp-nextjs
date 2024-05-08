"use client";
import React, { useState } from "react";

function ToDo() {
  let [task, setTask] = useState("");
  let [detail, setDetail] = useState("");

  // Add Task Button Working

  function taskHandler(e: any) {
    e.preventDefault();
  }

  let savedTasks:any = <div className="font-bold text-center pt-10 text-6xl">
    No Task Available
  </div>

  return (
    <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">My To Do App</h1>

        {/* Input form */}
        <form action="" className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter Task Here"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Details Here"
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
        {/*  task saved */}
        <div> {savedTasks}</div>
      </div>
    </div>
  );
}

export default ToDo;
