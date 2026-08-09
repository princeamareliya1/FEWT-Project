import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="site-footer mt-5 pt-5 pb-4">
      <div className="container-fluid px-md-5 px-4">
        <div className="row g-4 mb-5">
          
          
          <div className="col-xl-4 col-lg-4 col-md-6 pe-lg-4">
            <Link className="navbar-brand d-inline-block mb-3" to="/">CINEMA X Studio</Link>
            <p className="small mb-3 lh-base" style={{ color: 'var(--text-muted)' }}>
              Explore the futuristic realm of cinema. Stream, discover, and curate your ultimate movie watchlists with unmatched visual elegance.
            </p>
            <div className="d-flex flex-column gap-1 small">
              <span style={{ color: 'var(--text-muted)' }}>📍 Darshan University Campus, Rajkot, Gujarat</span>
              <span style={{ color: 'var(--text-muted)' }}>✉️ contact@cinemaxstudio.com</span>
            </div>
          </div>

          
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading mb-3">Explore</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/">Home Carousel</Link></li>
              <li><Link to="/search">Movie Search</Link></li>
              <li><Link to="/search">Top Rated</Link></li>
              <li><Link to="/search">Upcoming 2026</Link></li>
            </ul>
          </div>

          
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading mb-3">User Space</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/profile">My Profile</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/about">About Studio</Link></li>
            </ul>
          </div>

          
          <div className="col-xl-4 col-lg-4 col-md-6">
            <h6 className="footer-heading mb-2">Cinematic Dispatch</h6>
            <p className="small mb-3" style={{ color: 'var(--text-muted)' }}>
              Get exclusive updates on upcoming blockbusters and trending cast releases directly to your inbox.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="newsletter-wrapper mb-3">
                <input type="email" className="form-control cyber-input" placeholder="Enter your email address..." required />
                <button type="submit" className="btn btn-premium px-3 py-2 fs-6">
                  Join
                </button>
              </div>
            </form>
  
          </div>

        </div>

        <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '30px 0 20px' }} />

        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0 small" style={{ color: 'var(--text-muted)' }}>
            &copy; 2026 CINEMA X Studio. Engineered for Darshan University Project.
          </p>
        </div>
      </div>
    </footer>
  );
}