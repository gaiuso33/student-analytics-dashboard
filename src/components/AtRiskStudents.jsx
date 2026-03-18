import { useEffect, useState } from "react";

function AtRiskStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/api/at-risk-students")
      .then(res => res.json())
      .then(data => setStudents(data));

  }, []);

  return (

    <div className="card">

      <h2>⚠️ At-Risk Students</h2>

      {students.length === 0 ? (
        <p>No students at risk 🎉</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} — GPA {student.gpa}
            </li>
          ))}
        </ul>
      )}

    </div>

  );
}

export default AtRiskStudents;