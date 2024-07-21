import { courses } from "../Database";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import Grades from "./Grades/Grades";


export default function Courses() {
  const {cid} = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses" className="d-flex">
      
      <div id="main-content" className="flex-grow-1" >
      
       <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name}  &gt; {pathname.split("/")[4]}

      </h2>
      <hr />
      <div>  
        <Routes>
          <Route path="/"
                  element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments"
                  element={<Assignments />} />
          <Route path="Assignments/:id"
                  element={<AssignmentEditor />} />
          <Route path="Grades"
                  element={<Grades />} />
        </Routes>
      </div>    
    </div>
  </div>
  );
}
