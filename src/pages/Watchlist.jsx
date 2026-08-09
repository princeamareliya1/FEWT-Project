import React from 'react';
import { Link } from 'react-router-dom';

export default function Watchlist() {
  return (
    <div>
      <div className="content-wrapper" style={{ paddingTop: '60px' }}>
        <div className="container-fluid px-md-5 px-4 my-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="section-title m-0">My Saved Watchlist</h3>
          </div>
          
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">
            <div className="col">
              <div className="card movie-card text-white h-100">
                <div className="card-img-wrapper">
                  <div className="card-rating">★ 8.8</div>
                  <img src="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" alt="Inception" />
                </div>
                <div className="card-body p-3 p-md-4">
                  <h5 className="card-title text-truncate fw-bold m-0" style={{ fontSize: '1.1rem' }}>Inception</h5>
                  <p className="card-text small mt-2 mb-0" style={{ color: 'var(--text-muted)' }}>Sci-Fi • Action</p>
                  <button className="btn btn-outline-cyber mt-3 w-100">✕ Remove</button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-5 my-5">
            <h2 className="fw-bold mb-3 text-muted">Your Archive is Empty</h2>
            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>Explore the collection grids to construct your cinematic schedule.</p>
            <Link to="/" className="btn btn-premium px-4 py-2">Discover Trending Movies</Link>
          </div> 
        </div>
      </div>
    </div>
  );
}