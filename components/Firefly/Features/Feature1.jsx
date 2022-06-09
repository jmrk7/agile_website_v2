import React from "react"

const Feature1 = () => {
  return (
  <div id="features" className="wrap-container400 bg-grey-ag">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
          <div className="margin-bottom40">
            <div className=" ">
              <h2 className="head-h2">One Click Sync</h2>
              <p>Say goodbye to manual exporting of test cases and test results into TestRail. No more writing complicated and hard to maintain integration code.</p>
            </div>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Export projects, test suites, or test cases into TestRail TestPlan</li>
                <li><i className="fa fa-check"></i>Single-Click action for exporting tests in TestRail Testplan</li>
                <li><i className="fa fa-check"></i>Export test cases, descriptions, test steps, assertions, and much more.</li>
                <li><i className="fa fa-check"></i>Super fast exports using TestRail&apos;s native API</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/firefly/firefly_oneclick.png" alt="One Click Sync" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature1;
