import { useState } from 'react';
import { Palette, Copy, Check } from 'lucide-react';
import { ColorSwatch } from './ColorSwatch';
import { copyToClipboard } from '../utils/clipboard';
import type { ColorPalette } from '../../shared/types';

interface PaletteCardProps {
  palette: ColorPalette;
}

export function PaletteCard({ palette }: PaletteCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCSS = async () => {
    const css = `
/* ${palette.name} */
:root {
  --base-color: ${palette.baseColor};
  --background-color: ${palette.backgroundColor};
  --light-shadow: ${palette.lightShadow};
  --dark-shadow: ${palette.darkShadow};
  --highlight: ${palette.highlight};
  --text-primary: ${palette.textPrimary};
  --text-secondary: ${palette.textSecondary};
}

/* Soft UI shadows */
.shadow-neumorph {
  box-shadow: 
    8px 8px 16px ${palette.darkShadow},
    -8px -8px 16px ${palette.lightShadow};
}

.shadow-neumorph-inset {
  box-shadow: 
    inset 4px 4px 8px ${palette.darkShadow},
    inset -4px -4px 8px ${palette.lightShadow};
}
    `.trim();

    try {
      await copyToClipboard(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy CSS:', error);
    }
  };

  return (
    <div
      className="p-8 rounded-3xl shadow-neumorph bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-neumorph-pressed transition-all duration-300 relative"
      style={{ backgroundColor: palette.backgroundColor, zIndex: 1 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl shadow-neumorph-inset">
            <Palette className="w-6 h-6" style={{ color: palette.textPrimary }} />
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: palette.textPrimary }}>
              {palette.name}
            </h3>
            <p className="text-sm" style={{ color: palette.textSecondary }}>
              Color Palette
            </p>
          </div>
        </div>
        
        <button
          onClick={handleCopyCSS}
          className="p-3 rounded-2xl shadow-neumorph hover:shadow-neumorph-pressed active:shadow-neumorph-inset transition-all duration-200 group"
          style={{ backgroundColor: palette.backgroundColor }}
        >
          {copied ? (
            <Check className="w-5 h-5" style={{ color: palette.textPrimary }} />
          ) : (
            <Copy className="w-5 h-5" style={{ color: palette.textPrimary }} />
          )}
        </button>
      </div>

      {/* Color Swatches */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <ColorSwatch
          label="Base"
          color={palette.baseColor}
          description="Primary color"
        />
        <ColorSwatch
          label="Background"
          color={palette.backgroundColor}
          description="Main surface"
        />
        <ColorSwatch
          label="Light Shadow"
          color={palette.lightShadow}
          description="Highlight shadow"
        />
        <ColorSwatch
          label="Dark Shadow"
          color={palette.darkShadow}
          description="Depth shadow"
        />
        <ColorSwatch
          label="Highlight"
          color={palette.highlight}
          description="Accent color"
        />
        <ColorSwatch
          label="Text Primary"
          color={palette.textPrimary}
          description="Main text"
        />
        <ColorSwatch
          label="Text Secondary"
          color={palette.textSecondary}
          description="Secondary text"
        />
      </div>
    </div>
  );
}
