import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function call() {
    return (
        <div>
            <div className="d-flex flex-column align-items-center text-center mt-5 px-3">
                <h1
                    className="mt-3"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "2.5rem",
                        lineHeight: 1.1,
                        color: "#ffffff",
                        maxWidth: 460,
                        margin: "0 auto",
                    }}
                >
                    Let AI do the Work so you can Scale Faster
                </h1>
                <p
                    className="mt-3 text-white-50"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1rem",
                        maxWidth: 500,
                        margin: "0 auto",
                    }}
                >
                    Book a Call Today and Start Automating
                </p>

                <button className="mt-3 rounded-2 py-2 px-3 bg-primary border-0 d-flex align-items-center justify-content-center gap-1">
                    Book a free call <MdOutlineArrowOutward size={20} style={{ color: "white" }} />
                </button>
            </div>
        </div>
    )
}

export default call
