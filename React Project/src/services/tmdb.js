const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

async function request(path, params = {}) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    ...params
  });
  const response = await fetch(`${BASE_URL}${path}?${searchParams}`);

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

export async function getPopularMovies() {
  return request('/movie/popular', { page: 1 });
}
export async function getMovieDetails(movieId) {
  return request(`/movie/${movieId}`);
}
export async function getMovieCredits(movieId) {
  return request(`/movie/${movieId}/credits`);
}
export async function getMovieVideos(movieId) {
  return request(`/movie/${movieId}/videos`);
}
export async function searchMovies(query, page = 1) {
  return request('/search/movie', { query, page });
}
export async function getTrendingMovies() {
  return request('/trending/movie/week');
}

export async function getTopRatedMovies() {
  return request('/movie/top_rated', { page: 1 });
}

export async function getNowPlayingMovies() {
  return request('/movie/now_playing', { page: 1 });
}

export async function getUpcomingMovies() {
  return request('/movie/upcoming', { page: 1 });
}