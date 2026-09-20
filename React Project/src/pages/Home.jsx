import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import MovieCard from '../components/MovieCard';
import ScrollSection from '../components/ScrollSection';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/tmdb';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch(() => setMovies([]));
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
              <MovieCard movie={movie} />
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
