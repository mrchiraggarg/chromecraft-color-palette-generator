import { Color } from '../types';

// Color name database (simplified version)
const colorNames: { [key: string]: string } = {
  'FF0000': 'Red',
  '00FF00': 'Green',
  '0000FF': 'Blue',
  'FFFF00': 'Yellow',
  'FF00FF': 'Magenta',
  '00FFFF': 'Cyan',
  'FFFFFF': 'White',
  '000000': 'Black',
  'FFA500': 'Orange',
  '800080': 'Purple',
  'FFC0CB': 'Pink',
  '808080': 'Gray',
  'A52A2A': 'Brown',
  '90EE90': 'Light Green',
  'FFB6C1': 'Light Pink'
};

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function getColorName(hex: string): string {
  const cleanHex = hex.replace('#', '').toUpperCase();
  
  // Find exact match
  if (colorNames[cleanHex]) {
    return colorNames[cleanHex];
  }
  
  // Find closest match
  let closestDistance = Infinity;
  let closestName = 'Unknown';
  
  Object.entries(colorNames).forEach(([colorHex, name]) => {
    const distance = getColorDistance(cleanHex, colorHex);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestName = name;
    }
  });
  
  return closestName;
}

function getColorDistance(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb('#' + hex1);
  const rgb2 = hexToRgb('#' + hex2);
  
  return Math.sqrt(
    Math.pow(rgb1.r - rgb2.r, 2) +
    Math.pow(rgb1.g - rgb2.g, 2) +
    Math.pow(rgb1.b - rgb2.b, 2)
  );
}

export function generateRandomColor(): Color {
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const name = getColorName(hex);

  return { hex, rgb, hsl, name };
}

export function generateHarmoniousPalette(baseColor: string, count: number = 5): Color[] {
  const baseRgb = hexToRgb(baseColor);
  const baseHsl = rgbToHsl(baseRgb.r, baseRgb.g, baseRgb.b);
  const colors: Color[] = [];

  // Add base color
  colors.push({
    hex: baseColor,
    rgb: baseRgb,
    hsl: baseHsl,
    name: getColorName(baseColor),
  });

  // Generate complementary and analogous colors
  for (let i = 1; i < count; i++) {
    let newHsl: { h: number; s: number; l: number };
    
    switch (i % 4) {
      case 1: // Complementary
        newHsl = {
          h: (baseHsl.h + 180) % 360,
          s: Math.max(20, baseHsl.s - 10),
          l: Math.max(20, Math.min(80, baseHsl.l + (Math.random() - 0.5) * 40))
        };
        break;
      case 2: // Analogous +
        newHsl = {
          h: (baseHsl.h + 30 + Math.random() * 30) % 360,
          s: Math.max(20, Math.min(90, baseHsl.s + (Math.random() - 0.5) * 30)),
          l: Math.max(20, Math.min(80, baseHsl.l + (Math.random() - 0.5) * 30))
        };
        break;
      case 3: // Analogous -
        newHsl = {
          h: (baseHsl.h - 30 - Math.random() * 30 + 360) % 360,
          s: Math.max(20, Math.min(90, baseHsl.s + (Math.random() - 0.5) * 30)),
          l: Math.max(20, Math.min(80, baseHsl.l + (Math.random() - 0.5) * 30))
        };
        break;
      default: // Triadic
        newHsl = {
          h: (baseHsl.h + 120 + Math.random() * 40 - 20) % 360,
          s: Math.max(20, Math.min(90, baseHsl.s + (Math.random() - 0.5) * 40)),
          l: Math.max(20, Math.min(80, baseHsl.l + (Math.random() - 0.5) * 40))
        };
    }

    const hex = hslToHex(newHsl.h, newHsl.s, newHsl.l);
    const rgb = hexToRgb(hex);
    
    colors.push({
      hex,
      rgb,
      hsl: newHsl,
      name: getColorName(hex),
    });
  }

  return colors;
}

export function generateRandomPalette(count: number = 5): Color[] {
  // Generate a random base color and create harmonious palette
  const baseColor = generateRandomColor();
  return generateHarmoniousPalette(baseColor.hex, count);
}

export function isValidHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text).then(
    () => true,
    () => false
  );
}

export function generateShareableUrl(palette: Color[]): string {
  const colors = palette.map(color => color.hex.replace('#', '')).join('-');
  return `${window.location.origin}${window.location.pathname}?palette=${colors}`;
}

export function parsePaletteFromUrl(): Color[] | null {
  const urlParams = new URLSearchParams(window.location.search);
  const paletteParam = urlParams.get('palette');
  
  if (!paletteParam) return null;
  
  const hexColors = paletteParam.split('-').map(hex => '#' + hex);
  
  return hexColors.map(hex => {
    if (!isValidHex(hex)) return null;
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    return {
      hex,
      rgb,
      hsl,
      name: getColorName(hex)
    };
  }).filter(Boolean) as Color[];
}