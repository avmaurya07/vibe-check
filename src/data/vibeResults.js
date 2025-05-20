const vibeResults = {
  lofiCat: {
    id: "lofiCat",
    title: "Chill Lo-Fi Cat",
    emoji: "🌈",
    color: "lofi",
    description:
      "You're relaxed, artsy, and always have chill music in the background. Your aesthetic is minimalist with touches of cozy, and your friends value your calm presence. You'd be the perfect study buddy, or the friend who makes everyone feel at ease.",
    gif: "https://giphy.com/embed/nR4L10XlJcSeQ",
    criteria: { a: 3 }, // Needs at least 3 'a' answers
  },
  cosmicMeme: {
    id: "cosmicMeme",
    title: "Cosmic Meme Overlord",
    emoji: "🚀",
    color: "cosmic",
    description:
      "You operate in chaos but somehow always land on your feet. Your brain is an internet algorithm - unpredictable, hilarious, and always three trends ahead. You're fluent in memes, and your friends count on you to brighten their feeds with the weirdest content.",
    gif: "https://giphy.com/embed/3o84sCE6KjEPpXDV04",
    criteria: { b: 3 }, // Needs at least 3 'b' answers
  },
  cottageDreamer: {
    id: "cottageDreamer",
    title: "Cottagecore Dreamer",
    emoji: "🍄",
    color: "cottage",
    description:
      "Soft, nature-loving, and forever stuck in a Pinterest board. You probably have a sourdough starter named after a literary character. Your ideal day involves tea, books, and contemplating whether to get chickens. You make everyone feel warm and welcomed.",
    gif: "https://giphy.com/embed/l0MYNQhQ39pBxVKSY",
    criteria: { c: 3 }, // Needs at least 3 'c' answers
  },
  chaosGoblin: {
    id: "chaosGoblin",
    title: "Chaos Goblin Energy",
    emoji: "🔥",
    color: "chaos",
    description:
      "You bring unpredictable vibes and dramatic flair to everything you do. Sleep schedule? Optional. Plans? Flexible. Hotel? Trivago. You're the friend who turns a regular Tuesday into the most memorable night no one quite remembers correctly.",
    gif: "https://giphy.com/embed/l2JHVUriDGEtWOx0c",
    criteria: { d: 3 }, // Needs at least 3 'd' answers
  },
  deepThinker: {
    id: "deepThinker",
    title: "Deep Thinker Mode",
    emoji: "📚",
    color: "deep",
    description:
      "Always introspective, analyzing the world from every angle. You've been called an old soul, and your notes app is full of late-night existential thoughts. Your friends value your unique perspective, even if they sometimes need a dictionary to keep up.",
    gif: "https://giphy.com/embed/xUA7b6oaRIgzmAKpUY",
    criteria: { e: 3 }, // Needs at least 3 'e' answers
  },
  vibeMixer: {
    id: "vibeMixer",
    title: "Vibe Mixer Extraordinaire",
    emoji: "🎭",
    color: "deep",
    description:
      "You're a beautiful contradiction - a little bit of everything. Adaptable and multifaceted, you can't be put in just one box. One day you're hosting a dinner party, the next you're sending memes at 3 AM. Your friends never know what to expect, and that's why they love you.",
    gif: "https://giphy.com/embed/3oEjHQn7PBRvy9A5mE",
    criteria: {}, // Default result if no others match
  },
};

export default vibeResults;
