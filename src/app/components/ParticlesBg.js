"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { loadFull } from "tsparticles";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

export default function ParticlesBg() {
  const [particleColor, setParticleColor] = useState("#8b5cf6");

  useEffect(() => {
    const updateColor = () => {
      // Always use the muted text color from CSS variable
      const muted = getComputedStyle(document.documentElement)
        .getPropertyValue("--muted-text")
        .trim();
      setParticleColor(muted || "rgba(120,120,140,0.4)"); // fallback muted
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: { color: "transparent" },
    particles: {
      number: { value: 260, density: { enable: true, area: 800 } },
      color: { value: particleColor },
      opacity: { value: 0.7 },
      size: { value: 1.7, random: true },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        outModes: { default: "out" },
      },
      shape: { type: "circle" },
    },
    detectRetina: true,
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
