import React from 'react'
import Hero from '../components/careers/hero'
import Candidates from '../components/careers/candidates'
import Values from '../components/careers/our-values'
import Benefits from '../components/careers/benefits'
import Opening from '../components/careers/jobs-opening'
import Jobs from '../components/careers/jobs'

export default function careers() {
  return (
    <div>
      <Hero/>
      <Candidates/> 
      <Values/>
      <Benefits/> 
      <Opening/>
      <Jobs/>  
      </div>
  )
}
