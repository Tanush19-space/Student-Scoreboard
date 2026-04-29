import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <div className="records-box">
      <div className="records-title">
        <h3>STUDENT RECORDS</h3>
        <p>{students.length} entries</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;