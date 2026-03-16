"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-px bg-accent mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading text-secondary uppercase tracking-widest leading-tight mb-6 drop-shadow-md"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs md:text-sm font-body text-secondary/80 max-w-2xl mx-auto uppercase tracking-[0.2em] leading-loose drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
