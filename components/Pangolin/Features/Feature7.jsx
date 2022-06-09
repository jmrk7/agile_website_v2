import React from "react"

const Feature7 = () => {
  return (
  <div id="features7" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure className="margin-bottom40">
            <img src="/images/pangolin/pangolin_cicd.png" alt="Pangolin Cross Browser" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
          <div className="margin-bottom40 right-content">
            <div className=" ">
              <h2 className="head-h2">Continuous Delivery using Jenkins, Bamboo, TeamCity, UrbanCode and TestRail</h2>
            </div>
            <p>Pangolin plug-ins for Jenkins, Bamboo, TeamCity, and IBM UrbanCode provide a simple, and powerful way to view CI tests results data directly in TestRail</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Achieve visibility into CICD metrics by bringing all testing data into a single place</li>
                <li><i className="fa fa-check"></i>Companies with multiple CI systems can funnel various test data streams into TestRail</li>
                <li><i className="fa fa-check"></i>Use TestRail as the single source of software quality metrics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 visible-xs">
          <figure className="margin-bottom40">
            <img src="/images/pangolin/pangolin_cicd.png" alt="Pangolin Cross Browser" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature7
