import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";

export default function AssignmentControlButtons() {


  return (
    <div className="float-end">
      <button type="button" className="btn btn-outline-secondary rounded-pill me-2">40% of Total</button>
      <BsPlusLg className="me-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
