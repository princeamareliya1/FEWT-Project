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
  const [trailer, setTrailer] = useState(null);
  const [isInWatchlist, setIsWatchlist] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // =========================
  // GET MOVIE DETAILS + CAST
  // =========================
  useEffect(() => {
    setLoading(true);
    setError('');

    Promise.all([
      getMovieDetails(id),
      getMovieCredits(id)
    ])
      .then(([movieData, creditsData]) => {
        console.log('MOVIE DETAILS:', movieData);
        console.log('MOVIE CREDITS:', creditsData);

        setMovie(movieData);
        setCast(creditsData.cast?.slice(0, 10) || []);
      })
      .catch((error) => {
        console.error('MOVIE ERROR:', error);
        setError('Failed to load movie details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // =========================
  // GET TRAILER
  // =========================
  useEffect(() => {
    setTrailer(null);

    getMovieVideos(id)
      .then((videosData) => {
        console.log('MOVIE VIDEOS:', videosData);

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

        console.log('SELECTED TRAILER:', trailerVideo);

        setTrailer(trailerVideo || null);
      })
      .catch((error) => {
        console.error('TRAILER ERROR:', error);
        setTrailer(null);
      });
  }, [id]);

  // =========================
  // CHECK WATCHLIST
  // =========================
  useEffect(() => {
    const savedMovies = getWatchlist();

    const alreadySaved = savedMovies.some(
      (item) => item.id === Number(id)
    );

    setIsWatchlist(alreadySaved);
  }, [id]);

  // =========================
  // ERROR
  // =========================
  if (error) {
    return (
      <div
        className="text-center text-danger"
        style={{ paddingTop: '150px' }}
      >
        <h3>{error}</h3>
      </div>
    );
  }

  // =========================
  // LOADING
  // =========================
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

  // =========================
  // IMAGE URLS
  // =========================
  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '';

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';

  // =========================
  // RUNTIME
  // =========================
  const runtimeHours = movie.runtime
    ? Math.floor(movie.runtime / 60)
    : 0;

  const runtimeMinutes = movie.runtime
    ? movie.runtime % 60
    : 0;

  // =========================
  // WATCHLIST HANDLER
  // =========================
  const handleWatchlist = () => {
    if (isInWatchlist) {
      return;
    }

    addToWatchlist(movie);
    setIsWatchlist(true);
  };

  // =========================
  // TRAILER HANDLER
  // =========================
  const handleTrailer = () => {
    if (trailer) {
      window.open(
        `https://www.youtube.com/watch?v=${trailer.key}`,
        '_blank'
      );
    } else {
      alert('Trailer not available.');
    }
  };

  return (
    <div style={{ paddingTop: '60px' }}>

      {/* =========================
          HERO
      ========================= */}
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

              {/* POSTER */}
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

              {/* BASIC DETAILS */}
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

                  {/* PLAY TRAILER */}
                  <button
                    className="btn btn-premium px-4"
                    onClick={handleTrailer}
                  >
                    ▶ Play Trailer
                  </button>

                  {/* WATCHLIST */}
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

      {/* =========================
          CONTENT
      ========================= */}
      <div className="container-fluid px-md-5 px-4 my-5">

        <div className="row g-4">

          {/* =========================
              LEFT
          ========================= */}
          <div className="col-lg-8">

            {/* SYNOPSIS */}
            <div className="cyber-card mb-4">

              <h4 className="fw-bold text-white mb-3">
                Synopsis
              </h4>

              <p className="text-secondary lh-lg fs-5 fw-light">
                {movie.overview || 'No synopsis available.'}
              </p>

            </div>

            {/* CAST */}
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

          {/* =========================
              RIGHT
          ========================= */}
          <div className="col-lg-4">

            <div className="cyber-card">

              <h5 className="fw-bold text-white mb-3">
                Movie Info
              </h5>

              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">

                {/* RELEASE DATE */}
                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">

                  <span className="text-secondary">
                    Release Date
                  </span>

                  <span className="text-white fw-semibold">
                    {movie.release_date || 'N/A'}
                  </span>

                </li>

                {/* LANGUAGE */}
                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">

                  <span className="text-secondary">
                    Language
                  </span>

                  <span className="text-white fw-semibold">
                    {movie.original_language?.toUpperCase() || 'N/A'}
                  </span>

                </li>

                {/* RATING */}
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

                {/* VOTES */}
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