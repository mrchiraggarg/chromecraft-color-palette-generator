import React, { useState } from 'react';
import { Heart, Share2, Download, Trash2, Copy, Check } from 'lucide-react';
import { Palette } from '../types';
import { usePalette } from '../contexts/PaletteContext';
import { generateShareableUrl, copyToClipboard } from '../utils/colorUtils';
import { exportPaletteAsCSS, downloadFile } from '../utils/storageUtils';

interface PaletteCardProps {
  palette: Palette;
  showActions?: boolean;
  onLoad?: (palette: Palette) => void;
}

export default function PaletteCard({ palette, showActions = true, onLoad }: PaletteCardProps) {
  const { savePalette, removePalette, toggleFavorite } = usePalette();
  const [copied, setCopied] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleShare = async () => {
    const url = generateShareableUrl(palette.colors);
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleColorCopy = async (colorHex: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the palette load
    const success = await copyToClipboard(colorHex);
    if (success) {
      setCopiedColor(colorHex);
      setTimeout(() => setCopiedColor(null), 1500);
    }
  };
  const handleDownload = () => {
    const css = exportPaletteAsCSS(palette);
    downloadFile(css, `${palette.name.replace(/\s+/g, '-').toLowerCase()}.css`, 'text/css');
  };

  const handleSave = () => {
    savePalette(palette);
  };

  const handleRemove = () => {
    removePalette(palette.id);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(palette.id);
  };

  const handleLoad = () => {
    if (onLoad) {
      onLoad(palette);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Color Preview */}
      <div className="h-24 flex cursor-pointer" onClick={handleLoad}>
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="flex-1 transition-all duration-300 hover:flex-[2] relative group"
            style={{ backgroundColor: color.hex }}
            onClick={(e) => handleColorCopy(color.hex, e)}
            title={`Click to copy: ${color.hex}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
              {copiedColor === color.hex ? (
                <div className="bg-white bg-opacity-90 rounded-full p-2 transform scale-110 transition-transform duration-200">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              ) : (
                <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Copy className="w-4 h-4 text-gray-700" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Palette Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{palette.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {palette.colors.length} colors • {palette.createdAt.toLocaleDateString()}
            </p>
          </div>

          {showActions && (
            <div className="flex items-center space-x-1 ml-3">
              <button
                onClick={handleToggleFavorite}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  palette.isFavorite
                    ? 'text-red-500 hover:bg-red-50'
                    : 'text-gray-400 hover:text-red-500 hover:bg-gray-50'
                }`}
                title={palette.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`w-4 h-4 ${palette.isFavorite ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                title="Share palette"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                onClick={handleDownload}
                className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors duration-200"
                title="Download as CSS"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={handleRemove}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                title="Delete palette"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Color codes preview */}
        <div className="mt-3 flex flex-wrap gap-1">
          {palette.colors.slice(0, 3).map((color, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded"
            >
              {color.hex}
            </span>
          ))}
          {palette.colors.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
              +{palette.colors.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}