import React from 'react'
import Hero from "./components/home/hero";
import HomeServices from './components/home/HomeServices';
import Services from './components/home/services'
import Process from './components/home/Process'
import CaseStudy from './components/home/Study'
import Benefits from './components/home/Benefits'
import Pricing from './components/home/Pricing'
import Testimonials from './components/home/Testimonials'
import FAQs from './components/home/faq'
import "@/app/globals.css";
import CTA from './components/home/CallToAction'
export default function Home() {
  return (
    <>
     <div className='hide'><Hero /></div> 
      <HomeServices/>
      <Services/>
      <Process/>
      <CaseStudy/>
      <Benefits/>
      <Pricing/> 
      <Testimonials/>
      <FAQs/>
      <CTA/>
    </>
  );
}
