import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick, href, target, rel, download, ...props }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, snappy spring for organic magnetic pull
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const handleMouseMove = (e) => {
    // Only apply on fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Subtle magnetic strength (around 15-20% displacement, capped at 12px)
    const pullX = Math.max(-12, Math.min(12, distanceX * 0.22));
    const pullY = Math.max(-12, Math.min(12, distanceY * 0.22));

    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`magnetic-btn inline-flex items-center justify-center will-change-transform ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

