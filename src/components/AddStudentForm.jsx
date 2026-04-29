import { useState } from 'react';
import './AddStudentForm.css';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) { setError('Please enter a student name.'); return; }
    if (score === '' || isNaN(score)) { setError('Please enter a valid score.'); return; }
    const s = Math.max(0, Math.min(100, Number(score)));
    onAddStudent(name.trim(), s);
    setName('');
    setScore('');
    setError('');
  };

  return (
    <section className="form-section">
      <h2 className="section-title">Add New Student</h2>
      <form className="add-form" onSubmit={handleSubmit} noValidate>
        {error && <p className="form-error">{error}</p>}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              type="text"
              placeholder="e.g. Ananya Singh"
              value={name}
              onChange={e => { setName(e.target.value); setError(''); }}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="student-score">Score (0–100)</label>
            <input
              id="student-score"
              type="number"
              placeholder="e.g. 75"
              min="0"
              max="100"
              value={score}
              onChange={e => { setScore(e.target.value); setError(''); }}
              className="form-input"
            />
          </div>
        </div>
        <button type="submit" className="submit-btn">＋ Add Student</button>
      </form>
    </section>
  );
}

export default AddStudentForm;
