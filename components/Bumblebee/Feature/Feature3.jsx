import React from "react"

const Feature3 = () => {
  return (
    <div id="features4" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom40 left-content">
              <div className=" ">
                <h2 className="head-h2">
                  Flexible and Powerful Integration with Selenium Webdriver and
                  HP ALM
                </h2>
              </div>
              <p>
                Bumblebee&apos;s TestNG, JUnit, and NUnit listeners can detect tests,
                test results, selenium commands, and automatically create Test
                Plans, Test Labs, and Test Runs in HP ALM.
              </p>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Develop Selenium tests directly
                    in JAVA using TestNG or JUnit
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Develop Selenium tests directly
                    in C#, VB.NET, or F# using NUnit
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Map Selenium WebDriver tests to
                    Requirements in HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Map Selenium tests to manual or
                    existing tests in HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Map classes as tests and tests
                    methods as design steps in HP ALM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_selenium_img.png" alt="bumblebee requirements mapping hp alm"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
