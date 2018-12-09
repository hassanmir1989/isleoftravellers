import React from "react";
import Header from "../Components/Header";
import { Jumbotron, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
const PageNotFound = () => (
  <div>
    <Header />
    <h3>
      <div className="container">
        <Jumbotron className="mt-5 text-center">
          <h1 className="display-3">
            404 !!! Isle Not Found {`\n`}
            <i className="far fa-surprise" />
          </h1>
          <p className="lead">
            Hey Traveller , may have been led to an
            isle not in our records, Please return
            back by clicking the below button ,
            Thank You .
          </p>
          <hr className="my-2" />

          <p className="lead">
            <NavLink to="/adventures">
              <Button color="primary">
                Take Me Back
              </Button>
            </NavLink>{" "}
          </p>
        </Jumbotron>
      </div>
    </h3>
  </div>
);

export default PageNotFound;
