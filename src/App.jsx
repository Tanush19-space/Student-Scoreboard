import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 },
  ]);

  const addStudent = (name, score) => {
    setStudents([
      ...students,
      { id: students.length + 1, name, score: Number(score) },
    ]);
  };

  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, score: Number(newScore) } : student
    );

    setStudents(updated);
  };

  const total = students.length;
  const passed = students.filter((student) => student.score >= 40).length;
  const average = Math.round(
    students.reduce((sum, student) => sum + student.score, 0) / total
  );

  return (
    <div className="page">
      <div className="container">
        <Header />

        <AddStudentForm addStudent={addStudent} />

        <div className="stats">
          <div>
            <p>TOTAL</p>
            <h2>{total}</h2>
          </div>

          <div>
            <p>PASSED</p>
            <h2>{passed}</h2>
          </div>

          <div>
            <p>AVG SCORE</p>
            <h2>{average}</h2>
          </div>
        </div>

        <StudentTable students={students} updateScore={updateScore} />

        <p className="footer">ACADEMIC TERMINAL · SECURE SESSION</p>
      </div>
    </div>
  );
}

export default App;

















































































































