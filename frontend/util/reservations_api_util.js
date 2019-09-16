export const fetchReservations = (userId) => (
  $.ajax({
    url: '/api/reservations',
    method: "GET",
    data: { reservation }
  })
);

export const createReservation = (reservation) => (
  $.ajax({
    url: `/api/reservations/`,
    method: "POST",
    data: { reservation }
  })
);

export const updateReservation = (reservation) => (
  $.ajax({
    url: `/api/reservations/${reservation.id}`,
    method: "PATCH",
    data: { reservation }
  })
);