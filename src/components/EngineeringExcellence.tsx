"use client";

import { motion } from "framer-motion";
import { type EngineeringExcellenceMeetsLuxuryLivingData } from "@/types";
import Link from "next/link";
import Image from "next/image";

export function EngineeringExcellenceMeetsLuxuryLiving({
  data
}: {
  data: EngineeringExcellenceMeetsLuxuryLivingData;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {data.backgroundImage && (
          <Image
            src={data.backgroundImage}
            alt="Luxury Custom Home"
            fill
            className="object-cover brightness-75 scale-105 animate-[pulseSlow_20s_ease-in-out_infinite_alternate]"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 60 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-px bg-accent mx-auto mb-8"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-secondary leading-tight mb-8 uppercase tracking-widest drop-shadow-lg"
          >
            {data.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-sm md:text-base text-secondary/90 font-body mb-12 max-w-2xl mx-auto uppercase tracking-[0.2em] leading-loose drop-shadow-md"
          >
            {data.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              href={data.ctaLink}
              className="inline-block px-12 py-4 border border-secondary text-secondary font-body text-xs uppercase tracking-[0.3em] hover:bg-secondary hover:text-primary transition-all duration-500"
            >
              {data.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
