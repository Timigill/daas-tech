import React from 'react'
import Hero from "./components/home/hero";
import HomeServices from './components/home/HomeServices';
import Services from './components/home/services'
import Process from './components/home/Process'
import CaseStudy from './components/home/Study'
export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices/>
      <Services/>
      <Process/>
      <CaseStudy/>
    </>
  );
}
