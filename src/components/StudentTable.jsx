function StudentTable({ students, sortConfig, setSortConfig }) {

  function handleSort(key) {

    let direction = "asc";

    if (
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  }

  return (
    <div>

      <h2>Student Records</h2>

      <table>

        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>

            <th onClick={() => handleSort("course")}>
              Course {sortConfig.key === "course" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>

            <th onClick={() => handleSort("score")}>
              Score {sortConfig.key === "score" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>

            <th onClick={() => handleSort("semester")}>
              Semester {sortConfig.key === "semester" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>

            <th onClick={() => handleSort("gpa")}>
              GPA {sortConfig.key === "gpa" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.score}</td>
              <td>{student.semester}</td>
              <td>{student.gpa}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;