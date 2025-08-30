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
      text: "DaaS Tech built us a modern website that completely transformed our online presence. We're now attracting more clients and scaling faster than ever!",
      author: "Yildiz Wong",
      role: "CEO at TechFlow Solutions",
      image: "/auther1.jpg"
    },
    {
      text: "Thanks to DaaS Tech's custom web solutions, our sales doubled. The site is fast, responsive, and built with smart analytics that help us engage leads better.",
      author: "David Reynolds",
      role: "Head of Sales at GrowthPeak",
      image: "/auther3.jpg"
    },
    {
      text: "Our new website from DaaS Tech streamlined our operations and improved efficiency. Tasks that took hours are now automated — freeing our team to focus on growth.",
      author: "Sophia Martinez",
      role: "Operations Manager at NexaCorp",
      image: "/auther2.jpg"
    },
    {
      text: "Customer engagement has never been smoother. DaaS Tech redesigned our support portal, cutting response times and boosting customer satisfaction to new heights.",
      author: "Emily Wong",
      role: "Customer Success Lead at SupportHive",
      image: "/auther4.svg"
    },
  ]

  // Create duplicated array for infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  // Infinite scroll wrap with proper looping
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        // Jump to the end of the middle set
        return testimonials.length * 2 - cardsToShow
      }
      return prev - 1
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= testimonials.length * 2 - cardsToShow) {
        // Jump to the beginning of the middle set
        return 0
      }
      return prev + 1
    })
  }

  return (
    <section className="py-5">
      <div className="px-3">
        <div className="m-auto testimonial-container"
          style={{
            background: "var(--background)"

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
              color: "var(--foreground)"
            }}
          >
            Why Businesses Love Our Digital Solutions
          </motion.h2>

          {/* Navigation buttons */}
          <div className="d-flex justify-content-between gap-2 mb-4">
            <button onClick={handlePrev} className="testimonial-nav-btn rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{
                width: 35, height: 35,
                border: "2px solid var(--border-color)",
                background: "var(--background)"
              }}>
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
              transition={{ 
                type: 'tween', 
                // duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                width: `${duplicatedTestimonials.length * cardWidth}px`,
                background: "var(--background)",
              }}
            >
              {duplicatedTestimonials.map((t, index) => (
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
