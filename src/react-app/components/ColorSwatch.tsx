import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface ColorSwatchProps {
  label: string;
  color: string;
  description?: string;
}

export function ColorSwatch({ label, color, description }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy color:', error);
    }
  };

  return (
    <div className="group relative">
      <div
        className="relative w-full h-20 rounded-2xl shadow-neumorph cursor-pointer transition-all duration-300 hover:shadow-neumorph-pressed active:shadow-neumorph-inset"
        style={{ backgroundColor: color }}
        onClick={handleCopy}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {copied ? (
            <Check className="w-6 h-6 text-white drop-shadow-lg" />
          ) : (
            <Copy className="w-6 h-6 text-white drop-shadow-lg" />
          )}
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <div className="font-medium text-gray-700 text-sm">{label}</div>
        <div className="text-xs text-gray-500 mt-1 font-medium">{color}</div>
        {description && (
          <div className="text-xs text-gray-400 mt-1">{description}</div>
        )}
      </div>
    </div>
  );
}
