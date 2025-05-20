const questions = [
  {
    id: "weekend",
    question: "What's your ideal weekend plan?",
    options: [
      {
        id: "a",
        text: "Netflix marathon in my blanket burrito 🛌",
        emoji: "🛌",
      },
      {
        id: "b",
        text: "Spontaneous road trip to somewhere weird 🚗",
        emoji: "🚗",
      },
      {
        id: "c",
        text: "Picnic in the park with homemade bread 🧺",
        emoji: "🧺",
      },
      { id: "d", text: "Club hopping until sunrise 🕺", emoji: "🕺" },
      { id: "e", text: "Reading and contemplating existence 📚", emoji: "📚" },
    ],
  },
  {
    id: "song",
    question: "Pick a song that describes your mood today:",
    options: [
      { id: "a", text: "Lo-fi beats to relax/study to 🎧", emoji: "🎧" },
      {
        id: "b",
        text: "That weird song that went viral on TikTok 🎵",
        emoji: "🎵",
      },
      { id: "c", text: "Folklore/cottagecore playlist 🪕", emoji: "🪕" },
      {
        id: "d",
        text: "Heavy bass that annoys your neighbors 🔊",
        emoji: "🔊",
      },
      { id: "e", text: "Ambient music that sounds like space 🎻", emoji: "🎻" },
    ],
  },
  {
    id: "snack",
    question: "Choose a snack right now:",
    options: [
      { id: "a", text: "Matcha latte and a pastry 🍵", emoji: "🍵" },
      {
        id: "b",
        text: "Something with Flamin' Hot Cheetos as an ingredient 🔥",
        emoji: "🔥",
      },
      { id: "c", text: "Homemade cookies or jam 🍪", emoji: "🍪" },
      {
        id: "d",
        text: "Energy drink and whatever's in the pantry 🥫",
        emoji: "🥫",
      },
      { id: "e", text: "Exotic tea and dark chocolate 🍫", emoji: "🍫" },
    ],
  },
  {
    id: "aesthetic",
    question: "What's your favorite aesthetic?",
    options: [
      { id: "a", text: "Minimalist with plants everywhere 🪴", emoji: "🪴" },
      { id: "b", text: "Internet nostalgia and vaporwave 💾", emoji: "💾" },
      { id: "c", text: "Cozy natural vibes with fairy lights ✨", emoji: "✨" },
      { id: "d", text: "Organized chaos with lots of color 🎨", emoji: "🎨" },
      {
        id: "e",
        text: "Vintage academic with antique objects 🔍",
        emoji: "🔍",
      },
    ],
  },
  {
    id: "texting",
    question: "How do you usually text your friends?",
    options: [
      { id: "a", text: "Full sentences, perfect grammar 📝", emoji: "📝" },
      { id: "b", text: "Memes and obscure references only 🤣", emoji: "🤣" },
      {
        id: "c",
        text: "Lots of heart emojis and exclamation points! ❤️",
        emoji: "❤️",
      },
      { id: "d", text: "Chaotic voice messages at 3 AM 🎤", emoji: "🎤" },
      { id: "e", text: "Long philosophical paragraphs 💭", emoji: "💭" },
    ],
  },
  {
    id: "game",
    question: "If life was a game, you would be...",
    options: [
      { id: "a", text: "The NPC with surprising depth 🧙‍♂️", emoji: "🧙‍♂️" },
      { id: "b", text: "The secret unlockable character 👾", emoji: "👾" },
      {
        id: "c",
        text: "The character who gives out healing items 🧁",
        emoji: "🧁",
      },
      { id: "d", text: "The one with the weird side quests 🗺️", emoji: "🗺️" },
      {
        id: "e",
        text: "The lore keeper who knows all secrets 📜",
        emoji: "📜",
      },
    ],
  },
];

export default questions;
