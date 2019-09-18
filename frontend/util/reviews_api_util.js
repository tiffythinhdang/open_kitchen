export const fetchReviews = (kitchenId) => (
  $.ajax({
    url: `/api/kitchens/${kitchenId}/reviews`,
    method: "GET"
  })
);

export const createReview = (review) => (
  $.ajax({
    url: `/api/kitchens/${review.kitchen_id}/reviews`,
    method: "POST",
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    url: `/api/kitchens/${review.kitchen_id}/reviews/${review.id}`,
    method: "PATCH",
    data: { review }
  })
);

export const deleteReview = (review) => (
  $.ajax({
    url: `/api/kitchens/${review.kitchen_id}/reviews/${review.id}`,
    method: "DELETE"
  })
);