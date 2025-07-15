
'use client';

import React from 'react';
import { LiaLinkedin } from 'react-icons/lia';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const teamMembers = [
  {
    name: 'Taimoor Gill',
    role: 'Founder & CEO',
     img: '/About-Us/Riyan.png',
    },

  {
    name: 'Sarah Khan',
    role: 'Head of Web Development',
    img: '/About-Us/Sophia.png',
  },
  {
    name: 'Abdullah Sajjad',
    role: 'Marketing Specialist',
    img: '/About-Us/Riyan.png',
  },
];

function Team() {
  return (
    <div
      className="d-flex flex-column align-items-center text-center my-5 py-5 px-3"
      style={{ color: 'var(--foreground)' }}
    >
      {/* Top Texts */}
      <div>
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          style={{
            padding: '4px 10px',
            fontSize: 12,
            color: 'var(--foreground)',
            border: '1px solid var(--border-color)',
            borderRadius: 8,
            background: 'var(--accent)',
            fontWeight: 500,
            width: 'fit-content',
            marginBottom: 12,
          }}
        >
          Our Team
        </motion.span>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={0.5}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--foreground)',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          Meet the Minds Behind DaaS
        </motion.h1>

        <motion.p
          className="mt-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            maxWidth: 550,
            margin: '0 auto',
            color: 'var(--muted-text)',
          }}
        >
          We bring together technology and strategy to create smarter Digital solutions.
        </motion.p>
      </div>

      {/* Team Cards */}
      <div className="container my-4">
        <div className="row justify-content-center g-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="col-12 col-sm-6 col-md-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={2 + index * 0.5}
              viewport={{ once: true }}
            >
              <div
                className="p-3 shadow rounded"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--card-border)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={280}
                  height={280}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
                <div className="d-flex mt-2 justify-content-between align-items-center">
                  <h5
                    className="mb-0"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 15,
                      color: 'var(--foreground)',
                    }}
                  >
                    {member.name}
                  </h5>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <LiaLinkedin
                      size={23}
                      className="text-secondary"
                      style={{ cursor: 'pointer' }}
                    />
                  </a>
                </div>
                <p
                  className="mt-2 text-start"
                  style={{
                    color: 'var(--muted-text)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    marginBottom: 0,
                  }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
