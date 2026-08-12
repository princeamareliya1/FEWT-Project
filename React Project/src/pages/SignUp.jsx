import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', height: '100vh', width: '100%', overflow: 'hidden', padding: '24px' }}>
      <div className="row justify-content-center w-100">
        <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10" style={{ maxWidth: '420px' }}>
          <div className="auth-card">
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ letterSpacing: '-0.5px' }}>Create Account</h2>
              <p className="small" style={{ color: 'var(--text-muted)' }}>Join Premium Cyber Cinematic Explorer</p>
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="John Doe" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="••••••••" required />
              </div>

              <button type="submit" className="btn btn-premium mb-3 w-100">Sign Up</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}