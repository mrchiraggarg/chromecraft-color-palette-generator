import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Color } from '../types';
import { copyToClipboard } from '../utils/colorUtils';

interface ColorSwatchProps {
  color: Color;
  size?: 'small' | 'medium' | 'large';
  showDetails?: boolean;
  className?: string;
}

export default function ColorSwatch({ 
  color, 
  size = 'medium', 
  showDetails = true, 
  className = '' 
}: ColorSwatchProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, type: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const detailSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  return (
    <div className={`group ${className}`}>
      {/* Color Swatch */}
      <div
        className={`${sizeClasses[size]} rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl relative overflow-hidden`}
        style={{ backgroundColor: color.hex }}
        onClick={() => handleCopy(color.hex, 'hex')}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          {copied === 'hex' ? (
            <Check className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          ) : (
            <Copy className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </div>
      </div>

      {/* Color Details */}
      {showDetails && (
        <div className="mt-3 space-y-2">
          <div className="text-center">
            <p className="font-medium text-gray-900 text-sm truncate">{color.name}</p>
          </div>
          
          <div className="space-y-1">
            {/* Hex */}
            <button
              onClick={() => handleCopy(color.hex, 'hex')}
              className={`w-full px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center justify-between group/copy ${detailSizes[size]}`}
            >
              <span className="font-mono text-gray-700">{color.hex}</span>
              {copied === 'hex' ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover/copy:opacity-100 transition-opacity" />
              )}
            </button>

            {/* RGB */}
            <button
              onClick={() => handleCopy(`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`, 'rgb')}
              className={`w-full px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center justify-between group/copy ${detailSizes[size]}`}
            >
              <span className="font-mono text-gray-700">
                RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
              </span>
              {copied === 'rgb' ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover/copy:opacity-100 transition-opacity" />
              )}
            </button>

            {/* HSL */}
            <button
              onClick={() => handleCopy(`hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`, 'hsl')}
              className={`w-full px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center justify-between group/copy ${detailSizes[size]}`}
            >
              <span className="font-mono text-gray-700">
                HSL({color.hsl.h}, {color.hsl.s}%, {color.hsl.l}%)
              </span>
              {copied === 'hsl' ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover/copy:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}