import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateSection } from "../store";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSection('Home'));
  });

  return (
    <div className="-m-6">
      <TaskForm className="m-6" />
      <div>
        <header className="pb-6 bg-blue-700 rounded-t-xl text-white p-3">Tasks</header>
        <article className="-mt-3 bg-sky-500 rounded-t-xl p-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tasks.map((task) => (
            <div className="bg-white border rounded p-3 flex flex-col gap-4" key={task.id}>
              <h1 className="font-bold text-lg text-left">{task.title}</h1>
              <div className="text-left whitespace-pre-line grow">{task.description}</div>
              <div className="flex justify-between">
                <div className="py-2 px-4 bg-blue-700 text-left text-white rounded">{task.status}</div>
                <Link to={`/tasks/edit/${task.id}`} className="p-2">
                  <svg className="fill-current w-5 h-5" viewBox="0 0 100 100">
                    <path d="M77.926,94.924H8.217C6.441,94.924,5,93.484,5,91.706V21.997c0-1.777,1.441-3.217,3.217-3.217h34.854 c1.777,0,3.217,1.441,3.217,3.217s-1.441,3.217-3.217,3.217H11.435v63.275h63.274V56.851c0-1.777,1.441-3.217,3.217-3.217 c1.777,0,3.217,1.441,3.217,3.217v34.855C81.144,93.484,79.703,94.924,77.926,94.924z"/>
                    <path d="M94.059,16.034L84.032,6.017c-1.255-1.255-3.292-1.255-4.547,0l-9.062,9.073L35.396,50.116 c-0.29,0.29-0.525,0.633-0.686,1.008l-7.496,17.513c-0.526,1.212-0.247,2.617,0.676,3.539c0.622,0.622,1.437,0.944,2.274,0.944 c0.429,0,0.858-0.086,1.276-0.257l17.513-7.496c0.375-0.161,0.719-0.397,1.008-0.686l35.026-35.026l9.073-9.062 C95.314,19.326,95.314,17.289,94.059,16.034z M36.286,63.79l2.928-6.821l3.893,3.893L36.286,63.79z M46.925,58.621l-5.469-5.469 L73.007,21.6l5.47,5.469L46.925,58.621z M81.511,24.034l-5.469-5.469l5.716-5.716l5.469,5.459L81.511,24.034z"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default TaskList;
