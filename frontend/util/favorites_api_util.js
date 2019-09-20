export const fetchFavorites = () => (
  $.ajax({
    url: '/api/favorites',
    method: "GET"
  })
);

export const createFavorite = (favorite) => (
  $.ajax({
    url: '/api/favorites/',
    method: "POST",
    data: { favorite }
  })
);

export const deleteFavorite = (favorite) => (
  $.ajax({
    url: `/api/favorites/${favorite.id}`,
    method: "DELETE",
    data: { favorite }
  })
);