function StudentRow({ student, updateScore }) {
  const status = student.score >= 40 ? "PASS" : "FAIL";

  return (
    <tr>
      <td>{student.name}</td>

      <td className="score">{student.score}</td>

      <td>
        <span className={status === "PASS" ? "pass" : "fail"}>
          ● {status}
        </span>
      </td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
        />

        <button className="save-btn">SAVE</button>
      </td>
    </tr>
  );
}

export default StudentRow;























































