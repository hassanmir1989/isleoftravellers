import { createStore, combineReducers } from "redux";

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    default:
      return state;
  }
};

const store = createStore(combineReducers({ blogReducer }));

const addBlog = ({
  blogName = "",
  blogDescription = "",
  blogLocation = "",
  blogImage = ""
} = {}) => ({
  type: "ADD_BLOG",
  blog: {
    blogName,
    blogDescription,
    blogLocation,
    blogImage
  }
});

store.dispatch(addBlog({ blogName: "hassan" }));
store.dispatch(addBlog());
console.log(store.getState());
