'use client'

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Consistent section styling
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}

// Hero section component
export function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Hero image",
  cta,
}: {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  cta?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 min-h-[60vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-6 lg:px-8 py-12 md:py-24"
          >
            <div className="text-center lg:text-left max-w-4xl">
              <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 text-base text-neutral-600 dark:text-neutral-300 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  {subtitle}
                </p>
              )}
              {cta && <div className="mt-8 sm:mt-12">{cta}</div>}
            </div>
          </motion.div>
        </div>
      </div>
      {imageSrc && (
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

// Card component
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

// Section heading
export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Button styles
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  [x: string]: any;
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";
  
  const variantStyles = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
    outline: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800",
    ghost: "text-neutral-700 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Form input
export function Input({
  label,
  id,
  error,
  className,
  ...props
}: {
  label?: string;
  id: string;
  error?: string;
  className?: string;
  [x: string]: any;
}) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

// Container for auth forms
export function AuthContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
        {children}
      </div>
    </div>
  );
}

// Dashboard container
export function DashboardContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      {children}
    </div>
  );
}
