import React from "react"

const Download = () => {

  return (
  <div id="download" className="bg-grey-ag">
    <div className="bg-overlay50 wrap-container20">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-lg-5 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <h4 className="margintop40 dwn-h2">Register with Agiletestware to start using Firefly</h4>
            <p className="register_p">Register with Agiletestware to obtain a two week evaluation license for Firefly. Access to full support and all features during the evaluation period.</p>
            <div className="btn-section dwn-btn">
              <a className="btn-custom free_trial_track" style={{cursor: "pointer"}} title="Firefly Trial" href="https://railflow.io/register/">Register</a>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <h4 className="margintop40 dwn-h2">Download Firefly ver 2.4</h4>
            <div className="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://s3-us-west-2.amazonaws.com/agiletestware-firefly/downloads/2.4/Firefly_windows-x64_2.4.exe" className="btn-custom btn-icon firefly612_readyapi" title="Firefly">
                <i className="fa fa-download"></i> Firefly 2.4
              </a>
              <i className="fa fa-windows" style={{color: "#4a90e2", fontSize: "30px", marginLeft: "10px"}}></i>
            </div>
            <h4 className="margintop40 dwn-h2">Download Firefly ver 2.4 for macOS</h4>
            <div className="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://agiletestware-firefly.s3-us-west-2.amazonaws.com/downloads/2.4/Firefly_macos_2.4.dmg" className="btn-custom btn-icon firefly612_readyapi" title="Firefly for macOS">
                <i className="fa fa-download"></i> Firefly 2.4 for macOS
              </a>
              <i className="fa fa-apple" style={{color: "#4a90e2", fontSize: "30px", marginLeft: "10px"}}></i>
            </div>
            <h4 className="margintop40 dwn-h2">Download Firefly ver 2.0.8 for ReadyAPI 2.4.0 and older</h4>
            <div className="btn-section margin-bottom40 dwn-btn" style={{float: "left"}}>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://s3-us-west-2.amazonaws.com/agiletestware-firefly/downloads/2.0.8/Firefly_windows_readyAPI_2.0.4_2.0.8.exe"
                className="btn-custom btn-icon firefly612_readyapi"
                title="Firefly for ReadyAPI 2.4.0 and older"
              >
                <i className="fa fa-download"></i> Firefly 2.0.8 for ReadyAPI 2.4.0 and older
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Download;