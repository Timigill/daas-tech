import React from 'react'
import Hero from '../components/about/hero'
import Trust from '../components/trust'
import Who from '../components/about/who-we-are'
import Values from '../components/about/our-values'
import Why from '../components/about/why-us'
import Team from '../components/about/our-team'
import Faq from '../components/home/faq'
import CallToAction from '../components/home/CallToAction'
import "@/app/globals.css"

export default function about() {
  return (
    <div>

      <Hero />
      <Who />
      <Values />
      <Why/>
      <Team/>
      <Faq/>
      <CallToAction/>
    </div>
  )
}
