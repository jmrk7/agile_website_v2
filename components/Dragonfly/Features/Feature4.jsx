import React from "react"

const Feature4 = () => {
  return (
    <div id="features4" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_ALM_multi_mode.png" alt="readyapi multi mode test execution with hp alm"/>
            </figure>
          </div>

          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div className="margin-bottom40">
              <div className=" ">
                <h2 className="head-h2">Multi-Mode Execution</h2>
              </div>
              <p>Run tests directly in ReadyAPI, Jenkins, TeamCity, Bamboo, or schedule them in HP ALM Testset.</p>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Run tests directly in ReadyAPI or via testrunner</li>
                  <li><i className="fa fa-check"></i>Run tests directly in HP ALM TestLab</li>
                  <li><i className="fa fa-check"></i>Automatic tests creation in Testplan with vbscript</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_ALM_multi_mode.png" alt="readyapi multi mode test execution with hp alm"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature4;