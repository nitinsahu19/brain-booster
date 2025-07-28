import AchievementCard from "../molecules/AchievementCard";

const AchievementSection = ({ achievements }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <h2 className="text-lg font-semibold mb-4">Recent Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {achievements.map((achieve) => (
        <AchievementCard
          key={achieve.title}
          icon={achieve.icon}
          title={achieve.title}
          desc={achieve.desc}
          date={achieve.date}
        />
      ))}
    </div>
  </div>
);

export default AchievementSection;
