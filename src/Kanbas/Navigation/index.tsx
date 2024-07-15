import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function KanbasNavigation() {
  return (
    
    <div id="wd-kanbas-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 p-0 border-0" style={{ width: 110 }}>
      <a id="wd-neu-link" target="#" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="70px" alt="NEU Logo" />
      </a>

      <NavLink
        id="wd-account-link"
        to="/Kanbas/Account"
        className={({ isActive }) => isActive ? "list-group-item text-danger bg-white text-center border-0 list-group-item-action" : "list-group-item text-white bg-black text-center border-0 http://localhost:3000/#/Kanbas/Dashboardlist-group-item-action"}
      >
        <FaRegCircleUser className="fs-1 text-white" /><br />
        Account
      </NavLink>

      <NavLink
        id="wd-dashboard-link"
        to="/Kanbas/Dashboard"
        className={({ isActive }) => isActive ? "list-group-item text-danger bg-white text-center border-0 list-group-item-action" : "list-group-item text-center text-white bg-black  border-0 list-group-item-action"}
      >
        <AiOutlineDashboard className="fs-1 text-center text-danger" /><br />
        Dashboard
      </NavLink>

      <NavLink
        id="wd-course-link"
        to="/Kanbas/Courses/:id/Home"
        className={({ isActive }) => isActive ? "list-group-item text-danger bg-white text-center border-0 list-group-item-action" : "list-group-item text-white bg-black text-center border-0 list-group-item-action"}
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </NavLink>

      <NavLink
        id="wd-calendar-link"
        to="/Kanbas/Calendar"
        className={({ isActive }) => isActive ? "list-group-item text-danger bg-white text-center border-0 list-group-item-action" : "list-group-item text-white bg-black text-center border-0 list-group-item-action"}
      >
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar
      </NavLink>

      <NavLink
        id="wd-inbox-link"
        to="/Kanbas/Inbox"
        className={({ isActive }) => isActive ? "list-group-item text-danger bg-white text-center border-0 list-group-item-action" : "list-group-item text-white bg-black text-center border-0 list-group-item-action"}
      >
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox
      </NavLink>

      <NavLink
        id="wd-labs-link"
        to="/Labs"
        className={({ isActive }) => isActive ? "list-group-item text-danger bg-white text-center border-0 list-group-item-action" : "list-group-item text-white bg-black text-center border-0 list-group-item-action"}
      >
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs
      </NavLink>
    </div>
  );
}