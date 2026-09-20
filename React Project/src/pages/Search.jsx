import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/tmdb';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e, searchPage = 1) => {
    e?.preventDefault();

    if (!query.trim()) {
      setMovies([]);
      setTotalPages(0);
      setTotalResults(0);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await searchMovies(query, searchPage);

      setMovies(data.results || []);
      setPage(data.page || searchPage);
      setTotalPages(data.total_pages || 0);
      setTotalResults(data.total_results || 0);

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    } catch {
      setError('Failed to search movies.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      handleSearch(null, page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      handleSearch(null, page - 1);
    }
  };

  return (
    <div>

      <div
        className="container px-4 my-5"
        style={{ paddingTop: '60px' }}
      >

        <div className="row justify-content-center">

          <div className="col-md-8 text-center">

            <h1 className="fw-bold mb-4">
              Explore Millions of Movies
            </h1>

            <form onSubmit={handleSearch}>

              <div className="input-group">

                <input
                  type="text"
                  className="form-control search-box"
                  placeholder="Type movie title, genre, or actor..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-premium px-4"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>

              </div>

            </form>

            <p
              className="small mt-3"
              style={{ color: 'var(--text-muted)' }}
            >
              Press Enter or click Search
            </p>

          </div>

        </div>

      </div>

      <div className="container-fluid px-md-5 px-4 my-5">

        <div className="d-flex align-items-center justify-content-between mb-4">

          <h3 className="section-title m-0">
            Search Results
          </h3>

          {totalResults > 0 && (
            <span
              className="small"
              style={{ color: 'var(--text-muted)' }}
            >
              {totalResults.toLocaleString()} results
            </span>
          )}

        </div>

        {loading && (
          <div className="text-center py-5">

            <h4 className="text-white">
              Searching movies...
            </h4>

          </div>
        )}

        {!loading && error && (
          <div className="text-center py-5 text-danger">

            <h4>{error}</h4>

          </div>
        )}

        {!loading &&
          !error &&
          query &&
          movies.length === 0 && (

            <div className="text-center py-5">

              <h4 className="text-white">
                No movies found
              </h4>

              <p style={{ color: 'var(--text-muted)' }}>
                Try searching with another movie title.
              </p>

            </div>
          )}

        {!loading && movies.length > 0 && (

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">

            {movies.map((movie) => (
              <div className="col" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}

          </div>

        )}

        {!loading && movies.length > 0 && totalPages > 1 && (

          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">

            <button
              className="btn btn-outline-cyber"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              ← Previous
            </button>

            <span className="text-white fw-semibold">
              Page {page} of {Math.min(totalPages, 500)}
            </span>

            <button
              className="btn btn-premium"
              onClick={handleNextPage}
              disabled={page >= totalPages || page >= 500}
            >
              Next →
            </button>

          </div>

        )}

      </div>

    </div>
  );
}