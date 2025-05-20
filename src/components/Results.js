import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import vibeResults from "../data/vibeResults";
import ShareButtons from "./ShareButtons";
import StatsChart from "./StatsChart";
import Confetti from "react-confetti";

function Results({
  vibeResult: propVibeResult,
  onRestartQuiz,
  userId,
  viewOnly = false,
}) {
  const { vibeId } = useParams();
  const [vibeResult, setVibeResult] = useState(propVibeResult);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(!viewOnly);

  // If we're viewing a shared result
  useEffect(() => {
    if (viewOnly && vibeId) {
      setVibeResult(vibeResults[vibeId] || vibeResults.vibeMixer);
    }
  }, [viewOnly, vibeId]);

  // Fetch real-time stats
  useEffect(() => {
    const statsRef = doc(db, "stats", "vibes");
    const unsubscribe = onSnapshot(
      statsRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setStats({
            vibes: data.vibes || {},
            totalResponses: data.totalResponses || 0,
          });
        } else {
          setStats({
            vibes: {},
            totalResponses: 0,
          });
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching stats:", error);
        setLoading(false);
      }
    );

    // Disable confetti after 5 seconds
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => {
        clearTimeout(timer);
        unsubscribe();
      };
    }

    return unsubscribe;
  }, [showConfetti]);

  if (!vibeResult || loading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
        <div className="text-3xl">Finding your vibe...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <div className={`vibe-card bg-${vibeResult.color} text-white`}>
        <div className="result-emoji text-8xl mb-4">{vibeResult.emoji}</div>
        <h1 className="text-4xl font-display mb-4">
          Your Vibe: {vibeResult.title}
        </h1>
        <p className="text-xl mb-6">{vibeResult.description}</p>

        <div className="bg-white rounded-lg p-4 mb-6">
          <iframe
            src={vibeResult.gif}
            width="100%"
            height="200"
            frameBorder="0"
            className="giphy-embed"
          ></iframe>
        </div>

        {!viewOnly && <ShareButtons vibeResult={vibeResult} />}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">How do you compare?</h2>
        <StatsChart stats={stats} currentVibeId={vibeResult.id} />
      </div>

      {!viewOnly && (
        <div className="text-center mt-8">
          <button
            onClick={onRestartQuiz}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Take the Quiz Again!
          </button>
        </div>
      )}

      {viewOnly && (
        <div className="text-center mt-8">
          <a
            href="/"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full inline-block"
          >
            Take the Quiz Yourself!
          </a>
        </div>
      )}
    </div>
  );
}

export default Results;
