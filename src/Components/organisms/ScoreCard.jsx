import { useDispatch } from 'react-redux';
import { resetQuiz } from '../../ReduxApi/Slice/QuizSlice';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../atoms/Button/PrimaryBtn';

const ScoreCard = ({ questions, selectedAnswers }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBack = () => {
        dispatch(resetQuiz())
        navigate('/')
    };

    const calculateScore = (questions, selectedAnswers) => {
        let score = 0;
        questions.forEach((q) => {
            if (selectedAnswers[q.id] === q.answer) {
                score++;
            }
        });
        return score;
    };

    const score = calculateScore(questions, selectedAnswers)

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
                <h2 className="text-2xl font-bold text-center">Your Final Score</h2>
                <div className="text-lg text-gray-700">
                    <span className="font-semibold">Score:</span> {score} / {questions.length}
                </div>
                <PrimaryBtn onClick={handleBack} text='Back to home' hasBg addClass='w-full' />
            </div>
        </div>
    );
};


export default ScoreCard