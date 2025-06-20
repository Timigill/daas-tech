import React from 'react'
import Hero from '../components/about/hero'
import Trust from '../components/trust'
import Who from '../components/about/who-we-are'
import Values from '../components/about/our-values'
import "@/app/globals.css"

export default function about() {
  return (
    <div>

      <Hero />
      <Trust/>
      <Who />
      <br></br>
      <Values />
    </div>
  )
}
