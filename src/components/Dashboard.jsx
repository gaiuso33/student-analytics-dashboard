import { useState, useEffect } from "react";
import Charts from "./Charts";
import StudentTable from "./StudentTable";
import Filters from "./Filters";
import StatsCards from "./StatsCards";
import Leaderboard from "./Leaderboard";
import CourseDifficulty from "./CourseDifficulty";
import AtRiskStudents from "./AtRiskStudents";


function Dashboard() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc"
  });
  const [analytics, setAnalytics] = useState({});

useEffect(() => {

  fetch("http://127.0.0.1:5000/api/students")
    .then(res => res.json())
    .then(data => {
      console.log("API DATA:", data);
      setStudents(data);
    })
    .catch(err => console.error("Students API error:", err));

  fetch("http://127.0.0.1:5000/api/analytics")
    .then(res => res.json())
    .then(data => {
      console.log("Analytics:", data);
      setAnalytics(data);
    })
    .catch(err => console.error("Analytics API error:", err));

}, []);

  const filteredStudents = students.filter((student) =>
    student.name?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {

    if (!sortConfig.key) return 0;

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }

    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }

    return 0;
  });


  return (
    <div className="dashboard">

      <h1>Student Analytics Dashboard</h1>

      <StatsCards analytics={analytics} />

      <Leaderboard />

      <CourseDifficulty />
      
      <AtRiskStudents />
      
      <Filters setSearch={setSearch} />

      <Charts students={sortedStudents} />

      <StudentTable
        students={sortedStudents}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
      />

    </div>
  );
}

export default Dashboard;