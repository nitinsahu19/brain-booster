import React, { useEffect, useReducer, useState } from 'react';
import { initialState, QuizReducer } from './QuizReducer';

const questions = [
  {
    question: "What is the derivative of f(x) = x² with respect to x?",
    options: ["f'(x) = 2x", "f'(x) = x", "f'(x) = 2", "f'(x) = x²"]
  },
  {
    question: "What is the unit of Force?",
    options: ["Newton", "Joule", "Watt", "Pascal"]
  },
  {
    question: "What is the speed of light?",
    options: ["3 x 10⁸ m/s", "5 x 10⁶ m/s", "1 x 10⁵ m/s", "9.8 m/s²"]
  },
  {
    question: "Who is known as the father of physics?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Tesla"]
  },
  {
    question: "What is the SI unit of Power?",
    options: ["Watt", "Newton", "Joule", "Coulomb"]
  },
  {
    question: "Acceleration due to gravity on Earth is?",
    options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "7.5 m/s²"]
  },
  {
    question: "What is the formula of kinetic energy?",
    options: ["½mv²", "mv", "mgh", "F=ma"]
  },
  {
    question: "Which particle has a negative charge?",
    options: ["Electron", "Proton", "Neutron", "Photon"]
  },
  {
    question: "Which law is F=ma?",
    options: ["Newton's 2nd Law", "Newton's 1st Law", "Newton's 3rd Law", "Law of Gravity"]
  },
  {
    question: "Which of the following is a vector quantity?",
    options: ["Velocity", "Speed", "Distance", "Temperature"]
  }
];

function QuizzPage() {
  const [state, dispatch] = useReducer(QuizReducer, initialState);
  const [count, setCount] = useState(60);

 
  useEffect(() => {
    if (count === 0){
   
   alert("time is over")
     return; }
        

    const timer = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

   
    return () => clearInterval(timer); 
  }, [count]);

  const handelnext = () => {
    if (state.page < questions.length) {
      dispatch({ type: "nextfield" });
    }
  };

  const handelpre = () => {
    if (state.page > 1) {
      dispatch({ type: "prefield" });
    }
  };

  const currentQuestion = questions[state.page - 1];

  return (
    <div className='flex font-sans justify-center items-center h-screen'>
      <div className='rounded shadow-2xl p-4 w-full max-w-xl bg-white'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>Physics</h1>
            <p className='text-gray-600 text-sm'>Calculus Basics Quiz</p>
          </div>
          <div className='text-sm flex gap-2'>
            <p>Time Left: {count} seconds</p>
            <p>🪙 100</p>
          </div>
        </div>

        <div className='text-sm pt-2 flex gap-2'>
          <p className='text-sm font-semibold'>Question {state.page} of {questions.length}</p>
        </div>

        <h2 className="font-semibold text-sm mt-4 mb-3">
          {currentQuestion.question}
        </h2>

        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button key={index} className="w-full text-left px-4 py-2 border rounded hover:bg-gray-50">
              {option}
            </button>
          ))}
        </div>

        <div className='flex justify-between mt-6'>
          {state.page !== 1 && (
            <button className='border rounded px-4 py-2' onClick={handelpre}>Previous</button>
          )}
          <button className='border text-white bg-blue-600 rounded px-4 py-2' onClick={handelnext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default QuizzPage;
