
import { useDispatch, useSelector } from "react-redux"
import { nextQuestion, preQuestion, resetquize, checkAnswer,resetIsFinished } from "../../slice/quizeSlice";
import { useTimer } from "react-timer-hook";
import { MdOutlineWatchLater } from "react-icons/md";
import { useState } from "react";




const Quizze = () => {

  const dispatch = useDispatch();
  const { question, score, currentIndex, selectedOptions, isFinished } = useSelector((state) => state.quize)

  const currentQuestion = question[currentIndex]

  const handleoptionClick = (option) => {
    dispatch(checkAnswer(option))
  }



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


  const [quizestart, setQuizestart] = useState(false)

  const time = new Date();
  time.setMinutes(time.getMinutes() + 1); // 5 minutes


  const {
    seconds,
    minutes,
    start,
    restart
  } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      // dispatch(resetquize())
      dispatch(resetIsFinished())

    },
  });


const startTime = ()=>{
    const time = new Date();
    time.setMinutes(time.getMinutes() + 1);
    restart(time);
    setQuizestart(true);
}
const resetTime = ()=>{
    const time = new Date();
    time.setMinutes(time.getMinutes() + 1);
    restart(time);
    setQuizestart(false);
}


  return (
    <div>

      <div>

       {quizestart===false&& <div>
          <div className="pt-4 flex justify-center ">
            <button onClick={()=>setQuizestart(true,startTime())} className="bg-blue-600 px-5 py-2 rounded text-white cursor-pointer font-semibold">Start quize</button>
          </div>
        </div>}

       { quizestart===true&&<div>
          <div>
            {!isFinished ? <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-2xl mt-1">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold">Science</h1>
                  <p className="text-sm text-gray-500">Calculus Basics Quiz</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-lg flex items-center gap-1">
                    <span><MdOutlineWatchLater /></span>
                    <div>
                      <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-yellow-500">
                    💰 100
                  </span>
                </div>
              </div>


              <div className="mb-6 flex  justify-between w-full items-center">
                <p className="font-medium mb-2 ">Question {currentIndex + 1} of {question.length}</p>
                <div className="w-50 bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full " style={{ width: `${((currentIndex + 1) / question.length) * 100}%` }}
                  ></div>
                </div>
              </div>


              <h3 className="text-xl mb-2 font-medium">
                Q{currentIndex + 1}: {currentQuestion.question}
              </h3>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleoptionClick(option)}
                    className={`flex  w-full px-4 py-3 border font-semibold ${selectedOptions[currentIndex] === option
                      ? "border-green-600 border-2 rounded"
                      : "rounded border-gray-300"
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

            </div> : <div className="p-4 max-w-md mx-auto text-center font-medium">
              <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed! 🎉</h2>
              <p className="text-lg mb-2">Your Score: {score} / {question.length}</p>
              <button
                onClick={() => dispatch(resetquize(),resetTime())}
                className="px-4 py-2 bg-blue-600 text-white rounded font-medium"
              >
                Restart Quiz
              </button>
            </div>}
          </div>
        </div>}
        
      </div>
    </div>

  )
}

export default Quizze
