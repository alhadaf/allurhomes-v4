"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type FeaturedProjectsData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects({
  data,
  className,
}: {
  data: FeaturedProjectsData;
  className?: string;
}) {
  return (
    <section className={cn("py-24 lg:py-32 bg-primary text-secondary editorial-border-t border-primary/20", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: 40 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-px bg-accent mx-auto mb-6"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase tracking-widest mb-6"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="space-y-32">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, margin: "-10%" }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-[4/3] p-2 border border-secondary/20 overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-body text-accent uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <div className="h-px bg-secondary/20 flex-grow" />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading uppercase tracking-widest mb-8 leading-tight">
                  {project.title}
                </h3>
                <Link 
                  href={project.link} 
                  className="flex items-center gap-4 text-xs font-body uppercase tracking-[0.2em] text-secondary hover:text-accent transition-colors w-max group/link"
                >
                  <span className="border-b border-secondary/30 group-hover/link:border-accent pb-1 transition-colors">
                    Explore Project
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link 
            href="/portfolio" 
            className="inline-block px-12 py-4 border border-secondary/30 text-xs font-body uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary transition-all duration-500"
          >
            View Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
