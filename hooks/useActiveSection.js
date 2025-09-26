"use client";

import { useState, useEffect } from "react";

/**
 * Hook personalizzato per rilevare la sezione attiva usando Intersection Observer
 * @param {Array} sectionIds - Array degli ID delle sezioni da osservare
 * @param {Object} options - Opzioni per l'Intersection Observer
 * @returns {String} - ID della sezione attualmente attiva
 */
export const useActiveSection = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    // Configurazione predefinita dell'observer
    const defaultOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger quando la sezione è al 20% dall'alto
      threshold: 0,
      ...options, // Permette di sovrascrivere le opzioni predefinite
    };

    // Callback dell'observer
    const observerCallback = (entries) => {
      // Trova l'entry con la più alta intersectionRatio
      let maxRatio = 0;
      let activeId = activeSection;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = entry.target.id;
        }
      });

      // Se nessuna sezione è in vista, mantieni l'ultima attiva
      if (maxRatio > 0) {
        setActiveSection(activeId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, defaultOptions);

    // Osserva tutte le sezioni esistenti
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
};
