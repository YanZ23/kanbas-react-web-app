import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { addAssignment, updateAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize localAssignment with a type that includes title and description
  const [localAssignment, setLocalAssignment] = useState<{
    _id?: string;
    title: string;
    description: string;
    points: number; // Add the 'points' property with the appropriate type
    published: boolean; // Add the 'published' property with the appropriate type
    // ... add other properties as needed
  }>({
    title: "",
    description: "",
    points: 100, // Set the default value for 'points'
    published: false, // Set the default value for 'published'
    // ... default values for other properties
  });

  useEffect(() => {
    // If editing an existing assignment, load it into state
    if (assignmentId && assignmentId !== 'new') {
      const assignmentToEdit = assignments.find(assignment => assignment._id === assignmentId);
      if (assignmentToEdit) {
        setLocalAssignment({
          ...assignmentToEdit,
          description: "",
          points: 0, // Add the missing 'points' property with the appropriate value
          published: false, // Add the missing 'published' property with the appropriate value
        });
      } else {
        // If no assignment is found, reset to the initial state or handle accordingly
        setLocalAssignment({
          title: "",
          description: "",
          points: 0, // Add the missing 'points' property with the appropriate value
          published: false, // Add the missing 'published' property with the appropriate value
          // ... default values for other properties
        });
      }
    }
  }, [assignmentId, assignments]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLocalAssignment((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    if (assignmentId === 'new') {
      dispatch(addAssignment({ ...localAssignment, course: courseId }));
    } else {
      dispatch(updateAssignment(localAssignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handlePublish = () => {
    setLocalAssignment((prevState) => ({ ...prevState, published: true }));
    handleSave();
  };

  // const dispatch = useDispatch();
  // const assignment = useSelector(
  //   (state: KanbasState) => state.assignmentsReducer.assignment
  // );
  // const assignmentList = useSelector(
  //   (state: KanbasState) => state.assignmentsReducer.assignments
  // );

  return (
    <div>
      <div className="mb-3 text-end">
      <button className="btn btn-success" onClick={handlePublish}>
          <FaRegCheckCircle /> {localAssignment.published ? 'Published' : 'Publish'}
        </button>
      </div>
      <hr className="d-none d-md-block my-3 mx-1" />
      <h5>Assignment Name</h5>
      <input value={assignment?.title} className="form-control mb-2" />
      <textarea
        value={"assignment description"}
        className="form-control mb-2"
      />

      <hr className="d-none d-md-block my-3 mx-1" />

      <div>
        <div style={{ marginBottom: "20px" }}>
          <label>Points</label>
          <input
            type="text"
            value="100"
            className="form-control mb-2"
            style={{display: "block", margin: "10px 0" }}
          />
        </div>

        <div>Assign</div>

        <div>
          <label>Due</label>
          <input type="date" value="2023-12-15" className="form-control mb-2" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ flex: "1", marginRight: "10px" }}>
            <label>Available From</label>
            <input
              type="date"
              value="2023-12-15"
              className="form-control mb-2"
            />
          </div>
          <div style={{ flex: "1" }}>
            <label>Until</label>
            <input
              type="date"
              value="2023-09-10"
              className="form-control mb-2"
            />
          </div>
        </div>
      </div>

      <hr className="d-none d-md-block my-3 mx-1" />

      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;

