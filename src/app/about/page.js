import React from 'react'
import Hero from '../components/about/hero'
import Who from '../components/about/who-we-are'
import Values from '../components/about/our-values'
import "@/app/globals.css"

export default function about() {
  return (
    <div>

      <Hero />
      <Who />
      <br></br>
      <Values />
    </div>
  )
}
