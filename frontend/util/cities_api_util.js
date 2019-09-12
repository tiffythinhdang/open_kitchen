export const fetchAllCities = () => (
  $.ajax({
    url: `/api/cities`,
    method: "GET"
  })
);