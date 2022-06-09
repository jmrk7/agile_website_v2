import React from "react"

const Feature6 = () => {
  return (
    <div id="features6" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/almcomp.png" alt="HP ALM Compatibility"/>
            </figure>
          </div>
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div className="margin-bottom40">
              <div className=" ">
                <h2 className="head-h2">HP ALM Compatibility</h2>
              </div>
              <p>Dragonfly works with all version of HP ALM and QC</p>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Compatible with HP ALM SAAS, 12, 11, and 10</li>
                  <li><i className="fa fa-check"></i>Compatible with HP Quality Center Enterprise</li>
                  <li><i className="fa fa-check"></i>Extensive certification matrix before every release</li>
                  <li><i className="fa fa-check"></i>Validated against all ALM releases</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/almcomp.png" alt="HP ALM Compatibility"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature6;
