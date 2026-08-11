import React from 'react';

export default function ScrollSection({ children }) {
  return (
    <div className="horizontal-scroll-container">
      {children}
    </div>
  );
}