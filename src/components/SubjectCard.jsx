import React from "react";

const SubjectCard = ({ subject, progress }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <h3 className="text-xl font-semibold mb-2">{subject}</h3>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{progress}% completed</p>
    </div>
  );
};

export default SubjectCard;
