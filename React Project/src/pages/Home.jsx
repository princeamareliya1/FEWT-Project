import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import ScrollSection from '../components/ScrollSection';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/tmdb';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        console.log('TMDB DATA:', data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.log('TMDB ERROR:', error);
      });
  }, []);

  return (
    <div>
      <HeroCarousel />

      <div className="container-fluid px-md-5 px-4 my-5 pt-3">

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="section-title m-0">Popular Movies</h3>

          <Link
            to="/search"
            className="small text-decoration-none"
            style={{
              color: 'var(--secondary-neon)',
              fontWeight: 600
            }}
          >
            View All →
          </Link>
        </div>

        <ScrollSection>

          {movies.map((movie) => (
            <div className="scroll-item" key={movie.id}>

              <Link
                to={`/movie/${movie.id}`}
                className="text-decoration-none"
              >

                <div className="card movie-card text-white h-100">

                  <div className="card-img-wrapper position-relative">

                    <div className="card-rating">
                      ★ {movie.vote_average?.toFixed(1)}
                    </div>

                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />

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
                      {movie.release_date?.slice(0, 4)}
                    </p>

                  </div>

                </div>

              </Link>

            </div>
          ))}

        </ScrollSection>

        <hr
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            margin: '40px 0'
          }}
        />

      </div>
    </div>
  );
}