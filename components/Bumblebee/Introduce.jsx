import React from "react"

const Introduce = () => {
  return (
    <div id="introduce" className="bg-grey-ag">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-7">
            <div className="margin-top50">
              <ul className="list-icon">
                <li>
                  <i className="fa fa-check"></i>Codeless integration with Jenkins,
                  Bamboo, TeamCity, IBM UrbanCode
                </li>
                <li>
                  <i className="fa fa-check"></i>Browser and Mobile testing using
                  Selenium, Appium, and HP ALM
                </li>
                <li>
                  <i className="fa fa-check"></i>Integration with opensource
                  frameworks: JUnit, TestNG, NUnit, etc.
                </li>
                <li>
                  <i className="fa fa-check"></i>Integration with commerical testing
                  tools: Ranorex, ReadyAPI, etc.
                </li>
                <li>
                  <i className="fa fa-check"></i>No risk 14 days trail with full
                  enterprise support
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 col-sm-offset-0 col-md-offset-0 headerimage2 hidden-xs">
            <div className="header-button margin-bottom40">
              <figure className="margin-bottom40">
                <img src="/images/bumblebee/bumblebee_introduce.png" alt="Bumblebee"/>
              </figure>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <div className="header-button margin-bottom40">
              <figure className="margin-bottom40">
                <img src="/images/bumblebee/bumblebee_introduce.png" alt="Bumblebee"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
