import ColoredProgressBar from "../atoms/ColoredProgressBar";

const SubjectProgressItem = ({ subject, score }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span>{subject}</span>
      <span>{score}%</span>
    </div>
    <ColoredProgressBar value={score} />
  </div>
);

export default SubjectProgressItem;
