## Prism Palette

A tiny tool for generating soft‑UI (neumorphic) color palettes. Pick a base color and it gives you a background, light/dark shadows, a highlight, and text colors — all tuned to work together. You can copy everything as CSS variables with one click.

Why I built it: I kept reaching for the same shadow values and eyeballing colors. This makes it fast to get a decent palette without fiddling.

### Features
- Generate a full palette from a single base color
- Copy CSS variables for immediate use (includes shadow presets)
- Saves your recent palettes in the browser (up to 10)

### Quick start
```fish
npm install
npm run dev
```
Then open http://localhost:5173.

### Tech
- React + TypeScript
- Vite
- Tailwind CSS
- Lucide icons

### How it works (short)
The base color is converted to HSL. From there, lightness and saturation are adjusted to create:
- a soft background
- light/dark shadow colors for the neumorphic effect
- a subtle highlight
- readable text colors (primary/secondary)

### Project layout
```
src/
	react-app/
		components/ (ColorPicker, ColorSwatch, PaletteCard)
		pages/ (Home)
		utils/ (color generation, clipboard, name generator)
		App.tsx, index.css
	shared/ (types)
index.html, vite.config.ts, tailwind.config.js
```

### License
MIT
