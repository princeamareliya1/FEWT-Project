
export default function Search() {
  return (
    <div>
      <div className="container px-4 my-5" style={{ paddingTop: '60px' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="fw-bold mb-4">Explore Millions of Movies</h1>
            <input
              type="text"
              className="form-control search-box"
              placeholder="Type movie title, genre, or actor..."
            />
          </div>
        </div>
      </div>

      <div className="container-fluid px-md-5 px-4 my-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="section-title m-0">Search Results</h3>
        </div>
        
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">
          <div className="col">
            <div className="card movie-card text-white h-100">
              <div className="card-img-wrapper position-relative">
                <div className="card-rating">★ 8.5</div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7PT6UMIgb9H9qgbjuzjP1BJgQJpIDRZXzRiKHAENoHjhPNmU5K7Ongk&s=10" alt="Avengers: Infinity War" />
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-truncate fw-bold m-0" style={{ fontSize: '1.05rem' }}>Avengers: Infinity War</h5>
                <p className="card-text small mt-2 mb-0" style={{ color: 'var(--text-muted)' }}>Action • Sci-Fi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
