import Modules from "../Modules";
import CourseStatus from "./Status";
import CoursesNavigation from "../Navigation";

export default function Home() {
  return (
    <div className="table">
      <table className="table" id="wd-home" >
        <tr>
          
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </table>
    </div>
  );
}
