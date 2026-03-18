import { useEffect, useState } from "react";

function Leaderboard() {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/top-students")
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="card">

      <h2>Top Students</h2>

      <ol>
        {leaders.map((student, index) => (
          <li key={index}>
            {student.name} — GPA {student.gpa}
          </li>
        ))}
      </ol>

    </div>
  );
}

export default Leaderboard;
