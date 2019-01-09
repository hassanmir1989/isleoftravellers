import React from "react";
import Header from "../Components/Header";
import BlogUpdate from "../Components/BlogUpdate";
import { connect } from "react-redux";
import { startAddBlog } from "../Actions/blogActions";
import moment from "moment";
import { ListGroup, ListGroupItem, Button, Table } from "reactstrap";
import { startRemoveCustomerReviewAction } from "../Actions/customerActions";
import SingleCustomerReview from "../Components/SingleCustomerReview";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(data) {
    this.props.dispatch(startAddBlog(data));
    this.props.history.push("/blog");
  }

  render() {
    return (
      <div>
        <Header />
        <BlogUpdate
          pageDateCaption="Today's Date"
          onSubmitBlogUpdate={blogDetails => {
            this.onFormSubmit(blogDetails);
          }}
        />
        <hr />
        <div className="container mb-5">
          <h4 className="text-center">Messages</h4>
          <div style={{ height: "300px", overflow: "auto" }}>
            <Table size="sm" className="container" hover>
              <thead />
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {this.props.customerReview.map((singleReview, index) => (
                  <tr key={singleReview.customerReviewID}>
                    <th scope="row">{++index}</th>
                    <td>{singleReview.customerName}</td>
                    <td>
                      <span className="font-weight-bold">Mobile:</span> <br />{" "}
                      {singleReview.customerContact} <br />{" "}
                      <span className="font-weight-bold">Email:</span> <br />
                      {singleReview.customerEmail}
                    </td>

                    <td>
                      <SingleCustomerReview
                        {...singleReview}
                        buttonLabel="View More"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogReducer,
  customerReview: state.customerReviewReducer
});

export default connect(mapStateToProps)(AdminPage);
