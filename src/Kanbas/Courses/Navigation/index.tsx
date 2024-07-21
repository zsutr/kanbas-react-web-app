import {useParams } from "react-router";
import { Link } from 'react-router-dom'
import "./index.css"



export default function CoursesNavigation() {

  const {cid} = useParams();
  // const { pathname } = useLocation();
  // const endpath = pathname.split("/")[4]
  

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

    return (
      <div id="wd-courses-navigation" className="list-group rounded-0   bottom-0 top-0 d-none d-md-block fs-5 z-2">
        <ul className="list-unstyled">
          {links.map((item, index) => (
            <li>
              <Link key={`${item}-${index}`} to={`/Kanbas/Courses/${cid}/${item}`} className="list-group-item text-danger fs-5 border border-0">
                {item}
              </Link>
            </li>
          ))} 
        </ul>
          
      </div>
  );
}
  