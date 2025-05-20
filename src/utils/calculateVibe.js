import vibeResults from "../data/vibeResults";

const calculateVibe = (answers) => {
  // Count answer types (a, b, c, d, e)
  const counts = Object.values(answers).reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {});

  // Find matching vibe based on criteria
  for (const [key, vibe] of Object.entries(vibeResults)) {
    if (vibe.criteria && Object.entries(vibe.criteria).length > 0) {
      const matches = Object.entries(vibe.criteria).every(
        ([letter, minCount]) => (counts[letter] || 0) >= minCount
      );

      if (matches) {
        return vibe;
      }
    }
  }

  // Default to vibeMixer if no criteria matched
  return vibeResults.vibeMixer;
};

export default calculateVibe;
