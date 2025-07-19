import React from 'react';
import { TrendingUp, Star, Eye, Filter, Grid } from 'lucide-react';
import { usePalette } from '../contexts/PaletteContext';
import PaletteCard from './PaletteCard';
import { Palette } from '../types';
import { trendingPalettes, getPalettesByCategory, getRandomTrendingPalettes, paletteCategories } from '../data/trendingPalettes';

export default function TrendingPalettes() {
  const { loadPalette } = usePalette();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [viewMode, setViewMode] = React.useState<'grid' | 'categories'>('categories');

  const filteredPalettes = React.useMemo(() => {
    if (selectedCategory === 'all') {
      return trendingPalettes;
    }
    return getPalettesByCategory(selectedCategory);
  }, [selectedCategory]);

  const handleLoadPalette = (palette: Palette) => {
    loadPalette(palette);
  };

  const renderCategoryView = () => {
    const categories = [
      {
        title: 'Most Popular',
        icon: TrendingUp,
        palettes: getRandomTrendingPalettes(6)
      },
      {
        title: 'Designer Favorites',
        icon: Star,
        palettes: getPalettesByCategory('modern').slice(0, 6)
      },
      {
        title: 'Nature Inspired',
        icon: Eye,
        palettes: getPalettesByCategory('nature').slice(0, 6)
      }
    ];

    return (
      <>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <button
                onClick={() => setViewMode('grid')}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.palettes.map((palette) => (
                <div key={palette.id} className="relative">
                  <PaletteCard
                    palette={palette}
                    showActions={false}
                    onLoad={handleLoadPalette}
                  />
                  {/* Trending Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    🔥 HOT
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };

  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredPalettes.map((palette) => (
        <PaletteCard
          key={palette.id}
          palette={palette}
          showActions={false}
          onLoad={handleLoadPalette}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Trending Palettes</h2>
        <p className="text-gray-600 mt-2">Discover 100+ curated color combinations from our community</p>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{trendingPalettes.length}+</h3>
            <p className="text-gray-600">Curated Palettes</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{paletteCategories.length}</h3>
            <p className="text-gray-600">Categories</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">∞</h3>
            <p className="text-gray-600">Inspiration</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {paletteCategories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedCategory !== 'all' && (
              <span className="text-sm text-gray-600">
                {filteredPalettes.length} palettes found
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('categories')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                viewMode === 'categories'
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Categories</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                viewMode === 'grid'
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>All</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'categories' ? renderCategoryView() : renderGridView()}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Create Your Own Trending Palette</h3>
        <p className="text-purple-100 mb-6">
          Join thousands of designers creating beautiful color combinations
        </p>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'generator' }))}
          className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Start Creating
        </button>
      </div>
    </div>
  );
}