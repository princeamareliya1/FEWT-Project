import React from 'react';
import { Link } from 'react-router-dom';

export default function Star4() {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      
      <div className="container-fluid px-md-5 px-4 mb-5">
        <div className="cyber-card p-4 p-md-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-3 text-center text-lg-start">
              <img 
                src="https://m.media-amazon.com/images/M/MV5BMjE4NjA1NTEyM15BMl5BanBnXkFtZTcwNzM4NDcxOQ@@._V1_.jpg" 
                alt="Scarlett Johansson" 
                className="img-fluid rounded-4 shadow-lg"
                style={{ width: '220px', height: '280px', objectFit: 'cover', border: '2px solid var(--secondary-neon)' }}
              />
            </div>
            
            <div className="col-lg-9 text-center text-lg-start">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-3">
                <span className="cyber-badge">TONY NOMINEE</span>
                <span className="cyber-badge">ACTION ICON</span>
              </div>
              
              <h1 className="display-4 fw-bold text-white mb-2">Scarlett Johansson</h1>
              
              <p className="fs-5 text-secondary fw-light mb-4" style={{ maxWidth: '750px', lineHeight: 1.7 }}>
                Scarlett Johansson is one of the highest-grossing actresses of all time, best known for her portrayal of Natasha Romanoff / Black Widow in the Marvel Cinematic Universe and acclaimed performances in Lost in Translation and Marriage Story.
              </p>

              
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                    <span className="d-block small text-muted">Born</span>
                    <strong className="text-white">November 22, 1984</strong>
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
                    <strong style={{ color: 'var(--secondary-neon)' }}>$14.8 Billion</strong>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                    <span className="d-block small text-muted">Known Works</span>
                    <strong className="text-white">60+ Titles</strong>
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
                      src="https://m.media-amazon.com/images/M/MV5BMjE4NjA1NTEyM15BMl5BanBnXkFtZTcwNzM4NDcxOQ@@._V1_.jpg" 
                      alt="Jurassic World Rebirth" 
                      style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div>
                      <span className="cyber-badge mb-2">JULY 2025</span>
                      <h6 className="fw-bold text-white mb-1">Jurassic World Rebirth</h6>
                      <small className="text-muted d-block">Role: Zora Bennett</small>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="movie-card h-100 p-3 d-flex gap-3 align-items-center">
                    <img 
                      src="https://m.media-amazon.com/images/M/MV5BMjE4NjA1NTEyM15BMl5BanBnXkFtZTcwNzM4NDcxOQ@@._V1_.jpg" 
                      alt="Eleanor the Great" 
                      style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div>
                      <span className="cyber-badge mb-2">POST-PRODUCTION</span>
                      <h6 className="fw-bold text-white mb-1">Eleanor the Great</h6>
                      <small className="text-muted d-block">Role: Director / Producer</small>
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
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7PT6UMIgb9H9qgbjuzjP1BJgQJpIDRZXzRiKHAENoHjhPNmU5K7Ongk&s=10" alt="Avengers: Infinity War" />
                    </div>
                    <div className="p-3">
                      <h6 className="fw-bold text-white mb-1 text-truncate">Avengers: Infinity War</h6>
                      <p className="small text-muted mb-0">Role: Natasha Romanoff / Black Widow</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="movie-card h-100">
                    <div className="card-img-wrapper">
                      <img src="https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3NmJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="Marriage Story" />
                    </div>
                    <div className="p-3">
                      <h6 className="fw-bold text-white mb-1 text-truncate">Marriage Story</h6>
                      <p className="small text-muted mb-0">Role: Nicole Barber</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="movie-card h-100">
                    <div className="card-img-wrapper">
                      <img src="https://m.media-amazon.com/images/M/MV5BMTQ4Mzg3NjcxNV5BMl5BanBnXkFtZTcwNTM5NTM2MzE@._V1_.jpg" alt="Lucy" />
                    </div>
                    <div className="p-3">
                      <h6 className="fw-bold text-white mb-1 text-truncate">Lucy</h6>
                      <p className="small text-muted mb-0">Role: Lucy</p>
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
                <Link to="/star/1" className="d-flex align-items-center gap-3 text-decoration-none p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <img 
                    src="https://m.media-amazon.com/images/M/MV5BMTk2NjY2NzY0N15BMl5BanBnXkFtZTcwNDQ4NjYzNA@@._V1_.jpg" 
                    alt="Robert Downey Jr." 
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold text-white mb-0">Robert Downey Jr.</h6>
                    <small className="text-muted">Iron Man, Oppenheimer</small>
                  </div>
                </Link>

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
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}