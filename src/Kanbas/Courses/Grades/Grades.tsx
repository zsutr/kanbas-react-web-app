import CoursesNavigation from "../Navigation";
import { BsFillGearFill } from "react-icons/bs";
import { LuFileInput , LuFileOutput } from "react-icons/lu";
import { CiSearch , CiFilter } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function Grades() {

    return (
      
     <div className="container">
        <div className="col-md-auto">
          
            <table>
            <td valign="top" >
                <div className="me-3"><CoursesNavigation /></div>
              
            </td>

            <td valign="top">

                <div className="d-flex justify-content-end">
                        <button className="btn btn-lg btn-secondary me-2" id="wd-add-assignment-group"><LuFileInput/> Import</button>
                    
                        <div className="dropdown">
                            <button type="button" className="btn btn-lg btn-danger dropdown-toggle me-2" data-bs-toggle="dropdown" asia-has-popup="true" aria-expanded="false">
                                <LuFileOutput /> Export
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./home">Action</a></li>
                                <li><a className="dropdown-item" href="./home">Another action</a></li>
                                <li><a className="dropdown-item" href="./home">Something else here</a></li>
                            </ul>
                        </div>
                        
                    
                    <button className="btn btn-lg btn-secondary"><BsFillGearFill/></button>
                </div>
                <br/>

                
               
                <div className="container mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="search-students" className="form-label fs-5">Student Names</label>
                            <div className="input-group input-group-lg me-3">
                                <span className="input-group-text" id="addon-wrapping1">
                                <CiSearch />
                                </span>
                                <input
                                type="text"
                                id="search-students"
                                className="form-control"
                                placeholder="Search Students"
                                aria-describedby="addon-wrapping1"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="search-assign" className="form-label fs-5">Assignment Names</label>
                            <div className="input-group input-group-lg me-3">
                                <span className="input-group-text" id="addon-wrapping2">
                                <CiSearch />
                                </span>
                                <input
                                type="text"
                                id="search-assign"
                                className="form-control"
                                placeholder="Search Assignments"
                                aria-describedby="addon-wrapping2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn btn-lg btn-secondary mb-3"> <CiFilter/> Apply Filters</button>

                <table className="table table-sm table-striped table-bordered table-responsive text-nowrap text-center align-middle ">
                    <tbody>
                        <tr>
                            <th className="text-start">Student Name</th>
                            <th>A1 - ENV + HTML<br/>Out of 100</th>
                            <th>A2 - CSS + BOOOTSTRAP<br/>Out of 100</th>
                            <th>A3 - JAVASCRIPT + REACT<br/> Out of 100</th>
                            <th>A4 - DATABASES<br/> Out of 100</th>
                        </tr>
                    
                        <tr >
                            <td className="text-start text-danger">Jerry Seinfeld</td>
                            <td>100%</td>
                            <td className="d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    value="100%"
                                    className="form-control  w-50"
                                />
                            </td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr >
                            <td className="text-start text-danger">SpongeBob Squarepants</td>
                            <td>100%</td>
                            <td className="d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    value="100%"
                                    className="form-control w-50"
                                />
                            </td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr >
                            <td className="text-start text-danger">Harry Potter</td>
                            <td>100%</td>
                            <td className="d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    value="100%"
                                    className="form-control  w-50"
                                />
                            </td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr >
                            <td className="text-start text-danger">Kevin Hart</td>
                            <td>100%</td>
                            <td className="d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    value="100%"
                                    className="form-control  w-50"
                                />
                            </td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr >
                            <td className="text-start text-danger">Bill Gates</td>
                            <td>100%</td>
                            <td className="d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    value="100%"
                                    className="form-control  w-50"
                                />
                            </td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr >
                            <td className="text-start text-danger">Chuckie Finster</td>
                            <td>100%</td>
                            <td className="d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    value="100%"
                                    className="form-control  w-50"
                                />
                            </td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                  
                    </tbody>
                    </table>
                </td>
            </table>
        </div>
            
      </div>


);}
