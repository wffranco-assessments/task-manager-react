import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTask, State, updateSection, updateTask } from "../store";
import { Task } from "../store/tasks";

const statusOptions = {
  ToDo: ['InProgress'],
  InProgress: ['Blocked', 'InQA'],
  Blocked: ['ToDo'],
  InQA: ['ToDo', 'Done'],
  Done: ['Deployed'],
  Deployed: [],
};

interface Props {
  className?: string;
}

const TaskForm: React.FC<Props> = ({className}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state: State) => state.tasks);
  const [formData, setFormData] = useState<Task>({
    title: "",
    description: "",
    status: "ToDo",
  });
  const [firstStatus, setFirstStatus] = useState(formData.status);

  useEffect(() => {
    dispatch(updateSection("Create"));
    if (id) {
      const task = tasks.find((task) => task.id === parseInt(id));
      if (task) {
        const {title, description, status} = task;
        setFormData({title, description, status});
        setFirstStatus(status);
        dispatch(updateSection("Edit"));
      }
    }
  }, [dispatch, id, tasks]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      dispatch(updateTask({id: parseInt(id), ...formData}));
    } else {
      dispatch(addTask(formData));
    }
    navigate("/");
  };

  return (
    <div className={className}>
      <h1 className="text-2xl font-bold mb-4">{id ? "Edit Task" : "Create Task"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input mb-4">
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
            rows={id ? 10 : 3}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        {id ? (
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
              Status
            </label>
            <select
              className="w-full border border-gray-400 p-2 rounded-md"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option key={firstStatus} value={firstStatus}>
                {firstStatus}
              </option>
              {statusOptions[firstStatus].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div className="flex gap-3 text-center">
          {id ? <>
            <button type="submit" className="grow bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Save
            </button>
            <Link to="/" className="grow bg-while text-black py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300 border-2">
              Cancel
            </Link>
          </> : <>
            <button type="submit" className="grow bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 flex flex-wrap items-center justify-center gap-3">
              <svg className="fill-current w-4 h-4 p-0 leading-normal" viewBox="0 0 122.875 122.648" enable-background="new 0 0 122.875 122.648">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"></path>
              </svg>
              <span>Add</span>
            </button>
          </>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
