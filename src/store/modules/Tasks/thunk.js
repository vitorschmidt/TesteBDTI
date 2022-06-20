import {
  addTask,
  completedTask,
  editTask,
  filterTask,
  removeTask,
} from "./actions";

export const addTaskThunk = (task) => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    dispatch(addTask(task));
  };
};

export const removeTaskThunk = (id) => (dispatch, getStore) => {
  const { tasks } = getStore();
  const taskList = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  dispatch(removeTask(taskList));
};

export const completedTaskThunk =
  ({ id, isCompleted }) =>
  (dispatch, getStore) => {
    const { tasks } = getStore();
    const completed = tasks.findIndex((task) => task.id === id);
    tasks[completed].isCompleted = !isCompleted;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    dispatch(completedTask(tasks));
  };

export const editTaskThunk = (id, description) => (dispatch, getStore) => {
  const { tasks } = getStore();

  const index = tasks.findIndex((task) => task.id === id);

  tasks[index].description = description;

  localStorage.setItem("tasks", JSON.stringify(tasks));

  dispatch(editTask(tasks));
};
