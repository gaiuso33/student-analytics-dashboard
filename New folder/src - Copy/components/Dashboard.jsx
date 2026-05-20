import { useState } from "react";
import students from "../data/students.json";
import Charts from "./Charts";
import StudentTable from "./StudentTable";
import Filters from "./Filters";
import StatsCards from "./StatsCards";

function Dashboard() {

  const [search, setSearch] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc"
  });

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
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

      <StatsCards students={sortedStudents} />

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