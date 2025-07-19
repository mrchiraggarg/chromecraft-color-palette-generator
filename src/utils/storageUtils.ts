import { Palette } from '../types';

const STORAGE_KEY = 'chromacraft_palettes';

export function savePalettesToStorage(palettes: Palette[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(palettes));
  } catch (error) {
    console.error('Failed to save palettes to localStorage:', error);
  }
}

export function loadPalettesFromStorage(): Palette[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const palettes = JSON.parse(stored);
    return palettes.map((palette: any) => ({
      ...palette,
      createdAt: new Date(palette.createdAt),
    }));
  } catch (error) {
    console.error('Failed to load palettes from localStorage:', error);
    return [];
  }
}

export function exportPaletteAsCSS(palette: Palette): string {
  const cssVariables = palette.colors
    .map((color, index) => `  --color-${index + 1}: ${color.hex};`)
    .join('\n');
  
  return `:root {\n${cssVariables}\n}`;
}

export function exportPaletteAsJSON(palette: Palette): string {
  return JSON.stringify(palette, null, 2);
}

export function downloadFile(content: string, filename: string, type: string): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}