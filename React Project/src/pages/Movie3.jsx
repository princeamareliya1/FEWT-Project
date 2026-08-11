import { Link } from 'react-router-dom';
import ScrollSection from '../components/ScrollSection';

export default function Movie3() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div 
        className="hero-banner position-relative"
        style={{ 
          backgroundImage: "linear-gradient(180deg, rgba(11,15,25,0.3) 0%, rgba(11,15,25,1) 100%), url('https://images7.alphacoders.com/518/thumb-1920-518783.jpg')",
          minHeight: '60vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="d-flex align-items-end h-100 pb-4 pt-5">
          <div className="container-fluid px-md-5 px-4">
            <div className="row g-4 align-items-end">
              <div className="col-auto d-none d-md-block">
                <img 
                  src="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" 
                  alt="Inception" 
                  style={{ width: '180px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} 
                />
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="cyber-badge">★ 8.8</span>
                  <span className="small text-secondary">2010 • 2h 28m</span>
                </div>
                <h1 className="display-4 fw-bold text-white mb-2">Inception</h1>
                <p className="text-secondary mb-3">Sci-Fi • Action • Thriller</p>
                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn btn-premium px-4">▶ Play Trailer</button>
                  <button className="btn btn-outline-cyber px-4">+ Watchlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-md-5 px-4 my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="cyber-card mb-4">
              <h4 className="fw-bold text-white mb-3">Synopsis</h4>
              <p className="text-secondary lh-lg fs-5 fw-light">
                A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cyber-card">
              <h5 className="fw-bold text-white mb-3">Movie Info</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                  <span className="text-secondary">Director</span>
                  <span className="text-white fw-semibold">Christopher Nolan</span>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                  <span className="text-secondary">Box Office</span>
                  <span style={{ color: 'var(--secondary-neon)', fontWeight: 600 }}>$836.8 Million</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
