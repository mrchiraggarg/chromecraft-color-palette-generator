import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Palette, Color, PaletteContextType } from '../types';
import { generateRandomPalette, generateHarmoniousPalette, parsePaletteFromUrl } from '../utils/colorUtils';
import { savePalettesToStorage, loadPalettesFromStorage } from '../utils/storageUtils';

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export function usePalette() {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
}

interface PaletteProviderProps {
  children: ReactNode;
}

export function PaletteProvider({ children }: PaletteProviderProps) {
  const [currentPalette, setCurrentPalette] = useState<Palette | null>(null);
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>([]);

  useEffect(() => {
    // Load saved palettes
    const saved = loadPalettesFromStorage();
    setSavedPalettes(saved);

    // Check for shared palette in URL
    const sharedPalette = parsePaletteFromUrl();
    if (sharedPalette) {
      const palette: Palette = {
        id: Date.now().toString(),
        name: 'Shared Palette',
        colors: sharedPalette,
        createdAt: new Date(),
      };
      setCurrentPalette(palette);
    } else {
      // Generate initial random palette
      generateRandomPalette();
    }
  }, []);

  useEffect(() => {
    savePalettesToStorage(savedPalettes);
  }, [savedPalettes]);

  const generateRandomPaletteHandler = (count: number = 5) => {
    const colors = generateRandomPalette(count);
    const palette: Palette = {
      id: Date.now().toString(),
      name: `Random Palette ${new Date().toLocaleTimeString()}`,
      colors,
      createdAt: new Date(),
    };
    setCurrentPalette(palette);
  };

  const generatePaletteFromBase = (baseColor: string, count: number = 5) => {
    const colors = generateHarmoniousPalette(baseColor, count);
    const palette: Palette = {
      id: Date.now().toString(),
      name: `Palette from ${baseColor}`,
      colors,
      createdAt: new Date(),
    };
    setCurrentPalette(palette);
  };

  const savePalette = (palette: Palette) => {
    const existingIndex = savedPalettes.findIndex(p => p.id === palette.id);
    if (existingIndex >= 0) {
      const updated = [...savedPalettes];
      updated[existingIndex] = palette;
      setSavedPalettes(updated);
    } else {
      setSavedPalettes(prev => [palette, ...prev]);
    }
  };

  const removePalette = (id: string) => {
    setSavedPalettes(prev => prev.filter(p => p.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setSavedPalettes(prev =>
      prev.map(p =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  const loadPalette = (palette: Palette) => {
    setCurrentPalette(palette);
  };

  const value: PaletteContextType = {
    currentPalette,
    savedPalettes,
    generateRandomPalette: generateRandomPaletteHandler,
    generatePaletteFromBase,
    savePalette,
    removePalette,
    toggleFavorite,
    loadPalette,
  };

  return (
    <PaletteContext.Provider value={value}>
      {children}
    </PaletteContext.Provider>
  );
}