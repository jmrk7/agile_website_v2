import React from "react"

const Feature2 = () => {
  return (
    <div id="features3" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_selenium.png" alt="Selenium"/>
            </figure>
          </div>
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
            <div className="margin-bottom20 right-content">
              <div className="margin-bottom20">
                <h2 className="head-h2">
                  Run UFT, LeanFT, QTP, and other HP testing tools from Jenkins,
                  Bamboo, TeamCity, IBM UrbanCode
                </h2>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Use CI applications to centrally
                    control all development and testing activities using HP and
                    non-HP tools.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Schedule and run HP ALM Test Sets
                    from within Jenkins, Bamboo, TeamCity, or IBM UrbanCode
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Specify TestPlans and create
                    TestLab, TestSet, and TestRuns at runtime
                  </li>
                  <li>
                    <i className="fa fa-check"></i>View HP ALM tests results
                    directly in your CI builds
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Highly flexible and configurable
                    runtime engine
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_selenium.png" alt="Selenium"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
