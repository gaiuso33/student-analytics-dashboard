function StatsCards({ students }) {

  const totalStudents = students.length;

  const avgGPA =
    students.reduce((sum, s) => sum + s.gpa, 0) / students.length;

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

    </div>
  );
}

export default StatsCards;