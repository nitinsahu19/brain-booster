import SubjectProgressItem from "../molecules/SubjectProgressItem";

const SubjectPerformance = ({ subjects }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <h2 className="text-lg font-semibold mb-4">Performance by Subject</h2>
    {subjects.map((item) => (
      <SubjectProgressItem key={item.name} subject={item.name} score={item.score} />
    ))}
  </div>
);

export default SubjectPerformance;
