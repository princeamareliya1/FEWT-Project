import { Link } from 'react-router-dom';
import BentoGrid from '../components/BentoGrid';

export default function AboutUs() {
  return (
    <div>
      <header className="py-5 text-center position-relative" style={{ marginTop: '50px' }}>
        <div className="container px-4 py-5">
          <span className="cyber-badge mb-3 d-inline-block">OUR MANIFESTO</span>
          <h1 className="display-3 fw-bold text-white mb-4">
            Movies made easy and quick.
          </h1>
          <p className="fs-5 fw-light mx-auto text-secondary" style={{ maxWidth: '720px', lineHeight: 1.8 }}>
            CINEMA X Studio helps you find movies fast. Simple pages, clear results, and no clutter.
          </p>
        </div>
      </header>

      <main className="container px-md-5 px-4 mb-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <BentoGrid />

            <div className="about-card p-4 p-md-5 mb-5 position-relative overflow-hidden">
              <div className="row align-items-center g-4">
                <div className="col-md-7">
                  <h3 className="fw-bold text-white mb-3">Built for Movie Enthusiasts</h3>
                  <p className="text-secondary lh-lg mb-4">
                    From critically acclaimed classics to upcoming blockbuster releases, CINEMA X Studio provides accurate film records and quick metadata navigation.
                  </p>
                  <div className="d-flex gap-3">
                    <Link to="/search" className="btn btn-premium px-4">Search Catalog</Link>
                    <Link to="/watchlist" className="btn btn-outline-cyber px-4">Open Watchlist</Link>
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <div className="stat-card p-4">
                    <div className="stat-value display-4 fw-bold gradient-text mb-1">10k+</div>
                    <div className="small text-uppercase text-secondary fw-semibold">Movies Indexed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
