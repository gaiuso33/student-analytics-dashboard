import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Charts({ students }) {

    // GPA trend data
    const gpaData = students.map((s) => ({
        name: s.name,
        gpa: s.gpa
    }));

    // Grade distribution
    const gradeCounts = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };

    students.forEach((s) => {
        if (s.score >= 90) gradeCounts.A++;
        else if (s.score >= 80) gradeCounts.B++;
        else if (s.score >= 70) gradeCounts.C++;
        else if (s.score >= 60) gradeCounts.D++;
        else gradeCounts.F++;
    });

    const gradeData = Object.keys(gradeCounts).map((grade) => ({
        grade,
        students: gradeCounts[grade],
    }));

    const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#6b7280"];

    const courseMap = {};

    students.forEach((s) => {
    if (!courseMap[s.course]) {
        courseMap[s.course] = { total: 0, count: 0 };
    }

    courseMap[s.course].total += s.score;
    courseMap[s.course].count += 1;
    });

    const courseData = Object.keys(courseMap).map((course) => ({
    course,
    avgScore: courseMap[course].total / courseMap[course].count
    }));

    return (
        <div className="charts">

        <h2>GPA Trend</h2>
        <LineChart width={500} height={300} data={gpaData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="gpa" />
        </LineChart>
        <div className="chart-card">
            <h2>Grade Distribution</h2>
            <PieChart width={400} height={300}>
                <Pie
                data={gradeData}
                dataKey="students"
                nameKey="grade"
                outerRadius={100}
                >
                {gradeData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
        
        <h2>Course Performance</h2>

        <BarChart width={500} height={300} data={courseData}>
        <XAxis dataKey="course" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="avgScore" />
        </BarChart>
        </div>
    );
}

export default Charts;