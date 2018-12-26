import React from "react";
import Header from "../Components/Header";
import { connect } from "react-redux";
import BlogCard from "../Components/BlogCard";
import database from "../firebase/firebase";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      blog: []
    };
  }

  render() {
    console.log(this.props.blogs);
    return (
      <div>
        <Header />

        <div className="container mt-3" />

        <div className="row">
          {this.props.blogs.map(blog => (
            <div
              key={blog.blogID}
              className="col-xs-6 col-sm-6 col-md-4 mb-2">
              <BlogCard
                onClickViewBlog={() => {
                  this.props.history.push(
                    `/editblog/${blog.blogID}`
                  );
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
  blogs: state.blogReducer
});
export default connect(mapStateToProps)(Blog);
