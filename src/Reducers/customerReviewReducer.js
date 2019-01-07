const customerReviewReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CUSTOMER_REVIEW":
      return [...state, action.review];
    default:
      return state;
  }
};

export default customerReviewReducer;
