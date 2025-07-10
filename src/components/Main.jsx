import React from 'react'
import { useState,useEffect } from 'react'
import Quiz from './Quiz'
import mangaQuestions from './quizQuestion'
const Main = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <>
    {startQuiz ? (
        <Quiz /> // Show the quiz component and pass data as props
      ) : (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
  <button
    className="text-xl sm:text-2xl bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    onClick={() => setStartQuiz(true)}
  >
    🚀 Start Quiz
  </button>
</div>

      )}
    </>
  )
}

export default Main