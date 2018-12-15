import uuid from "uuid";
const addBlog = ({
  blogID = uuid(),
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

const editBlog = (id, blog) => ({
  type: "EDIT_BLOG",
  id,
  blog
});

const removeBlog = id => ({
  type: "REMOVE_BLOG",
  id
});
export { addBlog, editBlog, removeBlog };
