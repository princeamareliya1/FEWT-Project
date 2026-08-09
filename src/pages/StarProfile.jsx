// StarProfile.jsx
import SectionTitle from '../components/SectionTitle';

export default function StarProfile({ name, badges, bio, stats, upcoming = [], filmography = [], recommendations = [] }) {
  if (!stats) return null;

  return (
    <div>
      <Navbar />

      
      <div className="profile-header-bg" style={{ paddingTop: '80px' }}>
        <div className="container-fluid px-md-5 px-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-3 text-center text-lg-start">
              <div className="hero-avatar-wrapper">
                <img src={stats.avatarUrl} alt={name} />
              </div>
            </div>
            <div className="col-lg-9 text-center text-lg-start">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-2 mb-2">
                {badges && badges.map((b, i) => (
                  <span key={i} className="cyber-badge" style={b.style || {}}>{b.label}</span>
                ))}
              </div>
              <h1 className="display-4 fw-bold mb-2">{name}</h1>
              <p className="fs-6 fw-light mb-4" style={{ color: 'var(--text-muted)', maxWidth: '750px' }}>
                {bio}
              </p>

              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <div className="stat-box"><span className="d-block small text-muted">Born</span><span className="fw-bold">{stats.born}</span></div>
                <div className="stat-box"><span className="d-block small text-muted">Birthplace</span><span className="fw-bold">{stats.birthplace}</span></div>
                <div className="stat-box"><span className="d-block small text-muted">Box Office</span><span className="fw-bold" style={{ color: 'var(--secondary-neon)' }}>{stats.boxOffice}</span></div>
                <div className="stat-box"><span className="d-block small text-muted">Known Works</span><span className="fw-bold">{stats.knownWorks}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container-fluid px-md-5 px-4 my-5">
        <div className="row g-4">
          
          <div className="col-lg-8">
            <div className="mb-5">
              <SectionTitle title="Upcoming Movies" />
              <div className="row row-cols-1 row-cols-md-3 g-3">
                {upcoming.map((movie, idx) => (
                  <div key={idx} className="col">
                    <div className="movie-card h-100">
                      <img src={movie.imageSrc} className="movie-poster" alt={movie.title} />
                      <div className="p-3">
                        <span className="badge bg-secondary mb-2">{movie.year}</span>
                        <h6 className="fw-bold mb-1">{movie.title}</h6>
                        <small className="text-muted d-block">Role: {movie.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Iconic Filmography" color="var(--secondary-neon)" />
              <div className="row row-cols-2 row-cols-md-4 g-3">
                {filmography.map((movie, idx) => (
                  <div key={idx} className="col">
                    <div className="movie-card h-100">
                      <img src={movie.imageSrc} className="movie-poster" alt={movie.title} />
                      <div className="p-3">
                        <span className="cyber-badge mb-1" style={{ fontSize: '0.65rem' }}>{movie.year}</span>
                        <h6 className="fw-bold mb-0">{movie.title}</h6>
                        <small className="text-muted">{movie.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="glass-card mb-4">
              <h5 className="fw-bold mb-3" style={{ color: 'var(--secondary-neon)' }}>Biography</h5>
              <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>{bio}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
