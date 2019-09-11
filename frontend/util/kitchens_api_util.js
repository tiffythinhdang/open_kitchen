export const fetchKitchens = (request) => (
  $.ajax({
    url: '/api/kitchens',
    method: "GET",
    data: { request }
  })
);

export const fetchAKitchen = (kitchenId) => (
  $.ajax({
    url: `/api/kitchens/${kitchenId}`,
    method: "GET"
  })
);

