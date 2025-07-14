'use client';


import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './DaaSTechLoader.css';
import '@fontsource/league-spartan';

const nodes = [
  { cx: 290, cy: 156, r: 2.9 },  // 0
  { cx: 130, cy: 367, r: 2.2 },  // 1
  { cx: 284, cy: 275, r: 2.6 },  // 2
  { cx: 177, cy: 205, r: 2.2 },  // 3
  { cx: 240, cy: 160, r: 2.5 },  // 4
  { cx: 173, cy: 234, r: 2.0 },  // 5
  { cx: 252, cy: 296, r: 2.3 },  // 6
  { cx: 221, cy: 292, r: 2.5 },  // 7
  { cx: 193, cy: 193, r: 2.6 },  // 8
  { cx: 200, cy: 313, r: 2.2 },  // 9
  { cx: 293, cy: 248, r: 2.7 },  // 10
  { cx: 217, cy: 214, r: 2.5 },  // 11
  { cx: 239, cy: 248, r: 2.6 },  // 12
  { cx: 200, cy: 278, r: 2.2 },  // 13
  { cx: 126, cy: 266, r: 2.1 },  // 14
  { cx: 189, cy: 145, r: 2.8 },  // 15
  { cx: 264, cy: 180, r: 2.7 },  // 16
  { cx: 248, cy: 222, r: 2.4 },  // 17
  { cx: 150, cy: 156, r: 2.9 },  // 18
  { cx: 140, cy: 290, r: 2.4 }   // 19
];





const connections = [
  [0, 4], [0, 16],
  [1, 9], [1, 19],
  [2, 6], [2, 10],
  [3, 5], [3, 8],
  [4, 17], [4, 16],
  [5, 11], [5, 14],
  [6, 7], [6, 12],
  [7, 12],
  [8, 15], [8, 11],
  [9, 13], [9, 19],
  [10, 12], [10, 17],
  [11, 13],
  [12, 13],
  [14, 15],
  [15, 18],
  [16, 17],
  [18, 19]
];




// Scaling factor for the 150x150 viewBox (assuming original was 512x512)
const SCALE = 150 / 512;

export default function DaaSTechLoader() {
  const progressControls = useAnimation();
  const textControls = useAnimation();
  const nodesControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        nodesControls.start(i => ({
          opacity: 1,
          scale: [1, 1.6, 1],
          transition: {
            delay: i * 0.5,
            duration: 1,
            repeat: 2,
            ease: 'easeInOut',
          },
        }));

        await progressControls.start({
          width: '100%',
          transition: { duration: 2, ease: 'easeInOut' },
        });

        await textControls.start({
          opacity: 1,
          transition: { duration: 3, ease: 'easeInOut' },
        });

        await new Promise(res => setTimeout(res, 500));

        await textControls.start({
          opacity: 0,
          transition: { duration: 0.2 },
        });

        await progressControls.start({
          width: '0%',
          transition: { duration: 0.3 },
        });

        await nodesControls.start(() => ({
          opacity: 0.4,
          transition: { duration: 0.3 },
        }));

        await new Promise(res => setTimeout(res, 100));
      }
    };

    animate();
  }, []);

  return (
    <div className="loader-container">
      <svg viewBox="0 0 150 150" className="loader-svg" xmlns="http://www.w3.org/2000/svg">
        {/* Head Silhouette Image */}
        <image
          href="/NueralHeadDS-TI.svg"
          x="0"
          y="0"
          width="100%"
          height="100%"
          opacity="1"
        />

        {/* Connection Lines */}
        {connections.map(([from, to], index) => (
          <motion.line
            key={index}
            x1={nodes[from].cx * SCALE}
            y1={nodes[from].cy * SCALE}
            x2={nodes[to].cx * SCALE}
            y2={nodes[to].cy * SCALE}
            stroke="#A259FF"
            strokeOpacity="0.5"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.2 }}
          />
        ))}

        {/* Animated Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx * SCALE}
            cy={node.cy * SCALE}
            r={node.r * 1}
            fill="#A259FF"
            initial={{ opacity: 0.5 }}
            animate={nodesControls}
            custom={i}
          />
        ))}
      </svg>

      {/* Progress Bar */}
      <div className="progress-bar-outline">
        <motion.div className="progress-bar-fill" animate={progressControls} />
      </div>

      {/* Branding Text */}

      <motion.div className="brand-text" animate={textControls}>
        <h1 style={{ fontFamily: '"League Spartan", sans-serif', fontSize: '28px', fontWeight: 'bolder' }}>
          DaaS <span style={{ color: '#A259FF' }}>

            Tech

          </span>

        </h1>
        <p style={{ fontSize: '14px', fontWeight: "bold", textAlign: 'center', fontFamily: '"Poppins", sans-serif' }}>
          INNOVATIONS
        </p>
      </motion.div>

    </div>
  );
}
