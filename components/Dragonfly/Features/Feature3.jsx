import React from "react"

const Feature3 = () => {
  return (
    <div id="features4" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom40">
              <div className=" ">
                <h2 className="head-h2">Requirements and Test Case Mapping</h2>
              </div>
              <p>Link ReadyAPI tests to existing test and requirements in HP ALM and see the full health of your software project</p>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Map ReadyAPI tests to Requirements in HP ALM</li>
                  <li><i className="fa fa-check"></i>Live requirements coverage reports for ReadyAPI tests</li>
                  <li><i className="fa fa-check"></i>Map ReadyAPI tests to existing tests in HP ALM Test Plan</li>
                  <li><i className="fa fa-check"></i>Colloborate with test analysts and automation engineers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly-alm-requirements.png" alt="dragonfly requirements mapping hp alm" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
