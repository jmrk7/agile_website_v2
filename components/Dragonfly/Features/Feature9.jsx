import React from 'react'

const Feature9 = () => {
  return (
  <div id="features9" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom40">
            <div>
              <h2 className="head-h2">Jenkins, Bamboo, TeamCity Support</h2>
              <p>Automatic ReadyAPI tests results export when running ReadyAPI testrunner via Jenkins, Bamboo, or TeamCity</p>
            </div>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Automatic test run detection and test results collection</li>
                <li><i className="fa fa-check"></i>Run ReadyAPI via any CI system like Jenkins, Bamboo, and Bamboo and automatically export test results</li>
                <li><i className="fa fa-check"></i>Run ReadyAPI tests via ReadyAPI maven plugin using your CI system and view test results in HP ALM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/dragonfly/dragonfly_ci.png" alt="Jenkins, Bamboo, TeamCity Support" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature9;
