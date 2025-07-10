// import React, { useState, useEffect } from 'react'
// import mangaQuestions from './quizQuestion'
// const Quiz = () => {
//   const [question, setQuestion] = useState([])
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   const [game, setGame] = useState(true)
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showNext, setShowNext] = useState(false);
//   const [score, setScore] = useState(0)
//   useEffect(() => {
//     const random = [...mangaQuestions].sort(() => 0.5 - Math.random())
//     const selected = random.slice(0, 20);
//     setQuestion(selected);
//   }, [])

//   if (question.length === 0) {
//     return (
//       <div className="text-center text-lg mt-20">
//         Loading questions...
//       </div>
//     );
//   }
//   const clickOption = (option) => {
//     if (selectedAnswer !== null) return;
//     setSelectedAnswer(option)
//     setShowNext(true)
//     if (option === currentQuestion.correct_answer) {
//       setScore(prev => prev + 1);
//     }

//   }
//   const nextQuestion = () => {
//     if (currentQuestionIndex < question.length - 1) {
//       setCurrentQuestionIndex(prev => prev + 1);
//       setSelectedAnswer(null); // reset selected option
//       setShowNext(false);      // hide next until answered
//     }
//     else {
//       setGame(false)
//     }
//   }
//   const newQuiz = () => {
//     const random = [...mangaQuestions].sort(() => 0.5 - Math.random());
//     const selected = random.slice(0, 20);
//     setQuestion(selected);
//     setCurrentQuestionIndex(0);
//     setGame(true);
//     setScore(0); // reset score
//     setSelectedAnswer(null);
//     setShowNext(false);
//   };

//   const currentQuestion = question[currentQuestionIndex]
//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
//         <div className="h-auto w-[90%] sm:w-96 bg-white shadow-xl rounded-2xl p-6 relative flex flex-col items-center text-center space-y-6">

//           {/* Question Number */}
//           <span className="absolute top-1 left-2 bg-blue-200 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full shadow">
//             {currentQuestionIndex + 1}/{question.length}
//           </span>

//           {/* Question */}
//           <h1 className="text-lg sm:text-xl font-bold text-gray-800">
//             {currentQuestion.question}
//           </h1>

//           {/* Options */}
//           <div className="flex flex-col space-y-3 w-full">
//             {currentQuestion.options.map((option, index) => (
//               <button
//                 key={index}
//                 className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded shadow text-sm sm:text-base transition-all"
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           {/* Next Button */}
//           {game ? (<button
//             onClick={nextQuestion}
//             className="bg
//           -amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-6 rounded-md shadow transition-all duration-200"
//           >
//             Next
//           </button>) : (
//             <button
//               onClick={newQuiz}
//               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md shadow transition-all duration-200"
//             >
//               New Quiz
//             </button>
//           )}
//         </div>
//       </div>

//     </>
//   )
// }

// export default Quiz
//   const shuffleArray = (array) => {
//   const newArr = [...array];
//   for (let i = newArr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//   }
//   return newArr;
// };





import React, { useState, useEffect } from 'react';
import mangaQuestions from './quizQuestion';

const Quiz = () => {
  const [question, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [game, setGame] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNext, setShowNext] = useState(false);


  const shuffleArray = (array) => {
    const newArr = [...array].sort(() => 0.5 - Math.random());
    return newArr;
  }

  useEffect(() => {
    const random = [...mangaQuestions].sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 20).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestion(selected);
  }, []);

  if (question.length === 0) {
    return (
      <div className="text-center text-lg mt-20">
        Loading questions...
      </div>
    );
  }

  const currentQuestion = question[currentQuestionIndex];

  const clickOption = (option) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
    setShowNext(true);

    if (option === currentQuestion.correct_answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowNext(false);
    } else {
      setGame(false);
    }
  };

  const newQuiz = () => {
    const random = [...mangaQuestions].sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 20).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }))
    setQuestion(selected);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowNext(false);
    setGame(true);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
        <div className="h-auto w-[90%] sm:w-96 bg-white shadow-xl rounded-2xl p-6 relative flex flex-col items-center text-center space-y-6">

          {/* If quiz is completed, show score */}
          {!game ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800">Quiz Completed!</h2>
              <p className="text-lg text-gray-700 mt-2">Your Score: {score} / {question.length}</p>
              <button
                onClick={newQuiz}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md shadow transition-all duration-200"
              >
                New Quiz
              </button>
            </>
          ) : (
            <>
              {/* Question Number */}
              <span className="absolute top-1 left-2 bg-blue-200 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full shadow">
                {currentQuestionIndex + 1}/{question.length}
              </span>

              {/* Question */}
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                {currentQuestion.question}
              </h1>

              {/* Options */}
              <div className="flex flex-col space-y-3 w-full">
                {currentQuestion.options.map((option, index) => {
                  let bgColor = "bg-gray-100 hover:bg-gray-200";

                  if (selectedAnswer) {
                    if (option === currentQuestion.correct_answer) {
                      bgColor = "bg-green-300";
                    } else if (option === selectedAnswer && option !== currentQuestion.correct_answer) {
                      bgColor = "bg-red-300";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => clickOption(option)}
                      disabled={selectedAnswer !== null}
                      className={`${bgColor} text-gray-800 py-2 px-4 rounded shadow text-sm sm:text-base transition-all`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              {showNext && (
                <button
                  onClick={nextQuestion}
                  className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-6 rounded-md shadow transition-all duration-200"
                >
                  Next
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
