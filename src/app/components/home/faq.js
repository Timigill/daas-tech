'use client';
import React, { useState } from 'react';
import styles from './faq.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "How can AI automation help my business?",
    answer: "AI automation streamlines repetitive tasks, enhances productivity, and allows your team to focus on high-value activities. It can improve efficiency in areas like customer support, sales, and data management.",
  },
  {
    question: "Do I need technical knowledge to use AI Automation?",
    answer: "Not at all! Our platform is designed for ease of use, allowing anyone to set up and manage AI automation without needing technical expertise. We also provide comprehensive support and resources.",
  },
  {
    question: "Is AI automation difficult to integrate?",
    answer: "No, our tools are built with integration in mind. We offer APIs, no-code tools, and onboarding support.",
  },
  {
    question: "What industries can benefit from AI automation?",
    answer: "AI automation is versatile and can benefit various industries including e-commerce, healthcare, finance, manufacturing, and more. Any business that relies on repetitive tasks can find value in AI solutions.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including live chat, email assistance, and a detailed knowledge base. Our team is here to help you with any questions or issues you may encounter.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqWrapper}>
      <motion.span
        className={styles.badge}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.span>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Businesses Love Our AI Solutions
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Real businesses, real results with AI automation.
      </motion.p>

      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqCard} ${openIndex === index ? styles.open : ''}`}
            onClick={() => toggle(index)}
          >
            <div className={styles.questionRow}>
              <h4>{faq.question}</h4>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.answer}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
