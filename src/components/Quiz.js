import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import questions from "../data/questions";
import vibeResults from "../data/vibeResults";
import { saveQuizResult } from "../firebase";

function Quiz({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResult = () => {
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

  const submitQuiz = async () => {
    setIsSubmitting(true);
    try {
      const result = calculateResult();
      await saveQuizResult(result.id);
      onComplete(answers, result);
    } catch (error) {
      console.error("Error saving quiz result:", error);
      // Still continue even if saving failed
      const result = calculateResult();
      onComplete(answers, result);
    }
    setIsSubmitting(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = answers[currentQuestion.id];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-purple-600">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>

      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={answers[currentQuestion.id]}
        onSelectAnswer={handleAnswer}
      />

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-2 rounded-full ${
            currentQuestionIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-200 hover:bg-purple-300"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed || isSubmitting}
          className={`px-6 py-2 rounded-full ${
            !canProceed || isSubmitting
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          {isLastQuestion
            ? isSubmitting
              ? "Finding your vibe..."
              : "Get My Vibe!"
            : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
