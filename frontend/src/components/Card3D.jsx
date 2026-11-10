import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * High-Performance 3D Perspective Tilt Card with Razor-Sharp Typography
 * - Preserves native subpixel text rendering (no blurry mosaic textures)
 * - Gentle tactile hover tilt
 * - Graceful fallback on touch & reduced motion
 */
export default function Card3D({
  children,
  className = '',
  glare = false,
  maxTilt = 3,
  initial,
  whileInView,
  viewport,
  transition,
  ...props
}) {
  const cardRef = useRef(null);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(springY, [-150, 150], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-150, 150], [-maxTilt, maxTilt]);

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarse || isReduced) {
      setIsTouchOrReduced(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchOrReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  };

  const handleMouseEnter = () => {
    if (!isTouchOrReduced) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (isTouchOrReduced) {
    return (
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={`rounded-2xl transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="w-full [perspective:1200px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'flat', // Flat prevents off-screen font downsampling blur
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased',
        }}
        className={`relative rounded-2xl transition-[box-shadow,border-color] duration-300 ${className}`}
        {...props}
      >
        {/* Crystal-clear content wrapper with native text crispness */}
        <div className="w-full h-full [transform:none]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
