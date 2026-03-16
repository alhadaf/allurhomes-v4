"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ClientStoriesData } from "@/types";

export function ClientStories({
  data,
  className,
}: {
  data: ClientStoriesData;
  className?: string;
}) {
  return (
    <section className={cn("py-24 lg:py-32 bg-secondary", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary uppercase tracking-widest">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl font-heading text-accent/30 mb-6 leading-none">
                "
              </div>
              
              <blockquote className="text-sm font-body text-text-muted leading-loose italic mb-10 min-h-[120px]">
                {testimonial.quote}
              </blockquote>
              
              <div className="flex flex-col items-center gap-4">
                {testimonial.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden p-1 border border-border group-hover:border-accent transition-colors duration-500">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover grayscale" />
                    </div>
                  </div>
                )}
                <div>
                  <cite className="not-italic block font-heading text-primary uppercase tracking-widest text-lg mb-1">
                    {testimonial.author}
                  </cite>
                  <span className="text-[10px] font-body text-accent uppercase tracking-[0.2em]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
