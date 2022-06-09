import React from "react"

const Feature7 = () => {
  return (
    <div id="features7" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom20 left-content">
              <div className="margin-bottom20">
                <h2 className="head-h2">
                  Cross Browser Testing in HP ALM using SauceLabs / Browserstack
                </h2>
                <p>
                  Bumblebee&apos;s SauceLabs and Browserstack integration enables
                  teams to test web applications with any combination of
                  browsers and operating systems and report rich test results
                  with screenshots, test status, failure messages in HP ALM.
                </p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Automatic real-time publishing of
                    SauceLabs / Browserstack screenshots, test metadata, test
                    status, and failure logs to HP ALM.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Support for JAVA (TestNG and
                    JUnit) and C# (NUnit) test frameworks.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Bumblebee is the only solution in
                    the market that enables cloud based cross browser testing
                    with HP ALM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_cross_browser.png" alt="ReadyAPI Compatibility"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature7;
