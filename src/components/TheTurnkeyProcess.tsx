"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type TheTurnkeyProcessData } from "@/types";

export function TheTurnkeyProcess({
  data,
  className,
}: {
  data: TheTurnkeyProcessData;
  className?: string;
}) {
  return (
    <section className={cn("py-24 lg:py-32 bg-secondary editorial-border-b", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-accent">Process</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary uppercase tracking-widest">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 relative">
                <span className="text-6xl font-heading text-border group-hover:text-accent transition-colors duration-700">
                  0{index + 1}
                </span>
                <div className="absolute top-1/2 -translate-y-1/2 left-full w-24 h-px bg-border hidden lg:block -ml-4" />
              </div>
              <h3 className="text-xl font-heading text-primary uppercase tracking-widest mb-4">
                {step.title}
              </h3>
              <p className="text-xs text-text-muted font-body leading-loose max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
