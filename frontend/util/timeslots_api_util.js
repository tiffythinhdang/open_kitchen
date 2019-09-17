export const fetchAvailableTimeslots = (reservation) => (
  $.ajax({
    url: `/api/reservations/${reservation.id}/timeslots`,
    method: "GET",
    data: { reservation }
  })
);