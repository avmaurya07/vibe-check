import React from "react";

function QuizQuestion({ question, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option) => (
          <div
            key={option.id}
            onClick={() => onSelectAnswer(question.id, option.id)}
            className={`quiz-option flex items-center ${
              selectedAnswer === option.id
                ? "selected"
                : "border-gray-200 hover:border-purple-300"
            }`}
          >
            <div className="text-3xl mr-4">{option.emoji}</div>
            <div className="flex-1">{option.text}</div>
            {selectedAnswer === option.id && (
              <div className="text-purple-600 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
