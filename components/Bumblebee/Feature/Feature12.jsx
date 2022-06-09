import React from "react"

const Feature = () => {
  return (
  <div id="features11" className="wrap-container400">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure className="margin-bottom40">
            <img className="margin-bottom40" src="/images/bumblebee/bumblebee_highly.png" alt="SmartBear" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
          <div className="margin-bottom40 right-content">
            <div className=" ">
              <h2 className="head-h2">Flexible Configuration Interfaces</h2>
            </div>
            <p>Most teams have highly customized HP ALM projects. Bumblebee provides a variety of mechanisms for users to handle HP ALM&apos;s user fields and apply project based rules</p>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Bumblebee web portal for configuring HP ALM user fields</li>
                <li><i className="fa fa-check"></i>Define global rules for HP ALM user fields on specified projects</li>
                <li><i className="fa fa-check"></i>Define or override user fieds directly in test frameworks and Jenkins, Bamboo, TeamCity, UrbanCode</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 visible-xs">
          <figure className="margin-bottom40">
            <img className="margin-bottom40" src="/images/bumblebee/bumblebee_highly.png" alt="SmartBear" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Feature;
