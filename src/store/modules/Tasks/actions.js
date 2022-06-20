import { ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK } from "./actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};

export const removeTask = (tasks) => {
  return {
    type: REMOVE_TASK,
    tasks,
  };
};

export const completedTask = (completed) => {
  return {
    type: COMPLETE_TASK,
    completed,
  };
};

export const editTask = (edit) => {
  return {
    type: EDIT_TASK,
    edit,
  };
};
