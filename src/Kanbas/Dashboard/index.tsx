export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h3 id="wd-dashboard-published">Published Courses (12)</h3> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4 ">
            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img alt="React logo" src="/images/reactjs.jpg" width="100%" height="150" style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS For Newbs
                    </h5>
                    <p className="card-text text-truncate">
                        Full Stack software developer react 1 
                        <br/> Summer 2024
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                    <img className="card-img-top" src="/images/codegood.jpg" width="270" alt="" height="150" style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1235 How 2 Code Good 
                    </h5>
                    <p className="card-text text-truncate">
                      Git Very Smart and Stuf <br/> Summer 2024
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img className="card-img-top" src="/images/developinghere.jpg" width="270" alt="" height="150" style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1236 I'm Developing Here! 
                    
                    </h5>
                    <p className="card-text text-truncate">
                      HEY! I'm Codin' Here! I'm Codin' Here! <br/>
                      Summer 2024
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/criminalhack.jpg" alt="" width="100%" height="150" style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1237 Hack Like A Criminal 
                    </h5>
                    <p className="card-text text-truncate">
                      And Get Away With It Too<br/> Fall 2023
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/segfaulting.jpg" alt="" width="100%" height="150" style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1238 Segfaulting for Dummies 
                    </h5>
                    <p className="card-text text-truncate">
                      Your Kernel Is Not Kerneling<br/> Fall 2024
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/manymonitors.jpg" alt="" width="100%" height="150"  style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS1239 The Art Of Using Many Monitors
                    </h5>
                    <p className="card-text text-truncate">
                      It Looks More Professional That Way<br/> Spring 2024
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/antialgorithms.jpg" alt="" width="100%" height="150"  style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS12310 Anti-Algorithms
                    </h5>
                    <p className="card-text text-truncate">
                      Problems on an Indefinite Loop<br/> Spring 2024
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="wd-dashboard-course" style={{ width: "270px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/legos.jpg" width="100%" alt="" height="150"  style={{"overflow" : "hidden"}}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS12311 LEGO for Engineers
                    </h5>
                    <p className="card-text text-truncate">
                      Just Another Brick In The Wall<br/> Fall 2023
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );}
  