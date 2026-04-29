import StudentRow from './StudentRow';
import './StudentTable.css';

function StudentTable({ students, onUpdateScore }) {
  return (
    <section className="table-section">
      <h2 className="section-title">Student Records</h2>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update Score</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-msg">No students found. Add one below!</td>
              </tr>
            ) : (
              students.map((student, index) => (
                <StudentRow
                  key={student.id}
                  index={index + 1}
                  student={student}
                  onUpdateScore={onUpdateScore}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentTable;
