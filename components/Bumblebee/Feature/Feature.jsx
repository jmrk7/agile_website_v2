import React from "react"

const Feature = () => {
  return (
    <div id="features" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_continous.png" alt="Selenium"/>
            </figure>
          </div>
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
            <div className="margin-bottom20 right-content">
              <div className="margin-bottom20">
                <h2 className="head-h2">
                  Continuous Testing using Jenkins, Bamboo, TeamCity, and
                  UrbanCode
                </h2>
                <p>
                  Bumblebee plugins for Jenkins, Bamboo, TeamCity, and IBM
                  UrbanCode provide a simple, powerful, and automated way of
                  reflecting testing metrics from CI systems into HP ALM
                </p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Simple standard CI plugin/addon
                    setup and configuration
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Support for TestNG, JUnit, NUnit,
                    Cucumber, and Python
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Push real-time quality metrics
                    from open source and commercial testing tools and frameworks
                    into HP HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Use HP ALM as the single source
                    of quality metrics for all development and testing
                    activities
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_continous.png" alt="Selenium"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
