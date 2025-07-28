import { Card, CardContent } from "../organisms/Card";

const AchievementCard = ({ icon, title, desc, date }) => (
  <Card>
    <CardContent className="p-4">
      <div className="text-2xl">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
      <div className="text-xs text-gray-500 mt-1">Earned {date}</div>
    </CardContent>
  </Card>
);

export default AchievementCard;
