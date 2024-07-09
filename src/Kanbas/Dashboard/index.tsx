export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <br/><br/>
          <div className="wd-dashboard-course">
            <img src="/images/codegood.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1235 How 2 Code Good 
              </a>
              <p className="wd-dashboard-course-title">
                Am Very Smart and Stuf
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          
          <br/><br/>
          <div className="wd-dashboard-course">
            <img src="/images/developinghere.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1236 I am Developing Here
              </a>
              <p className="wd-dashboard-course-title">
                HEY! I'm codin here! I'm codin here!
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <br/><br/>
          <div className="wd-dashboard-course">
            <img src="/images/criminalhack.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1237 Hack Like A Criminal
              </a>
              <p className="wd-dashboard-course-title">
                And you might even get away with it too
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          
          <br/><br/>
          <div className="wd-dashboard-course">
            <img src="/images/segfault.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1238 Segfaulting for Dummies
              </a>
              <p className="wd-dashboard-course-title">
                Handle memory or else....
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <br/><br/>
          <div className="wd-dashboard-course">
            <img src="/images/manymonitors.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1239 How to Use Many Many Monitors
              </a>
              <p className="wd-dashboard-course-title">
                It looks more professional that way
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <br/><br/>
          <div className="wd-dashboard-course">
            <img src="/images/antialgorithms.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1231 Anti-Algorithms 101
              </a>
              <p className="wd-dashboard-course-title">
                Let the problems figure themselves out
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          
        </div>
      </div>
  );}
  