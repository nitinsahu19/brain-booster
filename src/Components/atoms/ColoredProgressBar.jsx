import { Progress } from "../organisms/progress";

const ColoredProgressBar = ({ value }) => {
  const getColor = (score) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-purple-500";
    if (score >= 60) return "bg-blue-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return <Progress value={value} color={getColor(value)} />;
};

export default ColoredProgressBar;
