// components/PricingSection.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.scss';

const plans = [
  {
    name: 'Starter',
    monthly: 49,
    annually: 37,
    gradient: 'bottom-to-top',
    features: [
      'Basic workflow automation',
      'AI-powered personal assistant',
      'Standard analytics & reporting',
      'Email & chat support',
      'Up to 3 AI integrations'
    ]
  },
  {
    name: 'Professional',
    monthly: 99,
    annually: 75,
    gradient: 'top-to-bottom',
    features: [
      'Advanced workflow automation',
      'AI-driven sales & marketing tools',
      'Enhanced data analytics & insights',
      'Priority customer support',
      'Up to 10 AI integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    gradient: 'bottom-to-top',
    features: [
      'Fully customizable AI automation',
      'Dedicated AI business consultant',
      'Enterprise-grade compliance',
      '24/7 VIP support',
      'Unlimited AI integrations'
    ]
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (

    <section
         className="d-flex flex-column align-items-center text-center"
  style={{
    padding: "55px 1rem", 
    background: "#000",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    overflowX: "hidden"   
  }}
        >
          <style>
            {`
              @keyframes scrollTasks {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
    
              .task-scroll-wrapper {
                height: 190px;
                overflow: hidden;
                position: relative;
              }
    
              .task-scroll {
                display: flex;
                flex-direction: column;
                gap: 10px;
                animation: scrollTasks 10s linear infinite;
              }
    
              .task-scroll-wrapper:hover .task-scroll {
                animation-play-state: paused;
              }
            `}
          </style>
    
          <motion.span
            className="badge mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: 1,
              padding: "8px 18px",
              borderRadius: 20,
            }}
          >
            Pricing
          </motion.span>
    
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontWeight: 700,
              fontSize: "2.5rem",
              lineHeight: 1.15,
              marginBottom: 16,
              maxWidth: 500,
            }}
          >
            The Best AI Automation, at the Right Price
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
           Choose a plan that fits your business needs and start automating with AI
          </motion.p>
    <div className={styles.pricingSection}>
      <div className={styles.toggleContainer}>
        <span>Monthly</span>
        <label className={styles.switch}>
          <input type="checkbox" onChange={() => setIsAnnual(!isAnnual)} />
          <span className={styles.slider}></span>
        </label>
        <span>Annually</span>
      </div>

      <div className={styles.cardsWrapper}>
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`${styles.card} ${styles[plan.gradient]} ${plan.popular ? styles.popular : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h4 className={styles.planName}>{plan.name}</h4>
            <p className={styles.planPrice}>
              {typeof plan.price === 'string'
                ? plan.price
                : `$${isAnnual ? plan.annually : plan.monthly}`}<span>/month</span>
            </p>
             <p style={{ textAlign: 'left', fontSize: '14px'}}>
                Perfect for small businesses starting with AI automation.
             </p>
            <motion.button
              className={`${styles.planBtn} ${plan.popular ? styles.popularBtn : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {plan.price === 'Custom'
                ? 'Schedule a call'
                : 'Choose this plan'}
            </motion.button>
             <ul className={styles.featureList}>
              {plan.features.map((feat, idx) => (
                <li key={idx}>✓ {feat}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
