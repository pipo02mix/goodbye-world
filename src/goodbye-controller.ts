// Define a mapping of language codes to the word "goodbye" in different languages
const goodbyes: Record<string, string> = {
  en: 'Goodbye',     // English
  es: 'Adiós',       // Spanish
  fr: 'Au revoir',   // French
  de: 'Auf Wiedersehen', // German
  it: 'Arrivederci', // Italian
  jp: 'さようなら',   // Japanese
  zh: '再见',        // Chinese (Simplified)
  ru: 'До свидания',  // Russian
  hi: 'अलविदा',      // Hindi
  ar: 'وداعا',       // Arabic
};

// Get the word "goodbye" in the specified language
export function getGoodbye(languageCode?: string): string {
  if (!languageCode) {
    const codes = Object.keys(goodbyes);
    languageCode = codes[Math.floor(Math.random() * codes.length)];
  }

  return goodbyes[languageCode] || goodbyes['en'];
}
