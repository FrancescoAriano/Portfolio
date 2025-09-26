"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navItems } from "../../data/navItems";
import { scrollToSection } from "../../utils/scrollUtils";
import { useActiveSection } from "../../hooks/useActiveSection";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = useActiveSection(
    navItems.map((item) => item.id),
    {
      rootMargin: "-15% 0px -75% 0px",
      threshold: [0, 0.1, 0.5],
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const renderNavItems = (isMobileView = false) => {
    const baseTextSize = isMobileView ? "text-4xl" : "";

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
            className={`${
              isMobileView ? "flex items-center flex-col gap-8" : ""
            }`}
          >
            <a className={className} onClick={() => handleLinkClick(item.id)}>
              <span className="text-primary-foreground">{item.label}</span>
            </a>
            {isMobileView && <ThemeToggle />}
          </div>
        );
      }
      const className = `${baseTextSize} font-semibold transition-all duration-300 ${
        activeSection === item.id
          ? "text-primary"
          : "text-foreground hover:text-primary"
      }`;
      return (
        <a
          className={className}
          onClick={() => handleLinkClick(item.id)}
          key={key}
        >
          {item.label}
        </a>
      );
    });
  };

  return (
    <nav className="fixed w-full z-40">
      <div
        className={`transition-color duration-300 ${
          isScrolled ? "bg-background/80" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-14">
          <a
            className="flex items-center text-xl font-bold"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-primary">&lt;Francesco </span>
            <span
              className={`transition-all duration-500 overflow-hidden text-foreground mx-1 ${
                isScrolled ? "w-0 opacity-0" : "w-16 opacity-100"
              }`}
            >
              Ariano
            </span>
            <span className="text-primary">/&gt;</span>
          </a>
          <div className="hidden lg:flex gap-4">
            <div
              className={`flex gap-8 items-center transition-transform duration-500 z-20 ${
                !isScrolled ? "translate-x-0" : "translate-x-13"
              }`}
            >
              {renderNavItems(false)}
            </div>
            <div
              className={`transition-opacity duration-500 z-10 ${
                !isScrolled ? "opacity-100" : "opacity-20 pointer-events-auto"
              }`}
            >
              <ThemeToggle></ThemeToggle>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden z-20 cursor-pointer transition-transform duration-300 hover:scale-110"
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
        className={`fixed inset-0 lg:hidden bg-card z-10 transition-opacity duration-500 overflow-auto scrollbar-hide ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-dvh flex flex-col justify-center items-center gap-8 py-8">
          {renderNavItems(true)}
        </div>
      </div>
    </nav>
  );
};
