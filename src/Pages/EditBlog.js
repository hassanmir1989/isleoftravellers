import React from "react";
import Header from "../Components/Header";
import { connect } from "react-redux";
import { startEditBlog } from "../Actions/blogActions";
import BlogUpdate from "../Components/BlogUpdate";
class EditBlog extends React.Component {
  constructor(props) {
    super(props);
    this.onFormUpdate = this.onFormUpdate.bind(
      this
    );
  }

  onFormUpdate(blog) {
    this.props.dispatch(
      startEditBlog(
        this.props.match.params.id,
        blog
      )
    );
    this.props.history.push("/blog");
  }
  render() {
    return (
      <div>
        <Header />
        <BlogUpdate
          onSubmitBlogUpdate={blog => {
            this.onFormUpdate(blog);
          }}
          {...this.props.blogFound}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  blogFound: state.blogReducer.find(blog => {
    return blog.blogID === props.match.params.id;
  })
});

export default connect(mapStateToProps)(EditBlog);
