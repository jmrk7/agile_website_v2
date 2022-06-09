import React from "react"

const Feature5 = () => {
  return (
    <div id="features5" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom20 left-content">
              <div className="margin-bottom20">
                <h2 className="head-h2">
                  Map Automation Test Cases to HP ALM Test Cases and
                  Requirements
                </h2>
                <p>
                  Bumblebee enables engineers to choose their own testing tools
                  and frameworks and easily mark and map automation tests with
                  Requirements, Manual Tests, or existing tests in HP ALM.
                </p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li>
                    <i className="fa fa-check"></i>Leverage Bumblebee’s JAVA
                    annotations and JUnit/TestNG extensions for marking and
                    mapping JAVA based tests.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Utilize Bumblebee’s .NET
                    attributes and NUnit extensions for marking and mapping C#,
                    VB.NET, or F# based tests.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Tests can be mapped to simple or
                    complex Test Plans, Test Labs, and Testset folder
                    hierarchies in HP ALM
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Configuration wizard and mapping
                    for user defined field in HP ALM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/bumblebee/bumblebee_map_automation.png" alt="ReadyAPI Compatibility"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature5;
