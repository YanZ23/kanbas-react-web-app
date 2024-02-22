import React from "react";
import { useParams } from "react-router";
import "./index.css";
import {
  FaFileImport,
  FaSignInAlt,
  FaObjectUngroup,
  FaChartBar,
  FaBullhorn,
  FaBell,
  FaCalendar,
} from "react-icons/fa";

function Status() {
  return (
    <div className="sidebar">
      <div className="index1-specific">
        <button className="list-group-item styled-button">
          <FaFileImport className="icon" />
          Import Existing Content
        </button>
        <button className="list-group-item styled-button">
          <FaSignInAlt className="icon" />
          Import From Commons
        </button>
        <button className="list-group-item styled-button">
          <FaObjectUngroup className="icon" />
          Choose Home Page
        </button>
        <button className="list-group-item styled-button">
          <FaChartBar className="icon" />
          View Course Stream
        </button>
        <button className="list-group-item styled-button">
          <FaBullhorn className="icon" />
          New Announcement
        </button>
        <button className="list-group-item styled-button">
          <FaChartBar className="icon" />
          New Analytics
        </button>
        <button className="list-group-item styled-button">
          <FaBell className="icon" />
          View Course Notifications
        </button>
      </div>
      <div className="upcoming-container">
        <h4>To Do</h4>
        <hr className="d-none d-md-block my-3 mx-1" />
      </div>
      <div className="index1-specific">
  <a href="#" className="list-group-item styled-item">
    <FaCalendar className="icon" />
    <span className="lecture-text">Lecture</span>
    <span className="lecture-detail">CS4550.12631.202410 Sep 7 at 11:45am</span>
  </a>
  <a href="#" className="list-group-item styled-item">
    <FaCalendar className="icon" />
    <span className="lecture-text">Lecture</span>
    <span className="lecture-detail">CS4550.12631.202410 Sep 11 at 11:45am</span>
  </a>
  <a href="#" className="list-group-item styled-item">
    <FaCalendar className="icon" />
    <span className="lecture-text">Lecture</span>
    <span className="lecture-detail">CS5610 06 SP23 Lecture Sep 11 at 6pm</span>
  </a>
</div>
    </div>
  );
}

export default Status;
