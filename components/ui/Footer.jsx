"use client";

import { ArrowUp } from "lucide-react";
import { scrollToSection } from "../../utils/scrollUtils";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-foreground/10">
      <div className="container py-12 flex items-center justify-between">
        <div className="w-10 h-10"></div>
        <p className="text-sm text-center flex-1">
          &copy; {new Date().getFullYear()} Francesco Ariano
          <br /> All rights reserved.
        </p>
        <button
          className="w-10 h-10 button bg-foreground hover:bg-primary text-primary hover:text-primary-foreground"
          onClick={() => scrollToSection("hero")}
        >
          <div className="relative w-6 h-6 overflow-hidden m-auto">
            <ArrowUp className="w-6 h-6" />
          </div>
        </button>
      </div>
    </footer>
  );
};
