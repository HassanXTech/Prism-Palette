import { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { ColorPicker } from '../components/ColorPicker';
import { PaletteCard } from '../components/PaletteCard';
import { generateNeumorphicPalette, generateRandomColor } from '../utils/colorGenerator';
import { generatePaletteName } from '../utils/nameGenerator';
import type { ColorPalette } from '../../shared/types';

export default function Home() {
  const [baseColor, setBaseColor] = useState('#e2e8f0');
  const [currentPalette, setCurrentPalette] = useState<ColorPalette | null>(null);
  const [savedPalettes, setSavedPalettes] = useState<ColorPalette[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('prism-palettes');
    if (saved) {
      try {
        setSavedPalettes(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load saved palettes:', error);
      }
    }
  }, []);

  useEffect(() => {
    const palette = generateNeumorphicPalette(baseColor);
    setCurrentPalette({
      ...palette,
      name: generatePaletteName(),
    });
  }, [baseColor]);

  const handleGenerateRandom = () => {
    setBaseColor(generateRandomColor());
  };

  const handleSavePalette = () => {
    if (currentPalette) {
      const newSavedPalettes = [currentPalette, ...savedPalettes].slice(0, 10);
      setSavedPalettes(newSavedPalettes);
      localStorage.setItem('prism-palettes', JSON.stringify(newSavedPalettes));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-blue-100/20 to-pink-100/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Prism
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Generate beautiful color palettes with perfect shadows and highlights for your soft UI designs
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <ColorPicker value={baseColor} onChange={setBaseColor} />
              
              <button
                onClick={handleGenerateRandom}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl shadow-neumorph hover:shadow-neumorph-pressed active:shadow-neumorph-inset transition-all duration-200 bg-gray-700 text-white font-medium"
              >
                <Sparkles className="w-5 h-5" />
                Generate Random
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-blue-100/20 to-pink-100/20 pointer-events-none" />
        
        <div className="relative">
          {/* Current Palette */}
          {currentPalette && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Current Palette</h2>
                <button
                  onClick={handleSavePalette}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-neumorph hover:shadow-neumorph-pressed active:shadow-neumorph-inset transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-700 font-medium"
                >
                  <Heart className="w-4 h-4" />
                  Save
                </button>
              </div>
              <PaletteCard palette={currentPalette} />
            </div>
          )}

          {/* Saved Palettes */}
          {savedPalettes.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Saved Palettes</h2>
              <div className="grid gap-8">
                {savedPalettes.map((palette, index) => (
                  <PaletteCard key={index} palette={palette} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-16">
        <div className="text-center text-gray-500 text-sm">
          <p>
            Built with love for soft UI design enthusiasts — by
            {' '}
            <a
              href="https://github.com/HassanXTech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              HassanXTech
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
