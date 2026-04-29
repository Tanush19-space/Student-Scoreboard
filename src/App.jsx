import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

const initialStudents = [
  { id: 1, name: 'Aarav Sharma', score: 78 },
  { id: 2, name: 'Priya Mehta', score: 35 },
  { id: 3, name: 'Rohan Gupta', score: 92 },
  { id: 4, name: 'Sneha Patel', score: 40 },
  { id: 5, name: 'Karan Verma', score: 22 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, score: Number(newScore) } : s))
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents(prev => [...prev, newStudent]);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <StudentTable students={students} onUpdateScore={updateScore} />
        <AddStudentForm onAddStudent={addStudent} />
      </main>
    </div>
  );
}

export default App;
