import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { generateUserId } from "./firebase";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Home from "./components/Home";

function App() {
  const [userId, setUserId] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [vibeResult, setVibeResult] = useState(null);
  const navigate = useNavigate();

  // Set or retrieve user ID
  useEffect(() => {
    const storedUserId = localStorage.getItem("vibeCheckUserId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = generateUserId();
      localStorage.setItem("vibeCheckUserId", newUserId);
      setUserId(newUserId);
    }
  }, []);

  // Handle completion of quiz
  const handleQuizComplete = (answers, result) => {
    setQuizAnswers(answers);
    setVibeResult(result);
    navigate("/results");
  };

  // Handle restarting the quiz
  const handleRestartQuiz = () => {
    setQuizAnswers({});
    setVibeResult(null);
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen font-body">
      <Routes>
        <Route
          path="/"
          element={<Home onStartQuiz={() => navigate("/quiz")} />}
        />
        <Route
          path="/quiz"
          element={<Quiz onComplete={handleQuizComplete} />}
        />
        <Route
          path="/results"
          element={
            <Results
              vibeResult={vibeResult}
              onRestartQuiz={handleRestartQuiz}
              userId={userId}
            />
          }
        />
        <Route path="/results/:vibeId" element={<Results viewOnly={true} />} />
      </Routes>
    </div>
  );
}

export default App;
