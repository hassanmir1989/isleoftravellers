import React from "react";
import Adventure from "../Pages/Adventures";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import PageNotFound from "../Pages/PageNotFound";
import AdminPage from "../Pages/AdminPage";
import EditBlog from "../Pages/EditBlog";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Adventure} />
      <Route path="/admin" component={AdminPage} />
      <Route exact path="/blog" component={Blog} />
      <Route
        path="/editblog"
        component={EditBlog}
      />
      <Route
        exact
        path="/contactus"
        component={ContactUs}
      />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
