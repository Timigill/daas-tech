"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "react-feather";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
      <header
        className="sticky-top"
        style={{
          background: "var(--header-bg)",
          zIndex: 100,
          borderBottom: "1px solid var(--header-border)",
        }}
      >
        <nav className="navbar navbar-expand-lg w-100" style={{ background: "var(--header-bg)" }}>
          <div className="nav container-lg container1">
            <Link className="navbar-brand d-flex align-items-center gap-5" href="/">
              <Image 
              loading="lazy"
                src={theme === "dark" ? "/logo2.png" : "/llogo.png"}
                alt="Logo"
                width={150}
                height={40}
                style={{ height: 50, opacity: "1" }}
              />

         {/* <picture>
      <source srcSet="/logo2.png" media="(prefers-color-scheme: dark)" />
      <Image
        src="/llogo.png"
        alt="DaaS Tech Logo"
        width={150}
        height={50}
        style={{ objectFit: "contain" }}
      />
    </picture> */}
            </Link>

            <button
              className="navbar-toggler border-0"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen(true)}
              style={{ color: "var(--header-text)" }}
            >
              <Menu size={24} />
            </button>

            <div className="collapse navbar-collapse ms-5 justify-content-end d-none d-lg-flex align-items-center">
              <ul className="navbar-nav align-items-center ms-5 me-3">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.name}>
                    <Link
                      className={`nav-link px-3${pathname === link.path ? " active" : ""}`}
                      href={link.path}
                      style={{
                        color: "var(--header-text)",
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
              <button
                onClick={toggleTheme}
                className="btn btn-link me-3"
                aria-label="Toggle Theme"
                style={{ color: "var(--header-text)" }}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link
                href="/book-call"
                className="btn px-3 py-2 ms-2"
                style={{
                  background: "var(--accent)",
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
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
          background: "var(--overlay-bg)",
          zIndex: 1050,
          display: mobileMenuOpen ? "block" : "none",
        }}
      >
        <div
          ref={menuRef}
          className="mobile-menu"
          style={{
            width: 260,
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1100,
            background: "var(--mobile-menu-bg)",
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            className="btn btn-link ms-auto mb-4 p-0"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: "var(--header-text)" }}
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
                    color: "var(--header-text)",
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
              <Link
                href="/book-call"
                className="btn rounded-pill w-100"
                style={{
                  background: "var(--accent)",
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Book a call
              </Link>
            </li>
            <li className="nav-item mt-3">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-secondary rounded-pill w-100"
              >
                {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        .nav-link.active {
          color: var(--accent) !important;
          font-weight: 700;
          opacity: 1 !important;
        }
        .navbar {
          box-shadow: none !important;
        }
        .container1 {
          width: 100%;
          max-width: 1280px;
          margin-inline: auto;
          padding-inline: 30px;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
