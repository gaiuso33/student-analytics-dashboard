import { useState } from "react";

function Filters({
  setSearch,
  courses,
  selectedCourse,
  setSelectedCourse,
  minGPA,
  maxGPA,
  setMinGPA,
  setMaxGPA
}) {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setSearch(inputValue);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search student or course..."
        value={value}
        onChange={handleSearch}
      />

      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Min GPA"
        value={minGPA}
        step="0.1"
        min="0"
        max="4"
        onChange={(e) => setMinGPA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max GPA"
        value={maxGPA}
        step="0.1"
        min="0"
        max="4"
        onChange={(e) => setMaxGPA(e.target.value)}
      />
    </div>
  );
}

export default Filters;