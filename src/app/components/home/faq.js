'use client';
import React, { useState } from 'react';
import styles from './faq.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
  question: "How can digital solutions help grow my business?",
  answer: "Our digital services—like custom websites, engaging flyers, and impactful social media marketing—help you reach your audience more effectively, build your brand, and drive measurable results.",
},
{
  question: "Do I need technical knowledge to use your services?",
  answer: "Not at all! We handle all the technical aspects for you. Whether it's launching your website or designing your next campaign, we make the process simple and stress-free for everyone.",
},
{
  question: "Is it difficult to get started with you?",
  answer: "Absolutely not. Our onboarding process is smooth and collaborative. From the first consultation to the final delivery, we keep things easy, clear, and tailored to your vision.",
},
{
  question: "What types of businesses can benefit from your services?",
  answer: "We serve a wide range of clients—from startups and small businesses to established brands. Whether you need a digital presence, branding, or regular promotional content, we have solutions to suit your industry and goals.",
},
{
  question: "What kind of support do you offer?",
  answer: "We’re here every step of the way. You’ll have direct access to our support team through chat, calls, or email. We also offer revisions and consultations to ensure you’re always satisfied with the final result.",
},

];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqWrapper} style={{ overflowX: 'hidden' }}>
      <motion.span
        className={styles.badge}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        FAQs
      </motion.span>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Businesses Love Our Digital Solutions
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Real businesses, real results with Smart Solutions.
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
