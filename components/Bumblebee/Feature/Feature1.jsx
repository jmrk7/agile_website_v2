import React from "react"

const Feature1 = () => {
  return (
    <div id="features1" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
            <div className="margin-bottom40 left-content">
              <div className=" ">
                <h2 className="head-h2">
                  Run HP Performance Center via Jenkins, Bamboo, TeamCity, IBM
                  UrbanCode
                </h2>
                <p>
                  Bumblebee plugins for Jenkins, Bamboo, TeamCity, and IBM
                  UrbanCode provide engineering teams an integrated approach for
                  scheduling HP Performance Center runs within CICD
                </p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Integrate performance testing
                    within your CICD process
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Configure HP Performance Center
                    tasks within the build process
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Publish Performance testing test
                    results, reports, and artifacts in Jenkins, Bamboo,
                    TeamCity, and IBM UrbanCode.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Support for all major CI
                    applications - Jenkins, Bamboo, TeamCity
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_runhp.png" alt="Open Source"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
