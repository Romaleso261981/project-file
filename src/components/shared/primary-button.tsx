"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
  text?: string | ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  as?: "link" | "button";
  className?: string;
  onClick?: () => void;
};

export default function PrimaryButton({
  text,
  href = "#",
  type = "button",
  as = "link",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClass = `font-primary skew-x-0 relative inline-flex items-center justify-center px-8 py-3 xl:py-[16px] text-lg tracking-normal font-medium capitalize bg-primary text-white overflow-hidden leading-[1] cursor-pointer before:content-[''] before:absolute before:top-full before:bottom-0 before:right-0 before:left-0 before:bg-red-500 before:opacity-0 before:z-[-1] before:transition-all before:duration-[0.5s] hover:before:left-0 hover:before:top-0 hover:before:opacity-100 transition-all duration-600 text-center hover:before:bg-secondary border border-primary hover:border-secondary`;

  const combinedClass = `${baseClass} ${className}`;

  if (as === "button") {
    return (
      <button type={type} className={combinedClass} onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <a href={href} className={combinedClass}>
      {text}
    </a>
  );
}
