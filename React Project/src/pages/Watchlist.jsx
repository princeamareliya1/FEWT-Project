import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  getWatchlist,
  removeFromWatchlist
} from '../services/watchlist';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(getWatchlist());
  }, []);

  const handleRemove = (movieId) => {
    const updated = removeFromWatchlist(movieId);
    setWatchlist(updated);
  };

  return (
    <div>

      <div
        className="content-wrapper"
        style={{ paddingTop: '60px' }}
      >

        <div className="container-fluid px-md-5 px-4 my-5">

          {/* HEADER */}
          <div className="d-flex align-items-center justify-content-between mb-4">

            <h3 className="section-title m-0">
              My Saved Watchlist
            </h3>

          </div>

          {/* MOVIES */}
          {watchlist.length > 0 ? (

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">

              {watchlist.map((movie) => (

                <div
                  className="col"
                  key={movie.id}
                >

                  <div className="card movie-card text-white h-100">

                    {/* MOVIE */}
                    <Link
                      to={`/movie/${movie.id}`}
                      className="text-decoration-none"
                    >

                      <div className="card-img-wrapper position-relative">

                        <div className="card-rating">
                          ★ {movie.vote_average?.toFixed(1) || 'N/A'}
                        </div>

                        {movie.poster_path ? (

                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                          />

                        ) : (

                          <div className="d-flex align-items-center justify-content-center h-100">
                            <span className="text-secondary">
                              No Image
                            </span>
                          </div>

                        )}

                      </div>

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

                    </Link>

                    {/* REMOVE BUTTON */}
                    <div className="px-3 pb-3">

                      <button
                        type="button"
                        className="btn btn-outline-cyber w-100"
                        onClick={() => handleRemove(movie.id)}
                      >
                        ✕ Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* EMPTY WATCHLIST */
            <div className="text-center py-5 my-5">

              <h2 className="fw-bold mb-3 text-muted">
                Your Archive is Empty
              </h2>

              <p
                className="mb-4"
                style={{
                  color: 'var(--text-muted)'
                }}
              >
                Add movies to your watchlist to see them here.
              </p>

              <Link
                to="/"
                className="btn btn-premium px-4 py-2"
              >
                Discover Movies
              </Link>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}