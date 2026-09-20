import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScrollSection from '../components/ScrollSection';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos
} from '../services/tmdb';
import {
  addToWatchlist,
  getWatchlist
} from '../services/watchlist';

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerState, setTrailerState] = useState({
    movieId: null,
    trailer: null
  });
  const [error, setError] = useState('');
  const [errorMovieId, setErrorMovieId] = useState(null);
  const [, setWatchlistVersion] = useState(0);

  useEffect(() => {
    let isActive = true;

    Promise.all([
      getMovieDetails(id),
      getMovieCredits(id)
    ])
      .then(([movieData, creditsData]) => {
        if (!isActive) {
          return;
        }

        setMovie(movieData);
        setCast(creditsData.cast?.slice(0, 10) || []);
      })
      .catch(() => {
        if (isActive) {
          setError('Failed to load movie details.');
          setErrorMovieId(id);
        }
      });

    return () => {
      isActive = false;
    };
  }, [id]);

  useEffect(() => {
    let isActive = true;

    getMovieVideos(id)
      .then((videosData) => {
        const trailerVideo =
          videosData.results?.find(
            (video) =>
              video.site === 'YouTube' &&
              video.type === 'Trailer'
          ) ||
          videosData.results?.find(
            (video) =>
              video.site === 'YouTube'
          );

        if (isActive) {
          setTrailerState({
            movieId: id,
            trailer: trailerVideo || null
          });
        }
      })
      .catch(() => {
        if (isActive) {
          setTrailerState({ movieId: id, trailer: null });
        }
      });

    return () => {
      isActive = false;
    };
  }, [id]);

  const trailer = trailerState.movieId === id
    ? trailerState.trailer
    : null;
  const isInWatchlist = getWatchlist().some(
    (item) => item.id === Number(id)
  );
  const loading = !movie || movie.id !== Number(id);

  if (error && errorMovieId === id) {
    return (
      <div
        className="text-center text-danger"
        style={{ paddingTop: '150px' }}
      >
        <h3>{error}</h3>
      </div>
    );
  }

  if (loading || !movie) {
    return (
      <div
        className="text-center text-white"
        style={{ paddingTop: '150px' }}
      >
        <h3>Loading movie...</h3>
      </div>
    );
  }

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '';

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';

  const runtimeHours = movie.runtime
    ? Math.floor(movie.runtime / 60)
    : 0;

  const runtimeMinutes = movie.runtime
    ? movie.runtime % 60
    : 0;

  const handleWatchlist = () => {
    if (isInWatchlist) {
      return;
    }

    addToWatchlist(movie);
    setWatchlistVersion((version) => version + 1);
  };

  const handleTrailer = () => {
    if (trailer) {
      window.open(
        `https://www.youtube.com/watch?v=${trailer.key}`,
        '_blank',
        'noopener,noreferrer'
      );
    } else {
      alert('Trailer not available.');
    }
  };

  return (
    <div style={{ paddingTop: '60px' }}>

      <div
        className="hero-banner position-relative"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(11,15,25,0.3) 0%,
              rgba(11,15,25,1) 100%
            ),
            url('${backdrop}')
          `,
          minHeight: '60vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="d-flex align-items-end h-100 pb-4 pt-5">

          <div className="container-fluid px-md-5 px-4">

            <div className="row g-4 align-items-end">

              <div className="col-auto d-none d-md-block">

                {poster && (
                  <img
                    src={poster}
                    alt={movie.title}
                    style={{
                      width: '180px',
                      borderRadius: '12px',
                      boxShadow:
                        '0 10px 30px rgba(0,0,0,0.8)'
                    }}
                  />
                )}

              </div>

              <div className="col">

                <div className="d-flex align-items-center gap-2 mb-2">

                  <span className="cyber-badge">
                    ★ {movie.vote_average?.toFixed(1)}
                  </span>

                  <span className="small text-secondary">
                    {movie.release_date?.slice(0, 4)}
                    {' • '}
                    {runtimeHours > 0
                      ? `${runtimeHours}h ${runtimeMinutes}m`
                      : 'N/A'}
                  </span>

                </div>

                <h1 className="display-4 fw-bold text-white mb-2">
                  {movie.title}
                </h1>

                <p className="text-secondary mb-3">
                  {movie.genres
                    ?.map((genre) => genre.name)
                    .join(' • ')}
                </p>

                <div className="d-flex gap-3 flex-wrap">

                  <button
                    className="btn btn-premium px-4"
                    onClick={handleTrailer}
                  >
                    ▶ Play Trailer
                  </button>

                  <button
                    className="btn btn-outline-cyber px-4"
                    onClick={handleWatchlist}
                  >
                    {isInWatchlist
                      ? '✓ In Watchlist'
                      : '+ Watchlist'}
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="container-fluid px-md-5 px-4 my-5">

        <div className="row g-4">

          <div className="col-lg-8">

            <div className="cyber-card mb-4">

              <h4 className="fw-bold text-white mb-3">
                Synopsis
              </h4>

              <p className="text-secondary lh-lg fs-5 fw-light">
                {movie.overview || 'No synopsis available.'}
              </p>

            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">

              <h3 className="section-title m-0">
                Top Cast & Crew
              </h3>

            </div>

            <ScrollSection>

              {cast.map((person) => (

                <div
                  className="cast-item"
                  key={person.credit_id}
                >

                  <div className="cast-avatar-wrapper">

                    {person.profile_path ? (

                      <img
                        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                        alt={person.name}
                      />

                    ) : (

                      <div className="d-flex align-items-center justify-content-center h-100">

                        <span className="text-secondary">
                          No Image
                        </span>

                      </div>

                    )}

                  </div>

                  <h6 className="fw-bold mb-1 text-truncate text-white">
                    {person.name}
                  </h6>

                  <p
                    className="small mb-0 text-truncate"
                    style={{
                      color: 'var(--text-muted)'
                    }}
                  >
                    {person.character || 'Unknown'}
                  </p>

                </div>

              ))}

            </ScrollSection>

          </div>

          <div className="col-lg-4">

            <div className="cyber-card">

              <h5 className="fw-bold text-white mb-3">
                Movie Info
              </h5>

              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">

                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">

                  <span className="text-secondary">
                    Release Date
                  </span>

                  <span className="text-white fw-semibold">
                    {movie.release_date || 'N/A'}
                  </span>

                </li>

                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">

                  <span className="text-secondary">
                    Language
                  </span>

                  <span className="text-white fw-semibold">
                    {movie.original_language?.toUpperCase() || 'N/A'}
                  </span>

                </li>

                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">

                  <span className="text-secondary">
                    Rating
                  </span>

                  <span
                    style={{
                      color: 'var(--secondary-neon)',
                      fontWeight: 600
                    }}
                  >
                    ★ {movie.vote_average?.toFixed(1)}
                  </span>

                </li>

                <li className="d-flex justify-content-between">

                  <span className="text-secondary">
                    Votes
                  </span>

                  <span className="text-white fw-semibold">
                    {movie.vote_count?.toLocaleString() || 'N/A'}
                  </span>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}