import React from 'react'
import Hero from '../components/about/hero'
import Who from '../components/about/who-we-are'
import Values from '../components/about/our-values'
import Why from '../components/about/why-us'
import Team from '../components/about/our-team'
import Faqs from '../components/about/faqs'
import Call from '../components/book-call'
import "@/app/globals.css"

export default function about() {
  return (
    <div>

      <Hero />
      <Who />
      <br/>
      <br/>
      <br/>
      <br/>
      <Values />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Why/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Team/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Faqs/>
      <br/><br/>
      <Call/>
    </div>
  )
}
