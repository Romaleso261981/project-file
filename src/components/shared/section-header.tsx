"use client";
import React from "react";
import BlurText from "../animation/blur-effect";

interface SectionHeaderProps {
  title?: React.ReactNode;
  colors?: Record<string, string>;
  className?: string;
  descriptionClass?: string;
  description?: string | string[]; // single or multiple description
  titleClass?: string;
}

export default function SectionHeader({
  title,
  description,
  className = "",
  descriptionClass = "",
  titleClass = "",
  colors = {},
}: SectionHeaderProps) {
  return (
    <div
      className={`space-y-3 mb-10 text-center md:text-left ${className}`}
    >
      <BlurText
        text={title}
        colors={colors}
        delay={200}
        animateBy="words"
        direction="right"
        className="d2c_title uppercase justify-center md:justify-start"
        titleClass={titleClass}
        rootMargin="100px"
      />

      {Array.isArray(description) ? (
        description.map((desc, index) => (
          <p
            key={index}
            data-aos="fade-up"
            className={descriptionClass}
          >
            {desc}
          </p>
        ))
      ) : description ? (
        <p data-aos="fade-up" className={descriptionClass}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
