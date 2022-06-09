import React from "react"

const Feature2 = () => {
  return (
  <div id="features2" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure className="margin-bottom40">
            <img src="/images/pangolin/pangolin_saucelabs_browserstack.png" alt="Pangolin Cross Browser" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
          <div className="margin-bottom40 right-content">
            <div className=" ">
              <h2 className="head-h2">Cross Browser Testing using SauceLabs or Browserstack</h2>
            </div>
            <p>
              Pangolin SauceLabs and Browserstack integration enables teams to test their applications with any combination of browsers and operating systems and report rich test results with screenshots, test status, failure messages in
              TestRail.
            </p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Automatic real-time publishing of SauceLabs / Browserstack screenshots, test metadata, test status, and failure logs to TestRail.</li>
                <li><i className="fa fa-check"></i>Support TestNG, JUnit, and NUnit test frameworks.</li>
                <li><i className="fa fa-check"></i>Pangolin is the only solution in the market that enables cloud based cross browser testing with TestRail</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 visible-xs">
          <figure className="margin-bottom40">
            <img src="/images/pangolin/pangolin_saucelabs_browserstack.png" alt="Pangolin Cross Browser" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature2;
