
export default function BentoGrid() {
  return (
    <div className="row g-4 mb-5">
      <div className="col-lg-4">
        <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
          <div>
            <span className="fs-2 text-white mb-3 d-block">01 /</span>
            <h4 className="fw-bold text-white mb-3">The Vision</h4>
            <p className="small text-secondary lh-lg mb-0">
              Cinema is an art form. Our platform translates high-end theatrical presence straight to your viewport with a dark, high-contrast visual setup.
            </p>
          </div>
          <div className="pt-4">
            <span className="cyber-badge">Cinematic Dark Theme</span>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
          <div>
            <span className="fs-2 text-white mb-3 d-block">02 /</span>
            <h4 className="fw-bold text-white mb-3">The Engine</h4>
            <p className="small text-secondary lh-lg mb-0">
              Engineered with fluid responsiveness to scale instantly across ultra-wide desktop monitors, tablets, and mobile devices.
            </p>
          </div>
          <div className="pt-4">
            <span className="cyber-badge">Fluid Responsiveness</span>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
          <div>
            <span className="fs-2 text-white mb-3 d-block">03 /</span>
            <h4 className="fw-bold text-white mb-3">The Archive</h4>
            <p className="small text-secondary lh-lg mb-0">
              Organize your personal movie watchlists with a single click. Keep track of what you intend to watch next without complex setup.
            </p>
          </div>
          <div className="pt-4">
            <span className="cyber-badge">Smart Watchlist</span>
          </div>
        </div>
      </div>
    </div>
  );
}
