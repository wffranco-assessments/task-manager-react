import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../store";

const statusOptions = {
  ToDo: ['InProgress'],
  InProgress: ['Blocked', 'InQA'],
  Blocked: ['ToDo'],
  InQA: ['ToDo', 'Done'],
  Done: ['Deployed'],
  Deployed: [],
};

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === parseInt(id));
      if (task) {
        setFormData({
          title: task.title,
          description: task.description,
        });
      }
    }
  }, [id, tasks]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(updateTask(parseInt(id), formData));
    } else {
      dispatch(addTask(formData));
    }
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{id ? "Edit Task" : "Create Task"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded-md"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            className="w-full border border-gray-400 p-2 rounded-md"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          {id ? "Save" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
