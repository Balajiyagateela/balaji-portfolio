import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorState, setCursorState] = useState('default'); // 'default', 'link', 'button', 'card', 'social'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // 1. Detect if touch-only or reduced-motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    document.body.classList.add('custom-cursor-enabled');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instantly position the small center dot using GPU transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing ring loop using lerp (Linear Interpolation) with requestAnimationFrame
    const render = () => {
      // Lerp ring towards mouse with smooth easing
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Contextual Hover Listeners
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('a, button, [role="button"], .project-3d-card, [data-cursor]');
      
      if (!interactiveEl) {
        setCursorState('default');
        return;
      }

      if (interactiveEl.closest('.project-3d-card')) {
        setCursorState('card');
      } else if (interactiveEl.tagName === 'BUTTON' || interactiveEl.classList.contains('magnetic-btn')) {
        setCursorState('button');
      } else if (interactiveEl.closest('.social-icon-btn')) {
        setCursorState('social');
      } else {
        setCursorState('link');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice) {
    return null;
  }

  // Visual classes based on cursor hover state
  const getRingClasses = () => {
    switch (cursorState) {
      case 'button':
        return 'w-12 h-12 -ml-6 -mt-6 border-2 border-[var(--accent)] bg-[var(--cursor-secondary)] scale-110';
      case 'card':
        return 'w-14 h-14 -ml-7 -mt-7 border border-[var(--accent)] bg-[var(--cursor-secondary)] scale-105';
      case 'link':
        return 'w-10 h-10 -ml-5 -mt-5 border border-[var(--accent)] bg-[var(--cursor-secondary)] scale-100';
      case 'social':
        return 'w-9 h-9 -ml-[18px] -mt-[18px] border border-[var(--accent)] bg-[var(--cursor-secondary)] scale-90';
      default:
        return 'w-8 h-8 -ml-4 -mt-4 border border-[var(--accent)] opacity-70';
    }
  };

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Ring with smooth trailing */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full transition-[width,height,margin,border-color,background-color,transform] duration-200 ease-out will-change-transform ${getRingClasses()}`}
      />

      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[var(--cursor-primary)] will-change-transform ${
          cursorState !== 'default' ? 'scale-75 opacity-80' : 'scale-100 opacity-100'
        }`}
      />
    </div>
  );
}
