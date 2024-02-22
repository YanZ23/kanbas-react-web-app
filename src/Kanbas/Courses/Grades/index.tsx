import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaArrowLeft, FaFilter, FaCog } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="row mb-3">
        {/* Column for "Grades" heading aligned to the left */}
        <div className="col d-flex justify-content-start">
          <h2 style={{ color: "red" }}>Grades</h2>
        </div>

        {/* Column for action buttons aligned to the right */}
        <div className="col d-flex justify-content-end">
          <button className="btn btn-light me-2">
            <FaFileImport /> Import
          </button>
          <div className="btn-group me-2">
            <button
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaArrowLeft /> Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Export Current Gradebook View
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export Entire Gradebook
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-light">
            <FaCog />
          </button>
        </div>
      </div>

      {/* Search fields */}
      <div className="row mb-3">
        <div className="col">
          <h4>Student Names</h4>
          <input
            type="search"
            className="form-control"
            placeholder="Search Students"
          />
        </div>
        <div className="col">
          <h4>Assignment Names</h4>
          <input
            type="search"
            className="form-control"
            placeholder="Search Assignments"
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="mb-3">
        <button className="btn btn-light">
          <FaFilter /> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
