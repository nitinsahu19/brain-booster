
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { nextQuestion, preQuestion, resetquize, checkAnswer } from "../slice/quizeSlice";
import { useTimer } from "react-timer-hook";



const Quizze = ({ onExpire }) => {

  const dispatch = useDispatch();
  const { question, score, currentIndex, selectedOptions, isFinished } = useSelector((state) => state.quize)

  const currentQuestion = question[currentIndex]

  const handleoptionClick = (option) => {
    dispatch(checkAnswer(option))
  }

  // const [timeLeft, setTimeLeft] = useState(5 * 60); // 15 minutes in seconds


  // useEffect(() => {
  //   if (timeLeft <= 0) {
  //     // Time khatam hone par quiz khatam karo
  //     dispatch(resetquize());  // Ya koi "finishQuiz" action banao
  //     return;
  //   }

  //   const timer = setInterval(() => {
  //     setTimeLeft((prev) => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [timeLeft, dispatch]);

  // const formatTime = (seconds) => {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  // };


 const time = new Date();
  time.setMinutes(time.getMinutes() + 1); // 5 minutes

  
  const {
    seconds,
    minutes,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      dispatch(resetquize()) 
    },
  });

  

  return (
    <div>

      <div>


        {!isFinished ? <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow mt-3">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Science</h1>
              <p className="text-sm text-gray-500">Calculus Basics Quiz</p>
            </div>
            <div className="flex items-center gap-4">
             <div style={{ fontSize: "30px" }}>
      <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
              <span className="flex items-center gap-1 text-yellow-500">
                💰 100
              </span>
            </div>
          </div>


          <div className="mb-6">
            <p className="font-medium mb-2">Question {currentIndex + 1} of {question.length}</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-600 h-2 rounded-full " style={{ width: `${((currentIndex + 1) / question.length) * 100}%` }}
              ></div>
            </div>
          </div>


          <h3 className="text-xl mb-2 font-medium">
            Q{currentIndex + 1}: {currentQuestion.question}
          </h3>
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleoptionClick(option)}
                className={`block w-full px-4 py-2 border font-medium  rounded-3xl ${selectedOptions[currentIndex] === option
                  ? "border-green-600 border-2"
                  : "rounded-3xl border"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => dispatch(preQuestion())}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Previous
            </button>

            <button
              onClick={() => dispatch(nextQuestion())}
              // disabled={currentIndex === question.length - 1}
              className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded"
            >
              Next
            </button>
          </div>

          <p className="mt-4 text-center font-medium text-lg">Score: {score}</p>
        </div> : <div className="p-4 max-w-md mx-auto text-center font-medium">
          <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed! 🎉</h2>
          <p className="text-lg mb-2">Your Score: {score} / {question.length}</p>
          <button
            onClick={() => dispatch(resetquize())}
            className="px-4 py-2 bg-blue-600 text-white rounded font-medium"
          >
            Restart Quiz
          </button>
        </div>}
      </div>

    </div>
  )
}

export default Quizze
