export const fetchReservations = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/reservations`,
    method: "GET"
  })
);

export const fetchAReservation = (id) => (
  $.ajax({
    url: `/api/reservations/${id}`,
    method: "GET"
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