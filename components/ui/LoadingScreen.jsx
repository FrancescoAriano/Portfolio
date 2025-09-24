"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const LoadingScreen = ({ onComplete }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [text, setText] = useState("");
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [isNearThemeToggle, setIsNearThemeToggle] = useState(false);
  const trackerRef = useRef(null);
  const themeToggleRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const clickText = "<Click to continue />";

  // Typing effect con loop ogni 5 secondi
  useEffect(() => {
    let index = 0;
    let isTyping = true;
    let isWaiting = false;

    const animate = () => {
      if (isTyping) {
        setText(clickText.substring(0, index));
        index++;
        if (index > clickText.length) {
          isTyping = false;
          isWaiting = true;
          setTimeout(() => {
            isWaiting = false;
          }, 5000);
        }
      } else if (!isWaiting) {
        index--;
        setText(clickText.substring(0, index));
        if (index <= 0) {
          isTyping = true;
          index = 0;
        }
      }
    };

    const interval = setInterval(animate, 100);
    return () => clearInterval(interval);
  }, [clickText]);

  // Animazione fluida per il tracker
  const animateTracker = () => {
    if (!trackerRef.current) return;

    const dx = currentPositionRef.current.x - lastPositionRef.current.x;
    const dy = currentPositionRef.current.y - lastPositionRef.current.y;

    // Velocità ridotta (0.1 = molto lento, 1 = velocità normale)
    const easing = 0.15;
    lastPositionRef.current.x += dx * easing;
    lastPositionRef.current.y += dy * easing;

    trackerRef.current.style.left = `${lastPositionRef.current.x}px`;
    trackerRef.current.style.top = `${lastPositionRef.current.y}px`;
    trackerRef.current.style.transform = "translate(-50%, -50%)";

    animationRef.current = requestAnimationFrame(animateTracker);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Controllo se siamo vicini al ThemeToggle (solo su schermi grandi)
      if (window.innerWidth >= 1024 && themeToggleRef.current) {
        const toggleRect = themeToggleRef.current.getBoundingClientRect();
        const toggleCenterX = toggleRect.left + toggleRect.width / 2;
        const toggleCenterY = toggleRect.top + toggleRect.height / 2;

        const distance = Math.sqrt(
          Math.pow(e.clientX - toggleCenterX, 2) +
            Math.pow(e.clientY - toggleCenterY, 2)
        );

        // Se siamo entro 100px dal ThemeToggle, nascondi il tracker
        setIsNearThemeToggle(distance < 100);
      }

      // Aggiorna solo la posizione target se non abbiamo mai fatto hover
      // oppure se stiamo ancora facendo hover
      if (!hasBeenHovered || isHovering) {
        currentPositionRef.current.x = e.clientX;
        currentPositionRef.current.y = e.clientY;
      }
      // Se hasBeenHovered è true e non stiamo più hovering,
      // manteniamo l'ultima posizione in currentPositionRef
    };

    if (window.innerWidth >= 1024) {
      document.addEventListener("mousemove", handleMouseMove);
      animationRef.current = requestAnimationFrame(animateTracker);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, hasBeenHovered]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background cursor-pointer"
      onClick={onComplete}
      onMouseEnter={() => {
        setIsHovering(true);
        setHasBeenHovered(true);
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Testo principale - Sempre al centro con effetto typing */}
      <div className="text-2xl md:text-4xl font-mono font-bold text-center text-foreground">
        {text}
      </div>
      {/* Mouse tracker "Click me" - Dimensione fissa */}
      <div
        ref={trackerRef}
        className={`fixed z-40 bg-foreground text-primary-foreground px-8 py-2 rounded-full font-mono font-bold text-sm whitespace-nowrap hidden lg:block transition-opacity duration-300 pointer-events-none ${
          hasBeenHovered && !isNearThemeToggle ? "opacity-100" : "opacity-0"
        }`}
      >
        &lt;Click me /&gt;
      </div>

      {/* ThemeToggle */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-lg font-mono text-xs whitespace-nowrap text-foreground/80">
        Try to click on me!
      </div>
      <div
        ref={themeToggleRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 scale-80 lg:scale-120"
        onClick={(e) => e.stopPropagation()}
      >
        <ThemeToggle />
      </div>
    </div>
  );
};
