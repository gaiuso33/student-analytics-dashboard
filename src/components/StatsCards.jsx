function StatsCards({ analytics }) {

  return (
    <div className="stats-grid">

      <div className="card">
        <h3>Total Students</h3>
        <p>{analytics.total_students}</p>
      </div>

      <div className="card">
        <h3>Average GPA</h3>
        <p>{analytics.average_gpa}</p>
      </div>

      <div className="card">
        <h3>Highest GPA</h3>
        <p>{analytics.highest_gpa}</p>
      </div>

      <div className="card">
        <h3>Pass Rate</h3>
        <p>{analytics.pass_rate}%</p>
      </div>

    </div>
  );
}

export default StatsCards;