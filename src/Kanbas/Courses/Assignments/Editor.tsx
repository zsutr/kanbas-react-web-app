export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name </label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea><br/><br/>
        <br />
        <table>
            <tr>
                <td>
                <label htmlFor="wd-points">Points </label>
                <input id="wd-points" value={100} /><br/><br/>
                </td>
            </tr>
            <tr>
                <label htmlFor="wd-group">Assignment Group </label>
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECTS">PROJECTS</option>
                </select><br/><br/>
            </tr>
            <tr>
                <label htmlFor="wd-display-grade-as">Display Grade As </label>
                <select id="wd-display-grade-as">
                    <option selected value="PERCENTAGE">Percentage</option>
                    <option value="POINTS">Points</option>
                    <option value="COMPARISON">Comparison</option>
                </select><br/><br/>
            </tr>
            <tr>
                <label htmlFor="wd-submission-type">Submission Type </label>
                <select id="wd-submission-type">
                    <option selected value="ONLINE">Online</option>
                    <option value="INPERSON">In person</option>
                    <option value="BYEMAIL">By email</option>
                    <option value="BYMAIL">By mail</option>
                </select><br/><br/>
            </tr>
            
            <tr>
                <td align="left" valign="top">
                    <label>Online Entry Options </label><br/>

                    <input type="checkbox" name="check-entry" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="check-entry" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL </label><br/>

                    <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings </label><br/>

                    <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation </label><br/>

                    <input type="checkbox" name="check-entry" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads </label><br/><br/>
                </td>
            </tr>
            <td>
                <td align="right" valign="top">Assign</td>
                
                <td align="left" valign="top">
                    <label htmlFor="wd-assign-to">Assign to </label>
                    <input id="wd-assign-to" value={"Everyone"} /><br/><br/>
                    <label htmlFor="wd-due-date">Due </label>
                    <input type="date"
                            id="wd-due-date"
                            value="2024-05-13"/><br/><br/>
                    <td>
                        <label htmlFor="wd-available-from">Available From <br/> </label>
                        <input type="date"
                                id="wd-available-from"
                                value="2024-05-06"/> 
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until <br/> </label>
                        <input type="date"
                                id="wd-available-until"
                                value="2024-05-20"/>
                    </td>
                </td>   
            </td> 
            <tr>
                <hr/>
            </tr>
            <tr>
                <td align="right"> 
                    <button id="wd-cancel" onClick={() => alert("Life is Good!")} type="button">
                        Cancel 
                    </button> 
                
                    <button id="wd-save" onClick={() => alert("Life is Good!")} type="button">
                        Save 
                    </button>
                </td> 
                
            </tr> 
        </table> 
            
      </div>
  );}
  