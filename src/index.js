import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./Store/Store";
import { Provider } from "react-redux";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { addBlog } from "./Actions/blogActions";
import database from "./firebase/firebase";
import { customerReviewAction } from "../src/Actions/customerActions";
import moment from "moment";
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

database
  .ref("customerReviews")
  .once("value")
  .then(snapshot => {
    const customerReview = [];
    snapshot.forEach(childSnapshot => {
      customerReview.push({
        ...childSnapshot.val(),
        customerReviewID: childSnapshot.key
      });
    });
    customerReview.map(singleReview => {
      store.dispatch(customerReviewAction(singleReview));
    });
  });

const AppWithRedux = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithRedux />, rootElement);
