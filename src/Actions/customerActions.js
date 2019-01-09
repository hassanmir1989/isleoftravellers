import database from "../firebase/firebase";
import moment from "moment";
const customerReviewAction = ({
  customerReviewID,
  customerName = "",
  customerContact = "",
  customerComment = "",
  customerReviewTime,
  customerEmail
}) => ({
  type: "ADD_CUSTOMER_REVIEW",
  review: {
    customerName,
    customerContact,
    customerComment,
    customerReviewID,
    customerReviewTime,
    customerEmail
  }
});

const startCustomerReviewAction = (reviewDetails = {}) => {
  return dispatch => {
    database
      .ref("customerReviews")
      .push({
        ...reviewDetails,
        customerReviewTime: moment().valueOf()
      })
      .then(ref => {
        dispatch(
          customerReviewAction({
            ...reviewDetails,
            customerReviewID: ref.key
          })
        );
      });
  };
};

const removeCustomerReviewAction = id => ({
  type: "REMOVE_CUSTOMER_REVIEW",
  id
});

const startRemoveCustomerReviewAction = id => {
  return dispatch => {
    database
      .ref(`customerReviews/${id}`)
      .remove()
      .then(() => {
        dispatch(removeCustomerReviewAction(id));
      });
  };
};

export {
  startCustomerReviewAction,
  customerReviewAction,
  removeCustomerReviewAction,
  startRemoveCustomerReviewAction
};
