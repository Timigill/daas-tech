'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h2 className="fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</h2>
              <p className="lead text-muted mb-4">
                We are passionate creators, designers, and developers dedicated to empowering your digital dreams. Our mission is to deliver modern, scalable, and creative solutions that help your business grow and stand out.
              </p>
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h6 className="fw-bold mb-1">Our Mission</h6>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
                        To provide innovative and reliable digital services with a human touch.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h6 className="fw-bold mb-1">Our Team</h6>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
                        A diverse group of experts in web, design, and marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/contact" className="btn btn-primary mt-3 px-4 py-2 fw-semibold">
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}