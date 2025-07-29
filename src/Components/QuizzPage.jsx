import React, { useEffect, useReducer, useState } from 'react';
import { initialState, QuizReducer } from './QuizReducer';
import { MdOutlineWatchLater } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";

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
    const [second, setSecond] = useState(60);
    const [minut, setMinut] = useState(2);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        if (minut === 0 && second === 0) return;

        const timer = setInterval(() => {
            setSecond(prev => {
                if (prev === 0) {
                    setMinut(m => m - 1);
                    return 59;
                } else {
                    return prev - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [minut, second]);

    const handelnext = () => {
        if (state.page < questions.length) {
            dispatch({ type: "nextfield" });
            setSecond(60);
            setMinut(2);
        }
    };

    const handelpre = () => {
        if (state.page > 1) {
            dispatch({ type: "prefield" });
            setSecond(60);
            setMinut(2);
        }
    };

    const currentQuestion = questions[state.page - 1];

    const handleOptionClick = (index) => {
        setAnswers(prev => ({
            ...prev,
            [state.page - 1]: index
        }));
    };

    return (
        <div className='flex font-sans justify-center items-center h-screen bg-gray-100'>
            {(minut > 0 || second > 0) ? (
                <div className='rounded-3xl shadow-2xl p-4 w-full max-w-xl bg-white'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold'>Physics</h1>
                            <p className='text-gray-600 text-sm'>Calculus Basics Quiz</p>
                        </div>
                        <div className='text-sm flex gap-2 items-center'>
                            <MdOutlineWatchLater />
                            <p>{String(minut).padStart(2, '0')}:{String(second).padStart(2, '0')}</p>
                            <FaCoins className='text-yellow-500' />
                            <p>100</p>
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
                            <button
                                key={index}
                                onClick={() => handleOptionClick(index)}
                                className={`w-full cursor-pointer text-left px-4 py-2 border rounded ${answers[state.page - 1] === index ? 'border-blue-900 bg-blue-600 text-white' : ''}`} >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className='flex justify-between mt-6'>
                        {state.page !== 1 && (
                            <button className='border cursor-pointer rounded px-4 py-2' onClick={handelpre}>Previous</button>
                        )}
                        {state.page !== 10 && (
                            <button className='border cursor-pointer text-white bg-blue-600 rounded px-4 py-2' onClick={handelnext}>Next</button>
                        )}
                        {state.page === 10 && (
                            <button className='border cursor-pointer text-white bg-gray-600 rounded px-4 py-2'>Submit</button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center text-red-500 text-2xl font-bold bg-white rounded-3xl p-8 shadow-2xl">
                    ❌ 😋 Your time is over
                </div>
            )}
        </div>
    );
}

export default QuizzPage;
