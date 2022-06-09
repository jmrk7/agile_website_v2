import React from "react"

const Feature3 = () => {
  return (
  <div id="features3" className="wrap-container400 bg-grey-ag">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom40 left-content">
            <div className=" ">
              <h2 className="head-h2">Flexible and Powerful Integration with Selenium Web Driver and TestRail</h2>
            </div>
            <p>Pangolin&apos;s TestNG, JUnit, and NUnit listeners can detect tests, test results, selenium commands, and automatically create Tests, Plans, Milestones, and Runs in TestRail</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Develop Selenium tests directly in JAVA or C#</li>
                <li><i className="fa fa-check"></i>Develop Selenium using JUnit, TestNG, or NUnit</li>
                <li><i className="fa fa-check"></i>Map Selenium tests to existing tests in TestRail</li>
                <li><i className="fa fa-check"></i>Map classes as tests and tests methods as design steps</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/pangolin/pangolin_selenium.png" alt="pangolin selenium" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature3;
