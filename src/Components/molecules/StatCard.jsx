import { Card, CardContent } from "../organisms/Card";
import StatIcon from "../atoms/StatIcon";
import StatValue from "../atoms/StatValue";
import LabelText from "../atoms/TopCardText";

const StatCard = ({ icon, value, label }) => (
  <Card>
    <CardContent className="p-4">
      <StatIcon icon={icon} />
      <StatValue value={value} />
      <LabelText text={label} />
    </CardContent>
  </Card>
);

export default StatCard;
