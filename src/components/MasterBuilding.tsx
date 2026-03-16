"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type MasterBuilding30YearsData } from "@/types";
import Image from "next/image";

interface MasterBuildingProps {
  data: MasterBuilding30YearsData & { image?: string };
  className?: string;
  imagePosition?: "left" | "right";
}

export function MasterBuilding30Years({
  data,
  className,
  imagePosition = "right",
}: MasterBuildingProps) {
  return (
    <section className={cn("py-24 lg:py-32 bg-secondary", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
          imagePosition === "left" && "lg:direction-rtl"
        )}>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
            className={cn(
              "lg:direction-ltr",
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            )}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-accent">Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-10 leading-tight uppercase tracking-wide">
              {data.title}
            </h2>
            <div 
              className="text-sm md:text-base text-text-muted font-body leading-loose mb-12 prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              {data.stats.map((stat, index) => (
                <div key={index} className="editorial-border-b pb-4">
                  <span className="block text-3xl font-heading text-primary mb-2">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-body text-text-muted uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className={cn(
              "relative aspect-[4/5] overflow-hidden editorial-border p-2 bg-secondary",
              imagePosition === "left" ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className="relative w-full h-full">
              {data.image ? (
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <span className="font-heading text-primary/10 text-4xl uppercase tracking-widest">ALLURE</span>
                </div>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
