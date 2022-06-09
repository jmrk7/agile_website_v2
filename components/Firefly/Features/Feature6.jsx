import React from "react"

const Feature6 = () => {
  return (
  <div id="features6" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure className="margin-bottom40">
            <img src="/images/firefly/firefly_ci.png" alt="HP ALM Compatibility" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
          <div className="margin-bottom40">
            <div className=" ">
              <h2 className="head-h2">Jenkins, Bamboo, TeamCity Support</h2>
            </div>
            <p>Automatic ReadyAPI tests results export if ReadyAPI is being run via Jenkins, Bamboo, or TeamCity</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Firefly is automatically enabled and invoked when running ReadyAPI via commandline</li>
                <li><i className="fa fa-check"></i>Run ReadyAPI via any CI system like Jenkins, Bamboo, and Bamboo and automatically export test results</li>
                <li><i className="fa fa-check"></i>Run ReadyAPI tests via ReadyAPI Maven Plugin using your CI system and view test results in TestRail</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 visible-xs">
          <figure className="margin-bottom40">
            <img src="/images/firefly/firefly_ci.png" alt="HP ALM Compatibility" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature6;