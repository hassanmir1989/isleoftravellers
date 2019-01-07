import database from "../firebase/firebase";

const customerReviewAction = ({
  id = "",
  customerName = "",
  customerContact = "",
  customerComment = ""
}) => ({
  type: "ADD_CUSTOMER_REVIEW",
  review: {
    customerName,
    customerContact,
    customerComment,
    id
  }
});

const startCustomerReviewAction = ({
  customerName = "",
  customerContact = "",
  customerComment = ""
}) => {
  return dispatch => {
    database
      .ref("customerReviews")
      .push({
        customerName,
        customerContact,
        customerComment
      })
      .then(ref => {
        dispatch(
          customerReviewAction({
            id: ref.key,
            customerName,
            customerContact,
            customerComment
          })
        );
      });
  };
};

export default startCustomerReviewAction;
