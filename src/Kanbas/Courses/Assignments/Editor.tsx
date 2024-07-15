import CoursesNavigation from "../Navigation";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <div className="row">
                <div className="col-md-3">
                    <CoursesNavigation />
                </div>
                <div className="col-md-9">
                    <div className="mb-3">
                        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                        <input type="text" className="form-control" id="wd-name" defaultValue="A1 - ENV + HTML" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wd-description" className="form-label">Description</label>
                        <textarea className="form-control" id="wd-description" defaultValue="The assignment is available online. Submit a link to the landing page." />
                    </div>
                  
                    <div className="row mb-3">
                        <div className="col-md-6 text-end">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" id="wd-points" defaultValue={100} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 text-end">
                            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                        </div>
                        <div className="col-md-6">
                            <select className="form-select" id="wd-group">
                                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECTS">PROJECTS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 text-end">
                            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                        </div>
                        <div className="col-md-6">
                            <select className="form-select" id="wd-display-grade-as">
                                <option value="PERCENTAGE">Percentage</option>
                                <option value="POINTS">Points</option>
                                <option value="COMPARISON">Comparison</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 text-end">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 border border-2 rounded p-3">
                                <select className="form-select" id="wd-submission-type">
                                    <option selected value="ONLINE">Online</option>
                                    <option value="INPERSON">In person</option>
                                    <option value="BYEMAIL">By email</option>
                                    <option value="BYMAIL">By mail</option>
                                </select>
                                <div className="mb-3">
                                    <label className="form-label">Online Entry Options</label><br />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 text-end">
                            <label htmlFor="wd-assign" className="form-label">Assign</label>
                        </div>
                        <div className="col-md-6">
                            <div className="wd-assign p-4 border border-2 rounded">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                                            <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                                            <input type="date" className="form-control" id="wd-due-date" defaultValue="2024-05-13" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                            <input type="date" className="form-control" id="wd-available-from" defaultValue="2024-05-06" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                                            <input type="date" className="form-control" id="wd-available-until" defaultValue="2024-05-20" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                  
                    <hr/>
                    <div className="mb-3 text-end">
                        <button className="btn btn-lg btn-secondary mx-2" id="wd-add-assignment-group">Cancel</button>
                        <button className="btn btn-lg btn-danger" id="wd-add-assignment">Save</button>
                    </div>
                
                </div>
            </div>
        </div>
    );
}
