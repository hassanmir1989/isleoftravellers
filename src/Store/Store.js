import { createStore, combineReducers } from "redux";
import { addBlog, editBlog, removeBlog } from "../Actions/blogActions";
import blogReducer from "../Reducers/blogReducer";

const configureStore = () => {
  const store = createStore(combineReducers({ blogReducer }));
  return store;
};

export default configureStore;
