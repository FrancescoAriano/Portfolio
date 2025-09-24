"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 md:w-10 md:h-10 button px-2 rounded-full bg-foreground"></div>
    );
  }

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    isDarkMode ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 md:w-10 md:h-10 button relative bg-foreground hover:bg-primary"
    >
      <div className="absolute inset-0 flex items-center justify-center rounded-full text-primary hover:text-primary-foreground">
        <div className="relative w-6 h-6 overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-300 transform ${
              isDarkMode
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-180 scale-0 opacity-0"
            }`}
          >
            <Sun className="w-6 h-6" />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-300 transform ${
              isDarkMode
                ? "-rotate-180 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Moon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </button>
  );
};
