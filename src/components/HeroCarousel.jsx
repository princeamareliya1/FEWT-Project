import React from 'react';

export default function HeroCarousel() {
  return (
    <div id="heroMovieCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroMovieCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroMovieCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroMovieCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active hero-banner" style={{ '--banner-img': "url('https://images8.alphacoders.com/999/999107.jpg')" }}>
          <div className="d-flex align-items-center align-items-md-center align-items-sm-end pt-5 pb-5 text-start text-md-start text-sm-center" style={{ minHeight: '85vh' }}>
            <div className="container-fluid px-md-5 px-4 pt-4">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10 mx-sm-auto mx-md-0">
                  <span className="hero-badge mb-3 mb-md-4 d-inline-block">PREMIUM EXCLUSIVE</span>
                  <h1 className="display-2 mb-3 mt-1 fw-bold" style={{ letterSpacing: '-1px' }}>
                    Avengers: Endgame
                  </h1>
                  <p className="fs-5 mb-4 lh-base fw-light" style={{ color: 'var(--text-muted)' }}>
                    After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions.
                  </p>
                  <div className="d-flex flex-column flex-sm-column flex-md-row gap-3">
                    <button className="btn btn-premium">Watch Trailer</button>
                    <button className="btn btn-outline-cyber">+ Watchlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item hero-banner" style={{ '--banner-img': "url('https://images4.alphacoders.com/273/thumb-1920-273546.jpg')" }}>
          <div className="d-flex align-items-center align-items-md-center align-items-sm-end pt-5 pb-5 text-start text-md-start text-sm-center" style={{ minHeight: '85vh' }}>
            <div className="container-fluid px-md-5 px-4 pt-4">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10 mx-sm-auto mx-md-0">
                  <span className="hero-badge mb-3 mb-md-4 d-inline-block">TRENDING NOW</span>
                  <h1 className="display-2 mb-3 mt-1 fw-bold" style={{ letterSpacing: '-1px' }}>
                    The Dark Knight
                  </h1>
                  <p className="fs-5 mb-4 lh-base fw-light" style={{ color: 'var(--text-muted)' }}>
                    When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
                  </p>
                  <div className="d-flex flex-column flex-sm-column flex-md-row gap-3">
                    <button className="btn btn-premium">Watch Trailer</button>
                    <button className="btn btn-outline-cyber">+ Watchlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item hero-banner" style={{ '--banner-img': "url('https://images7.alphacoders.com/518/thumb-1920-518783.jpg')" }}>
          <div className="d-flex align-items-center align-items-md-center align-items-sm-end pt-5 pb-5 text-start text-md-start text-sm-center" style={{ minHeight: '85vh' }}>
            <div className="container-fluid px-md-5 px-4 pt-4">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10 mx-sm-auto mx-md-0">
                  <span className="hero-badge mb-3 mb-md-4 d-inline-block">SCI-FI MASTERPIECE</span>
                  <h1 className="display-2 mb-3 mt-1 fw-bold" style={{ letterSpacing: '-1px' }}>
                    Inception
                  </h1>
                  <p className="fs-5 mb-4" style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '300' }}>
                    A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.
                  </p>
                  <div className="d-flex flex-column flex-sm-column flex-md-row gap-3">
                    <button className="btn btn-premium">Watch Trailer</button>
                    <button className="btn btn-outline-cyber">+ Watchlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}