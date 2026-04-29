import { useState } from 'react';
import './StudentRow.css';

function StudentRow({ index, student, onUpdateScore }) {
  const [inputScore, setInputScore] = useState('');
  const isPassing = student.score >= 40;

  const handleUpdate = () => {
    if (inputScore === '' || isNaN(inputScore)) return;
    const val = Math.max(0, Math.min(100, Number(inputScore)));
    onUpdateScore(student.id, val);
    setInputScore('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate();
  };

  return (
    <tr className={`student-row ${isPassing ? 'row-pass' : 'row-fail'}`}>
      <td className="td-index">{index}</td>
      <td className="td-name">{student.name}</td>
      <td className="td-score">{student.score}</td>
      <td className="td-status">
        <span className={`badge ${isPassing ? 'badge-pass' : 'badge-fail'}`}>
          {isPassing ? '✓ Pass' : '✗ Fail'}
        </span>
      </td>
      <td className="td-update">
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            placeholder="0–100"
            value={inputScore}
            onChange={e => setInputScore(e.target.value)}
            onKeyDown={handleKeyDown}
            className="score-input"
          />
          <button className="update-btn" onClick={handleUpdate}>Update</button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
