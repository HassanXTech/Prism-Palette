import { useState } from 'react';
import { Palette } from 'lucide-react';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" style={{ zIndex: 1000 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-6 py-4 rounded-2xl shadow-neumorph hover:shadow-neumorph-pressed active:shadow-neumorph-inset transition-all duration-200 bg-white/80 backdrop-blur-sm"
      >
        <div
          className="w-6 h-6 rounded-lg shadow-neumorph-inset border border-white/20"
          style={{ backgroundColor: value }}
        />
        <Palette className="w-5 h-5 text-gray-600" />
        <span className="text-gray-700 font-medium">Pick Color</span>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full mb-2" style={{ zIndex: 1001 }}>
          <div className="p-4 rounded-2xl shadow-neumorph bg-white/90 backdrop-blur-sm border border-white/20">
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-48 h-32 rounded-xl cursor-pointer border-none outline-none shadow-neumorph-inset"
            />
            <div className="mt-3 text-center">
              <span className="text-sm text-gray-600 font-medium">{value}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
