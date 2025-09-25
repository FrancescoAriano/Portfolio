"use client";

import { ArrowDown } from "lucide-react";
import { scrollToSection } from "../../utils/scrollUtils";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col justify-center max-w-5xl px-4 mx-auto mb-32"
    >
      <div className="container text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
          <span className="text-glow text-primary opacity-0 animate-fade-in-delay-2">
            {" "}
            Francesco
          </span>
          <span className="opacity-0 animate-fade-in-delay-3"> Ariano</span>
        </h1>
        <p className="text-lg md:text-2xl text-foreground/80 font-medium mx-auto opacity-0 animate-fade-in-delay-4">
          I'm a{" "}
          <span className="text-foreground font-bold">
            full-stack developer
          </span>{" "}
          who loves crafting clean, scalable web applications using the latest
          technology.
        </p>
        <div className="flex md:flex-row flex-col items-center gap-4 justify-center md:pt-4 opacity-0 animate-fade-in-delay-5">
          <a
            href="/cv/Francesco-Ariano-CV.pdf"
            download="Francesco-Ariano-CV.pdf"
            className="button px-6 bg-primary text-primary-foreground font-bold"
          >
            &lt;Download CV /&gt;
          </a>
          <a
            onClick={() => scrollToSection("projects")}
            className="button px-6 border border-primary text-primary font-bold"
          >
            &lt;View work /&gt;
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};
