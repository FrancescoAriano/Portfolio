"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navItems } from "../../data/navItems";
import { scrollToSection } from "../../utils/scrollUtils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let scrollTimeout;
    let resizeTimeout;

    const getActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const navOffset = 64; // Offset per la navbar

      let activeSection = "hero"; // Default
      let maxVisibleArea = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollTop + rect.top;
        const sectionBottom = sectionTop + rect.height;

        // Area visibile della sezione
        const visibleTop = Math.max(sectionTop, scrollTop + navOffset);
        const visibleBottom = Math.min(sectionBottom, scrollTop + windowHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        // Se questa sezione ha più area visibile, diventa quella attiva
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSection = section.id;
        }
      });

      setActiveSection(activeSection);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Debounce per performance
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(getActiveSection, 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);

      // Ricalcola dopo resize
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(getActiveSection, 100);
    };

    // Gestione overflow body per menu mobile
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    // Initial check
    getActiveSection();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
      clearTimeout(scrollTimeout);
      clearTimeout(resizeTimeout);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const renderNavItems = (isMobileView = false) => {
    const baseTextSize = isMobileView ? "text-2xl" : "";

    return navItems.map((item, key) => {
      if (item.label === "Contact") {
        const className = `button px-4 ${baseTextSize} font-semibold ${
          activeSection === item.id
            ? "bg-primary"
            : "bg-foreground hover:bg-primary/90"
        }`;
        return (
          <div
            key={key}
            className={`flex items-center ${
              isMobileView ? "flex-col space-y-8" : ""
            }`}
          >
            <a
              className={className}
              onClick={() => {
                scrollToSection(item.id);
                isMobileView ? setIsMenuOpen(false) : undefined;
              }}
            >
              <span className="text-primary-foreground">{item.label}</span>
            </a>
            {/* Theme toggle solo su mobile nel menu */}
            {isMobileView && <ThemeToggle />}
          </div>
        );
      }
      const className = `${baseTextSize} font-semibold ${
        activeSection === item.id ? "text-primary" : ""
      }`;
      return (
        <div
          key={key}
          className="transition-all duration-300 hover:text-primary"
        >
          <a className={className} onClick={() => handleLinkClick(item.id)}>
            {item.label}
          </a>
        </div>
      );
    });
  };

  return (
    <nav className="fixed w-full z-40">
      <div
        className={`transition-all duration-400 py-3 ${
          isScrolled && !isMenuOpen ? "bg-background/80" : ""
        }`}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold flex items-center"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-primary">&lt;Francesco</span>
            <span
              className={`transition-all duration-500 overflow-hidden whitespace-nowrap ${
                isScrolled ? "w-0 opacity-0 ml-0" : "w-16 opacity-100 ml-1"
              }`}
            >
              Ariano
            </span>
            <span className="text-primary ml-2">/&gt;</span>
          </a>
          <div className="hidden lg:flex relative">
            {/* ThemeToggle fisso che rimane nella sua posizione */}
            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-400 z-10 ${
                !isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <ThemeToggle />
            </div>
            {/* Container dei nav items che si sposta verso sinistra */}
            <div
              className={`flex space-x-8 items-center transition-transform duration-400 z-20 ${
                !isScrolled ? "-translate-x-16" : "translate-x-0"
              }`}
            >
              {renderNavItems(false)}
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden z-50 transition-transform duration-300 hover:scale-110"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div
              className={`transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </button>
        </div>
      </div>
      <div
        className={`h-screen fixed inset-0 bg-background flex flex-col items-center justify-center transition-all duration-300 lg:hidden z-30 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 py-16">
          {renderNavItems(true)}
        </div>
      </div>
    </nav>
  );
};
