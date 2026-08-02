"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost" | "ctaWhite" | "ctaOutline";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  "aria-label"?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-[7px] bg-accent px-5.5 py-2.75 text-[13px] font-medium tracking-[0.01em] text-white transition-opacity hover:opacity-85",
  ghost:
    "inline-flex items-center justify-center rounded-[7px] border border-cream-20 bg-transparent px-5.5 py-2.75 text-[13px] font-normal tracking-[0.01em] text-cream-60 transition-colors hover:border-cream-45 hover:text-cream",
  ctaWhite:
    "inline-flex items-center justify-center rounded-[7px] bg-white px-7 py-3.5 text-sm font-medium tracking-[0.01em] text-accent transition-opacity hover:opacity-90",
  ctaOutline:
    "inline-flex items-center justify-center rounded-[7px] border border-cream-30 bg-transparent px-7 py-3.5 text-sm font-normal tracking-[0.01em] text-cream-75 transition-colors hover:border-cream-60 hover:text-cream",
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(variants[variant], className);
  const motionProps = {
    whileHover: { y: variant === "primary" ? -1 : 0 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  } as const;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
