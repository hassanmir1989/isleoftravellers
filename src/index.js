import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./Store/Store";
import { Provider } from "react-redux";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { addBlog } from "./Actions/blogActions";
import database from "./firebase/firebase";
const store = configureStore();

database
  .ref("blogInfo")
  .once("value")
  .then(snapshot => {
    const blog = [];

    snapshot.forEach(childSnapshot => {
      blog.push({
        ...childSnapshot.val(),
        blogID: childSnapshot.key
      });
    });
    blog.map(singleBlog => {
      store.dispatch(addBlog(singleBlog));
    });
  });

const AppWithRedux = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithRedux />, rootElement);
