export default function Modules() {
    return (
      <div>
        <div>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                    Collapse All
            </button>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                    View Progress
            </button>
            <select id="wd-select-one-genre">
                <option selected value="PUBLISH-ALL">Publish All</option>
                <option value="DRAMA">Drama</option>
                <option value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                    + Module
            </button>
        </div>
        
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  