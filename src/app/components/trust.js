import React from 'react';


function Trust() {
  return (
    <div className="d-flex flex-column align-items-center text-center trust-section">
      <p className="trust-text text-white-50">
        Over 50+ business trust us
      </p>

      <div className="review-slider mt-4">
        <div className="slider-fade-left"></div>
        <div className="slider-fade-right"></div>
        <div className="slider-track">
          <div className="slider-content">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="/google-reviews.png" alt="Review" className="slider-image" />
                <img src="/google-reviews.png" alt="Review" className="slider-image" />
                <img src="/google-reviews.png" alt="Review" className="slider-image" />
                <img src="/google-reviews.png" alt="Review" className="slider-image" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
