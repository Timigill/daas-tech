'use client';
import React from 'react';
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

function Candidates() {
    return (
        <motion.div
            className="d-flex flex-column align-items-center text-center py-5 px-3"
            style={{
                background: "radial-gradient(circle, rgba(164, 122, 255, 0.1), rgba(0,0,0,1))",
                width: "100%",
            }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
        >
            <motion.h1
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
                variants={fadeInUp}
                custom={0.2}
            >
                Loved by candidates, trusted by industry leaders
            </motion.h1>

            <ol
                className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-4"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
                {[...Array(5)].map((_, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInUp}
                        custom={0.4 + index * 0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <IoStar size={35} color="#facc15" />
                    </motion.li>
                ))}
            </ol>
        </motion.div>
    );
}

export default Candidates;
