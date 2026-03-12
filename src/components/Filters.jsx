import { useState } from "react";

function Filters({ setSearch }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const v = e.target.value;
    setValue(v);
    setSearch(v);
  }

  return (
    <div className="filters">

      <input
        type="text"
        placeholder="Search student..."
        value={value}
        onChange={handleChange}
      />

    </div>
  );
}

export default Filters;