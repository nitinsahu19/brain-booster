import StatIcon from "../../atoms/StatIcon";
import { Card, CardContent } from "../../organism/Card";
import LabelText from "../../atoms/TopCardText";
import StatValue from "../../atoms/StatValue";
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