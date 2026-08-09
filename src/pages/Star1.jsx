import React from 'react';
import { Link } from 'react-router-dom';

export default function Star1() {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      
      <div className="container-fluid px-md-5 px-4 mb-5">
        <div className="cyber-card p-4 p-md-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-3 text-center text-lg-start">
              <img 
                src="https://m.media-amazon.com/images/M/MV5BMTk2NjY2NzY0N15BMl5BanBnXkFtZTcwNDQ4NjYzNA@@._V1_.jpg" 
                alt="Robert Downey Jr." 
                className="img-fluid rounded-4 shadow-lg"
                style={{ width: '220px', height: '280px', objectFit: 'cover', border: '2px solid var(--secondary-neon)' }}
              />
            </div>
            
            <div className="col-lg-9 text-center text-lg-start">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-3">
                <span className="cyber-badge">OSCAR WINNER</span>
                <span className="cyber-badge">MARVEL LEGEND</span>
              </div>
              
              <h1 className="display-4 fw-bold text-white mb-2">Robert Downey Jr.</h1>
              
              <p className="fs-5 text-secondary fw-light mb-4" style={{ maxWidth: '750px', lineHeight: 1.7 }}>
                Robert Downey Jr. is an American actor widely recognized for playing Tony Stark / Iron Man in the Marvel Cinematic Universe, as well as starring in Sherlock Holmes and Oppenheimer.
              </p>

              
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                    <span className="d-block small text-muted">Born</span>
                    <strong className="text-white">April 4, 1965</strong>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                    <span className="d-block small text-muted">Birthplace</span>
                    <strong className="text-white">New York, USA</strong>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                    <span className="d-block small text-muted">Box Office</span>
                    <strong style={{ color: 'var(--secondary-neon)' }}>$14.5 Billion</strong>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                    <span className="d-block small text-muted">Known Works</span>
                    <strong className="text-white">95+ Titles</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      <div className="container-fluid px-md-5 px-4 mb-5">
        <div className="row g-4">
          
          
          <div className="col-lg-8">
            
            
            <div className="mb-5">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h3 className="section-title m-0">Upcoming Movies</h3>
              </div>
              <div className="row row-cols-1 row-cols-md-2 g-3">
                <div className="col">
                  <div className="movie-card h-100 p-3 d-flex gap-3 align-items-center">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9HVav7YAa7nHGNFc6cxZLxtMzNQxBqz5TeQuE-GiPQ&s=10" 
                      alt="Avengers Doomsday" 
                      style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div>
                      <span className="cyber-badge mb-2">MAY 2026</span>
                      <h6 className="fw-bold text-white mb-1">Avengers: Doomsday</h6>
                      <small className="text-muted d-block">Role: Dr. Victor Von Doom</small>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="movie-card h-100 p-3 d-flex gap-3 align-items-center">
                    <img 
                      src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" 
                      alt="Sherlock Holmes 3" 
                      style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div>
                      <span className="cyber-badge mb-2">DEC 2026</span>
                      <h6 className="fw-bold text-white mb-1">Sherlock Holmes 3</h6>
                      <small className="text-muted d-block">Role: Sherlock Holmes</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="mb-5">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h3 className="section-title m-0" style={{ borderLeftColor: 'var(--secondary-neon)' }}>Iconic Filmography</h3>
              </div>
              <div className="row row-cols-2 row-cols-md-3 g-3">
                
                <div className="col">
                  <div className="movie-card h-100">
                    <div className="card-img-wrapper">
                      <img src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg" alt="Oppenheimer" />
                    </div>
                    <div className="p-3">
                      <h6 className="fw-bold text-white mb-1 text-truncate">Oppenheimer</h6>
                      <p className="small text-muted mb-0">Role: Lewis Strauss</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="movie-card h-100">
                    <div className="card-img-wrapper">
                      <img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="Avengers Endgame" />
                    </div>
                    <div className="p-3">
                      <h6 className="fw-bold text-white mb-1 text-truncate">Avengers: Endgame</h6>
                      <p className="small text-muted mb-0">Role: Tony Stark / Iron Man</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="movie-card h-100">
                    <div className="card-img-wrapper">
                      <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg" alt="Iron Man" />
                    </div>
                    <div className="p-3">
                      <h6 className="fw-bold text-white mb-1 text-truncate">Iron Man</h6>
                      <p className="small text-muted mb-0">Role: Tony Stark</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          
          <div className="col-lg-4">
            <div className="cyber-card">
              <h5 className="fw-bold text-white mb-4">Related Stars</h5>
              
              <div className="d-flex flex-column gap-3">
                <Link to="/star/2" className="d-flex align-items-center gap-3 text-decoration-none p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <img 
                    src="https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg" 
                    alt="Leonardo DiCaprio" 
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold text-white mb-0">Leonardo DiCaprio</h6>
                    <small className="text-muted">Inception, Titanic</small>
                  </div>
                </Link>

                <Link to="/star/3" className="d-flex align-items-center gap-3 text-decoration-none p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <img 
                    src="https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTc5Mw@@._V1_.jpg" 
                    alt="Christian Bale" 
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold text-white mb-0">Christian Bale</h6>
                    <small className="text-muted">The Dark Knight</small>
                  </div>
                </Link>

                <Link to="/star/4" className="d-flex align-items-center gap-3 text-decoration-none p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <img 
                    src="https://m.media-amazon.com/images/M/MV5BMjE4NjA1NTEyM15BMl5BanBnXkFtZTcwNzM4NDcxOQ@@._V1_.jpg" 
                    alt="Scarlett Johansson" 
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold text-white mb-0">Scarlett Johansson</h6>
                    <small className="text-muted">Black Widow</small>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}