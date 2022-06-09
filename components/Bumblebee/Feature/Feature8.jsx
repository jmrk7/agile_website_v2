import React from "react"

const Feature8 = () => {
  return (
  <div id="features8" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure className="margin-bottom40">
            <img src="/images/bumblebee/bumblebee_ranorex.png" alt="HP ALM Compatibility" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
          <div className="margin-bottom40 right-content">
            <div className=" ">
              <h2 className="head-h2">Ranorex GUI Automation + HP ALM</h2>
            </div>
            <p>Ranorex is a great commerical tool for automating desktop, mobile, and web application. Bumblebee extension for Ranorex provides a simple and powerful way of integrating with HP ALM</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Automatically detect test cases, test results, and report them to HP ALM</li>
                <li><i className="fa fa-check"></i>Automatically create TestPlans, TestLabs, and TestRuns in HP ALM.</li>
                <li><i className="fa fa-check"></i>Smart-Script-Export feature for automatically creating runnable Ranorex tests in HP ALM using VAPI-XP script</li>
                <li><i className="fa fa-check"></i>Run Ranorex tests via Jenkins, Bamboo, TeamCity, or UrbanDeploy and automatically export results into HP ALM</li>
                <li><i className="fa fa-check"></i>Map Ranorex tests to Requirements in HP ALM</li>
                <li><i className="fa fa-check"></i>Map Ranorex tests to Manual tests or existing tests in HP ALM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 visible-xs">
          <figure className="margin-bottom40">
            <img src="/images/bumblebee/bumblebee_ranorex.png" alt="HP ALM Compatibility" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Feature8;
