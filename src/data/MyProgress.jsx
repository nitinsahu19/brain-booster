import ProgressLayout from "../Components/template/ProgressLayout";
import {
  Flame,
  Target,
  Star,
  FlaskConical,
  Trophy,
  Timer,
  CheckCircle,
} from "lucide-react";

const dummyData = {
  totalQuizzes: 247,
  averageScore: 84.5,
  accuracyRate: 91.2,
  currentStreak: 12,
  subjects: [
    { name: "Mathematics", score: 50 },
    { name: "Science", score: 92 },
    { name: "History", score: 65 },
    { name: "Language Arts", score: 88 },
    
    { name: "Geography", score: 31 },
  ],
  achievements: [
    { title: "Quiz Master", desc: "Complete 100 quizzes", date: "Dec 15, 2023", icon: <Trophy className="text-yellow-500" /> },
    { title: "Perfect Score", desc: "Achieve 100% in 5 consecutive quizzes", date: "Dec 12, 2023", icon: <Star className="text-blue-500" /> },
    { title: "Science Whiz", desc: "Master all science topics", date: "Dec 10, 2023", icon: <FlaskConical className="text-green-500" /> },
    { title: "Math Champion", desc: "Complete advanced math section", date: "Dec 8, 2023", icon: <CheckCircle className="text-purple-500" /> },
    { title: "Consistent Learner", desc: "10-day streak", date: "Dec 5, 2023", icon: <Flame className="text-orange-500" /> },
    { title: "Speed Demon", desc: "Complete 5 quizzes under time limit", date: "Dec 1, 2023", icon: <Timer className="text-red-500" /> },
  ],
};

const weeklyProgress = [
  { day: "Mon", quizzes: 3 },
  { day: "Tue", quizzes: 2 },
  { day: "Wed", quizzes: 4 },
  { day: "Thu", quizzes: 1 },
  { day: "Fri", quizzes: 3 },
  { day: "Sat", quizzes: 5 },
  { day: "Sun", quizzes: 7 },
];

export default function MyProgress() {
  return <ProgressLayout data={dummyData} weeklyProgress={weeklyProgress} />;
}
