import CoursesNavigation from "../Navigation";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons"
import { TiEdit } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { IoCaretDown } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";


export default function Assignments() {
    return (
      <div id="wd-assignments">
     <div className="table">
        <table className="table" id="wd-home" >
          <tr>
            
            <td valign="top" >
              <CoursesNavigation />
            </td>

            <td valign="top">

                <div className="d-flex justify-content-between align-items-center">
                <div className="input-group input-group-lg w-50 ">
              <span className="input-group-text" id="addon-wrapping"><CiSearch/></span>
              <input type="text" className="form-control" placeholder="Search..." aria-describedby="addon-wrapping"/>
            </div>
                  
                  <div className="d-flex">
                    <button className="btn btn-lg btn-secondary mx-2" id="wd-add-assignment-group"><BsPlusLg/> Group</button>
                 
                   <button className="btn btn-lg btn-danger"
                  id="wd-add-assignment"><BsPlusLg/> Assignment</button></div>
                </div>
                

            <ul className="wd-assignment-list list-group list-group-flush border-left border-5 border-success">
            <li className="wd-lesson list-group-item p-3 ps-1">             
             <div className="wd-title p-3 ps-2 d-flex justify-content-between align-items-center">
                <div className="flex-grow-1 fs-5 " >
                <BsGripVertical className="fs-3 me-2" />
                <IoCaretDown className="fs-6 me-2" />
                ASSIGNMENTS
                </div>
                <AssignmentControlButtons/>
              </div>
              <ul className="wd-lessons list-group rounded-0 border-start border-5 border-success">
                <li className="wd-lesson list-group-item">  
                  <table className="table">
                      <tr>
                        <td rowSpan={2}> 
                          <div>
                            <BsGripVertical className="fs-3 me-2" />
                            <TiEdit className="fs-3" style={{color: 'green'}} /> 
                          </div>
                        </td>
                        <td>
                          <div>
                            <a className="wd-assignment-link text-uppercase fs-5"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A1 - ENV + HTML
                            </a><br/>
                          <span className="red-txt">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am | <b>Due</b> May 13 at 11:59pm | 100 pts
                          </div>
                        </td>
                        <td rowSpan={2}>
                        <LessonControlButtons />
                        </td>
                      </tr>
                    </table>
                  </li>
                  
                  <li className="wd-lesson list-group-item">  
                  <table className="table">
                      <tr>
                        <td rowSpan={2}> 
                          <div>
                            <BsGripVertical className="fs-3 me-2" />
                            <TiEdit className="fs-3" style={{color: 'green'}}/> 
                          </div>
                        </td>
                        <td>
                          <div>
                            <a className="wd-assignment-link text-uppercase fs-5"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                             A2 - CSS + BOOOTSTRAP
                            </a><br/>
                          <span className="red-txt">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am | <b>Due</b> May 20 at 11:59pm | 100 pts
                          </div>
                        </td>
                        <td rowSpan={2}>
                        <LessonControlButtons />
                        </td>
                      </tr>
                    </table>
                  </li>

                  <li className="wd-lesson list-group-item">  
                  <table className="table">
                      <tr>
                        <td rowSpan={2}> 
                          <div>
                            <BsGripVertical className="fs-3 me-2" />
                            <TiEdit className="fs-3 " style={{color: 'green'}}/> 
                          </div>
                        </td>
                        <td>
                          <div>
                            <a className="wd-assignment-link text-uppercase fs-5"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A3 - JavaScript + React
                            </a><br/>
                          <span className="red-txt">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00 am | <b>Due</b> May 27 at 11:59pm | 100 pts
                          </div>
                        </td>
                        <td rowSpan={2}>
                        <LessonControlButtons />
                        </td>
                      </tr>
                    </table>
                  </li>
              </ul>
            </li>
      </ul>
            </td>
          </tr>
        </table>
      </div>


      
    </div>
);}
