import React from "react";
import Header from "../Components/Header";
import BlogUpdate from "../Components/BlogUpdate";
import { connect } from "react-redux";
import { addBlog } from "../Actions/blogActions";
class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(
      this
    );
  }

  onFormSubmit(data) {
    this.props.dispatch(addBlog(data));
    this.props.history.push("/blog");
  }

  render() {
    return (
      <div>
        <Header />
        <BlogUpdate
          onSubmitBlogUpdate={blogDetails => {
            this.onFormSubmit(blogDetails);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogReducer
});

export default connect(mapStateToProps)(AdminPage);
