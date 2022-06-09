import React from "react"

const Feature9 = () => {
  return (
  <div id="features9" className="wrap-container400 bg-grey-ag">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom20 left-content">
            <div className="margin-bottom20">
              <h2 className="head-h2">Compatibility Galore</h2>
              <p>Bumblebee has been designed to work on a variety of platforms and versions. Bumlebee exposes a REST API to enable seamless integration with your development tools and processes.</p>
            </div>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Run Bumblebee on Windows or Linux (coming soon)</li>
                <li><i className="fa fa-check"></i>Install and configure Bumblebee in 10 minutes</li>
                <li><i className="fa fa-check"></i>Bumblebee is compatible with all versions of HP ALM / Quality Center and all LTS versions of Jenkins, Bamboo, TeamCity, and IBM UrbanCode</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/bumblebee/bumblebee_cross_platform.png" alt="ReadyAPI Compatibility" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Feature9;
