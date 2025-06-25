'use client';
import React from 'react';
import styles from './CallToAction.module.scss';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function CallToAction() {
  return (
    <section className={styles.ctaSection} style={{ overflowX: 'hidden' }}>
    <div className={styles.ctaWrapper}>
      <h2>
        Let Digital Solutions do the Work so<br />
        you can <span>Scale Faster</span>
      </h2>
      <p>Get A Quote Today and Start Your Journey</p>
          <Link href="/quote">
            <button>
              Get A Quote <ArrowRight size={16} />
            </button>
          </Link>
    </div>
    </section>
  );
}
