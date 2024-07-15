import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import '@popperjs/core';
import 'bootstrap';
import { TiCancel } from "react-icons/ti";


export default function ModulesControls() {
  return (
    
    
    <div id="wd-modules-controls" className="text-nowrap">
        <table id="wd-home">
        <tr>
            <td valign="top">
                <button id="wd-collapse-all" className="btn btn-secondary me-1"
                    type="button" onClick={() => alert("Life is Good!")}>
                    Collapse All
                </button>
            </td>
            <td valign="top">
                <button id="wd-view-progress" className="btn btn-secondary me-1"
                        type="button" onClick={() => alert("Life is Good!")}>
                        View Progress
                </button>

            </td>

            
            <td valign="top">
            <div className="dropdown d-inline me-1 float-end">
            <button id="wd-publish-all-btn" className="btn-secondary btn dropdown-toggle "
            type="button" data-bs-toggle="dropdown">
            <GreenCheckmark />
            Publish All
        </button>
            <ul className="dropdown-menu" >
                <li>
                    <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                    <GreenCheckmark />
                    Publish all modules and items
                    </a>
                </li>
                <li>
                    <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                    <GreenCheckmark />
                    Publish modules only
                    </a>
                </li>
                <li>
                    <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                    <TiCancel />
                    Unpublish All Modules and Items
                    </a>
                </li>
                <li>
                    <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                    <TiCancel />
                    Unpublish Modules Only
                    </a>
                </li>
            </ul>       
        </div>
            </td>
            <td valign="top">
                <button id="wd-add-module-btn" className="btn btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Module
        </button>
            </td>
        </tr>
        </table>  
    </div>
  );
}
