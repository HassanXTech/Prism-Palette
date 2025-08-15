function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function generateNeumorphicPalette(baseColor: string) {
  const [hue, saturation, lightness] = hexToHsl(baseColor);
  
  const backgroundColor = hslToHex(
    hue,
    Math.max(5, saturation * 0.3),
    Math.max(88, Math.min(92, lightness))
  );
  
  const lightShadow = hslToHex(
    hue,
    Math.max(3, saturation * 0.2),
    Math.min(98, lightness + 8)
  );
  
  const darkShadow = hslToHex(
    hue,
    Math.max(8, saturation * 0.4),
    Math.max(75, lightness - 15)
  );
  
  const highlight = hslToHex(
    hue,
    Math.min(100, saturation * 1.2),
    Math.min(95, lightness + 5)
  );
  
  const textPrimary = lightness > 50 ? '#2d3748' : '#f7fafc';
  const textSecondary = lightness > 50 ? '#4a5568' : '#e2e8f0';
  
  return {
    baseColor,
    backgroundColor,
    lightShadow,
    darkShadow,
    highlight,
    textPrimary,
    textSecondary,
  };
}

export function generateRandomColor(): string {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 20;
  const lightness = Math.floor(Math.random() * 20) + 80;
  
  return hslToHex(hue, saturation, lightness);
}
