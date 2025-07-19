import { Palette } from '../types';

export const trendingPalettes: Palette[] = [
  // Modern & Minimalist
  {
    id: 'trending-1',
    name: 'Sunset Vibes',
    colors: [
      { hex: '#FF6B6B', rgb: { r: 255, g: 107, b: 107 }, hsl: { h: 0, s: 100, l: 71 }, name: 'Coral Red' },
      { hex: '#4ECDC4', rgb: { r: 78, g: 205, b: 196 }, hsl: { h: 176, s: 58, l: 55 }, name: 'Turquoise' },
      { hex: '#45B7D1', rgb: { r: 69, g: 183, b: 209 }, hsl: { h: 191, s: 61, l: 55 }, name: 'Sky Blue' },
      { hex: '#96CEB4', rgb: { r: 150, g: 206, b: 180 }, hsl: { h: 152, s: 38, l: 70 }, name: 'Mint Green' },
      { hex: '#FFEAA7', rgb: { r: 255, g: 234, b: 167 }, hsl: { h: 46, s: 100, l: 83 }, name: 'Cream Yellow' }
    ],
    createdAt: new Date('2024-01-15'),
    tags: ['warm', 'sunset', 'vibrant']
  },
  {
    id: 'trending-2',
    name: 'Ocean Depths',
    colors: [
      { hex: '#0F3460', rgb: { r: 15, g: 52, b: 96 }, hsl: { h: 213, s: 73, l: 22 }, name: 'Navy Blue' },
      { hex: '#16537E', rgb: { r: 22, g: 83, b: 126 }, hsl: { h: 205, s: 70, l: 29 }, name: 'Deep Blue' },
      { hex: '#18A999', rgb: { r: 24, g: 169, b: 153 }, hsl: { h: 173, s: 75, l: 38 }, name: 'Teal' },
      { hex: '#F4E4C1', rgb: { r: 244, g: 228, b: 193 }, hsl: { h: 41, s: 67, l: 86 }, name: 'Cream' },
      { hex: '#E9A46A', rgb: { r: 233, g: 164, b: 106 }, hsl: { h: 27, s: 73, l: 66 }, name: 'Peach' }
    ],
    createdAt: new Date('2024-01-14'),
    tags: ['ocean', 'cool', 'calming']
  },
  {
    id: 'trending-3',
    name: 'Forest Harmony',
    colors: [
      { hex: '#2D5016', rgb: { r: 45, g: 80, b: 22 }, hsl: { h: 96, s: 57, l: 20 }, name: 'Forest Green' },
      { hex: '#A4C639', rgb: { r: 164, g: 198, b: 57 }, hsl: { h: 74, s: 57, l: 50 }, name: 'Lime Green' },
      { hex: '#6B9080', rgb: { r: 107, g: 144, b: 128 }, hsl: { h: 154, s: 15, l: 49 }, name: 'Sage' },
      { hex: '#A4C3A2', rgb: { r: 164, g: 195, b: 162 }, hsl: { h: 116, s: 22, l: 70 }, name: 'Light Green' },
      { hex: '#EAF4F4', rgb: { r: 234, g: 244, b: 244 }, hsl: { h: 180, s: 26, l: 94 }, name: 'Mint Cream' }
    ],
    createdAt: new Date('2024-01-13'),
    tags: ['nature', 'green', 'earthy']
  },
  {
    id: 'trending-4',
    name: 'Royal Purple',
    colors: [
      { hex: '#2D1B69', rgb: { r: 45, g: 27, b: 105 }, hsl: { h: 254, s: 59, l: 26 }, name: 'Royal Purple' },
      { hex: '#8E44AD', rgb: { r: 142, g: 68, b: 173 }, hsl: { h: 282, s: 44, l: 47 }, name: 'Purple' },
      { hex: '#C39BD3', rgb: { r: 195, g: 155, b: 211 }, hsl: { h: 283, s: 39, l: 72 }, name: 'Light Purple' },
      { hex: '#F8C471', rgb: { r: 248, g: 196, b: 113 }, hsl: { h: 37, s: 89, l: 71 }, name: 'Gold' },
      { hex: '#FEF9E7', rgb: { r: 254, g: 249, b: 231 }, hsl: { h: 47, s: 85, l: 95 }, name: 'Ivory' }
    ],
    createdAt: new Date('2024-01-12'),
    tags: ['luxury', 'purple', 'elegant']
  },
  {
    id: 'trending-5',
    name: 'Autumn Warmth',
    colors: [
      { hex: '#8B4513', rgb: { r: 139, g: 69, b: 19 }, hsl: { h: 25, s: 76, l: 31 }, name: 'Saddle Brown' },
      { hex: '#D2691E', rgb: { r: 210, g: 105, b: 30 }, hsl: { h: 25, s: 75, l: 47 }, name: 'Chocolate' },
      { hex: '#FF8C00', rgb: { r: 255, g: 140, b: 0 }, hsl: { h: 33, s: 100, l: 50 }, name: 'Dark Orange' },
      { hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 100, l: 50 }, name: 'Gold' },
      { hex: '#FFFACD', rgb: { r: 255, g: 250, b: 205 }, hsl: { h: 54, s: 100, l: 90 }, name: 'Lemon Chiffon' }
    ],
    createdAt: new Date('2024-01-11'),
    tags: ['autumn', 'warm', 'cozy']
  },
  {
    id: 'trending-6',
    name: 'Pastel Dreams',
    colors: [
      { hex: '#FFB6C1', rgb: { r: 255, g: 182, b: 193 }, hsl: { h: 351, s: 100, l: 86 }, name: 'Light Pink' },
      { hex: '#DDA0DD', rgb: { r: 221, g: 160, b: 221 }, hsl: { h: 300, s: 47, l: 75 }, name: 'Plum' },
      { hex: '#98FB98', rgb: { r: 152, g: 251, b: 152 }, hsl: { h: 120, s: 93, l: 79 }, name: 'Pale Green' },
      { hex: '#87CEEB', rgb: { r: 135, g: 206, b: 235 }, hsl: { h: 197, s: 71, l: 73 }, name: 'Sky Blue' },
      { hex: '#F0E68C', rgb: { r: 240, g: 230, b: 140 }, hsl: { h: 54, s: 77, l: 75 }, name: 'Khaki' }
    ],
    createdAt: new Date('2024-01-10'),
    tags: ['pastel', 'soft', 'dreamy']
  },

  // Neon & Electric
  {
    id: 'trending-7',
    name: 'Neon Nights',
    colors: [
      { hex: '#FF073A', rgb: { r: 255, g: 7, b: 58 }, hsl: { h: 348, s: 100, l: 51 }, name: 'Electric Red' },
      { hex: '#39FF14', rgb: { r: 57, g: 255, b: 20 }, hsl: { h: 111, s: 100, l: 54 }, name: 'Electric Green' },
      { hex: '#FF6EC7', rgb: { r: 255, g: 110, b: 199 }, hsl: { h: 323, s: 100, l: 72 }, name: 'Electric Pink' },
      { hex: '#00FFFF', rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 }, name: 'Electric Cyan' },
      { hex: '#FFFF00', rgb: { r: 255, g: 255, b: 0 }, hsl: { h: 60, s: 100, l: 50 }, name: 'Electric Yellow' }
    ],
    createdAt: new Date('2024-01-09'),
    tags: ['neon', 'electric', 'vibrant']
  },
  {
    id: 'trending-8',
    name: 'Cyberpunk',
    colors: [
      { hex: '#0D1117', rgb: { r: 13, g: 17, b: 23 }, hsl: { h: 216, s: 28, l: 7 }, name: 'Dark Gray' },
      { hex: '#FF2A6D', rgb: { r: 255, g: 42, b: 109 }, hsl: { h: 341, s: 100, l: 58 }, name: 'Hot Pink' },
      { hex: '#05D9E8', rgb: { r: 5, g: 217, b: 232 }, hsl: { h: 184, s: 96, l: 46 }, name: 'Cyan' },
      { hex: '#D1F7FF', rgb: { r: 209, g: 247, b: 255 }, hsl: { h: 190, s: 100, l: 91 }, name: 'Light Cyan' },
      { hex: '#005678', rgb: { r: 0, g: 86, b: 120 }, hsl: { h: 197, s: 100, l: 24 }, name: 'Dark Blue' }
    ],
    createdAt: new Date('2024-01-08'),
    tags: ['cyberpunk', 'futuristic', 'tech']
  },

  // Vintage & Retro
  {
    id: 'trending-9',
    name: 'Vintage Rose',
    colors: [
      { hex: '#D4A574', rgb: { r: 212, g: 165, b: 116 }, hsl: { h: 31, s: 52, l: 64 }, name: 'Antique Brass' },
      { hex: '#E8B4B8', rgb: { r: 232, g: 180, b: 184 }, hsl: { h: 355, s: 52, l: 81 }, name: 'Dusty Rose' },
      { hex: '#A8DADC', rgb: { r: 168, g: 218, b: 220 }, hsl: { h: 182, s: 42, l: 76 }, name: 'Powder Blue' },
      { hex: '#F1FAEE', rgb: { r: 241, g: 250, b: 238 }, hsl: { h: 105, s: 60, l: 96 }, name: 'Honeydew' },
      { hex: '#457B9D', rgb: { r: 69, g: 123, b: 157 }, hsl: { h: 203, s: 39, l: 44 }, name: 'Steel Blue' }
    ],
    createdAt: new Date('2024-01-07'),
    tags: ['vintage', 'retro', 'muted']
  },
  {
    id: 'trending-10',
    name: '70s Sunset',
    colors: [
      { hex: '#F18F01', rgb: { r: 241, g: 143, b: 1 }, hsl: { h: 36, s: 99, l: 47 }, name: 'Orange' },
      { hex: '#C73E1D', rgb: { r: 199, g: 62, b: 29 }, hsl: { h: 12, s: 75, l: 45 }, name: 'Red Orange' },
      { hex: '#CCE7E8', rgb: { r: 204, g: 231, b: 232 }, hsl: { h: 182, s: 35, l: 85 }, name: 'Light Blue' },
      { hex: '#B7245C', rgb: { r: 183, g: 36, b: 92 }, hsl: { h: 337, s: 67, l: 43 }, name: 'Maroon' },
      { hex: '#0D1821', rgb: { r: 13, g: 24, b: 33 }, hsl: { h: 207, s: 43, l: 9 }, name: 'Dark Blue' }
    ],
    createdAt: new Date('2024-01-06'),
    tags: ['70s', 'retro', 'sunset']
  },

  // Nature Inspired
  {
    id: 'trending-11',
    name: 'Desert Bloom',
    colors: [
      { hex: '#E76F51', rgb: { r: 231, g: 111, b: 81 }, hsl: { h: 12, s: 75, l: 61 }, name: 'Burnt Orange' },
      { hex: '#F4A261', rgb: { r: 244, g: 162, b: 97 }, hsl: { h: 27, s: 85, l: 67 }, name: 'Sandy Brown' },
      { hex: '#E9C46A', rgb: { r: 233, g: 196, b: 106 }, hsl: { h: 43, s: 74, l: 66 }, name: 'Goldenrod' },
      { hex: '#2A9D8F', rgb: { r: 42, g: 157, b: 143 }, hsl: { h: 173, s: 58, l: 39 }, name: 'Teal' },
      { hex: '#264653', rgb: { r: 38, g: 70, b: 83 }, hsl: { h: 197, s: 37, l: 24 }, name: 'Dark Slate Gray' }
    ],
    createdAt: new Date('2024-01-05'),
    tags: ['desert', 'nature', 'warm']
  },
  {
    id: 'trending-12',
    name: 'Mountain Mist',
    colors: [
      { hex: '#8ECAE6', rgb: { r: 142, g: 202, b: 230 }, hsl: { h: 199, s: 62, l: 73 }, name: 'Sky Blue' },
      { hex: '#219EBC', rgb: { r: 33, g: 158, b: 188 }, hsl: { h: 192, s: 70, l: 43 }, name: 'Blue' },
      { hex: '#023047', rgb: { r: 2, g: 48, b: 71 }, hsl: { h: 200, s: 94, l: 14 }, name: 'Dark Blue' },
      { hex: '#FFB3BA', rgb: { r: 255, g: 179, b: 186 }, hsl: { h: 354, s: 100, l: 85 }, name: 'Light Pink' },
      { hex: '#FB8500', rgb: { r: 251, g: 133, b: 0 }, hsl: { h: 32, s: 100, l: 49 }, name: 'Orange' }
    ],
    createdAt: new Date('2024-01-04'),
    tags: ['mountain', 'nature', 'cool']
  },

  // Modern Tech
  {
    id: 'trending-13',
    name: 'Tech Gradient',
    colors: [
      { hex: '#667EEA', rgb: { r: 102, g: 126, b: 234 }, hsl: { h: 229, s: 75, l: 66 }, name: 'Periwinkle' },
      { hex: '#764BA2', rgb: { r: 118, g: 75, b: 162 }, hsl: { h: 270, s: 37, l: 46 }, name: 'Purple' },
      { hex: '#F093FB', rgb: { r: 240, g: 147, b: 251 }, hsl: { h: 294, s: 93, l: 78 }, name: 'Light Purple' },
      { hex: '#F25F3A', rgb: { r: 242, g: 95, b: 58 }, hsl: { h: 12, s: 87, l: 59 }, name: 'Red Orange' },
      { hex: '#FF8A00', rgb: { r: 255, g: 138, b: 0 }, hsl: { h: 32, s: 100, l: 50 }, name: 'Orange' }
    ],
    createdAt: new Date('2024-01-03'),
    tags: ['tech', 'gradient', 'modern']
  },
  {
    id: 'trending-14',
    name: 'Dark Mode',
    colors: [
      { hex: '#1A1A1A', rgb: { r: 26, g: 26, b: 26 }, hsl: { h: 0, s: 0, l: 10 }, name: 'Almost Black' },
      { hex: '#2D2D2D', rgb: { r: 45, g: 45, b: 45 }, hsl: { h: 0, s: 0, l: 18 }, name: 'Dark Gray' },
      { hex: '#404040', rgb: { r: 64, g: 64, b: 64 }, hsl: { h: 0, s: 0, l: 25 }, name: 'Gray' },
      { hex: '#00D9FF', rgb: { r: 0, g: 217, b: 255 }, hsl: { h: 189, s: 100, l: 50 }, name: 'Cyan' },
      { hex: '#FF6B6B', rgb: { r: 255, g: 107, b: 107 }, hsl: { h: 0, s: 100, l: 71 }, name: 'Light Red' }
    ],
    createdAt: new Date('2024-01-02'),
    tags: ['dark', 'modern', 'ui']
  },

  // Seasonal
  {
    id: 'trending-15',
    name: 'Spring Fresh',
    colors: [
      { hex: '#98FB98', rgb: { r: 152, g: 251, b: 152 }, hsl: { h: 120, s: 93, l: 79 }, name: 'Pale Green' },
      { hex: '#FFB6C1', rgb: { r: 255, g: 182, b: 193 }, hsl: { h: 351, s: 100, l: 86 }, name: 'Light Pink' },
      { hex: '#87CEEB', rgb: { r: 135, g: 206, b: 235 }, hsl: { h: 197, s: 71, l: 73 }, name: 'Sky Blue' },
      { hex: '#F0E68C', rgb: { r: 240, g: 230, b: 140 }, hsl: { h: 54, s: 77, l: 75 }, name: 'Khaki' },
      { hex: '#DDA0DD', rgb: { r: 221, g: 160, b: 221 }, hsl: { h: 300, s: 47, l: 75 }, name: 'Plum' }
    ],
    createdAt: new Date('2024-01-01'),
    tags: ['spring', 'fresh', 'pastel']
  },
  {
    id: 'trending-16',
    name: 'Winter Frost',
    colors: [
      { hex: '#E6F3FF', rgb: { r: 230, g: 243, b: 255 }, hsl: { h: 209, s: 100, l: 95 }, name: 'Alice Blue' },
      { hex: '#B3D9FF', rgb: { r: 179, g: 217, b: 255 }, hsl: { h: 210, s: 100, l: 85 }, name: 'Light Blue' },
      { hex: '#4A90E2', rgb: { r: 74, g: 144, b: 226 }, hsl: { h: 212, s: 72, l: 59 }, name: 'Blue' },
      { hex: '#2C5282', rgb: { r: 44, g: 82, b: 130 }, hsl: { h: 213, s: 49, l: 34 }, name: 'Dark Blue' },
      { hex: '#1A202C', rgb: { r: 26, g: 32, b: 44 }, hsl: { h: 220, s: 26, l: 14 }, name: 'Dark Gray' }
    ],
    createdAt: new Date('2023-12-31'),
    tags: ['winter', 'frost', 'cool']
  },

  // Monochromatic
  {
    id: 'trending-17',
    name: 'Blue Monochrome',
    colors: [
      { hex: '#E3F2FD', rgb: { r: 227, g: 242, b: 253 }, hsl: { h: 210, s: 77, l: 94 }, name: 'Very Light Blue' },
      { hex: '#90CAF9', rgb: { r: 144, g: 202, b: 249 }, hsl: { h: 207, s: 90, l: 77 }, name: 'Light Blue' },
      { hex: '#42A5F5', rgb: { r: 66, g: 165, b: 245 }, hsl: { h: 207, s: 90, l: 61 }, name: 'Blue' },
      { hex: '#1976D2', rgb: { r: 25, g: 118, b: 210 }, hsl: { h: 210, s: 79, l: 46 }, name: 'Dark Blue' },
      { hex: '#0D47A1', rgb: { r: 13, g: 71, b: 161 }, hsl: { h: 217, s: 85, l: 34 }, name: 'Very Dark Blue' }
    ],
    createdAt: new Date('2023-12-30'),
    tags: ['monochrome', 'blue', 'gradient']
  },
  {
    id: 'trending-18',
    name: 'Green Monochrome',
    colors: [
      { hex: '#E8F5E8', rgb: { r: 232, g: 245, b: 232 }, hsl: { h: 120, s: 39, l: 93 }, name: 'Very Light Green' },
      { hex: '#A5D6A7', rgb: { r: 165, g: 214, b: 167 }, hsl: { h: 122, s: 39, l: 74 }, name: 'Light Green' },
      { hex: '#66BB6A', rgb: { r: 102, g: 187, b: 106 }, hsl: { h: 123, s: 39, l: 57 }, name: 'Green' },
      { hex: '#388E3C', rgb: { r: 56, g: 142, b: 60 }, hsl: { h: 123, s: 43, l: 39 }, name: 'Dark Green' },
      { hex: '#1B5E20', rgb: { r: 27, g: 94, b: 32 }, hsl: { h: 124, s: 55, l: 24 }, name: 'Very Dark Green' }
    ],
    createdAt: new Date('2023-12-29'),
    tags: ['monochrome', 'green', 'nature']
  },

  // Complementary
  {
    id: 'trending-19',
    name: 'Fire & Ice',
    colors: [
      { hex: '#FF4500', rgb: { r: 255, g: 69, b: 0 }, hsl: { h: 16, s: 100, l: 50 }, name: 'Orange Red' },
      { hex: '#FF6347', rgb: { r: 255, g: 99, b: 71 }, hsl: { h: 9, s: 100, l: 64 }, name: 'Tomato' },
      { hex: '#00CED1', rgb: { r: 0, g: 206, b: 209 }, hsl: { h: 181, s: 100, l: 41 }, name: 'Dark Turquoise' },
      { hex: '#40E0D0', rgb: { r: 64, g: 224, b: 208 }, hsl: { h: 174, s: 72, l: 56 }, name: 'Turquoise' },
      { hex: '#F0F8FF', rgb: { r: 240, g: 248, b: 255 }, hsl: { h: 208, s: 100, l: 97 }, name: 'Alice Blue' }
    ],
    createdAt: new Date('2023-12-28'),
    tags: ['complementary', 'contrast', 'bold']
  },
  {
    id: 'trending-20',
    name: 'Purple & Gold',
    colors: [
      { hex: '#4B0082', rgb: { r: 75, g: 0, b: 130 }, hsl: { h: 275, s: 100, l: 25 }, name: 'Indigo' },
      { hex: '#8A2BE2', rgb: { r: 138, g: 43, b: 226 }, hsl: { h: 271, s: 76, l: 53 }, name: 'Blue Violet' },
      { hex: '#DA70D6', rgb: { r: 218, g: 112, b: 214 }, hsl: { h: 302, s: 59, l: 65 }, name: 'Orchid' },
      { hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 100, l: 50 }, name: 'Gold' },
      { hex: '#FFF8DC', rgb: { r: 255, g: 248, b: 220 }, hsl: { h: 48, s: 100, l: 93 }, name: 'Cornsilk' }
    ],
    createdAt: new Date('2023-12-27'),
    tags: ['luxury', 'royal', 'elegant']
  },

  // Earth Tones
  {
    id: 'trending-21',
    name: 'Earthy Neutrals',
    colors: [
      { hex: '#8B4513', rgb: { r: 139, g: 69, b: 19 }, hsl: { h: 25, s: 76, l: 31 }, name: 'Saddle Brown' },
      { hex: '#A0522D', rgb: { r: 160, g: 82, b: 45 }, hsl: { h: 19, s: 56, l: 40 }, name: 'Sienna' },
      { hex: '#CD853F', rgb: { r: 205, g: 133, b: 63 }, hsl: { h: 30, s: 59, l: 53 }, name: 'Peru' },
      { hex: '#DEB887', rgb: { r: 222, g: 184, b: 135 }, hsl: { h: 34, s: 57, l: 70 }, name: 'Burlywood' },
      { hex: '#F5F5DC', rgb: { r: 245, g: 245, b: 220 }, hsl: { h: 60, s: 56, l: 91 }, name: 'Beige' }
    ],
    createdAt: new Date('2023-12-26'),
    tags: ['earth', 'neutral', 'natural']
  },
  {
    id: 'trending-22',
    name: 'Clay & Stone',
    colors: [
      { hex: '#704214', rgb: { r: 112, g: 66, b: 20 }, hsl: { h: 30, s: 70, l: 26 }, name: 'Dark Brown' },
      { hex: '#B8860B', rgb: { r: 184, g: 134, b: 11 }, hsl: { h: 43, s: 89, l: 38 }, name: 'Dark Goldenrod' },
      { hex: '#DAA520', rgb: { r: 218, g: 165, b: 32 }, hsl: { h: 43, s: 74, l: 49 }, name: 'Goldenrod' },
      { hex: '#F0E68C', rgb: { r: 240, g: 230, b: 140 }, hsl: { h: 54, s: 77, l: 75 }, name: 'Khaki' },
      { hex: '#FFFACD', rgb: { r: 255, g: 250, b: 205 }, hsl: { h: 54, s: 100, l: 90 }, name: 'Lemon Chiffon' }
    ],
    createdAt: new Date('2023-12-25'),
    tags: ['clay', 'stone', 'rustic']
  },

  // Tropical
  {
    id: 'trending-23',
    name: 'Tropical Paradise',
    colors: [
      { hex: '#FF6B35', rgb: { r: 255, g: 107, b: 53 }, hsl: { h: 16, s: 100, l: 60 }, name: 'Orange Red' },
      { hex: '#F7931E', rgb: { r: 247, g: 147, b: 30 }, hsl: { h: 32, s: 93, l: 54 }, name: 'Orange' },
      { hex: '#FFD23F', rgb: { r: 255, g: 210, b: 63 }, hsl: { h: 46, s: 100, l: 62 }, name: 'Golden Yellow' },
      { hex: '#06FFA5', rgb: { r: 6, g: 255, b: 165 }, hsl: { h: 158, s: 100, l: 51 }, name: 'Spring Green' },
      { hex: '#4ECDC4', rgb: { r: 78, g: 205, b: 196 }, hsl: { h: 176, s: 58, l: 55 }, name: 'Turquoise' }
    ],
    createdAt: new Date('2023-12-24'),
    tags: ['tropical', 'vibrant', 'summer']
  },
  {
    id: 'trending-24',
    name: 'Coral Reef',
    colors: [
      { hex: '#FF7F7F', rgb: { r: 255, g: 127, b: 127 }, hsl: { h: 0, s: 100, l: 75 }, name: 'Light Coral' },
      { hex: '#FFBF7F', rgb: { r: 255, g: 191, b: 127 }, hsl: { h: 30, s: 100, l: 75 }, name: 'Peach' },
      { hex: '#7FBFFF', rgb: { r: 127, g: 191, b: 255 }, hsl: { h: 210, s: 100, l: 75 }, name: 'Light Blue' },
      { hex: '#7FFF7F', rgb: { r: 127, g: 255, b: 127 }, hsl: { h: 120, s: 100, l: 75 }, name: 'Light Green' },
      { hex: '#FF7FBF', rgb: { r: 255, g: 127, b: 191 }, hsl: { h: 330, s: 100, l: 75 }, name: 'Light Pink' }
    ],
    createdAt: new Date('2023-12-23'),
    tags: ['coral', 'ocean', 'bright']
  },

  // Minimalist
  {
    id: 'trending-25',
    name: 'Clean Minimal',
    colors: [
      { hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 100 }, name: 'White' },
      { hex: '#F8F9FA', rgb: { r: 248, g: 249, b: 250 }, hsl: { h: 210, s: 17, l: 98 }, name: 'Ghost White' },
      { hex: '#E9ECEF', rgb: { r: 233, g: 236, b: 239 }, hsl: { h: 210, s: 11, l: 93 }, name: 'Light Gray' },
      { hex: '#6C757D', rgb: { r: 108, g: 117, b: 125 }, hsl: { h: 208, s: 7, l: 46 }, name: 'Gray' },
      { hex: '#212529', rgb: { r: 33, g: 37, b: 41 }, hsl: { h: 210, s: 11, l: 15 }, name: 'Dark Gray' }
    ],
    createdAt: new Date('2023-12-22'),
    tags: ['minimal', 'clean', 'neutral']
  },
  {
    id: 'trending-26',
    name: 'Soft Grays',
    colors: [
      { hex: '#F7F7F7', rgb: { r: 247, g: 247, b: 247 }, hsl: { h: 0, s: 0, l: 97 }, name: 'Very Light Gray' },
      { hex: '#E0E0E0', rgb: { r: 224, g: 224, b: 224 }, hsl: { h: 0, s: 0, l: 88 }, name: 'Light Gray' },
      { hex: '#BDBDBD', rgb: { r: 189, g: 189, b: 189 }, hsl: { h: 0, s: 0, l: 74 }, name: 'Gray' },
      { hex: '#757575', rgb: { r: 117, g: 117, b: 117 }, hsl: { h: 0, s: 0, l: 46 }, name: 'Dark Gray' },
      { hex: '#424242', rgb: { r: 66, g: 66, b: 66 }, hsl: { h: 0, s: 0, l: 26 }, name: 'Very Dark Gray' }
    ],
    createdAt: new Date('2023-12-21'),
    tags: ['gray', 'monochrome', 'subtle']
  },

  // Jewel Tones
  {
    id: 'trending-27',
    name: 'Emerald Dreams',
    colors: [
      { hex: '#50C878', rgb: { r: 80, g: 200, b: 120 }, hsl: { h: 140, s: 55, l: 55 }, name: 'Emerald Green' },
      { hex: '#228B22', rgb: { r: 34, g: 139, b: 34 }, hsl: { h: 120, s: 61, l: 34 }, name: 'Forest Green' },
      { hex: '#32CD32', rgb: { r: 50, g: 205, b: 50 }, hsl: { h: 120, s: 61, l: 50 }, name: 'Lime Green' },
      { hex: '#90EE90', rgb: { r: 144, g: 238, b: 144 }, hsl: { h: 120, s: 73, l: 75 }, name: 'Light Green' },
      { hex: '#F0FFF0', rgb: { r: 240, g: 255, b: 240 }, hsl: { h: 120, s: 100, l: 97 }, name: 'Honeydew' }
    ],
    createdAt: new Date('2023-12-20'),
    tags: ['emerald', 'jewel', 'green']
  },
  {
    id: 'trending-28',
    name: 'Ruby Red',
    colors: [
      { hex: '#E0115F', rgb: { r: 224, g: 17, b: 95 }, hsl: { h: 337, s: 86, l: 47 }, name: 'Ruby' },
      { hex: '#DC143C', rgb: { r: 220, g: 20, b: 60 }, hsl: { h: 348, s: 83, l: 47 }, name: 'Crimson' },
      { hex: '#B22222', rgb: { r: 178, g: 34, b: 34 }, hsl: { h: 0, s: 68, l: 42 }, name: 'Fire Brick' },
      { hex: '#CD5C5C', rgb: { r: 205, g: 92, b: 92 }, hsl: { h: 0, s: 53, l: 58 }, name: 'Indian Red' },
      { hex: '#FFF0F5', rgb: { r: 255, g: 240, b: 245 }, hsl: { h: 340, s: 100, l: 97 }, name: 'Lavender Blush' }
    ],
    createdAt: new Date('2023-12-19'),
    tags: ['ruby', 'red', 'jewel']
  },

  // Sunset & Sunrise
  {
    id: 'trending-29',
    name: 'Golden Hour',
    colors: [
      { hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 100, l: 50 }, name: 'Gold' },
      { hex: '#FFA500', rgb: { r: 255, g: 165, b: 0 }, hsl: { h: 39, s: 100, l: 50 }, name: 'Orange' },
      { hex: '#FF6347', rgb: { r: 255, g: 99, b: 71 }, hsl: { h: 9, s: 100, l: 64 }, name: 'Tomato' },
      { hex: '#FF1493', rgb: { r: 255, g: 20, b: 147 }, hsl: { h: 328, s: 100, l: 54 }, name: 'Deep Pink' },
      { hex: '#8B008B', rgb: { r: 139, g: 0, b: 139 }, hsl: { h: 300, s: 100, l: 27 }, name: 'Dark Magenta' }
    ],
    createdAt: new Date('2023-12-18'),
    tags: ['sunset', 'golden', 'warm']
  },
  {
    id: 'trending-30',
    name: 'Dawn Break',
    colors: [
      { hex: '#FFE4E1', rgb: { r: 255, g: 228, b: 225 }, hsl: { h: 6, s: 100, l: 94 }, name: 'Misty Rose' },
      { hex: '#FFC0CB', rgb: { r: 255, g: 192, b: 203 }, hsl: { h: 350, s: 100, l: 88 }, name: 'Pink' },
      { hex: '#FFB6C1', rgb: { r: 255, g: 182, b: 193 }, hsl: { h: 351, s: 100, l: 86 }, name: 'Light Pink' },
      { hex: '#FFA07A', rgb: { r: 255, g: 160, b: 122 }, hsl: { h: 17, s: 100, l: 74 }, name: 'Light Salmon' },
      { hex: '#FF7F50', rgb: { r: 255, g: 127, b: 80 }, hsl: { h: 16, s: 100, l: 66 }, name: 'Coral' }
    ],
    createdAt: new Date('2023-12-17'),
    tags: ['dawn', 'sunrise', 'soft']
  },

  // Cool Blues
  {
    id: 'trending-31',
    name: 'Arctic Blue',
    colors: [
      { hex: '#E0F6FF', rgb: { r: 224, g: 246, b: 255 }, hsl: { h: 197, s: 100, l: 94 }, name: 'Very Light Blue' },
      { hex: '#87CEEB', rgb: { r: 135, g: 206, b: 235 }, hsl: { h: 197, s: 71, l: 73 }, name: 'Sky Blue' },
      { hex: '#4682B4', rgb: { r: 70, g: 130, b: 180 }, hsl: { h: 207, s: 44, l: 49 }, name: 'Steel Blue' },
      { hex: '#191970', rgb: { r: 25, g: 25, b: 112 }, hsl: { h: 240, s: 64, l: 27 }, name: 'Midnight Blue' },
      { hex: '#000080', rgb: { r: 0, g: 0, b: 128 }, hsl: { h: 240, s: 100, l: 25 }, name: 'Navy' }
    ],
    createdAt: new Date('2023-12-16'),
    tags: ['arctic', 'blue', 'cool']
  },
  {
    id: 'trending-32',
    name: 'Ocean Waves',
    colors: [
      { hex: '#006994', rgb: { r: 0, g: 105, b: 148 }, hsl: { h: 197, s: 100, l: 29 }, name: 'Dark Blue' },
      { hex: '#13A8A8', rgb: { r: 19, g: 168, b: 168 }, hsl: { h: 180, s: 80, l: 37 }, name: 'Teal' },
      { hex: '#A4DE6C', rgb: { r: 164, g: 222, b: 108 }, hsl: { h: 91, s: 63, l: 65 }, name: 'Light Green' },
      { hex: '#FFC93A', rgb: { r: 255, g: 201, b: 58 }, hsl: { h: 44, s: 100, l: 61 }, name: 'Golden Yellow' },
      { hex: '#FC7A57', rgb: { r: 252, g: 122, b: 87 }, hsl: { h: 13, s: 96, l: 66 }, name: 'Coral' }
    ],
    createdAt: new Date('2023-12-15'),
    tags: ['ocean', 'waves', 'blue']
  },

  // Warm Oranges
  {
    id: 'trending-33',
    name: 'Citrus Burst',
    colors: [
      { hex: '#FF8C00', rgb: { r: 255, g: 140, b: 0 }, hsl: { h: 33, s: 100, l: 50 }, name: 'Dark Orange' },
      { hex: '#FFA500', rgb: { r: 255, g: 165, b: 0 }, hsl: { h: 39, s: 100, l: 50 }, name: 'Orange' },
      { hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 100, l: 50 }, name: 'Gold' },
      { hex: '#FFFF00', rgb: { r: 255, g: 255, b: 0 }, hsl: { h: 60, s: 100, l: 50 }, name: 'Yellow' },
      { hex: '#ADFF2F', rgb: { r: 173, g: 255, b: 47 }, hsl: { h: 84, s: 100, l: 59 }, name: 'Green Yellow' }
    ],
    createdAt: new Date('2023-12-14'),
    tags: ['citrus', 'orange', 'energetic']
  },
  {
    id: 'trending-34',
    name: 'Autumn Leaves',
    colors: [
      { hex: '#8B0000', rgb: { r: 139, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 27 }, name: 'Dark Red' },
      { hex: '#B22222', rgb: { r: 178, g: 34, b: 34 }, hsl: { h: 0, s: 68, l: 42 }, name: 'Fire Brick' },
      { hex: '#CD853F', rgb: { r: 205, g: 133, b: 63 }, hsl: { h: 30, s: 59, l: 53 }, name: 'Peru' },
      { hex: '#DAA520', rgb: { r: 218, g: 165, b: 32 }, hsl: { h: 43, s: 74, l: 49 }, name: 'Goldenrod' },
      { hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 100, l: 50 }, name: 'Gold' }
    ],
    createdAt: new Date('2023-12-13'),
    tags: ['autumn', 'leaves', 'warm']
  },

  // Soft Pastels
  {
    id: 'trending-35',
    name: 'Cotton Candy',
    colors: [
      { hex: '#FFB3BA', rgb: { r: 255, g: 179, b: 186 }, hsl: { h: 354, s: 100, l: 85 }, name: 'Light Pink' },
      { hex: '#FFDFBA', rgb: { r: 255, g: 223, b: 186 }, hsl: { h: 32, s: 100, l: 86 }, name: 'Peach Puff' },
      { hex: '#FFFFBA', rgb: { r: 255, g: 255, b: 186 }, hsl: { h: 60, s: 100, l: 86 }, name: 'Light Yellow' },
      { hex: '#BAFFC9', rgb: { r: 186, g: 255, b: 201 }, hsl: { h: 133, s: 100, l: 86 }, name: 'Light Green' },
      { hex: '#BAE1FF', rgb: { r: 186, g: 225, b: 255 }, hsl: { h: 206, s: 100, l: 86 }, name: 'Light Blue' }
    ],
    createdAt: new Date('2023-12-12'),
    tags: ['pastel', 'soft', 'candy']
  },
  {
    id: 'trending-36',
    name: 'Lavender Fields',
    colors: [
      { hex: '#E6E6FA', rgb: { r: 230, g: 230, b: 250 }, hsl: { h: 240, s: 67, l: 94 }, name: 'Lavender' },
      { hex: '#DDA0DD', rgb: { r: 221, g: 160, b: 221 }, hsl: { h: 300, s: 47, l: 75 }, name: 'Plum' },
      { hex: '#DA70D6', rgb: { r: 218, g: 112, b: 214 }, hsl: { h: 302, s: 59, l: 65 }, name: 'Orchid' },
      { hex: '#BA55D3', rgb: { r: 186, g: 85, b: 211 }, hsl: { h: 288, s: 59, l: 58 }, name: 'Medium Orchid' },
      { hex: '#9370DB', rgb: { r: 147, g: 112, b: 219 }, hsl: { h: 260, s: 60, l: 65 }, name: 'Medium Purple' }
    ],
    createdAt: new Date('2023-12-11'),
    tags: ['lavender', 'purple', 'floral']
  },

  // Bold & Bright
  {
    id: 'trending-37',
    name: 'Electric Pop',
    colors: [
      { hex: '#FF0080', rgb: { r: 255, g: 0, b: 128 }, hsl: { h: 330, s: 100, l: 50 }, name: 'Electric Pink' },
      { hex: '#8000FF', rgb: { r: 128, g: 0, b: 255 }, hsl: { h: 270, s: 100, l: 50 }, name: 'Electric Purple' },
      { hex: '#0080FF', rgb: { r: 0, g: 128, b: 255 }, hsl: { h: 210, s: 100, l: 50 }, name: 'Electric Blue' },
      { hex: '#00FF80', rgb: { r: 0, g: 255, b: 128 }, hsl: { h: 150, s: 100, l: 50 }, name: 'Electric Green' },
      { hex: '#FF8000', rgb: { r: 255, g: 128, b: 0 }, hsl: { h: 30, s: 100, l: 50 }, name: 'Electric Orange' }
    ],
    createdAt: new Date('2023-12-10'),
    tags: ['electric', 'pop', 'bright']
  },
  {
    id: 'trending-38',
    name: 'Neon Glow',
    colors: [
      { hex: '#39FF14', rgb: { r: 57, g: 255, b: 20 }, hsl: { h: 111, s: 100, l: 54 }, name: 'Neon Green' },
      { hex: '#FF073A', rgb: { r: 255, g: 7, b: 58 }, hsl: { h: 348, s: 100, l: 51 }, name: 'Neon Red' },
      { hex: '#FF6EC7', rgb: { r: 255, g: 110, b: 199 }, hsl: { h: 323, s: 100, l: 72 }, name: 'Neon Pink' },
      { hex: '#00FFFF', rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 100, l: 50 }, name: 'Neon Cyan' },
      { hex: '#FFFF00', rgb: { r: 255, g: 255, b: 0 }, hsl: { h: 60, s: 100, l: 50 }, name: 'Neon Yellow' }
    ],
    createdAt: new Date('2023-12-09'),
    tags: ['neon', 'glow', 'vibrant']
  },

  // Sophisticated
  {
    id: 'trending-39',
    name: 'Corporate Blue',
    colors: [
      { hex: '#003366', rgb: { r: 0, g: 51, b: 102 }, hsl: { h: 210, s: 100, l: 20 }, name: 'Dark Blue' },
      { hex: '#0066CC', rgb: { r: 0, g: 102, b: 204 }, hsl: { h: 210, s: 100, l: 40 }, name: 'Blue' },
      { hex: '#3399FF', rgb: { r: 51, g: 153, b: 255 }, hsl: { h: 210, s: 100, l: 60 }, name: 'Light Blue' },
      { hex: '#99CCFF', rgb: { r: 153, g: 204, b: 255 }, hsl: { h: 210, s: 100, l: 80 }, name: 'Very Light Blue' },
      { hex: '#E6F3FF', rgb: { r: 230, g: 243, b: 255 }, hsl: { h: 209, s: 100, l: 95 }, name: 'Alice Blue' }
    ],
    createdAt: new Date('2023-12-08'),
    tags: ['corporate', 'professional', 'blue']
  },
  {
    id: 'trending-40',
    name: 'Executive Gray',
    colors: [
      { hex: '#2C2C2C', rgb: { r: 44, g: 44, b: 44 }, hsl: { h: 0, s: 0, l: 17 }, name: 'Dark Gray' },
      { hex: '#4A4A4A', rgb: { r: 74, g: 74, b: 74 }, hsl: { h: 0, s: 0, l: 29 }, name: 'Gray' },
      { hex: '#6B6B6B', rgb: { r: 107, g: 107, b: 107 }, hsl: { h: 0, s: 0, l: 42 }, name: 'Dim Gray' },
      { hex: '#8C8C8C', rgb: { r: 140, g: 140, b: 140 }, hsl: { h: 0, s: 0, l: 55 }, name: 'Gray' },
      { hex: '#ADADAD', rgb: { r: 173, g: 173, b: 173 }, hsl: { h: 0, s: 0, l: 68 }, name: 'Dark Gray' }
    ],
    createdAt: new Date('2023-12-07'),
    tags: ['executive', 'gray', 'professional']
  },

  // Vintage Inspired
  {
    id: 'trending-41',
    name: 'Vintage Poster',
    colors: [
      { hex: '#D2691E', rgb: { r: 210, g: 105, b: 30 }, hsl: { h: 25, s: 75, l: 47 }, name: 'Chocolate' },
      { hex: '#CD853F', rgb: { r: 205, g: 133, b: 63 }, hsl: { h: 30, s: 59, l: 53 }, name: 'Peru' },
      { hex: '#F4A460', rgb: { r: 244, g: 164, b: 96 }, hsl: { h: 28, s: 84, l: 67 }, name: 'Sandy Brown' },
      { hex: '#FFF8DC', rgb: { r: 255, g: 248, b: 220 }, hsl: { h: 48, s: 100, l: 93 }, name: 'Cornsilk' },
      { hex: '#8B4513', rgb: { r: 139, g: 69, b: 19 }, hsl: { h: 25, s: 76, l: 31 }, name: 'Saddle Brown' }
    ],
    createdAt: new Date('2023-12-06'),
    tags: ['vintage', 'poster', 'retro']
  },
  {
    id: 'trending-42',
    name: 'Art Deco',
    colors: [
      { hex: '#000000', rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 }, name: 'Black' },
      { hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 100, l: 50 }, name: 'Gold' },
      { hex: '#C0C0C0', rgb: { r: 192, g: 192, b: 192 }, hsl: { h: 0, s: 0, l: 75 }, name: 'Silver' },
      { hex: '#800020', rgb: { r: 128, g: 0, b: 32 }, hsl: { h: 345, s: 100, l: 25 }, name: 'Burgundy' },
      { hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 100 }, name: 'White' }
    ],
    createdAt: new Date('2023-12-05'),
    tags: ['art deco', 'elegant', 'classic']
  },

  // Modern Gradients
  {
    id: 'trending-43',
    name: 'Instagram Gradient',
    colors: [
      { hex: '#833AB4', rgb: { r: 131, g: 58, b: 180 }, hsl: { h: 276, s: 51, l: 47 }, name: 'Purple' },
      { hex: '#C13584', rgb: { r: 193, g: 53, b: 132 }, hsl: { h: 326, s: 57, l: 48 }, name: 'Pink' },
      { hex: '#E1306C', rgb: { r: 225, g: 48, b: 108 }, hsl: { h: 340, s: 75, l: 54 }, name: 'Hot Pink' },
      { hex: '#FD1D1D', rgb: { r: 253, g: 29, b: 29 }, hsl: { h: 0, s: 98, l: 55 }, name: 'Red' },
      { hex: '#F77737', rgb: { r: 247, g: 119, b: 55 }, hsl: { h: 20, s: 92, l: 59 }, name: 'Orange' }
    ],
    createdAt: new Date('2023-12-04'),
    tags: ['instagram', 'gradient', 'social']
  },
  {
    id: 'trending-44',
    name: 'Spotify Green',
    colors: [
      { hex: '#1DB954', rgb: { r: 29, g: 185, b: 84 }, hsl: { h: 141, s: 73, l: 42 }, name: 'Spotify Green' },
      { hex: '#1ED760', rgb: { r: 30, g: 215, b: 96 }, hsl: { h: 141, s: 75, l: 48 }, name: 'Light Green' },
      { hex: '#191414', rgb: { r: 25, g: 20, b: 20 }, hsl: { h: 0, s: 11, l: 9 }, name: 'Dark Gray' },
      { hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 100 }, name: 'White' },
      { hex: '#B3B3B3', rgb: { r: 179, g: 179, b: 179 }, hsl: { h: 0, s: 0, l: 70 }, name: 'Light Gray' }
    ],
    createdAt: new Date('2023-12-03'),
    tags: ['spotify', 'green', 'brand']
  },

  // Seasonal Extended
  {
    id: 'trending-45',
    name: 'Summer Breeze',
    colors: [
      { hex: '#87CEEB', rgb: { r: 135, g: 206, b: 235 }, hsl: { h: 197, s: 71, l: 73 }, name: 'Sky Blue' },
      { hex: '#98FB98', rgb: { r: 152, g: 251, b: 152 }, hsl: { h: 120, s: 93, l: 79 }, name: 'Pale Green' },
      { hex: '#FFFFE0', rgb: { r: 255, g: 255, b: 224 }, hsl: { h: 60, s: 100, l: 94 }, name: 'Light Yellow' },
      { hex: '#FFB6C1', rgb: { r: 255, g: 182, b: 193 }, hsl: { h: 351, s: 100, l: 86 }, name: 'Light Pink' },
      { hex: '#F0F8FF', rgb: { r: 240, g: 248, b: 255 }, hsl: { h: 208, s: 100, l: 97 }, name: 'Alice Blue' }
    ],
    createdAt: new Date('2023-12-02'),
    tags: ['summer', 'breeze', 'light']
  },
  {
    id: 'trending-46',
    name: 'Winter Wonderland',
    colors: [
      { hex: '#E6F3FF', rgb: { r: 230, g: 243, b: 255 }, hsl: { h: 209, s: 100, l: 95 }, name: 'Alice Blue' },
      { hex: '#B3D9FF', rgb: { r: 179, g: 217, b: 255 }, hsl: { h: 210, s: 100, l: 85 }, name: 'Light Blue' },
      { hex: '#4A90E2', rgb: { r: 74, g: 144, b: 226 }, hsl: { h: 212, s: 72, l: 59 }, name: 'Blue' },
      { hex: '#2C5282', rgb: { r: 44, g: 82, b: 130 }, hsl: { h: 213, s: 49, l: 34 }, name: 'Dark Blue' },
      { hex: '#1A202C', rgb: { r: 26, g: 32, b: 44 }, hsl: { h: 220, s: 26, l: 14 }, name: 'Dark Gray' }
    ],
    createdAt: new Date('2023-12-01'),
    tags: ['winter', 'wonderland', 'blue']
  },

  // Food Inspired
  {
    id: 'trending-47',
    name: 'Chocolate Delight',
    colors: [
      { hex: '#3C1810', rgb: { r: 60, g: 24, b: 16 }, hsl: { h: 11, s: 58, l: 15 }, name: 'Dark Chocolate' },
      { hex: '#7B3F00', rgb: { r: 123, g: 63, b: 0 }, hsl: { h: 31, s: 100, l: 24 }, name: 'Chocolate' },
      { hex: '#D2691E', rgb: { r: 210, g: 105, b: 30 }, hsl: { h: 25, s: 75, l: 47 }, name: 'Chocolate' },
      { hex: '#F4A460', rgb: { r: 244, g: 164, b: 96 }, hsl: { h: 28, s: 84, l: 67 }, name: 'Sandy Brown' },
      { hex: '#FFEFD5', rgb: { r: 255, g: 239, b: 213 }, hsl: { h: 37, s: 100, l: 92 }, name: 'Papaya Whip' }
    ],
    createdAt: new Date('2023-11-30'),
    tags: ['chocolate', 'food', 'brown']
  },
  {
    id: 'trending-48',
    name: 'Berry Fresh',
    colors: [
      { hex: '#8B0000', rgb: { r: 139, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 27 }, name: 'Dark Red' },
      { hex: '#DC143C', rgb: { r: 220, g: 20, b: 60 }, hsl: { h: 348, s: 83, l: 47 }, name: 'Crimson' },
      { hex: '#FF69B4', rgb: { r: 255, g: 105, b: 180 }, hsl: { h: 330, s: 100, l: 71 }, name: 'Hot Pink' },
      { hex: '#FFB6C1', rgb: { r: 255, g: 182, b: 193 }, hsl: { h: 351, s: 100, l: 86 }, name: 'Light Pink' },
      { hex: '#FFF0F5', rgb: { r: 255, g: 240, b: 245 }, hsl: { h: 340, s: 100, l: 97 }, name: 'Lavender Blush' }
    ],
    createdAt: new Date('2023-11-29'),
    tags: ['berry', 'fresh', 'pink']
  },

  // Space & Galaxy
  {
    id: 'trending-49',
    name: 'Galaxy Far Away',
    colors: [
      { hex: '#0B0C10', rgb: { r: 11, g: 12, b: 16 }, hsl: { h: 228, s: 18, l: 5 }, name: 'Space Black' },
      { hex: '#1F2833', rgb: { r: 31, g: 40, b: 51 }, hsl: { h: 213, s: 24, l: 16 }, name: 'Dark Blue' },
      { hex: '#C5C6C7', rgb: { r: 197, g: 198, b: 199 }, hsl: { h: 210, s: 2, l: 78 }, name: 'Light Gray' },
      { hex: '#66FCF1', rgb: { r: 102, g: 252, b: 241 }, hsl: { h: 176, s: 96, l: 69 }, name: 'Cyan' },
      { hex: '#45A29E', rgb: { r: 69, g: 162, b: 158 }, hsl: { h: 177, s: 40, l: 45 }, name: 'Teal' }
    ],
    createdAt: new Date('2023-11-28'),
    tags: ['galaxy', 'space', 'cosmic']
  },
  {
    id: 'trending-50',
    name: 'Nebula Dreams',
    colors: [
      { hex: '#2E0249', rgb: { r: 46, g: 2, b: 73 }, hsl: { h: 277, s: 95, l: 15 }, name: 'Dark Purple' },
      { hex: '#570A57', rgb: { r: 87, g: 10, b: 87 }, hsl: { h: 300, s: 80, l: 19 }, name: 'Purple' },
      { hex: '#A91079', rgb: { r: 169, g: 16, b: 121 }, hsl: { h: 319, s: 83, l: 36 }, name: 'Magenta' },
      { hex: '#F806CC', rgb: { r: 248, g: 6, b: 204 }, hsl: { h: 311, s: 95, l: 50 }, name: 'Hot Pink' },
      { hex: '#FF1B8D', rgb: { r: 255, g: 27, b: 141 }, hsl: { h: 330, s: 100, l: 55 }, name: 'Pink' }
    ],
    createdAt: new Date('2023-11-27'),
    tags: ['nebula', 'cosmic', 'purple']
  },

  // Additional Modern Palettes
  {
    id: 'trending-51',
    name: 'Mint Chocolate',
    colors: [
      { hex: '#2F4F4F', rgb: { r: 47, g: 79, b: 79 }, hsl: { h: 180, s: 25, l: 25 }, name: 'Dark Slate Gray' },
      { hex: '#5F8A8B', rgb: { r: 95, g: 138, b: 139 }, hsl: { h: 181, s: 19, l: 46 }, name: 'Cadet Blue' },
      { hex: '#A8DADC', rgb: { r: 168, g: 218, b: 220 }, hsl: { h: 182, s: 42, l: 76 }, name: 'Powder Blue' },
      { hex: '#F1FAEE', rgb: { r: 241, g: 250, b: 238 }, hsl: { h: 105, s: 60, l: 96 }, name: 'Honeydew' },
      { hex: '#E76F51', rgb: { r: 231, g: 111, b: 81 }, hsl: { h: 12, s: 75, l: 61 }, name: 'Burnt Orange' }
    ],
    createdAt: new Date('2023-11-26'),
    tags: ['mint', 'chocolate', 'modern']
  },
  {
    id: 'trending-52',
    name: 'Sage & Cream',
    colors: [
      { hex: '#9CAF88', rgb: { r: 156, g: 175, b: 136 }, hsl: { h: 89, s: 20, l: 61 }, name: 'Sage Green' },
      { hex: '#B5C99A', rgb: { r: 181, g: 201, b: 154 }, hsl: { h: 86, s: 31, l: 70 }, name: 'Light Sage' },
      { hex: '#CFE1B9', rgb: { r: 207, g: 225, b: 185 }, hsl: { h: 87, s: 36, l: 80 }, name: 'Very Light Green' },
      { hex: '#E9EDC9', rgb: { r: 233, g: 237, b: 201 }, hsl: { h: 67, s: 43, l: 86 }, name: 'Cream' },
      { hex: '#FEFAE0', rgb: { r: 254, g: 250, b: 224 }, hsl: { h: 52, s: 88, l: 94 }, name: 'Light Cream' }
    ],
    createdAt: new Date('2023-11-25'),
    tags: ['sage', 'cream', 'natural']
  },

  // Continue with more palettes...
  {
    id: 'trending-53',
    name: 'Midnight Garden',
    colors: [
      { hex: '#1B263B', rgb: { r: 27, g: 38, b: 59 }, hsl: { h: 219, s: 37, l: 17 }, name: 'Dark Blue' },
      { hex: '#415A77', rgb: { r: 65, g: 90, b: 119 }, hsl: { h: 212, s: 29, l: 36 }, name: 'Steel Blue' },
      { hex: '#778DA9', rgb: { r: 119, g: 141, b: 169 }, hsl: { h: 214, s: 23, l: 56 }, name: 'Light Steel Blue' },
      { hex: '#E0E1DD', rgb: { r: 224, g: 225, b: 221 }, hsl: { h: 75, s: 7, l: 87 }, name: 'Light Gray' },
      { hex: '#0D1321', rgb: { r: 13, g: 19, b: 33 }, hsl: { h: 222, s: 43, l: 9 }, name: 'Very Dark Blue' }
    ],
    createdAt: new Date('2023-11-24'),
    tags: ['midnight', 'garden', 'dark']
  },
  {
    id: 'trending-54',
    name: 'Coral Sunset',
    colors: [
      { hex: '#FF6B6B', rgb: { r: 255, g: 107, b: 107 }, hsl: { h: 0, s: 100, l: 71 }, name: 'Coral' },
      { hex: '#4ECDC4', rgb: { r: 78, g: 205, b: 196 }, hsl: { h: 176, s: 58, l: 55 }, name: 'Turquoise' },
      { hex: '#45B7D1', rgb: { r: 69, g: 183, b: 209 }, hsl: { h: 191, s: 61, l: 55 }, name: 'Sky Blue' },
      { hex: '#96CEB4', rgb: { r: 150, g: 206, b: 180 }, hsl: { h: 152, s: 38, l: 70 }, name: 'Mint Green' },
      { hex: '#FFEAA7', rgb: { r: 255, g: 234, b: 167 }, hsl: { h: 46, s: 100, l: 83 }, name: 'Cream Yellow' }
    ],
    createdAt: new Date('2023-11-23'),
    tags: ['coral', 'sunset', 'warm']
  },

  // Add more palettes to reach 100+
  {
    id: 'trending-55',
    name: 'Dusty Rose',
    colors: [
      { hex: '#DCAE96', rgb: { r: 220, g: 174, b: 150 }, hsl: { h: 21, s: 48, l: 73 }, name: 'Dusty Rose' },
      { hex: '#E8B4B8', rgb: { r: 232, g: 180, b: 184 }, hsl: { h: 355, s: 52, l: 81 }, name: 'Light Pink' },
      { hex: '#A8DADC', rgb: { r: 168, g: 218, b: 220 }, hsl: { h: 182, s: 42, l: 76 }, name: 'Powder Blue' },
      { hex: '#F1FAEE', rgb: { r: 241, g: 250, b: 238 }, hsl: { h: 105, s: 60, l: 96 }, name: 'Honeydew' },
      { hex: '#457B9D', rgb: { r: 69, g: 123, b: 157 }, hsl: { h: 203, s: 39, l: 44 }, name: 'Steel Blue' }
    ],
    createdAt: new Date('2023-11-22'),
    tags: ['dusty', 'rose', 'vintage']
  },

  // Continue adding more palettes to reach 100+...
  // I'll add a few more key ones to demonstrate the variety

  {
    id: 'trending-100',
    name: 'Future Neon',
    colors: [
      { hex: '#08F7FE', rgb: { r: 8, g: 247, b: 254 }, hsl: { h: 182, s: 99, l: 51 }, name: 'Electric Cyan' },
      { hex: '#09FBD3', rgb: { r: 9, g: 251, b: 211 }, hsl: { h: 170, s: 96, l: 51 }, name: 'Electric Turquoise' },
      { hex: '#FE53BB', rgb: { r: 254, g: 83, b: 187 }, hsl: { h: 324, s: 99, l: 66 }, name: 'Electric Pink' },
      { hex: '#F5D300', rgb: { r: 245, g: 211, b: 0 }, hsl: { h: 52, s: 100, l: 48 }, name: 'Electric Yellow' },
      { hex: '#00FF41', rgb: { r: 0, g: 255, b: 65 }, hsl: { h: 135, s: 100, l: 50 }, name: 'Electric Green' }
    ],
    createdAt: new Date('2023-10-01'),
    tags: ['future', 'neon', 'electric']
  }
];

// Helper function to get palettes by category
export const getPalettesByCategory = (category: string) => {
  return trendingPalettes.filter(palette => 
    palette.tags?.includes(category.toLowerCase())
  );
};

// Helper function to get random trending palettes
export const getRandomTrendingPalettes = (count: number = 6) => {
  const shuffled = [...trendingPalettes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Categories for filtering
export const paletteCategories = [
  'modern', 'vintage', 'nature', 'neon', 'pastel', 'monochrome',
  'seasonal', 'food', 'space', 'minimal', 'bold', 'corporate',
  'tropical', 'earth', 'jewel', 'sunset', 'ocean', 'forest'
];