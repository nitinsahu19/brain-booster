import { FaCoins } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { useTimer } from "react-timer-hook";
import AnswerFiled from "../../Components/atoms/InputField/AnswerFiled";
import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, prevQuestion, selectAnswer } from "../../ReduxApi/Slice/QuizSlice";
import ScoreCard from "../../Components/organisms/ScoreCard";
import { useState } from "react";
import PrimaryBtn from "../../Components/atoms/Button/PrimaryBtn";

const TimerFun = ({ expiryTimestamp }) => {
    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire: () => alert("Time's up!"),
    });

    return (
        <div>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
    );
};

const Quizees = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 15 * 60);

    const dispatch = useDispatch();
    const { questions, currentIndex, selectedAnswers } = useSelector((state) => state.quiz);
    const currentQuestion = questions[currentIndex];
    const selected = selectedAnswers[currentQuestion.id] || null;
    const [showScoreCard, setShowScoreCard] = useState(false);

    const handleSelect = (value) => {
        dispatch(selectAnswer({ questionId: currentQuestion.id, answer: value }));
    };

    const handleSubmit = () => {
        if (selectedAnswers[currentQuestion.id]) {
            setShowScoreCard(true);
        } else {
            alert("Please select an answer before submitting.");
        }
    };

    return (
        <>
            {showScoreCard ? (
                <ScoreCard questions={questions} selectedAnswers={selectedAnswers} />
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                    <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Mathematics</h2>
                                <p className="text-sm text-gray-500">Calculus Basics Quiz</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <LuClock3 />
                                    <TimerFun expiryTimestamp={time} />
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaCoins className="text-yellow-500" />
                                    <span>100</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-800 mb-2">
                                Question {currentIndex + 1} of {questions.length}
                            </p>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div
                                    className="h-2 bg-blue-600 rounded-full"
                                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-900 font-medium">
                            {currentIndex + 1}. {currentQuestion.question}
                        </p>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => (
                                <AnswerFiled
                                    key={index}
                                    answers={option}
                                    name={`question_${currentQuestion.id}`}
                                    value={option}
                                    selected={selected}
                                    onSelect={handleSelect}
                                />
                            ))}
                        </div>

                        <div className="flex justify-between">
                            <PrimaryBtn
                                text="Previous"
                                addClass="border border-gray-300"
                                onClick={() => dispatch(prevQuestion())}
                                disabled={currentIndex === 0}
                            />

                            {currentIndex < questions.length - 1 ? (
                                <PrimaryBtn
                                    text="Next"
                                    hasBg
                                    onClick={() => dispatch(nextQuestion())}
                                />
                            ) : (
                                <PrimaryBtn
                                    text="Submit"
                                    hasBg
                                    onClick={handleSubmit}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


export default Quizees;
