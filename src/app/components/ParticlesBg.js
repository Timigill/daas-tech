'use client';
import React from "react";
import dynamic from "next/dynamic";
import { loadFull } from "tsparticles";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const particlesOptions = {
  fullScreen: false,
  background: { color: "transparent" },
  particles: {
    number: { value: 120, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
    size: { value: 1.5, random: true },
    move: { enable: true, speed: 0.1, direction: "none", outModes: { default: "out" } },
    shape: { type: "circle" },
  },
  detectRetina: true,
};

export default function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{ position: "absolute" ,position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none" }}
      
    />
  );
}