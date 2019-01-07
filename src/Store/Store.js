import { createStore, combineReducers, applyMiddleware } from "redux";
import blogReducer from "../Reducers/blogReducer";
import customerReviewReducer from "../Reducers/customerReviewReducer";
import thunk from "redux-thunk";
const configureStore = () => {
  const store = createStore(
    combineReducers({ blogReducer, customerReviewReducer }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
