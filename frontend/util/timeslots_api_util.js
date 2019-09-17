export const fetchTimeslots = (request) => (
  $.ajax({
    url: `/api/reservations/${request.reservation_id}/timeslots`,
    method: "GET",
    data: { request }
  })
);