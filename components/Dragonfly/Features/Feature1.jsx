import React from "react"

const Feature1 = () => {
  return (
    <div id="features" className="wrap-container400">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div className="margin-bottom40">
              <div className=" ">
                <h2 className="head-h2">One Click Sync</h2>
                <p>Tired of writing Excel macros and VBScript for HP ALM integration? Try Dragonfly and boost your engineering productivity</p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Export testsuites and tests into HP ALM Testplan</li>
                  <li><i className="fa fa-check"></i>Single-Click action for exporting tests</li>
                  <li><i className="fa fa-check"></i>Export test cases, test and step descriptions, test steps and assertions</li>
                  <li><i className="fa fa-check"></i>Super fast exports using HP ALM&apos;s native API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_oneclick.png" alt="One Click Sync" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
