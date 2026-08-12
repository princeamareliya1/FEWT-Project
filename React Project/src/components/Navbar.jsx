import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top">
      <div className="container-fluid px-md-5 px-4">
        <Link className="navbar-brand m-0" to="/">CINEMA X Studio</Link>
        <div className="navbar-nav ms-auto flex-row align-items-center gap-3">
          <NavLink className={({ isActive }) => `nav-link px-2 ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link px-2 ${isActive ? 'active' : ''}`} to="/search">Search</NavLink>
          <NavLink className={({ isActive }) => `nav-link px-2 ${isActive ? 'active' : ''}`} to="/watchlist">Watchlist</NavLink>
          <NavLink className={({ isActive }) => `nav-link px-2 ${isActive ? 'active' : ''}`} to="/about">About Us</NavLink>
          <NavLink className={({ isActive }) => `nav-link px-2 ${isActive ? 'active' : ''}`} to="/profile">Profile</NavLink>
          <Link 
            className="btn btn-outline-light px-3 py-1.5 fs-6 ms-2" 
            to="/signup" 
            style={{ fontSize: '0.9rem', padding: '6px 16px', borderRadius: '8px' }}
          >
            Sign Up
          </Link>
          <Link 
            className="btn btn-premium px-3 py-1.5 fs-6 ms-2" 
            to="/login" 
            style={{ fontSize: '0.9rem', padding: '6px 16px', borderRadius: '8px' }}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
