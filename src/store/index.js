import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import taskReducer from "./modules/Tasks/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({ tasks: taskReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
