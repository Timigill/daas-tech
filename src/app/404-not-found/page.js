import React from 'react'
import { MdOutlineArrowOutward, MdOutlineArrowForward } from "react-icons/md";

function page() {
    return (
        <div className="d-flex flex-column align-items-center text-center mt-5 ">
            <div>
                {/* Tagline */}
                <span
                    className="badge px-3 py-2"

                    style={{
                        padding: "4px 10px",
                        fontSize: 12,
                        color: "#fff",
                        // background: "#1e1e23",
                        border: "1px solid rgb(17 17 17)",
                        borderRadius: 8,
                        width: "fit-content",
                        fontWeight: 500,
                        marginBottom: 12,
                    }}

                >
                    Page not found
                </span>

                {/* Main Heading */}
                <h1
                    className="mt-1"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        // fontSize: "3.5rem",
                        lineHeight: 1.1,
                        color: "#ffffff",
                        maxWidth: 700,
                        margin: "0 auto",
                    }}
                >
                    AI Couldn’t Predict This One!
                </h1>

                {/* Subheading */}
                <p
                    className="mt-3 text-white-50"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1rem",
                        maxWidth: 500,
                        margin: "0 auto",
                    }}
                >
                    Even AI isn’t perfect—this page seems to be missing! Let’s get you back on track. Head back home.
                </p>

                <button className="btn go-back-btn mt-3" type="button">
                    <span className="go-back-content">
                        Go Back Home
                        <MdOutlineArrowOutward className="go-back-icon default-icon" size={20} />
                        <MdOutlineArrowForward className="go-back-icon hover-icon" size={20} />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default page
