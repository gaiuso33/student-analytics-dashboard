function StatsCards({ students }) {

  const totalStudents = students.length;

  const avgGPA =
    students.reduce((sum, s) => sum + s.gpa, 0) / students.length;
  
  const highestGPA = Math.max(...students.map(s => s.gpa));
  
  const passRate =
    (students.filter(s => s.score >= 50).length / students.length) * 100;

  return (
    <div className="stats">

      <div className="card">
        <span className="card-icon">📊</span>
        <div>
          <h4>Total Students</h4>
          <p>{totalStudents}</p>
        </div>
      </div>

      <div className="card">
        <span className="card-icon">📈</span>
        <div>
          <h4>Average GPA</h4>
          <p>{avgGPA.toFixed(2)}</p>
        </div>
      </div>

      <div className="card">
        <span className="card-icon">🏆</span>
        <div>
          <h4>Highest GPA</h4>
          <p>{highestGPA}</p>
        </div>
      </div>

      <div className="card">
        <span className="card-icon">✅</span>
        <div>
          <h4>Pass Rate</h4>
          <p>{passRate.toFixed(1)}%</p>
        </div>
      </div>

    </div>
  );
}


export default StatsCards;