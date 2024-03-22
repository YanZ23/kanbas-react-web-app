import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaPenSquare } from "react-icons/fa";
import { courses } from "../Database";

function Dashboard({
  _courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  _courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  // const [_courses, setCourses] = useState(courses);
  // const [course, setCourse] = useState({
  //   _id: "0",
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  //   image: "../../images/web.jpg",
  //   description: "This is a new course.",
  // });

  // const addNewCourse = () => {
  //   const newCourse = {
  //     ...course,
  //     _id: new Date().getTime().toString(),
  //   };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };

  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h4>Course</h4>
      <div className="form-group d-flex">
        <div className="flex-fill mr-2">
          <label>Name</label>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>
        <div className="flex-fill">
          <label>Number</label>
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group d-flex">
        <div className="flex-fill mr-2">
          <label>Start Date</label>
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>
        <div className="flex-fill">
          <label>End Date</label>
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary custom-button mr-2"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-secondary custom-button"
          onClick={updateCourse}
        >
          Update
        </button>
      </div>

      <hr />
      <h2>Published Courses ({_courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 custom-gutter custom-margin">
          {_courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.number} {course.name}
                  </Link>

                  <p className="card-text course-name">{course.name}</p>
                  <p className="card-text course-description">
                    {course.description}
                  </p>

                  <button
                    className="btn btn-primary custom-button-card mr-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary custom-button-card"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
