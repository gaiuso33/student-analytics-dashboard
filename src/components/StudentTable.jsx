function StudentTable({ students }) {
  return (
    <div>
      <h2>Student Records</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Score</th>
            <th>Semester</th>
            <th>GPA</th>
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