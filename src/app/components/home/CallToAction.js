'use client';
import React from 'react';
import styles from './CallToAction.module.scss';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
    <div className={styles.ctaWrapper}>
      <h2>
        Let AI do the Work so<br />
        you can <span>Scale Faster</span>
      </h2>
      <p>Book a Call Today and Start Automating</p>
      <button>
        Book a free call <ArrowRight size={16} />
      </button>
    </div>
    </section>
  );
}
