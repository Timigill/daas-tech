import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function call() {
    return (
        <div className='d-flex flex-column align-items-center text-center'>
            <div
                className="d-flex flex-column align-items-center text-center mt-5 px-3"
                style={{
                    background: "linear-gradient(90deg, #2D0B52, #0B0B0B)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                    borderRadius: "12px",
                    padding: "3rem",
                    maxWidth: "700px",       // 👈 Limits how wide it gets
                    width: "100%",           // 👈 Makes it responsive
                }}
            >
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
                        maxWidth: 600,
                        margin: "0 auto",
                    }}
                >
                    Book a Call Today and Start Automating
                </p>

                <button
                    className="mt-3 rounded-2 py-2 px-3 border-0 d-flex align-items-center justify-content-center gap-1"
                    style={{
                        background: "rgba(139,92,246)",
                        color: "#fff",
                    }}
                >
                    Book a free call <MdOutlineArrowOutward size={20} style={{ color: "white" }} />
                </button>
            </div>
        </div>

    )
}

export default call
