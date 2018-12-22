import React from "react";
import Header from "../Components/Header";
import { connect } from "react-redux";
import BlogCard from "../Components/BlogCards";
import database from "../firebase/firebase";
class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          <div className="row">
            {database.ref("blogInfo").on("value", snapshot => {
              snapshot.forEach(childSnapshot => {
                return (
                  <div
                    key={childSnapshot.key}
                    className="col-xs-6 col-sm-6 col-md-4 mb-2"
                  >
                    <BlogCard
                      onClickViewBlog={() => {
                        this.props.history.push(
                          `/editblog/${childSnapshot.key}`
                        );
                      }}
                      {...childSnapshot.val()}
                    />
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    );
  }
}

// <div className="row">
//   {this.props.blogs.map(blog => (
//     <div
//       key={blog.blogID}
//       className="col-xs-6 col-sm-6 col-md-4 mb-2">
//       <BlogCard
//         onClickViewBlog={() => {
//           this.props.history.push(
//             `/editblog/${blog.blogID}`
//           );
//         }}
//         {...blog}
//       />
//     </div>
//   ))}
// </div>

const mapStateToProps = state => ({
  blogs: state.blogReducer
});
export default connect(mapStateToProps)(Blog);
