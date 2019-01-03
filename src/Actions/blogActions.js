import uuid from "uuid";
import database from "../firebase/firebase";
import firebase from "firebase";

const addBlog = ({
  blogID,
  blogName = "Not mentioned",
  blogDescription = "Not mentioned",
  blogLocation = "Not mentioned",
  blogImageURL = "Not mentioned",
  blogImageFilename = "Not Mentioned"
} = {}) => ({
  type: "ADD_BLOG",
  blog: {
    blogID,
    blogName,
    blogDescription,
    blogLocation,
    blogImageURL,
    blogImageFilename
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
      .update({
        ...blog
      })
      .then(ref => {
        dispatch(editBlog(id, blog));
      });
  };
};

const removeBlog = id => ({
  type: "REMOVE_BLOG",
  id
});

export const startRemoveBlog = (id, photoID) => {
  return dispatch => {
    console.log(photoID);
    database
      .ref(`blogInfo/${id}`)
      .remove()
      .then(() => {
        firebase
          .storage()
          .ref(`blogImages/${photoID}`)
          .delete();
        dispatch(removeBlog(id));
      });
  };
};

export { addBlog, editBlog, removeBlog };
