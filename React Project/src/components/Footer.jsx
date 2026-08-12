import { Link } from 'react-router-dom';
export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="site-footer pb-3">
      <div className="container-fluid px-md-5 px-4">
        <div className="row g-4 mb-3">
          <div className="col-xl-4 col-lg-4 col-md-6 pe-lg-4">
            <Link className="navbar-brand d-inline-block mb-3" to="/">CINEMA X Studio</Link>
            <p className="small mb-3 lh-base" style={{ color: 'var(--text-muted)' }}>
              Get exclusive updates on upcoming blockbusters and trending cast releases directly to your inbox.
            </p>
            <div className="d-flex flex-column gap-1 small">
              <span style={{ color: 'var(--text-muted)' }}>📍Rajkot, Gujarat</span>
              <span style={{ color: 'var(--text-muted)' }}>✉️ contact@cinemaxstudio.com</span>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading mb-3">Explore</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading mb-3">For User</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <h6 className="footer-heading mb-2">Cinematic Dispatch</h6>
            <p className="small mb-3" style={{ color: 'var(--text-muted)' }}>
              Get exclusive updates on upcoming blockbusters and trending cast releases directly to your inbox.
            </p>
          </div>
        </div>
        &copy;FEWT Project
      </div>
    </footer>
  );
}
