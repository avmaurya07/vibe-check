import React from "react";

function Home({ onStartQuiz }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <h1 className="text-5xl font-display mb-8 text-purple-700">
        ✨ Vibe Check ✨
      </h1>

      <div className="mb-12 space-y-3">
        <p className="text-xl">
          Discover your current mood and personality vibe!
        </p>
        <p className="text-md text-gray-600">
          Answer a few fun questions and we'll tell you if you're a Chill Lo-Fi
          Cat, Cosmic Meme Overlord, or something else entirely...
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        <div className="bg-lofi text-white p-5 rounded-lg text-center">
          <div className="text-4xl mb-2">🌈</div>
          <div className="font-bold">Lo-Fi Cat</div>
        </div>
        <div className="bg-cosmic text-white p-5 rounded-lg text-center">
          <div className="text-4xl mb-2">🚀</div>
          <div className="font-bold">Cosmic Meme</div>
        </div>
        <div className="bg-cottage text-white p-5 rounded-lg text-center">
          <div className="text-4xl mb-2">🍄</div>
          <div className="font-bold">Cottagecore</div>
        </div>
        <div className="bg-chaos text-white p-5 rounded-lg text-center">
          <div className="text-4xl mb-2">🔥</div>
          <div className="font-bold">Chaos Goblin</div>
        </div>
        <div className="bg-deep text-white p-5 rounded-lg text-center">
          <div className="text-4xl mb-2">📚</div>
          <div className="font-bold">Deep Thinker</div>
        </div>
      </div>

      <button
        onClick={onStartQuiz}
        className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Start Your Vibe Check! 🎮
      </button>

      <p className="mt-8 text-sm text-gray-500">
        Takes about 1 minute • See how your vibe compares to others
      </p>
    </div>
  );
}

export default Home;
