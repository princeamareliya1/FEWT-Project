import { Link } from 'react-router-dom';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie, onRemove }) {
  return (
    <div className="card movie-card text-white h-100">
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
              src={`${POSTER_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center h-100">
              <span className="text-secondary">No Image</span>
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
            style={{ color: 'var(--text-muted)' }}
          >
            {movie.release_date?.slice(0, 4) || 'N/A'}
          </p>
        </div>
      </Link>

      {onRemove && (
        <div className="px-3 pb-3">
          <button
            type="button"
            className="btn btn-outline-cyber w-100"
            onClick={() => onRemove(movie.id)}
          >
            ✕ Remove
          </button>
        </div>
      )}
    </div>
  );
}
