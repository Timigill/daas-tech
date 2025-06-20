'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.scss';
import Image from 'next/image';

const testimonials = [
  {
    name: 'James Carter',
    role: 'CEO at TechFlow Solutions',
    image: '/TestimonialPics/David.png',
    stars: 5,
    text: 'Digital Solutions transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!'
  },
  {
    name: 'Sophia Martinez',
    role: 'Operations Manager at NexaCorp',
    image: '/TestimonialPics/Sophia.png',
    stars: 5,
    text: 'With Smart Solutions, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while Digital Solutions handles the rest!'
  },
  {
    name: 'David Reynolds',
    role: 'Head of Sales at GrowthPeak',
    image: '/TestimonialPics/James.png',
    stars: 4,
    text: 'Digital Solutions-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!'
  },
  {
    name: 'Emily Wong',
    role: 'Customer Success Lead at SupportHive',
    image: '/TestimonialPics/Emily.png',
    stars: 5,
    text: 'Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to DaaS Tech Innovations!'
  }
];

const Testimonials = () => {
  return (
    <section
              className="d-flex flex-column align-items-center text-center"
              style={{
                padding: "55px 1rem",
                background: "#000",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                overflowX: "hidden",
                maxWidth: "100vw",
                width: "100%",
              }}
            >
              <motion.span
                className="badge mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  background: "rgba(139,92,246,0.15)",
                  color: "#8b5cf6",
                  fontWeight: 600,
                  fontSize: 15,
                  letterSpacing: 1,
                  padding: "8px 18px",
                  borderRadius: 20,
                }}
              >
                Testimonials
              </motion.span>
        
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                style={{
                  fontWeight: 700,
                  // fontSize: "2.5rem",
                  lineHeight: 1.15,
                  marginBottom: 16,
                  maxWidth: 500,
                }}
              >
                Why Businesses Love Our AI Solutions
              </motion.h2>
        
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  fontSize: 15,
                  color: "#bdbdbd",
                  maxWidth: 600,
                  margin: "0 auto 40px auto",
                }}
              >
               Real businesses, real results with AI automation.
              </motion.p>
    <section className={styles.testimonialSection}>
      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.stars}>
              {'★'.repeat(item.stars)}
              {'☆'.repeat(5 - item.stars)}
            </div>
            <p className={styles.text}>“{item.text}”</p>
            <div className={styles.profile}>
             <Image
                 src={item.image}
                 alt={item.name}
                 width={45}
                 height={45}
                 className={styles.avatar}
             />

              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default Testimonials;
