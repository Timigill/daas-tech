import React from 'react';
import { IoStar } from "react-icons/io5";

function Candidates() {
    return (
        <div
            className="d-flex flex-column align-items-center text-center py-5 px-3"
            style={{
                background: "radial-gradient(circle, rgba(164, 122, 255, 0.1), rgba(0,0,0,1))",
                width: "100%",
            }}
        >
            <h1
                className="mt-2"
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "2.2rem",
                    lineHeight: 1.2,
                    color: "#ffffff",
                    maxWidth: "850px",
                    margin: "0 auto",
                }}
            >
                Loved by candidates, trusted by industry leaders
            </h1>

            <ol
                className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-4"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
                {[...Array(5)].map((_, index) => (
                    <li key={index}>
                        <IoStar size={35} color="#facc15" />
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Candidates;
