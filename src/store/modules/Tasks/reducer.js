import { ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { task } = action;
      return [...state, task];

    case REMOVE_TASK:
      const { tasks } = action;
      return tasks;

    case COMPLETE_TASK:
      const { completed } = action;
      return completed;

    case EDIT_TASK:
      const { edit } = action;
      return edit;

    default:
      return state;
  }
};

export default taskReducer;
