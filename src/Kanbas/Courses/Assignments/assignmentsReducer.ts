import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: { title: "New Assignment", description: "New Assignment Description", points: "100", 
    dueDate: "2021-12-31", availableDate: "2021-12-01", untilDate: "2021-12-31"},
    selectedAssignment: null,
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                  ...state.assignments,
              ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload);
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                  return action.payload;
                } else {
                  return assignment;
                }
              });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
          },
        selectAssignment: (state, action) => {
            state.selectedAssignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;