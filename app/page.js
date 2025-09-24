"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/ui/Navbar";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillSection } from "../components/sections/SkillSection";
import { ProjectSection } from "../components/sections/ProjectSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/ui/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isLoaded) html.style.scrollbarGutter = "stable";

    return () => {
      html.style.scrollbarGutter = "";
    };
  }, [isLoaded]);

  return (
    <div>
      {!isLoaded && (
        <LoadingScreen
          onComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}
      <div
        className={`${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <main className={`${isLoaded ? "block" : "hidden"}`}>
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
