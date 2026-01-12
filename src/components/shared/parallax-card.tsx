'use client';

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxCardProps {
  children: ReactNode;
  speed?: number;          
  tabletSpeed?: number;    
  mobileSpeed?: number;
  className?: string;
}

export default function ParallaxCard({
  children,
  speed = -50,
  tabletSpeed = -30,
  mobileSpeed = -15,
  className = "",
}: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        // Tailwind-like breakpoints
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 640px) and (max-width: 1023px)",
        isMobile: "(max-width: 639px)",
      },
      (context) => {
        const ctx = context.conditions;
        let appliedSpeed = speed;

        if (ctx?.isTablet) appliedSpeed = tabletSpeed;
        if (ctx?.isMobile) appliedSpeed = mobileSpeed;

        gsap.to(cardRef.current, {
          yPercent: appliedSpeed,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    );

    return () => {
      mm.revert(); 
    };
  }, [speed, tabletSpeed, mobileSpeed]);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}
