import React from "react"

const Feature5 = () => {
  return (
    <div id="features5" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom20">
              <div className="margin-bottom20">
                <h2 className="head-h2">ReadyAPI Compatibility</h2>
                <p>Dragonfly is a Smartbear partner and works closely with theSmartbear team to validate compatibility of all releases</p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Dragonfly is compatible with all versions for ReadyAPI</li>
                  <li><i className="fa fa-check"></i>Dragonfly is compatible with all version of SoapUI</li>
                  <li><i className="fa fa-check"></i>Dragonfly is forward and backwards compatible</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/readyapicomp.png" alt="ReadyAPI Compatibility"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature5;