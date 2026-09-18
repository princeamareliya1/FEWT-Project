import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../services/tmdb';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // =========================
  // SEARCH MOVIES
  // =========================
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

      console.log('SEARCH RESULTS:', data);

      setMovies(data.results || []);
      setPage(data.page || searchPage);
      setTotalPages(data.total_pages || 0);
      setTotalResults(data.total_results || 0);

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    } catch (error) {
      console.error('SEARCH ERROR:', error);

      setError('Failed to search movies.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // NEXT PAGE
  // =========================
  const handleNextPage = () => {
    if (page < totalPages) {
      handleSearch(null, page + 1);
    }
  };

  // =========================
  // PREVIOUS PAGE
  // =========================
  const handlePreviousPage = () => {
    if (page > 1) {
      handleSearch(null, page - 1);
    }
  };

  return (
    <div>

      {/* =========================
          SEARCH BOX
      ========================= */}
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

      {/* =========================
          SEARCH RESULTS
      ========================= */}
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

        {/* =========================
            LOADING
        ========================= */}
        {loading && (
          <div className="text-center py-5">

            <h4 className="text-white">
              Searching movies...
            </h4>

          </div>
        )}

        {/* =========================
            ERROR
        ========================= */}
        {!loading && error && (
          <div className="text-center py-5 text-danger">

            <h4>{error}</h4>

          </div>
        )}

        {/* =========================
            NO RESULTS
        ========================= */}
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

        {/* =========================
            MOVIE RESULTS
        ========================= */}
        {!loading && movies.length > 0 && (

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">

            {movies.map((movie) => (

              <div
                className="col"
                key={movie.id}
              >

                <Link
                  to={`/movie/${movie.id}`}
                  className="text-decoration-none"
                >

                  <div className="card movie-card text-white h-100">

                    {/* POSTER */}
                    <div className="card-img-wrapper position-relative">

                      {/* RATING */}
                      <div className="card-rating">
                        ★ {movie.vote_average?.toFixed(1) || 'N/A'}
                      </div>

                      {movie.poster_path ? (

                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                        />

                      ) : (

                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ height: '100%' }}
                        >
                          <span className="text-secondary">
                            No Image
                          </span>
                        </div>

                      )}

                    </div>

                    {/* MOVIE INFO */}
                    <div className="card-body p-3">

                      <h5
                        className="card-title text-truncate fw-bold m-0"
                        style={{ fontSize: '1.05rem' }}
                      >
                        {movie.title}
                      </h5>

                      <p
                        className="card-text small mt-2 mb-0"
                        style={{
                          color: 'var(--text-muted)'
                        }}
                      >
                        {movie.release_date
                          ? movie.release_date.slice(0, 4)
                          : 'N/A'}
                      </p>

                    </div>

                  </div>

                </Link>

              </div>

            ))}

          </div>

        )}

        {/* =========================
            PAGINATION
        ========================= */}
        {!loading && movies.length > 0 && totalPages > 1 && (

          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">

            {/* PREVIOUS */}
            <button
              className="btn btn-outline-cyber"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              ← Previous
            </button>

            {/* PAGE NUMBER */}
            <span className="text-white fw-semibold">
              Page {page} of {Math.min(totalPages, 500)}
            </span>

            {/* NEXT */}
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