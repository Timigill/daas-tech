'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(2)
  const [cardWidth, setCardWidth] = useState(400)

  useEffect(() => {
   const handleResize = () => {
  if (window.innerWidth < 640) { // sm
    setCardsToShow(1)
    setCardWidth(window.innerWidth * 0.85)
  } else if (window.innerWidth < 1024) { // md/lg
    setCardsToShow(2)
    setCardWidth(320)
  } else {
    setCardsToShow(2)
    setCardWidth(400)
  }
}

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const testimonials = [
    {
      text: "DaaS Learn has given me a powerful edge in continuous growth. The structured MERN stack course and practical projects provide a level of clarity traditional learning can't match. A phenomenal platform for mastering real-world skills. Highly recommended!",
      author: "Adeel Khan",
      role: "Software Engineer",
      image: "/pro1.jpg"
    },
    {
      text: "With DaaS Learn, my learning process is faster, more reliable, and engaging. The step-by-step guidance and hands-on practice are invaluable. This is a platform every aspiring developer should consider!",
      author: "Maria Sheikh",
      role: "Computer Science Graduate",
      image: "/pro2.jpg"
    },
    {
      text: "DaaS Learn has enhanced my career journey significantly. It's intuitive, supportive, and provides 5-star guidance every step of the way. This platform has become a critical part of how I keep improving my skills!",
      author: "Hassan Raza",
      role: "Frontend Developer",
      image: "/pro3.jpg"
    },
    {
      text: "DaaS Learn transformed the way I approach learning! The practical projects and guided learning paths give me confidence to apply my skills in real-world scenarios. A 5-star solution for anyone building a career in tech.",
      author: "Sana Ali",
      role: "Junior Web Developer",
      image: "/pro4.jpg"
    },
    {
      text: "DaaS Learn's comprehensive curriculum and hands-on approach helped me transition from a beginner to a confident developer. The real-world projects and mentorship are game-changers for anyone serious about tech!",
      author: "Ahmed Hassan",
      role: "Full Stack Developer",
      image: "/pro1.jpg"
    },
    {
      text: "The structured learning path and practical exercises at DaaS Learn made complex concepts easy to understand. I've gained the skills and confidence needed to excel in the competitive tech industry!",
      author: "Fatima Zahra",
      role: "UI/UX Designer",
      image: "/pro2.jpg"
    }
  ]

  // Infinite scroll wrap
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsToShow : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsToShow ? 0 : prev + 1
    )
  }

  return (
    <section className="py-5">
      <div className="px-3">
        <div className="m-auto testimonial-container" 
        style={{
background:"var(--background)"

        }}
        >

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="testimonial-heading text-center mb-4"
            style={{
              color:"var(--foreground)"
            }}
          >
            Why Businesses Love Our Digital Solutions
          </motion.h2>

          {/* Navigation buttons */}
          <div className="d-flex justify-content-center gap-2 mb-4">
            <button onClick={handlePrev} className="testimonial-nav-btn rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: 35, height: 35,
                 border: "2px solid var(--border-color)", 
              background: "var(--background)" }}>
              <FaChevronLeft size={14} color="var(--accent)" />
            </button>
            <button onClick={handleNext} className="testimonial-nav-btn rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: 35, height: 35, border: "2px solid var(--border-color)", background: "var(--background)" }}>
              <FaChevronRight size={14} color="var(--accent)" />
            </button>
          </div>

          {/* Slider */}
          <div className="testimonial-wrapper overflow-hidden">
            <motion.div
              className="d-flex gap-3 testimonial-track"
              animate={{ x: `-${currentIndex * cardWidth}px` }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
              style={{ width: `${testimonials.length * cardWidth}px`,
            background:"var(--background)",
            }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card p-3 rounded-4 shadow-sm"
                  style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}>
                  
                  {/* Stars */}
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="testimonial-star me-1" size={14} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mb-3 testimonial-text">{t.text}</p>

                  {/* Author */}
                  <div className="d-flex align-items-center gap-2">
                    <div className="testimonial-avatar rounded-circle overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.author}
                        width={40}
                        height={40}
                        className="testimonial-avatar-img"
                      />
                    </div>
                    <div>
                      <h3 className="fw-bold mb-1 testimonial-author">{t.author}</h3>
                      <p className="testimonial-role mb-0">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
