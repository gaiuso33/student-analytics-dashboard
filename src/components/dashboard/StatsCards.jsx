function StatsCards({ students }) {
  const totalStudents = students.length;

  const avgGPA = totalStudents
    ? students.reduce((sum, s) => sum + s.gpa, 0) / totalStudents
    : 0;

  const passCount = students.filter((s) => s.gpa >= 2.0).length;
  const passRate = totalStudents ? (passCount / totalStudents) * 100 : 0;

  const highestGPA = totalStudents
    ? Math.max(...students.map((s) => s.gpa))
    : 0;

  return (
    <div className="stats">
      <div className="card">
        <h3>Total Students</h3>
        <p>{totalStudents}</p>
      </div>

      <div className="card">
        <h3>Average GPA</h3>
        <p>{avgGPA.toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>Pass Rate</h3>
        <p>{passRate.toFixed(1)}%</p>
      </div>

      <div className="card">
        <h3>Highest GPA</h3>
        <p>{highestGPA.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default StatsCards;