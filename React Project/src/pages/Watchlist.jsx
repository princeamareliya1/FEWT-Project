import { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import {
  getWatchlist,
  removeFromWatchlist
} from '../services/watchlist';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlist);

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

          <div className="d-flex align-items-center justify-content-between mb-4">

            <h3 className="section-title m-0">
              My Saved Watchlist
            </h3>

          </div>

          {watchlist.length > 0 ? (

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">

              {watchlist.map((movie) => (

                <div
                  className="col"
                  key={movie.id}
                >

                  <MovieCard movie={movie} onRemove={handleRemove} />

                </div>

              ))}

            </div>

          ) : (

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