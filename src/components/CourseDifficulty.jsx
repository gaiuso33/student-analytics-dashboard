import { useEffect, useState } from "react";

function CourseDifficulty() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/api/course-difficulty")
      .then(res => res.json())
      .then(data => setCourses(data));

  }, []);

  return (

    <div className="card">

      <h2>Hardest Courses</h2>

      <ul>
        {courses.slice(0,5).map((course, index) => (
          <li key={index}>
            {course.course} — Avg Score {course.average_score}
          </li>
        ))}
      </ul>

    </div>

  );
}

export default CourseDifficulty;