import React from "react"

const Feature4 = () => {
  return (
  <div id="features4" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure className="margin-bottom40">
            <img style={{width: "80%"}} src="/images/pangolin/pangolin_appium.png" alt="Pangolin Appium" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
          <div className="margin-bottom40 right-content">
            <div className=" ">
              <h2 className="head-h2">Flexible and Powerful Integration with Appium and TestRail</h2>
            </div>
            <p>Pangolin&apos;s TestNG, JUnit, NUnit listeners can detect tests, test results, Appium commands, and automatically create Test, Plans, Milestones, and Runs</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Develop Appium tests directly in JAVA or C#</li>
                <li><i className="fa fa-check"></i>Develop Appium using JUnit, TestNG, or NUnit</li>
                <li><i className="fa fa-check"></i>Map Appium tests to manual or existing tests in TestRail</li>
                <li><i className="fa fa-check"></i>View live testing results dashboards in TestRail</li>
                <li><i className="fa fa-check"></i>Map classes as tests and tests methods as design steps</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 visible-xs">
          <figure className="margin-bottom40">
            <img style={{width: "80%"}} src="/images/pangolin/pangolin_appium.png" alt="Pangolin Appium" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature4;
