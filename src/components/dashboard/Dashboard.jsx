import { useState } from "react";
import { CSVLink } from "react-csv";
import students from "../../data/students.json";
import Charts from "./Charts";
import StudentTable from "./StudentTable";
import Filters from "./Filters";
import StatsCards from "./StatsCards";

function Dashboard() {

  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [minGPA, setMinGPA] = useState("");
  const [maxGPA, setMaxGPA] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc"
  });
  const courses = ["All", ...new Set(students.map((s) => s.course))];
const filteredStudents = students.filter((student) => {
const searchValue = search.toLowerCase();

const matchesSearch =
  student.name.toLowerCase().includes(searchValue) ||
  student.course.toLowerCase().includes(searchValue);

    const matchesCourse =
      selectedCourse === "All" || student.course === selectedCourse;

    const matchesMinGPA = minGPA === "" || student.gpa >= parseFloat(minGPA);
    const matchesMaxGPA = maxGPA === "" || student.gpa <= parseFloat(maxGPA);

    return matchesSearch && matchesCourse && matchesMinGPA && matchesMaxGPA;
  });
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

      <Filters
        setSearch={setSearch}
        courses={courses}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        minGPA={minGPA}
        maxGPA={maxGPA}
        setMinGPA={setMinGPA}
        setMaxGPA={setMaxGPA}
      />

      <div className="dashboard-actions">
        <CSVLink
          data={sortedStudents}
          filename={"student-analytics-report.csv"}
          className="export-btn"
        >
          Export CSV
        </CSVLink>
      </div>

      {sortedStudents.length > 0 ? (
        <>
          <Charts students={sortedStudents} />
          <StudentTable students={sortedStudents}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig} />
        </>
      ) : (
        <div className="empty-state">
          <h3>No students found</h3>
          <p>Try adjusting your search or course filter.</p>
        </div>
      )}

    </div>
  );
}

export default Dashboard;