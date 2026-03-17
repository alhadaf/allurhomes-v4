"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Story", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700",
        scrolled 
          ? "bg-secondary/95 backdrop-blur-md py-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] editorial-border-b" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-2xl font-heading tracking-widest uppercase transition-colors duration-500",
            scrolled ? "text-primary" : "text-secondary drop-shadow-md"
          )}>
            Allure
          </span>
          <span className={cn(
            "text-[9px] font-body tracking-[0.3em] uppercase transition-colors duration-500 ml-1",
            scrolled ? "text-accent" : "text-accent drop-shadow-md"
          )}>
            HOMES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-body uppercase tracking-[0.2em] transition-all duration-500 hover:text-accent relative group",
                scrolled ? "text-primary" : "text-secondary drop-shadow-md"
              )}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "px-8 py-3 text-xs font-body uppercase tracking-[0.2em] transition-all duration-500 border",
              scrolled 
                ? "border-primary text-primary hover:bg-primary hover:text-secondary" 
                : "border-secondary text-secondary hover:bg-secondary hover:text-primary"
            )}
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors duration-500",
            scrolled ? "text-primary" : "text-secondary"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-secondary z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-primary"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="text-4xl font-heading text-primary hover:text-accent transition-colors uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="mt-8 px-12 py-4 border border-primary text-primary font-body text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inquire
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
