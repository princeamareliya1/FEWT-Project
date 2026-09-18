const WATCHLIST_KEY = 'cinema_x_watchlist';

export function getWatchlist() {
  const saved = localStorage.getItem(WATCHLIST_KEY);

  return saved ? JSON.parse(saved) : [];
}

export function addToWatchlist(movie) {
  const current = getWatchlist();

  const alreadyExists = current.some(
    (item) => item.id === movie.id
  );

  if (alreadyExists) {
    return current;
  }

  const updated = [...current, movie];

  localStorage.setItem(
    WATCHLIST_KEY,
    JSON.stringify(updated)
  );

  return updated;
}

export function removeFromWatchlist(movieId) {
  const current = getWatchlist();

  const updated = current.filter(
    (item) => item.id !== movieId
  );

  localStorage.setItem(
    WATCHLIST_KEY,
    JSON.stringify(updated)
  );

  return updated;
}