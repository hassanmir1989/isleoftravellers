const customerReviewReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CUSTOMER_REVIEW":
      return [...state, action.review];
    case "REMOVE_CUSTOMER_REVIEW":
      return state.filter(singleReview => {
        return singleReview.customerReviewID !== action.id;
      });
    default:
      return state;
  }
};

export default customerReviewReducer;
