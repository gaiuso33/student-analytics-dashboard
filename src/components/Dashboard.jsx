import students from "../data/students.json";
import Charts from "./Charts";
import StudentTable from "./StudentTable";
import Filters from "./Filters";
import StatsCards from "./StatsCards";
import { useState } from "react";

function Dashboard() {
    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard">

        <h1>Student Analytics Dashboard</h1>

        <StatsCards students={filteredStudents} />

        <Filters setSearch={setSearch} />

        <Charts students={filteredStudents} />

        <StudentTable students={filteredStudents} />

        </div>
    );
}
export default Dashboard;