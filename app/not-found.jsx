"use client";

import { Home } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const originalText = "404";

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);

      let iterations = 0;
      const glitchTimer = setInterval(() => {
        setGlitchText(
          originalText
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              return glitchChars[
                Math.floor(Math.random() * glitchChars.length)
              ];
            })
            .join("")
        );

        iterations += 1 / 3;

        if (iterations >= originalText.length) {
          clearInterval(glitchTimer);
          setGlitchText(originalText);
          setIsGlitching(false);
        }
      }, 50);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1
          className={`text-8xl md:text-9xl font-bold text-primary mb-8 transition-all duration-300 ${
            isGlitching ? "animate-pulse text-red-500" : ""
          }`}
          style={{
            fontFamily: "monospace",
            textShadow: isGlitching
              ? "2px 2px 0px #ff0000, -2px -2px 0px #00ff00, 1px -1px 0px #0000ff"
              : "4px 4px 0px rgba(var(--primary), 0.3)",
          }}
        >
          {glitchText}
        </h1>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pagina non trovata
          </h2>
          <p className="text-lg text-foreground/80 mb-2">
            Ehi, è un portfolio, cosa ti aspetti?
          </p>
          <p className="text-foreground/60">
            Non ci sono così tante pagine qui! 😅
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Home
              size={20}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
