import React, { useState } from 'react';
import { Shuffle, Plus, Save, Share2, Download, Copy, Check } from 'lucide-react';
import { usePalette } from '../contexts/PaletteContext';
import ColorSwatch from './ColorSwatch';
import { isValidHex, generateShareableUrl, copyToClipboard } from '../utils/colorUtils';
import { exportPaletteAsCSS, downloadFile } from '../utils/storageUtils';

export default function PaletteGenerator() {
  const { currentPalette, generateRandomPalette, generatePaletteFromBase, savePalette } = usePalette();
  const [colorCount, setColorCount] = useState(5);
  const [baseColor, setBaseColor] = useState('#3B82F6');
  const [customHex, setCustomHex] = useState('');
  const [paletteName, setPaletteName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateRandom = () => {
    generateRandomPalette(colorCount);
  };

  const handleGenerateFromBase = () => {
    generatePaletteFromBase(baseColor, colorCount);
  };

  const handleGenerateFromHex = () => {
    if (isValidHex(customHex)) {
      generatePaletteFromBase(customHex, colorCount);
      setCustomHex('');
    }
  };

  const handleSave = () => {
    if (!currentPalette) return;
    
    const name = paletteName.trim() || currentPalette.name;
    savePalette({
      ...currentPalette,
      name,
    });
    setPaletteName('');
    setShowNameInput(false);
  };

  const handleShare = async () => {
    if (!currentPalette) return;
    
    const url = generateShareableUrl(currentPalette.colors);
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!currentPalette) return;
    
    const css = exportPaletteAsCSS(currentPalette);
    const filename = paletteName.trim() || currentPalette.name;
    downloadFile(css, `${filename.replace(/\s+/g, '-').toLowerCase()}.css`, 'text/css');
  };

  const presetColors = [
    '#3B82F6', // Blue
    '#EF4444', // Red
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#8B5CF6', // Purple
    '#F97316', // Orange
    '#06B6D4', // Cyan
    '#EC4899', // Pink
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate New Palette</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Random Generation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Random Palette</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Number of colors: {colorCount}
                </label>
                <input
                  type="range"
                  min="3"
                  max="10"
                  value={colorCount}
                  onChange={(e) => setColorCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3</span>
                  <span>10</span>
                </div>
              </div>
              <button
                onClick={handleGenerateRandom}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Shuffle className="w-5 h-5" />
                <span>Generate Random</span>
              </button>
            </div>
          </div>

          {/* Base Color Generation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">From Base Color</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Base Color</label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-12 h-10 rounded-lg border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    placeholder="#3B82F6"
                  />
                </div>
              </div>
              
              {/* Preset Colors */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Presets</label>
                <div className="grid grid-cols-4 gap-2">
                  {presetColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setBaseColor(color)}
                      className="w-8 h-8 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleGenerateFromBase}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                <span>Generate Harmonious</span>
              </button>
            </div>
          </div>

          {/* Custom Hex Input */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">From Hex Code</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Hex Code</label>
                <input
                  type="text"
                  value={customHex}
                  onChange={(e) => setCustomHex(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                  placeholder="#FF5733"
                />
              </div>
              <button
                onClick={handleGenerateFromHex}
                disabled={!isValidHex(customHex)}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Plus className="w-5 h-5" />
                <span>Generate from Hex</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Palette Display */}
      {currentPalette && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{currentPalette.name}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowNameInput(!showNameInput)}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleShare}
                  className="px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>CSS</span>
                </button>
              </div>
            </div>

            {showNameInput && (
              <div className="mt-4 flex space-x-2">
                <input
                  type="text"
                  value={paletteName}
                  onChange={(e) => setPaletteName(e.target.value)}
                  placeholder="Enter palette name..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm transition-colors duration-200"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowNameInput(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg text-sm transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {currentPalette.colors.map((color, index) => (
                <ColorSwatch
                  key={index}
                  color={color}
                  size="large"
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}