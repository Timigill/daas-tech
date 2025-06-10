import React from 'react'
import Hero from "./components/home/hero";
import HomeServices from './components/home/HomeServices';
import About from './components/home/about';
import Blog from './components/home/blog';
import Contact from './components/home/contact';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices/>
      <About />
      <Blog />
      <Contact />

    </>
  );
}
