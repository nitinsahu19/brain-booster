import ScoreCard from "../../Components/organisms/ScoreCard";
import { useState } from "react";
import QuizCard from "../../Components/organisms/QuizCard";
import { useSelector } from "react-redux";
import SubjectList from "../../Components/organisms/SubjectList";
// import { useParams } from "react-router-dom";

const Quizees = () => { 

    const { questions, currentIndex, selectedAnswers } = useSelector((state) => state.quiz);
    const currentQuestion = questions[currentIndex];
    const [showScoreCard, setShowScoreCard] = useState(false);
    // const {subjectId} = useParams()

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
