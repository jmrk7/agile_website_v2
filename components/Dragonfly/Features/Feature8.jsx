import React from "react"

const Feature8 = () => {
  return (
    <div id="features8" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_properties_wizard.png" alt="Custom Fields Wizard"/>
            </figure>
          </div>
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div className="margin-bottom40">
              <div className=" ">
                <h2 className="head-h2">Custom Fields Wizard</h2>
              </div>
              <p>Dragonfly has extensive support for HP ALM custom field mapping. Our simple yet powerful wizard makes custom fields mapping a breeze</p>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Map custom fields in HP ALM to ReadyAPI tests</li>
                  <li><i className="fa fa-check"></i>Import configuration to other ReadyAPI projects</li>
                  <li><i className="fa fa-check"></i>Friendly wizard for easy mapping configuration</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_properties_wizard.png" alt="Custom Fields Wizard"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature8;
