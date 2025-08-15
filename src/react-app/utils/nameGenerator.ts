
const adjectives = [
  'Magnificent', 'Brilliant', 'Radiant', 'Luminous', 'Vibrant', 'Elegant', 'Serene', 'Majestic',
  'Stunning', 'Gorgeous', 'Beautiful', 'Graceful', 'Charming', 'Delightful', 'Wonderful',
  'Amazing', 'Fantastic', 'Incredible', 'Marvelous', 'Spectacular', 'Breathtaking', 'Captivating',
  'Enchanting', 'Mesmerizing', 'Dazzling', 'Gleaming', 'Shimmering', 'Glowing', 'Sparkling',
  'Pristine', 'Perfect', 'Flawless', 'Sublime', 'Divine', 'Celestial', 'Ethereal', 'Mystical',
  'Dreamy', 'Whimsical', 'Playful', 'Cheerful', 'Joyful', 'Blissful', 'Peaceful', 'Tranquil',
  'Calm', 'Soothing', 'Gentle', 'Soft', 'Tender', 'Delicate', 'Refined', 'Sophisticated'
];

const colors = [
  'Azure', 'Coral', 'Crimson', 'Emerald', 'Golden', 'Ivory', 'Jade', 'Lavender',
  'Magenta', 'Peach', 'Rose', 'Sapphire', 'Silver', 'Turquoise', 'Violet', 'Amber',
  'Blush', 'Bronze', 'Chocolate', 'Copper', 'Fuchsia', 'Indigo', 'Lime', 'Maroon',
  'Olive', 'Pink', 'Purple', 'Salmon', 'Scarlet', 'Tan', 'Teal', 'Yellow', 'Mint',
  'Cream', 'Pearl', 'Opal', 'Ruby', 'Topaz', 'Garnet', 'Onyx', 'Platinum', 'Diamond'
];

const nouns = [
  'Dream', 'Vision', 'Harmony', 'Symphony', 'Melody', 'Rhythm', 'Canvas', 'Palette',
  'Spectrum', 'Prism', 'Aurora', 'Sunset', 'Dawn', 'Twilight', 'Moonlight', 'Starlight',
  'Garden', 'Blossom', 'Petal', 'Flower', 'Rose', 'Lily', 'Orchid', 'Jasmine',
  'Ocean', 'Wave', 'Tide', 'Breeze', 'Wind', 'Cloud', 'Sky', 'Heaven',
  'Crystal', 'Jewel', 'Gem', 'Treasure', 'Wonder', 'Magic', 'Spell', 'Charm',
  'Whisper', 'Echo', 'Song', 'Dance', 'Light', 'Glow', 'Shine', 'Radiance'
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generatePaletteName(): string {
  const adjective = getRandomElement(adjectives);
  const color = getRandomElement(colors);
  const noun = getRandomElement(nouns);
  
  return `${adjective} ${color} ${noun}`;
}
