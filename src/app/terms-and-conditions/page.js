'use client';
import React from 'react';
import { motion } from "framer-motion";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" }
  }),
};

// Terms & Conditions Data
const termsData = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By visiting our site, engaging with our services, or entering into a project with us, you agree to comply with these Terms. If you do not agree, please refrain from using our services.",
  },
  {
    title: "2. Who We Are",
    description:
      "DaaS Tech is a remote-first digital solutions company offering services including, but not limited to, web development, UI/UX design, SEO, branding, and digital marketing.",
  },
  {
    title: "3. Use of the Website",
    list: [
      "Trying to hack us? We admire the confidence — but no gain, just in vain.",
      "You must not post or transmit any unlawful, threatening, or harmful content.",
      "You agree not to reproduce, duplicate, copy or resell any part of our website or content."
    ],
  },
  {
    title: "4. Intellectual Property",
    list: [
      "All content on this website — including text, graphics, logos, icons, and code — is the property of DaaS Tech or its licensors.",
      "No part may be copied or used without written permission.",
      "Our branding (logo, name, slogans) is protected under applicable laws."
    ],
  },
  {
    title: "5. Service Agreements",
    list: [
      "Projects, deliverables, and timelines are defined in individual contracts or proposals.",
      "Payments, revisions, and termination clauses are governed by those agreements.",
      "Failure to pay or cooperate may result in project delays or cancellations."
    ],
  },
  {
    title: "6. Privacy Policy",
    description:
      "By using our website, you agree to our Privacy Policy, which outlines how we collect and handle your data.",
  },
  {
    title: "7. Third-Party Tools and Links",
    description:
      "Our website may contain links to external tools, services, or platforms. We are not responsible for the content, privacy practices, or actions of any third parties.",
  },
  {
    title: "8. Limitation of Liability",
    list: [
      "DaaS Tech shall not be liable for any indirect or consequential losses.",
      "Downtime, loss of profits, or data loss arising from use of our services or site."
    ],
  },
  {
    title: "9. Termination",
    description:
      "We reserve the right to suspend or terminate access to our services or website without prior notice, if you breach these terms or harm the reputation of DaaS Tech.",
  },
  {
    title: "10. Changes to Terms",
    description:
      "We may update these terms at any time. Changes will be posted on this page with the updated date. Continued use of the site means you accept the changes.",
  },
  {
    title: "11. Governing Law",
    description:
      "These terms are governed by the laws of Pakistan, and any disputes shall be subject to the courts of Faisalabad, Punjab.",
  },
];

function Page() {
  return (
    <div className="privacy-page">
      {/* Top Banner */}
      <div className="banner-container w-100 h-50vh">
        <section
          className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative"
          style={{
            minHeight: "50vh",
            width: "100%",
            overflow: "hidden",
            fontFamily: "Inter, sans-serif",
            padding: "0 1rem",
            backgroundColor: "var(--background)",
            boxShadow: "0 4px 20px var(--boxShadow)",
          }}
        >
          <header
            style={{
              position: "relative",
              zIndex: 2,
              background: "var(--background)"
            }}
          >
            <motion.span
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="badge mb-3"
              style={{
                color: "var(--foreground)",
                fontSize: 12,
              }}
            >
              Updated December 2024
            </motion.span>

            <motion.h1
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="fw-bold hero-title mb-2"
              style={{
                fontWeight: 600,
                fontSize: "2.3rem",
                lineHeight: 1.1,
                color: "var(--foreground)",
                maxWidth: "100%",
                width: "100%",
                padding: "0 1rem"
              }}
            >
              Terms and Conditions That Empower  
              <br className="d-none d-md-block" />
            </motion.h1>

            <motion.p
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mb-4"
              style={{
                fontSize: 15,
                maxWidth: 550,
                margin: "0 auto",
                padding: "0 1rem",
                color: "var(--foreground)"
              }}
            >
              Because Innovation Needs Structure.  
              <br className="d-none d-md-block" /> 
              Our Commitments, Your Confidence.
            </motion.p>
          </header>
        </section>
      </div>

      {/* Terms & Conditions */}
      <div className="privacy-content px-md-5" style={{ maxWidth: "80%", margin: "0 auto" }}>
        <ul style={{ paddingLeft: 0, listStyle: "none" }}>
          {termsData.map((term, index) => (
            <motion.li
              key={index}
              className="mb-4"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 3} // stagger starts after hero
            >
              <h5 className="privacy-heading">{term.title}</h5>
              {term.description && (
                <p className="privacy-description">{term.description}</p>
              )}
              {term.list && (
                <ul>
                  {term.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Contact */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={termsData.length + 4}
          className="mt-4"
        >
          <h5 className="privacy-heading">📩 Contact Us</h5>
          <p className="privacy-description">
            For questions or concerns, contact us at:<br />
            <a href="mailto:founder@daastech.info" style={{ color: "#8b5cf6" }}>
              founder@daastech.info
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
