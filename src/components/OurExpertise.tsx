"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type OurExpertiseData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function OurExpertise({
  data,
  className,
}: {
  data: OurExpertiseData;
  className?: string;
}) {
  return (
    <section className={cn("py-24 lg:py-32 bg-secondary", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-accent">Disciplines</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-primary leading-tight uppercase tracking-wide">
              {data.title}
            </h2>
          </motion.div>
          <Link 
            href="/expertise" 
            className="group flex items-center gap-4 text-primary text-xs font-body uppercase tracking-[0.2em] mt-8 md:mt-0 hover:text-accent transition-colors"
          >
            Explore All 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-8 editorial-border p-2">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-body text-text-muted uppercase tracking-[0.3em] mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-heading text-primary mb-4 uppercase tracking-widest group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted font-body leading-loose mb-6">
                  {item.description}
                </p>
                <Link 
                  href={item.link} 
                  className="inline-block text-xs font-body text-primary uppercase tracking-[0.2em] editorial-border-b pb-1 group-hover:text-accent group-hover:border-accent transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
