export interface Color {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  hsl: {
    h: number;
    s: number;
    l: number;
  };
  name: string;
}

export interface Palette {
  id: string;
  name: string;
  colors: Color[];
  createdAt: Date;
  isFavorite?: boolean;
  tags?: string[];
}

export interface PaletteContextType {
  currentPalette: Palette | null;
  savedPalettes: Palette[];
  generateRandomPalette: (count?: number) => void;
  generatePaletteFromBase: (baseColor: string, count?: number) => void;
  savePalette: (palette: Palette) => void;
  removePalette: (id: string) => void;
  toggleFavorite: (id: string) => void;
  loadPalette: (palette: Palette) => void;
}