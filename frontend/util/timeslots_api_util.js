export const fetchTimeslots = (request) => (
  $.ajax({
    url: `/api/reservations/${request.reservation_id}/timeslots`,
    method: "GET",
    data: { request }
  })
);

export const fetchTimeslotsByAKitchen = (request) => (
  $.ajax({
    url: `/api/timeslots/kitchens/${request.kitchen_id}`,
    method: "GET",
    data: { request }
  })
);
