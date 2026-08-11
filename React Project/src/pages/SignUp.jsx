import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container auth-container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div className="auth-card">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2" style={{ letterSpacing: '-0.5px' }}>Create Account</h2>
              <p className="small" style={{ color: 'var(--text-muted)' }}>Join Premium Cyber Cinematic Explorer</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
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

              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="terms" required />
                <label className="form-check-label small" htmlFor="terms" style={{ color: 'var(--text-muted)' }}>
                  I agree to the <a href="#" className="auth-link">Terms of Service</a> & <a href="#" className="auth-link">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="btn btn-premium mb-3 w-100">Sign Up</button>
            </form>

            <div className="text-center mt-3">
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>
                Already have an account? <Link to="/login" className="auth-link">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}