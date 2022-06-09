import React from "react"

const Feature4 = () => {
  return (
    <div id="features4" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_opensource.png" alt="readyapi multi mode test execution with hp alm"/>
            </figure>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom40 right-content">
              <div className=" ">
                <h2 className="head-h2">Open Source Testing Frameworks</h2>
              </div>
              <p>
                Bumblebee allows engineers to integrate various open source test
                frameworks with HP ALM. This flexible integration allows
                developers and test engineers to bring <b>ALL</b> test results
                into HP ALM for a unified and real-time view into software
                quality
              </p>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Support for TestNG, JUnit, NUnit,
                    Python, and Cucumber.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Real-time test results
                    synchronization with HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Automatically create Test Plans,
                    Test Labs, and Test Runs
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Save $$$ in HP licensing costs by
                    using open source tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_opensource.png" alt="readyapi multi mode test execution with hp alm"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature4;
