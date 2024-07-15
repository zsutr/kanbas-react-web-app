import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import CoursesNavigation from "../Navigation";


export default function Modules() {
    return (
      <div>
        <table className="table" id="wd-home" >
          <tr>
            
            <td valign="top" >
              <CoursesNavigation />
            </td>

            <td valign="top">

        <div>
          <ModulesControls /><br /><br />
        </div>
        
        <div id="wd-modules">
         
          <ul id="wd-module-items" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2">
                <BsGripVertical className="me-2 fs-3" />
                Week 1
                <ModuleControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons />
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                  LESSON 1
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                 LESSON 2
                 <LessonControlButtons />
                </li>
              </ul>
            </li>

            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray border-top">
              <div className="wd-title p-3 ps-2">
                <BsGripVertical className="me-2 fs-3" />
                Week 2
                <ModuleControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                 LESSON 1
                 <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                  LESSON 2
                  <LessonControlButtons />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </td>
      </tr>
      </table>
      </div>
     
  );}
  