import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { ChevronRight } from "lucide-react";

const subjects = [
    { label: "HTML & CSS", path: "html-css#quize" },
    { label: "JavaScript", path: "javascript#quize" },
    { label: "React", path: "react#quize" },
    { label: "Math", path: "math#quize" },
    { label: "Science", path: "science#quize" },
    { label: "Logical Questions", path: "logical#quize" },
];

const SubjectList = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">🎯 Select Subject for Quiz</h2>
            <ul className="space-y-4">
                {subjects.map((subject, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-4 bg-gray-100 rounded hover:bg-blue-100 transition cursor-pointer"
                        onClick={() => navigate(`/quize/${subject.path}`)}
                    >
                        <span className="text-lg font-medium text-gray-700">{subject.label}</span>
                        <FaChevronRight className="text-blue-500" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubjectList;
