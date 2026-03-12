import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

function Charts({ students }) {

  const scoreData = students.map((s) => ({
    name: s.name,
    score: s.score
  }));

  return (
    <div className="charts">

      <h2>Student Scores</h2>

      <BarChart width={500} height={300} data={scoreData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" />
      </BarChart>

      <h2>GPA Trend</h2>

      <LineChart width={500} height={300} data={scoreData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="score" />
      </LineChart>

    </div>
  );
}

export default Charts;