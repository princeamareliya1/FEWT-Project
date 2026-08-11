import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import ScrollSection from '../components/ScrollSection';

export default function Home() {
  return (
    <div>
      <HeroCarousel />

      <div className="container-fluid px-md-5 px-4 my-5 pt-3">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="section-title m-0">Popular Movies</h3>
          <Link to="/search" className="small text-decoration-none" style={{ color: 'var(--secondary-neon)', fontWeight: 600 }}>
            View All →
          </Link>
        </div>

        <ScrollSection>
          <div className="scroll-item">
            <Link to="/movie/3" className="text-decoration-none">
              <div className="card movie-card text-white h-100">
                <div className="card-img-wrapper position-relative">
                  <div className="card-rating">★ 8.8</div>
                  <img src="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" alt="Inception" />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-truncate fw-bold m-0" style={{ fontSize: '1.05rem' }}>Inception</h5>
                  <p className="card-text small mt-2 mb-0" style={{ color: 'var(--text-muted)' }}>Sci-Fi • Action • Thriller</p>
                </div>
              </div>
            </Link>
          </div>
        </ScrollSection>

        <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', margin: '40px 0' }} />
      </div>
    </div>
  );
}