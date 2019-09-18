import * as ReviewAPIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS  = "RECEIVE_REVIEWS";
export const RECEIVE_A_REVIEW = "RECEIVE_A_REVIEW";

export const RECEIVE_REV_ERRORS = "RECEIVE_REV_ERRORS";
export const CLEAR_REV_ERRORS = "CLEAR_REV_ERRORS";

//actions
const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveAReview = (review) => ({
  type: RECEIVE_A_REVIEW,
  review
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REV_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REV_ERRORS
});

//thunk actions
export const fetchReviews = (kitchenId) => dispatch => (
  ReviewAPIUtil.fetchReviews(kitchenId)
    .then(reviews => dispatch(receiveReviews(reviews)))
    .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const createReview = (review) => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then(review => dispatch(receiveAReview(review)))
    .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const updateReview = (review) => dispatch => (
  ReviewAPIUtil.updateReview(review)
    .then(review => dispatch(receiveAReview(review)))
    .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const deleteReview = (review) => dispatch => (
  ReviewAPIUtil.deleteReview(review)
    .then(review => dispatch(receiveAReview(review)))
    .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);