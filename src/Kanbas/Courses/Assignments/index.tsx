import CoursesNavigation from "../Navigation";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons"
import { useParams, useNavigate } from "react-router";
import { TiEdit } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { IoCaretDown } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Assignments() {
  const {cid} = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  

  const clickedAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/New`);
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-us', {
      month: 'short',
      day: 'numeric',
    });
  };
  

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
                  id="wd-add-assignment" onClick={clickedAddAssignment}><BsPlusLg/> Assignment</button></div>
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
                {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item d-flex align-items-center" key={assignment._id}>  
                <table className="table">
                    <tr>
                      <td rowSpan={2}> 
                        <div>
                          <BsGripVertical className="fs-3 mt-1" />
                          <TiEdit className="fs-3 me-2 text-success" onClick={() =>  navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`)} />
                          <FaTrash
                            className="text-danger me-2 mb-1"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this assignment?")) {
                                dispatch(deleteAssignment(assignment._id));
                              }
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>
                          <a className="wd-assignment-link text-uppercase fs-5"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                            {assignment.title}
                          </a><br/>
                        <span className="red-txt">Multiple Modules</span> | <b>Not available until</b> {formatDate(assignment.date_posted)} at 12:00 am | <b>Due</b> {formatDate(assignment.date_due)} at 11:59pm | {assignment.points} pts
                 
                        </div>
                      </td>
                      <td rowSpan={2}>
                      
                      <LessonControlButtons />
                      </td>
                    </tr>
                  </table>
                </li>
            ))}
              </ul>
            </li>
      </ul>
            </td>
          </tr>
        </table>
      </div>


      
    </div>
);}
