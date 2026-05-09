import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || score === "") {
      alert("Please fill all fields");
      return;
    }

    addStudent(name, score);

    setName("");
    setScore("");
  };

  return (
    <div>
      <div className="section-title">
        <span></span>
        <h3>REGISTER STUDENT</h3>
        <p>NEW ENTRY</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button type="submit">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;


































































































