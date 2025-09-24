"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TechTag } from "./TechTag";

export const ScrollableTags = ({ tags }) => {
  const scrollRef = useRef(null);
  const [showRightIndicator, setShowRightIndicator] = useState(false);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const tolerance = 5;

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

        // Se l'elemento non è visibile, riprova tra 100ms
        if (scrollWidth === 0 || clientWidth === 0) {
          setTimeout(checkScrollability, 100);
          return;
        }

        const hasOverflow = scrollWidth > clientWidth;
        setShowLeftIndicator(hasOverflow && scrollLeft > tolerance);
        setShowRightIndicator(
          hasOverflow && scrollLeft + clientWidth < scrollWidth - tolerance
        );
      }
    };

    checkScrollability();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        scrollElement.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [tags]);

  return (
    <div className="relative py-2">
      <div
        ref={scrollRef}
        className="px-6 flex gap-2 overflow-x-auto scrollbar-hide items-center"
      >
        {tags.map((tag, index) => (
          <TechTag key={index} tag={tag} />
        ))}
      </div>
      <div
        className={`absolute right-0 top-0 h-full transition-opacity duration-300 pointer-events-none ${
          showRightIndicator ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-gradient-to-l from-card via-card/80 to-transparent h-full flex items-center pl-6 pr-4">
          <ChevronRight />
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 h-full transition-opacity duration-300 pointer-events-none ${
          showLeftIndicator ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-gradient-to-r from-card via-card/80 to-transparent h-full flex items-center pl-4 pr-6">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
};
