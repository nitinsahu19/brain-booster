import ScoreCard from "./organisms/ScoreCard";
import { useState } from "react";
import QuizCard from "./organisms/QuizCard";
import { useSelector } from "react-redux";
import SubjectList from "./organisms/SubjectList"; 

const Quizees = () => {

    const { questions, currentIndex, selectedAnswers } = useSelector((state) => state.quiz);
    const currentQuestion = questions[currentIndex];
    const [showScoreCard, setShowScoreCard] = useState(false);

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
                <QuizCard handleSubmit={handleSubmit} />
            )}

            <SubjectList />

        </>
    );
};


export default Quizees;