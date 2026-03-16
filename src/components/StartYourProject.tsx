"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type StartYourProjectData } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function StartYourProject({
  data,
  className,
}: {
  data: StartYourProjectData;
  className?: string;
}) {
  return (
    <section className={cn("py-24 lg:py-32 bg-secondary", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative min-h-[500px] flex items-center justify-center p-8 editorial-border">
          {/* Background */}
          <div className="absolute inset-0 z-0 p-2">
            <div className="relative w-full h-full overflow-hidden bg-primary">
              <Image
                src={data.image}
                alt="Start Your Project"
                fill
                className="object-cover opacity-40 mix-blend-luminosity"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl mx-auto text-center p-8 md:p-16 bg-primary/90 backdrop-blur-sm border border-white/10">
            <div className="w-px h-16 bg-accent mx-auto mb-8" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading text-secondary mb-6 uppercase tracking-widest leading-tight"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs font-body mb-10 text-secondary/70 uppercase tracking-[0.2em] leading-loose max-w-md mx-auto"
            >
              {data.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href={data.ctaLink}
                className="inline-block border border-accent text-accent px-10 py-4 font-body text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-primary transition-all duration-500"
              >
                {data.ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
