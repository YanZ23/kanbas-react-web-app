import React from "react";
import {
    FaCheckCircle,
    FaEllipsisV,
    FaPlusCircle,
    FaPlus,
    FaStickyNote
} from "react-icons/fa";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { assignments } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const handleAddAssignmentClick = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  return (
    <>
      <div className="row mb-3 align-items-center">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search for Assignment"
          />
        </div>
        <div className="col-md-9 text-md-end">
          <button type="button" className="btn btn-sm btn-primary me-2">
            <FaPlus /> Group
          </button>
          <button type="button" className="btn btn-sm btn-secondary" onClick={handleAddAssignmentClick}>
            <FaPlus /> Assignment
          </button>
          <div className="btn-group">
            <button
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaEllipsisV />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Duplicate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Move to...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Send to...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="d-none d-md-block my-3 mx-1" />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
            <span className="bordered-text">40% of Total</span>
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaStickyNote className="me-2" style={{ color: 'green' }}/>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>

                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
