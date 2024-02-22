import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import {
  FaBook,
  FaBookmark,
  FaCalendar,
  FaChevronDown,
  FaCommentDots,
  FaComments,
  FaEnvelope,
  FaFile,
  FaHistory,
  FaQuestionCircle,
  FaRocket,
  FaTachometerAlt,
  FaUserCircle,
  FaUsers,
  FaVideo,
  FaHome,
  FaBookOpen,
  FaBullseye,
  FaCog,
  FaFileAlt,
  FaFolder,
  FaUser,
} from "react-icons/fa";
import React from "react";

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);

  const getActivePageName = () => {
    const pathSegments = location.pathname.split("/");
    return pathSegments[pathSegments.length - 1];
  };

  const pageName = (() => {
    switch (getActivePageName().toLowerCase()) {
      case "home":
        return "Home";
      case "modules":
        return "Module";
      case "piazza":
        return "Piazza";
      case "zoom%20meetings":
        return "Zoom Meetings";
      case "assignments":
        return "Assignments";
      case "quizzes":
        return "Quizzes";
      case "grades":
        return "Grades";
      case "people":
        return "People";
      case "panopto%20video":
        return "Panopto Video";
      case "discussions":
        return "Discussions";
      case "announcements":
        return "Announcements";
      case "pages":
        return "Pages";
      case "files":
        return "Files";
      case "rubrics":
        return "Rubrics";
      case "outcomes":
        return "Outcomes";
      case "collaborations":
        return "Collaborations";
      case "syllabus":
        return "Syllabus";
      case "settings":
        return "Settings";
      default:
        return "";
    }
  })();

  const [isKanbasNavCollapsed, setIsKanbasNavCollapsed] = React.useState(true);
  const [isCourseNavCollapsed, setIsCourseNavCollapsed] = React.useState(true);

  // Handlers for toggling collapse state
  const toggleKanbasNavCollapse = () =>
    setIsKanbasNavCollapsed(!isKanbasNavCollapsed);
  const toggleCourseNavCollapse = () =>
    setIsCourseNavCollapsed(!isCourseNavCollapsed);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark d-block d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleKanbasNavCollapse}
            aria-controls="kanbasNavigation"
            aria-expanded={!isKanbasNavCollapsed}
            aria-label="Toggle Kanbas navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">
            {course?.number} {course?.name}
          </a>

          <button
            className="btn btn-link"
            type="button"
            onClick={toggleCourseNavCollapse}
            aria-controls="courseNavigation"
            aria-expanded={!isCourseNavCollapsed}
            aria-label="Toggle course navigation"
          >
            <FaChevronDown style={{ color: "white" }} />
          </button>
        </div>
      </nav>

      {/* Kanbas Navigation Links */}
      <div
        className={`collapse ${!isKanbasNavCollapsed ? "show" : ""}`}
        id="kanbasNavigation"
      >
        <div className="list-group text-red">
          <a
            href="/Kanbas/Dashboard/screen.html"
            className="list-group-item list-group-item-action"
          >
            <FaTachometerAlt /> Dashboard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaUserCircle /> Account
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaBook /> Courses
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaCalendar /> Calendar
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaEnvelope /> Inbox
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaVideo /> Studio
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaUsers /> Commons
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaHistory /> History
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
          >
            <FaQuestionCircle /> Help
          </a>
        </div>
      </div>

      {/* Course Navigation Links */}
      <div
        className={`collapse ${!isCourseNavCollapsed ? "show" : ""}`}
        id="courseNavigation"
      >
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <FaHome /> Home
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaRocket /> Modules
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaCommentDots /> Piazza
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaVideo /> Zoom Meetings
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaFile /> Assignments
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaBookmark /> Quizzes
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaBook /> Grades
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaUsers /> People
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaVideo /> Panopto Video
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaComments /> Discussions
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaFileAlt /> Pages
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaFolder /> Files
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaFolder /> Rubrics
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaBullseye /> Outcomes
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaUser /> Collaborations
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaBookOpen /> Syllabus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FaCog /> Settings
          </a>
        </div>
      </div>

      <h4 className="d-none d-md-block mx-3">
        <HiMiniBars3
          style={{ color: "red", verticalAlign: "top", marginRight: "10px" }}
          size="1.2em"
        />
        <span style={{ color: "red" }}>
          {course?.number} {course?.name}
        </span>
        <span style={{ color: "gray" }}> {">"} </span>
        <span style={{ color: "black" }}>{pageName}</span>
      </h4>

      <hr className="d-none d-md-block my-2 mx-3" />

      <div className="d-flex">

      <div className="d-none d-md-block">
        <CourseNavigation />
      </div>

      <div  className="flex-grow-1 overflow-y-scroll" style={{ padding: '0 15px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
