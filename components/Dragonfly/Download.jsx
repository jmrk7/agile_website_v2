import React from "react"
import Router from "next/router"

export default function Download() {
  const register = () => {
    Router.push("/dragonfly/register")
  }

  return (
    <div id="download">
      <div className="bg-overlay50 wrap-container20 dragonfly-download">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-lg-5 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
              <h4 className="margintop40 dwn-h2">
                Register with Agiletestware to start using Dragonfly
              </h4>
              <p className="register_p">
                Register with Agiletestware to obtain a two week evaluation
                license for dragonfly. Access to full support and all features
                during evaluation.
              </p>
              <div className="btn-section dwn-btn">
                <a className="btn-custom free_trial_track" style={{cursor: "pointer"}} title="Dragonfly Trial" onClick={register}>Free Trial</a>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
              <h4 className="margintop40 dwn-h2">
                Download dragonfly ver 6.1.7 for ReadyAPI
              </h4>
              <div className="btn-section margin-bottom40 dwn-btn">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://s3-us-west-2.amazonaws.com/agiletestware-dragonfly/downloads/6.1.7/dragonfly-readyapi-ver-6.1.7.exe"
                  className="btn-custom btn-icon dragonfly612_readyapi"
                  title="Dragonfly ReadyAPI"
                >
                  <i className="fa fa-download"></i> Dragonfly 6.1.7 for ReadyAPI
                </a>
              </div>
              <h4 className="dwn-h2">
                Download dragonfly ver 6.1.7 for ReadyAPI 2.4.0 and older
                versions of ReadyAPI
              </h4>
              <div className="btn-section margin-bottom40 dwn-btn">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://s3-us-west-2.amazonaws.com/agiletestware-dragonfly/downloads/6.1.7/dragonfly-readyapi-2.4.0-ver-6.1.7.exe"
                  className="btn-custom btn-icon dragonfly550"
                  title="Dragonfly Legacy"
                >
                  <i className="fa fa-download"></i> Dragonfly 6.1.7 for ReadyAPI
                  2.4.0
                </a>
              </div>
              <h4 className="dwn-h2">
                Download dragonfly ver 6.1.5 for SoapUI Open Source 5.3.0 and
                higher
              </h4>
              <div className="btn-section margin-bottom40 dwn-btn">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://s3-us-west-2.amazonaws.com/agiletestware-dragonfly/downloads/6.1.5/dragonfly-soapui-ver-6.1.5.exe"
                  className="btn-custom btn-icon dragonfly612_os"
                  title="Dragonfly soapUI OS"
                >
                  <i className="fa fa-download"></i> Dragonfly 6.1.5 for SoapUI OS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
