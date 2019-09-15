export const fetchAllLocations = () => (
  $.ajax({
    url: `/api/locations`,
    method: "GET"
  })
);