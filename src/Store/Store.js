import {
  createStore,
  combineReducers
} from "redux";
import { addBlog } from "../Actions/blogActions";

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ blogReducer })
);

const testBlogOne = {
  blogName: "test1",
  blogDescription: "test1",
  blogLocation: "test1",
  blogImage: "test1"
};
const testBlogTwo = {
  blogName: "test2",
  blogDescription: "test2",
  blogLocation: "test2",
  blogImage: "test2"
};

const testBlogOneAction = store.dispatch(
  addBlog(testBlogOne)
);
const testBlogTwoAction = store.dispatch(
  addBlog(testBlogTwo)
);

console.log(store.getState());
