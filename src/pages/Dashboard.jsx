import React from "react";
import SubjectCard from "../components/SubjectCard";

const Dashboard = () => {
  const subjects = [
    { subject: "Math", progress: 80 },
    { subject: "Physics", progress: 65 },
    { subject: "Chemistry", progress: 50 },
    { subject: "Biology", progress: 90 },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((sub, index) => (
          <SubjectCard key={index} {...sub} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
