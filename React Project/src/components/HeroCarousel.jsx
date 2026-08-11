import React from 'react';

export default function HeroCarousel() {
  return (
    <div className="hero-banner" style={{ '--banner-img': "url('https://images7.alphacoders.com/518/thumb-1920-518783.jpg')" }}>
      <div className="d-flex align-items-center align-items-md-center align-items-sm-end pt-5 pb-5 text-start text-md-start text-sm-center" style={{ minHeight: '85vh' }}>
        <div className="container-fluid px-md-5 px-4 pt-4">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10 mx-sm-auto mx-md-0">
              <span className="hero-badge mb-3 mb-md-4 d-inline-block">Popular Film</span>
              <h1 className="display-2 mb-3 mt-1 fw-bold" style={{ letterSpacing: '-1px' }}>
                Inception
              </h1>
              <p className="fs-5 mb-4" style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '300' }}>
                A skilled thief uses dream-sharing to implant an idea in a CEO, but his haunted past threatens everything.
              </p>
              <div className="d-flex flex-column flex-sm-column flex-md-row gap-3">
                <button className="btn btn-premium">Watch Trailer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}