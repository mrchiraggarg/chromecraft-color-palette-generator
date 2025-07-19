import React, { useState } from 'react';
import { Search, Filter, Heart, Calendar } from 'lucide-react';
import { usePalette } from '../contexts/PaletteContext';
import PaletteCard from './PaletteCard';

export default function SavedPalettes() {
  const { savedPalettes, loadPalette } = usePalette();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'name' | 'favorites'>('recent');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const filteredPalettes = savedPalettes
    .filter(palette => {
      if (showFavoritesOnly && !palette.isFavorite) return false;
      if (searchTerm) {
        return palette.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               palette.colors.some(color => 
                 color.hex.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 color.name.toLowerCase().includes(searchTerm.toLowerCase())
               );
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'favorites':
          if (a.isFavorite && !b.isFavorite) return -1;
          if (!a.isFavorite && b.isFavorite) return 1;
          return b.createdAt.getTime() - a.createdAt.getTime();
        case 'recent':
        default:
          return b.createdAt.getTime() - a.createdAt.getTime();
      }
    });

  const handleLoadPalette = (palette: any) => {
    loadPalette(palette);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Saved Palettes</h2>
        <p className="text-gray-600 mt-2">Your collection of beautiful color combinations</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search palettes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="recent">Most Recent</option>
                <option value="name">Name</option>
                <option value="favorites">Favorites First</option>
              </select>
            </div>

            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                showFavoritesOnly
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
              <span>Favorites</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{savedPalettes.length} total palettes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>{savedPalettes.filter(p => p.isFavorite).length} favorites</span>
          </div>
        </div>
      </div>

      {/* Palettes Grid */}
      {filteredPalettes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPalettes.map((palette) => (
            <PaletteCard
              key={palette.id}
              palette={palette}
              onLoad={handleLoadPalette}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Heart className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            {searchTerm || showFavoritesOnly ? 'No palettes found' : 'No saved palettes yet'}
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {searchTerm || showFavoritesOnly
              ? 'Try adjusting your search or filters to find what you\'re looking for.'
              : 'Start creating and saving beautiful color palettes to see them here.'}
          </p>
        </div>
      )}
    </div>
  );
}