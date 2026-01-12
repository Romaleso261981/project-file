"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, Transition } from "framer-motion";

type BlurTextProps = {
  text?: React.ReactNode;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  colors?: Record<string, string>;
  titleClass?: string;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k] ?? 0, ...steps.map((s) => s[k] ?? 0)];
  });
  return keyframes;
};

const getColorForIndex = (
  index: number,
  colors?: Record<string, string>
): string | undefined => {
  if (!colors) return undefined;
  if (colors["all"]) return colors["all"];
  for (const key in colors) {
    if (key.includes("-")) {
      const [start, end] = key.split("-").map(Number);
      if (index >= start && index <= end) return colors[key];
    } else if (key.endsWith("+")) {
      const numKey = Number(key.replace("+", ""));
      if (!Number.isNaN(numKey) && index >= numKey) return colors[key];
    } else {
      const numKey = Number(key);
      if (!Number.isNaN(numKey) && index === numKey) return colors[key];
    }
  }
  return undefined;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  titleClass = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  colors = {},
}) => {
  const textString = useMemo(() => {
    if (typeof text === "string") return text;
    if (text === null || text === undefined) return "";
    if (typeof text === "number" || typeof text === "boolean") return String(text);
    return "";
  }, [text]);

  const elements =
    animateBy === "words" ? textString.split(" ") : textString.split("");

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Always include x and y for TypeScript safety
  const defaultFrom = useMemo(() => {
    switch (direction) {
      case "top":
        return { filter: "blur(10px)", opacity: 0, y: -30, x: 0 };
      case "bottom":
        return { filter: "blur(10px)", opacity: 0, y: 30, x: 0 };
      case "left":
        return { filter: "blur(10px)", opacity: 0, x: -30, y: 0 };
      case "right":
        return { filter: "blur(10px)", opacity: 0, x: 30, y: 0 };
      default:
        return { filter: "blur(10px)", opacity: 0, x: 0, y: 0 };
    }
  }, [direction]);

  const defaultTo = useMemo(() => {
    switch (direction) {
      case "top":
        return [
          { filter: "blur(5px)", opacity: 0.5, y: 5, x: 0 },
          { filter: "blur(0px)", opacity: 1, y: 0, x: 0 },
        ];
      case "bottom":
        return [
          { filter: "blur(5px)", opacity: 0.5, y: -5, x: 0 },
          { filter: "blur(0px)", opacity: 1, y: 0, x: 0 },
        ];
      case "left":
        return [
          { filter: "blur(5px)", opacity: 0.5, x: 5, y: 0 },
          { filter: "blur(0px)", opacity: 1, x: 0, y: 0 },
        ];
      case "right":
        return [
          { filter: "blur(5px)", opacity: 0.5, x: -5, y: 0 },
          { filter: "blur(0px)", opacity: 1, x: 0, y: 0 },
        ];
      default:
        return [
          { filter: "blur(5px)", opacity: 0.5, x: 0, y: 0 },
          { filter: "blur(0px)", opacity: 1, x: 0, y: 0 },
        ];
    }
  }, [direction]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <h2
      ref={ref}
      className={`${titleClass} ${className}`}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {elements.map((segment: string, index: number) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        (spanTransition as Transition & { ease: (t: number) => number }).ease =
          easing;

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
              color: getColorForIndex(index, colors) ?? "inherit",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </h2>
  );
};

export default BlurText;
