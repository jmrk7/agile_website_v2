import React from "react"

const Feature3 = () => {
  return (
  <div id="features4" className="wrap-container400 bg-grey-ag">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom40">
            <div className=" ">
              <h2 className="head-h2">TestCase Mapping</h2>
            </div>
            <p>Firefly allows you to map ReadyAPI tests to existing tests in TestRail. This allows test analysts and automation engineers to work together as a team.</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Map ReadyAPI test cases to existing test cases in TestRail test suites</li>
                <li><i className="fa fa-check"></i>Flexibilty of specifying test suites, sections, and sub-sections</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/firefly/firefly-testcase-mapping.png" alt="firefly requirements mapping hp alm" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature3;