import React from "react"

const Feature6 = () => {
  return (
    <div id="features6" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_appium.png" alt="HP ALM Compatibility"/>
            </figure>
          </div>
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
            <div className="margin-bottom40 right-content">
              <div className=" ">
                <h2 className="head-h2">
                  Flexible and Powerful Integration with Appium and HP ALM
                </h2>
              </div>
              <p>
                Bumblebee&apos;s TestNG, JUnit, NUnit listeners can detect tests,
                test results, Appium commands, and automatically create Test
                Plans, Test Labs, Test Runs in HP ALM.
              </p>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Develop Appium tests directly in
                    JAVA using TestNG or JUnit
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Develop Appium tests directly in
                    C#, VB.NET, or F# using NUnit
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Map Appium tests tests to
                    Requirements in HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Map Appium tests to manual or
                    existing tests in HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>View live testing results
                    dashboards in HP ALM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_appium.png" alt="HP ALM Compatibility"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature6;
