export default function Profile() {
  return (
    <div>
      <div className="container-fluid px-md-5 px-4 my-4 mb-5" style={{ paddingTop: '60px' }}>
        
        <div className="cyber-card mb-4">
          <div className="row align-items-center g-4">
            <div className="col-auto">
              <img src="https://i.pravatar.cc/150?img=33" className="profile-avatar" alt="Profile Avatar" />
            </div>
            <div className="col">
              <h2 className="mb-1 fw-bold display-6" style={{ letterSpacing: '-1px' }}>[Cinematic Maverick]</h2>
              <p className="small mb-3" style={{ color: 'var(--secondary-neon)', fontWeight: 600 }}>Joined: Jan 17, 2021</p>
              
              <div className="d-flex align-items-center flex-wrap gap-3 gap-md-4">
                <div>
                  <div className="fs-4 fw-bold gradient-text">85</div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>REVIEWS</div>
                </div>
                <div className="stat-divider"></div>
                <div>
                  <div className="fs-4 fw-bold gradient-text">15</div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>LISTS</div>
                </div>
                <div className="stat-divider"></div>
                <div>
                  <div className="fs-4 fw-bold text-white">210</div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>RATINGS</div>
                </div>
                <div className="stat-divider"></div>
                <div>
                  <div className="fs-4 fw-bold text-white">100<span className="fs-6 text-muted">h</span></div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>WATCH TIME</div>
                </div>
              </div>
            </div>
            <div className="col-md-auto text-md-end mt-4 mt-md-0 d-flex gap-2">
              <a href="/setting" className="btn btn-premium"><i className="bi bi-pencil me-1"></i> Edit Profile</a>
              <button className="btn btn-outline-cyber"><i className="bi bi-gear"></i></button>
            </div>
          </div>
        </div>

        
        <div className="row g-4">
          
          <div className="col-lg-3">
            <div className="cyber-card h-100 p-0 overflow-hidden">
              <div className="p-4 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <h4 className="section-title-small m-0"><i className="bi bi-journal-text me-2"></i>My Reviews</h4>
              </div>
              <div className="p-3 custom-scroll">
                <div className="cyber-list-item d-flex gap-3">
                  <img src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg" style={{ width: '50px', height: '75px', objectFit: 'cover', borderRadius: '8px' }} alt="Oppenheimer" />
                  <div>
                    <h6 className="mb-1 text-white fw-bold" style={{ fontSize: '0.95rem' }}>Oppenheimer</h6>
                    <p className="small mb-1" style={{ color: 'var(--text-muted)', lineHeight: '1.2' }}>A masterclass in tension.</p>
                    <span className="badge" style={{ background: 'rgba(255, 184, 0, 0.1)', color: '#ffb800', border: '1px solid rgba(255, 184, 0, 0.3)' }}>★ 4.5</span>
                  </div>
                </div>

                <div className="cyber-list-item d-flex gap-3 mt-3">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTQyMDc0MjY0Nl5BMl5BanBnXkFtZTgwNzMwOTM0NzE@._V1_QL75_UX380_CR0,0,380,562_.jpg" style={{ width: '50px', height: '75px', objectFit: 'cover', borderRadius: '8px' }} alt="Dune" />
                  <div>
                    <h6 className="mb-1 text-white fw-bold" style={{ fontSize: '0.95rem' }}>Dune: Part One</h6>
                    <p className="small mb-1" style={{ color: 'var(--text-muted)', lineHeight: '1.2' }}>Visual Spectacle.</p>
                    <span className="badge" style={{ background: 'rgba(255, 184, 0, 0.1)', color: '#ffb800', border: '1px solid rgba(255, 184, 0, 0.3)' }}>★ 4.0</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <h4 className="section-title-small m-0"><i className="bi bi-bookmark-star me-2"></i>Quick Watchlist</h4>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span style={{ color: '#e2e4eb', fontSize: '0.9rem' }}>The Batman</span>
                  <i className="bi bi-x-circle text-muted" style={{ cursor: 'pointer' }}></i>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ color: '#e2e4eb', fontSize: '0.9rem' }}>Killers of the Flower Moon</span>
                  <i className="bi bi-x-circle text-muted" style={{ cursor: 'pointer' }}></i>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-5">
            <div className="cyber-card mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="section-title-small m-0"><i className="bi bi-activity me-2"></i>Timeline & Logs</h4>
                <a href="#" className="small text-decoration-none" style={{ color: 'var(--secondary-neon)' }}>View All</a>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div style={{ color: '#e2e4eb', fontSize: '0.95rem' }}>Posted a review of <strong className="text-white">'Oppenheimer'</strong></div>
                  <div className="small" style={{ color: 'var(--text-muted)' }}>2 hours ago</div>
                </div>
                <div className="timeline-item">
                  <div style={{ color: '#e2e4eb', fontSize: '0.95rem' }}>Rated <strong className="text-white">Dune: Part Two</strong> <span style={{ color: '#ffb800' }}>9/10</span></div>
                  <div className="small" style={{ color: 'var(--text-muted)' }}>Yesterday</div>
                </div>
              </div>
            </div>

            <div className="cyber-card">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="section-title-small m-0"><i className="bi bi-collection-play me-2"></i>Curations</h4>
                <button className="btn btn-outline-cyber btn-sm py-1 px-3">Create List</button>
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="cyber-list-item p-2">
                    <h6 className="mb-0 text-white fw-bold" style={{ fontSize: '0.9rem' }}>Curated Picks 2026</h6>
                    <small style={{ color: 'var(--secondary-neon)' }}>17 Items</small>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cyber-list-item p-2">
                    <h6 className="mb-0 text-white fw-bold" style={{ fontSize: '0.9rem' }}>Sci-Fi Masterpieces</h6>
                    <small style={{ color: 'var(--secondary-neon)' }}>12 Items</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="cyber-card mb-4">
              <h4 className="section-title-small"><i className="bi bi-bar-chart-fill me-2"></i>Watching Analytics</h4>
              <div className="mt-4">
                <div className="d-flex justify-content-between mb-1 small">
                  <span style={{ color: '#e2e4eb' }}>Sci-Fi</span>
                  <span style={{ color: 'var(--secondary-neon)', fontWeight: 700 }}>45%</span>
                </div>
                <div className="cyber-progress">
                  <div className="progress-neon-secondary" style={{ width: '45%', height: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}