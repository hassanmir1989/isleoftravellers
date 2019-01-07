import React from "react";
import Header from "../Components/Header";
import { connect } from "react-redux";
import BlogCard from "../Components/BlogCard";
import database from "../firebase/firebase";

class Blog extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />

        <div className="container mt-3" />

        <div className="row p-3 m-0">
          {this.props.blogs.map(blog => (
            <div
              key={blog.blogID}
              className="col-xs-2 col-sm-6 col-md-6 col-lg-4 mb-2 mx-auto"
            >
              <BlogCard
                onClickEdit={() => {
                  this.props.history.push(`editblog/${blog.blogID}`);
                }}
                {...blog}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogReducer,
  customerReview: state.customerReviewReducer
});
export default connect(mapStateToProps)(Blog);
