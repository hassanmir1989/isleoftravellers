import React from "react";
import Header from "../Components/Header";
import {
  Button,
  Form,
  Media,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import startCustomerReviewAction from "../Actions/customerActions";
import { connect } from "react-redux";

class ContactUs extends React.Component {
  constructor() {
    super();
    this.onSubmitCustomerReview = this.onSubmitCustomerReview.bind(this);
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerContact = this.onChangeCustomerContact.bind(this);
    this.onChangeCustomerComment = this.onChangeCustomerComment.bind(this);
    this.state = {
      customerName: "",
      customerContact: "",
      customerComment: ""
    };
  }

  onSubmitCustomerReview(e) {
    e.preventDefault();
    this.props.dispatch(startCustomerReviewAction({ ...this.state }));
    this.props.history.push("/");
  }

  onChangeCustomerName(e) {
    const customerName = e.target.value;
    this.setState(() => ({
      customerName
    }));
  }

  onChangeCustomerContact(e) {
    const customerContact = e.target.value;
    this.setState(() => ({
      customerContact
    }));
  }

  onChangeCustomerComment(e) {
    const customerComment = e.target.value;
    this.setState(() => ({
      customerComment
    }));
  }
  render() {
    return (
      <div>
        <Header />
        <div className="mt-5 container ">
          <div className="row">
            <div className="shadow mx-auto col-xs-6 col-sm-10 col-md-6">
              <Media
                className="img-responsive"
                width="100%"
                src="https://assets.saatchiart.com/saatchi/394877/art/3559294/additional_e2adb04ac08e5e725cd16b310860a2a5cba0f05f-7.jpg"
              />
            </div>
            <div className="mt-2 mx-auto col-xs-4 col-sm-10 col-md-5">
              <Form onSubmit={this.onSubmitCustomerReview} className="mt-4">
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    name="customerName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={this.state.customerName}
                    onChange={this.onChangeCustomerName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Contact Number</Label>
                  <Input
                    name="customerContact"
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    value={this.state.customerContact}
                    onChange={this.onChangeCustomerContact}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleText">Comments</Label>
                  <Input
                    type="textarea"
                    name="customerComment"
                    id="exampleText"
                    value={this.state.customerComment}
                    onChange={this.onChangeCustomerComment}
                  />
                </FormGroup>
                <small>
                  We'll never share your email or contact number with anyone
                  else , This is just in case we need to get in touch with you.
                </small>
                <br />
                <Button className="my-4" block color="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ContactUs);
