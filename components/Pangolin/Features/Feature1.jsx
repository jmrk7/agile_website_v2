import React from "react"

const Feature1 = () => {
  return (
  <div id="features" className="wrap-container400 bg-grey-ag">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom40 left-content">
            <div className=" ">
              <h2 className="head-h2">Open Source Test Frameworks</h2>
            </div>
            <p>
              Pangolin allows engineers to integrate various open source test frameworks with TestRail. This flexible integration allows developers and test engineers to bring <b>ALL</b> test results into TestRail for a unified and
              real-time view into software quality
            </p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Support for TestNG, JUnit, NUnit, Python, and Cucumber.</li>
                <li><i className="fa fa-check"></i>Real-time test results synchronization with TestRail</li>
                <li><i className="fa fa-check"></i>Automatically create tests, sections, milestones, and test plans, and test runs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/pangolin/pangolin_opensource.png" alt="pangolin opensource" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature1;
