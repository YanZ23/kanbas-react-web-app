import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

export interface KanbasState {
    modulesReducer: {
      modules: any[];
      module: any;
      selectedModuleId: string | null;
    };
    assignmentsReducer: {
        assignments: any[];
        assignment: any;
        selectedAssignment: string | null;
      };
  }
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});  


export default store;