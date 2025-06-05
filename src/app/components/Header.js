'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "react-feather";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky-top" style={{ background: "#000", zIndex: 100, borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <nav className="navbar navbar-expand-lg " style={{ background: "#000" }}>
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
              <img src="/logo.jpg" alt="Logo" style={{ height: 50, opacity:"2"}} />
              {/* <span className="fw-bold text-white" style={{ fontFamily: 'Poppins', fontSize: 25 }}>DaaS Tech </span> */}
            </Link>
            <button
              className="navbar-toggler border-0 text-white"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
              <ul className="navbar-nav align-items-center me-3">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.name}>
                    <Link
                      className={`nav-link px-3${pathname === link.path ? " active" : ""}`}
                      href={link.path}
                      style={{
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: 15,
                        opacity: pathname === link.path ? 1 : 0.85,
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn btn-primary  px-3 py-2 ms-2" style={{ background: "#8b5cf6", border: "none", fontWeight: 600 , fontSize: 13 }}>
                Book a Call
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-menu-overlay${mobileMenuOpen ? " open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(10,6,18,0.95)",
          zIndex: 1050,
          display: mobileMenuOpen ? "block" : "none",
        }}
      >
        <div
          ref={menuRef}
          className={`mobile-menu`}
          style={{
            width: 260,
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1100,
            background: "#18122b",
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            className="btn btn-link ms-auto mb-4 p-0 text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <ul className="navbar-nav flex-column gap-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  className={`nav-link${pathname === link.path ? " active" : ""}`}
                  href={link.path}
                  style={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: 18,
                    opacity: pathname === link.path ? 1 : 0.85,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item mt-3">
              <Link href="/signup" className="btn btn-primary rounded-pill w-100" style={{ background: "#8b5cf6", border: "none", fontWeight: 600 }}>
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx global>{`
        .nav-link.active {
          color: #8b5cf6 !important;
          font-weight: 700;
          opacity: 1 !important;
        }
        .navbar {
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}