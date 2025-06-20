import React from 'react'

function trust() {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <p
        className="text-white-50"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        Over 50+ business trust us
      </p>

      <div className="review-slider mt-4">
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





  )
}

export default trust
