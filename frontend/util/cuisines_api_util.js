export const fetchAllCuisines = () => (
  $.ajax({
    url: `/api/cuisines`,
    method: "GET"
  })
);