import React from 'react'
import { MdOutlineArrowOutward, MdOutlineArrowForward } from "react-icons/md";
import Trust from '../trust';
function hero() {
  return (
    <div className="d-flex flex-column align-items-center vh-50 text-center mt-5 p-5 px-3">
      <div className='py-4'>
        {/* Tagline */}
        <span
          className="badge px-3 py-2"
          style={{
            padding: "4px 10px",
            fontSize: 12,
            color: "#fff",
            border: "1px solid rgb(17 17 17)",
            borderRadius: 8,
            width: "fit-content",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Careers
        </span>

        {/* Main Heading */}
        <h1
          className="mt-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          Help us transform the hiring Process Join
          our team of innovators!
        </h1>

        {/* Subheading */}
        <button className="btn go-back-btn mt-3" type="button">
          <span className="ps-1 go-back-content">
            Veiw Jobs Opening
            <MdOutlineArrowOutward className="go-back-icon default-icon" size={20} />
            <MdOutlineArrowForward className="go-back-icon hover-icon" size={20} />
          </span>
        </button>
      </div>
      <Trust/>
    </div>
    
  )
}

export default hero
