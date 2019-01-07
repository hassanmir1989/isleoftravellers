import React from "react";
import Header from "../Components/Header";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
export default () => (
  <div>
    <Header />
    <div className="mt-5 container ">
      <div className="row">
        <div className="shadow mx-auto col-xs-6 col-sm-10 col-md-6">
          <img
            className="img-responsive"
            width="100%"
            src="https://assets.saatchiart.com/saatchi/394877/art/3559294/additional_e2adb04ac08e5e725cd16b310860a2a5cba0f05f-7.jpg"
          />
        </div>
        <div className="mt-5 mx-auto col-xs-4 col-sm-10 col-md-5">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
              />
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Comments</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
              <small>
                We'll never share your email or contact number with anyone else
                , This is just in case we need to get in touch with you.
              </small>
              <br />
              <Button className="mt-4" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
