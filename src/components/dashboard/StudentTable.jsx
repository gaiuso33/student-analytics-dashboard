import { useState } from "react";

function StudentTable({ students }) {
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }

    setCurrentPage(1); // reset page when sorting
  };

  const sortedStudents = [...students].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedStudents.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentStudents = sortedStudents.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="table-card">
      <h2>Student Table</h2>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {sortKey === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("course")}>
              Course{" "}
              {sortKey === "course" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("gpa")}>
              GPA {sortKey === "gpa" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("attendance")}>
              Attendance{" "}
              {sortKey === "attendance"
                ? sortOrder === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
          </tr>
        </thead>

        <tbody>
          {currentStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.gpa.toFixed(2)}</td>
              <td>{student.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StudentTable;