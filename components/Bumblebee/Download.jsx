import React from "react"
import Router from "next/router"

const Download = () => {
  const register = () => {
    Router.push("/bumblebee/register")
  }

  return (
  <div id="download" className="bg-grey-ag">
    <div className="bg-overlay50 wrap-container20">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-lg-6 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <h4 className="margintop20 dwn-h2 download-normal">Register for a risk free 14 days free trial. Access to Enterprise Support during the evaluation period.</h4>
            <div className="btn-section dwn-btn single-button">
              <a target="_blank" rel="noopener noreferrer" className="btn-custom free_trial_track" title="Bumblebee Trial" style={{cursor: "pointer"}} onClick={register}>Register - Free Trial</a>
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 1: Download Bumblebee Server ver 5.10</h4>
            <div className="btn-section margin-bottom20 dwn-btn">
              <a target="_blank" rel="noopener noreferrer" href="https://agiletestware-bumblebee.s3-us-west-2.amazonaws.com/downloads/5.10/bumblebee-windows-x64-5.10.exe" className="btn-custom btn-icon bumblebee612_readyapi" title="Bumblebee Server"
                ><i className="fa fa-download"></i>Bumblebee Server -- version: 5.10 (64-bit)</a
              >
              <i className="fa fa-windows" style={{color: "#4a90e2", fontSize: "30px", marginLeft: "10px"}}></i>
            </div>
            <div className="btn-section margin-bottom20 dwn-btn">
              <a target="_blank" rel="noopener noreferrer" href="https://agiletestware-bumblebee.s3-us-west-2.amazonaws.com/downloads/5.10/bumblebee-windows-5.10.exe" className="btn-custom btn-icon bumblebee612_readyapi" title="Bumblebee Server"
                ><i className="fa fa-download"></i>Bumblebee Server -- version: 5.10 (32-bit)</a
              >
              <i className="fa fa-windows" style={{color: "#4a90e2", fontSize: "30px", marginLeft: "10px"}}></i>
            </div>
            <div className="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" rel="noopener noreferrer" href="https://agiletestware-bumblebee.s3-us-west-2.amazonaws.com/downloads/5.10/bumblebee-unix-5.10.tar.gz" className="btn-custom btn-icon bumblebee612_readyapi" title="Bumblebee Server"
                ><i className="fa fa-download"></i>Bumblebee Server for Linux -- version 5.10</a
              >
              <img src="/images/bumblebee/linux-logo_preview.png" className="linux-logo" />
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2A: Install Jenkins plugin from Jenkins update center</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/jenkins_logo.png" style={{width: "40px", marginRight: "10px"}} />
              <a target="_blank" rel="noopener noreferrer" href="https://plugins.jenkins.io/bumblebee" className="btn-custom btn-icon bumblebee612_readyapi" title="Bumblebee for Jenkins"><i className="fa fa-download"></i>Jenkins update center</a>
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2B: Install Bamboo add-on from atlassian market place</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/bamboo-logo_preview.png" style={{marginLeft: "-22px"}} />
              <a target="_blank" rel="noopener noreferrer" href="https://marketplace.atlassian.com/plugins/com.agiletestware.bumblebee-bamboo-plugin/server/overview" className="btn-custom btn-icon bumblebee612_readyapi" title="Bumblebee for Bamboo"
                ><i className="fa fa-download"></i>Bamboo Add-on</a
              >
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2C: Install TeamCity plugin</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/teamcity-logo_preview.png" className="teamcity-logo" />
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://s3-us-west-2.amazonaws.com/public.maven.agiletestware.com/release/com/agiletestware/bumblebee-teamcity-plugin-build/1.6/bumblebee-teamcity-plugin-build-1.6.zip"
                className="btn-custom btn-icon bumblebee612_readyapi"
                title="TeamCity Plugin"
                ><i className="fa fa-download"></i>TeamCity Plugin</a
              >
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2D: Install IBM UrbanCode plugin</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/ibm-logo.png" style={{marginRight: "10px"}} />
              <a target="_blank" rel="noreferrer noopener" href="https://s3-us-west-2.amazonaws.com/agiletestware-bumblebee/downloads/bumblebee-urbancode-plugin-1.0.6ca049a0.zip" className="btn-custom btn-icon bumblebee612_readyapi" title="TeamCity Plugin"
                ><i className="fa fa-download"></i>IBM UrbanCode Plugin</a
              >
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <h4 className="margintop40 dwn-h2">Jenkins User Guide</h4>
            <div className="btn-section dwn-btn single-button">
              <a target="_blank" rel="noreferrer noopener" href="https://bumblebee.agiletestware.com/ci-integration/jenkins" className="btn-custom btn-icon free_trial_track" title="Jenkins Docs"><i className="fa fa-book"></i>Jenkins Docs</a>
            </div>
            <h4 className="margintop40 dwn-h2">Bamboo User Guide</h4>
            <div className="btn-section dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://bumblebee.agiletestware.com/ci-integration/bamboo" className="btn-custom btn-icon free_trial_track" title="Bamboo Docs"><i className="fa fa-book"></i>Bamboo Docs</a>
            </div>
            <h4 className="margintop40 dwn-h2">TeamCity User Guide</h4>
            <div className="btn-section dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://bumblebee.agiletestware.com/ci-integration/teamcity" className="btn-custom btn-icon free_trial_track" title="TeamCity Docs"><i className="fa fa-book"></i>TeamCity Docs</a>
            </div>
            <h4 className="margintop40 dwn-h2">IBM Urban Code User Guide</h4>
            <div className="btn-section dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://bumblebee.agiletestware.com/ci-integration/urbancode" className="btn-custom btn-icon free_trial_track" title="Urban Code Docs"><i className="fa fa-book"></i>Urban Code Docs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Download