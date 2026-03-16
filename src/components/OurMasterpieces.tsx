"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { type OurMasterpiecesData } from "@/types";
import Image from "next/image";

export function OurMasterpieces({
  data,
  className,
}: {
  data: OurMasterpiecesData;
  className?: string;
}) {
  const categories = ["All", "Custom", "Infill", "Commercial"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? data.projects 
    : data.projects.filter(p => p.category === activeCategory);

  return (
    <section className={cn("py-24 lg:py-32 bg-secondary", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-xs font-body uppercase tracking-[0.2em] transition-all duration-500 pb-1 border-b",
                activeCategory === cat 
                  ? "text-primary border-primary" 
                  : "text-text-muted border-transparent hover:text-accent hover:border-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 editorial-border p-2">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>
                
                <div className="text-center px-4">
                  <span className="text-[10px] font-body text-accent uppercase tracking-[0.3em] block mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-heading text-primary uppercase tracking-widest mb-4 group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <button className="text-[10px] font-body text-text-muted uppercase tracking-[0.2em] editorial-border-b border-text-muted/30 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
