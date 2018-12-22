import uuid from "uuid";
import database from "../firebase/firebase";
const addBlog = ({
  blogID,
  blogName = "Not mentioned",
  blogDescription = "Not mentioned",
  blogLocation = "Not mentioned",
  blogImage = "Not mentioned"
} = {}) => ({
  type: "ADD_BLOG",
  blog: {
    blogID,
    blogName,
    blogDescription,
    blogLocation,
    blogImage
  }
});

export const startAddBlog = (blogDetails = {}) => {
  return dispatch => {
    database
      .ref("blogInfo")
      .push({ ...blogDetails })
      .then(ref => {
        dispatch(
          addBlog({
            ...blogDetails,
            blogID: ref.key
          })
        );
      });
  };
};

const editBlog = (id, blog) => ({
  type: "EDIT_BLOG",
  id,
  blog
});

export const startEditBlog = (id, blog) => {
  return dispatch => {
    database
      .ref(`blogInfo/${id}`)
      .set({
        ...blog
      })
      .then(ref => {
        dispatch(editBlog(ref.key, blog));
      });
  };
};

const removeBlog = id => ({
  type: "REMOVE_BLOG",
  id
});

export const startRemoveBlog = id => {
  return dispatch => {
    database
      .ref(`blogInfo/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlog(id));
      });
  };
};
export { addBlog, editBlog, removeBlog };
