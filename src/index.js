import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./Store/Store";
import { Provider } from "react-redux";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { addBlog } from "./Actions/blogActions";
const store = configureStore();

store.dispatch(addBlog());
store.dispatch(addBlog());
store.dispatch(addBlog());
store.dispatch(addBlog());
store.dispatch(addBlog());
store.dispatch(addBlog());
const AppWithRedux = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithRedux />, rootElement);
