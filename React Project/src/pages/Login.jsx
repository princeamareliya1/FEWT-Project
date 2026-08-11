import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalOverflow; };
  }, []);

  return (
    <div className="auth-wrapper d-flex align-items-start justify-content-center" style={{ minHeight: '100vh', height: '100vh', overflow: 'hidden', padding: '60px 16px 0' }}>
      <div className="row justify-content-center w-100">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div className="auth-card">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2" style={{ letterSpacing: '-0.5px' }}>Welcome Back</h2>
              <p className="small" style={{ color: 'var(--text-muted)' }}>Access your Cyber Cinematic portal</p>
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="loginEmail" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label htmlFor="loginPassword" className="form-label mb-0">Password</label>
                  <a href="#" className="auth-link small">Forgot?</a>
                </div>
                <input 
                  type="password" 
                  className="form-control" 
                  id="loginPassword" 
                  placeholder="••••••••" 
                  required 
                />
              </div>

              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label small" htmlFor="rememberMe" style={{ color: 'var(--text-muted)' }}>
                  Remember me on this device
                </label>
              </div>

              <button type="submit" className="btn btn-premium mb-3 w-100">Log In</button>
            </form>

            <div className="text-center mt-3">
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>
                Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}