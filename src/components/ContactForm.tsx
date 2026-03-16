"use client";

import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  return (
    <div className={cn("p-8 md:p-12 editorial-border bg-secondary relative z-10", className)}>
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-heading text-primary uppercase tracking-widest mb-4">Request Consultation</h3>
        <div className="w-12 h-px bg-accent mx-auto" />
      </div>
      
      <form className="space-y-10 font-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col relative group">
            <input 
              type="text" 
              id="name" 
              className="bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-primary text-sm peer"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="absolute left-0 top-3 text-xs text-text-muted uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
              Full Name
            </label>
          </div>
          <div className="flex flex-col relative group">
            <input 
              type="email" 
              id="email" 
              className="bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-primary text-sm peer"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="absolute left-0 top-3 text-xs text-text-muted uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
              Email Address
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col relative">
            <label htmlFor="project-type" className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Primary Interest</label>
            <select 
              id="project-type" 
              className="bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-primary text-sm appearance-none"
            >
              <option>Custom Residence</option>
              <option>Infill / Multi-Unit</option>
              <option>Major Renovation</option>
              <option>Commercial Development</option>
            </select>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="budget" className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Estimated Investment</label>
            <select 
              id="budget" 
              className="bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-primary text-sm appearance-none"
            >
              <option>$300k - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col relative group mt-12">
          <textarea 
            id="message" 
            rows={4}
            className="bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-primary text-sm peer resize-none"
            placeholder=" "
            required
          />
          <label htmlFor="message" className="absolute left-0 top-3 text-xs text-text-muted uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
            Project Details
          </label>
        </div>

        <div className="pt-8 text-center">
          <button 
            type="button" 
            className="bg-primary text-secondary px-12 py-4 text-xs font-body uppercase tracking-[0.3em] hover:bg-accent transition-colors duration-500 w-full md:w-auto"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
