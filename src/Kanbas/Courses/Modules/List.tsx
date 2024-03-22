import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaMinusCircle,
  FaEdit,
  FaSave,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setSelectedModuleId,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  // const [module, setModule] = useState({
  //   _id: "1234",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const selectedModuleId = useSelector(
    (state: KanbasState) => state.modulesReducer.selectedModuleId
  );

  return (
    <>
      <div className="button-container">
        <button>Collapse All</button>
        <button>View Progress</button>

        <select className="btn">
          <option>Publish All</option>
          <option>Unpublish All</option>
          <option>Unpublish All</option>
        </select>

        <button className="button-module">Module</button>
      </div>

      <hr className="d-none d-md-block my-2 mx-2" />

      <div className="list-group-item">
        <div className="form-group">
          <label>Topic</label>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
        <div className="button-group">
          <FaPlusCircle
            className="text-success icon-large mr-extend"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          />
          <FaSave 
          className="icon-large"
          onClick={() => dispatch(updateModule(module))} />
        </div>
      </div>

      <hr className="d-none d-md-block my-2 mx-2" />

      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => dispatch(setSelectedModuleId(module._id))}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}

                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaMinusCircle
                    className="ms-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteModule(module._id));
                    }}
                  />
                  <FaEdit
                    className="ms-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setModule(module));
                    }}
                  />
                </span>
              </div>

              {selectedModuleId === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: number) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
