import React from 'react';

export default function FaqAccordion() {
  return (
    <div className="about-card p-4 p-md-5">
      <h4 className="fw-bold text-white mb-4">Frequently Asked Questions</h4>
      <div className="accordion accordion-flush" id="aboutFaq">
        
        <div className="accordion-item bg-transparent border-bottom border-secondary border-opacity-25">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed bg-transparent text-white fw-bold py-3 px-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Is CINEMA X Studio free to use?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#aboutFaq">
            <div className="accordion-body px-0 pt-0 text-secondary">
              Yes, exploring the film catalog, viewing cast records, and adding movies to your watchlist is completely free.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-transparent border-bottom border-secondary border-opacity-25">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed bg-transparent text-white fw-bold py-3 px-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              How do I save movies to my personal list?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#aboutFaq">
            <div className="accordion-body px-0 pt-0 text-secondary">
              Click the <strong>"+ Watchlist"</strong> button on any movie card or hero banner across the site to bookmark it.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}