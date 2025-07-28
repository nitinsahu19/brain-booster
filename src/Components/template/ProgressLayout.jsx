import StatsOverview from "../organisms/StatsOverview";
import SubjectPerformance from "../organisms/SubjectPerformance";
import WeeklyChart from "../organisms/WeeklyChart";
import AchievementSection from "../organisms/AchievementSection";

const ProgressLayout = ({ data, weeklyProgress }) => (
  <div className="p-6 space-y-6">
    <StatsOverview data={data} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SubjectPerformance subjects={data.subjects} />
      <WeeklyChart progress={weeklyProgress} />
    </div>
    <AchievementSection achievements={data.achievements} />
  </div>
);

export default ProgressLayout;
