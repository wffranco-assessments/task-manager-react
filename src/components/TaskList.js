import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask, updateSection } from "../store";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    dispatch(updateSection('Home'));
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link
        to="/tasks/create"
        className="bg-blue-700 text-white py-2 px-4 rounded mb-4 inline-block hover:bg-blue-800"
      >
        Add Task
      </Link>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {tasks.map((task) => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" key={task.id}>
              <td className="py-3 px-6 text-left">{task.title}</td>
              <td className="py-3 px-6 text-left">{task.description}</td>
              <td className="py-3 px-6 text-left">{task.status}</td>
              <td className="py-3 px-6 text-center">
                <Link
                  to={`/tasks/edit/${task.id}`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
