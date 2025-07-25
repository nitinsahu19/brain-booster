import StatCard from "../molecules/StatCard";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const StatsOverview = ({ data }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <StatCard icon={<BsGraphUpArrow />} value={data.totalQuizzes} label="Total Quizzes" />
    <StatCard icon={<FiTarget />} value={`${data.averageScore}%`} label="Average Score" />
    <StatCard icon={<FiTarget />} value={`${data.accuracyRate}%`} label="Accuracy Rate" />
    <StatCard icon={<FaFire />} value={`${data.currentStreak} Days`} label="Current Streak" />
  </div>
);

export default StatsOverview;
