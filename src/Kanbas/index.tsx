import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";



function Kanbas() {
  const [_courses, setCourses] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "Web Development", number: "CS5610",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../../images/web.jpg", description: "This is Web Development.",
  });
  const addNewCourse = () => {
    setCourses([..._courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(_courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      _courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

   return (
      <Provider store={store}>
     <div className="d-flex">
       <div className="d-none d-md-block">
       <KanbasNavigation />
       </div>
       <div style={{ flexGrow: 1 }}>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
          <Dashboard
          _courses={_courses} 
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
          <Courses courses={_courses}/>
          } />
        </Routes>
       </div>
     </div>
      </Provider>
 );}
 export default Kanbas;