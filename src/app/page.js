'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <div className="text-center" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Empowering Your Digital Dreams
          </h1>
          <a href="/contact" className="btn btn-primary btn-lg shadow-sm px-5 py-3" style={{ fontWeight: 600 }}>
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Services</h2>
            <p className="text-muted">We help you grow your business with modern solutions.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm service-card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-globe fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold">Website Development</h5>
                  <p className="card-text text-muted">Modern, responsive, and scalable websites tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm service-card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-brush fs-1 text-success"></i>
                  </div>
                  <h5 className="card-title fw-bold">Graphic Design</h5>
                  <p className="card-text text-muted">Creative visuals and branding to make your business stand out.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm service-card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-share fs-1 text-info"></i>
                  </div>
                  <h5 className="card-title fw-bold">Social Media</h5>
                  <p className="card-text text-muted">Engage your audience and grow your presence across platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .service-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
      `}</style>
    </div>
  );
}
