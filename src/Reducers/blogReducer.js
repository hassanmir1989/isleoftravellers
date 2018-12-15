const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "EDIT_BLOG":
      return state.map(blog => {
        if (blog.blogID === action.id) {
          return {
            ...blog,
            ...action.blog
          };
        } else {
          return {
            ...blog
          };
        }
      });
    case "REMOVE_BLOG":
      return state.filter(blog => {
        return blog.blogID !== action.id;
      });
    default:
      return state;
  }
};

export default blogReducer;
