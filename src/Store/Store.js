import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import blogReducer from "../Reducers/blogReducer";
import thunk from "redux-thunk";
const configureStore = () => {
  const store = createStore(
    combineReducers({ blogReducer }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
