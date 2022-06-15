import React from "react"

const Download = () => {
  return (
  <div id="download" className="bg-grey-ag">
    <div className="bg-overlay50 wrap-container20">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-lg-6 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <h4 className="margintop20 dwn-h2 download-normal">Register for a risk free 14 days free trial. Access to Enterprise Support during the evaluation period.</h4>
            <div className="btn-section dwn-btn single-button">
              <a target="_blank" rel="noreferrer noopener" className="btn-custom free_trial_track" title="Pangolin Trial" style={{cursor: "pointer"}} href="https://railflow.io/register/">Register - Free Trial</a>
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 1: Download Pangolin Server ver: 3.4</h4>
            <div className="btn-section margin-bottom20 dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://s3-us-west-2.amazonaws.com/agiletestware-pangolin/3.5/pangolin-windows-x64-3.5.exe" className="btn-custom btn-icon pangolin612_readyapi" title="Pangolin Server"
                ><i className="fa fa-download"></i>Pangolin Server ver: 3.5</a
              >
              <i className="fa fa-windows" style={{color: "#4a90e2", fontSize: "30px", marginLeft: "10px"}}></i>
            </div>
            <div className="btn-section margin-bottom40 dwn-btn">
              <a href="https://s3-us-west-2.amazonaws.com/agiletestware-pangolin/3.5/pangolin-unix-3.5.tar.gz" className="btn-custom btn-icon pangolin612_readyapi" title="Pangolin Server for Linux"
                ><i className="fa fa-download"></i>Pangolin Server ver: 3.5</a
              >
              <img src="/images/bumblebee/linux-logo_preview.png" className="linux-logo" />
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2A: Install Jenkins plugin</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/jenkins_logo.png" style={{width: "40px", marginRight: "10px"}} />
              <a target="_blank" rel="noreferrer noopener" href="https://plugins.jenkins.io/pangolin-testrail-connector" className="btn-custom btn-icon pangolin612_readyapi" title="Pangolin Jenkins"><i className="fa fa-download"></i>Jenkins Update Center</a>
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2B: Install Bamboo add-on from atlassian market place</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/bamboo-logo_preview.png" style={{marginLeft: "-22px"}} />
              <a
                target="_blank"
                href="https://s3-us-west-2.amazonaws.com/public.maven.agiletestware.com/release/com/agiletestware/bamboo/pangolin-testrail-connector/2.5/pangolin-testrail-connector-2.5.jar"
                className="btn-custom btn-icon pangolin612_readyapi"
                title="Pangolin Bamboo"
                rel="noreferrer noopener"
                ><i className="fa fa-download"></i>Bamboo Add-on</a
              >
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2C: Install TeamCity plugin</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/teamcity-logo_preview.png" className="teamcity-logo" />
              <a
                target="_blank"
                href="https://nexus.agiletestware.com/repository/maven-public/com/agiletestware/teamcity/pangolin-testrail-connector-build/2.6/pangolin-testrail-connector-build-2.6.zip"
                className="btn-custom btn-icon pangolin612_readyapi"
                title="Pangolin TeamCity"
                rel="noreferrer noopener"
                ><i className="fa fa-download"></i>TeamCity Plugin</a
              >
            </div>
            <h4 className="margintop40 dwn-h2 download-normal">Step 2D: Install IBM UrbanCode plugin</h4>
            <div className="btn-section margin-bottom40 dwn-btn button-center">
              <img src="/images/ibm-logo.png" style={{marginRight: "10px"}} />
              <a target="_blank" rel="noreferrer noopener" href="https://s3-us-west-2.amazonaws.com/agiletestware-pangolin/2.4/urbancode-pangolin-testrail-connector-2.4.zip" className="btn-custom btn-icon pangolin612_readyapi" title="Pangolin UrbanCode"
                ><i className="fa fa-download"></i>IBM UrbanCode Plugin</a
              >
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <h4 className="margintop40 dwn-h2">Jenkins User Guide</h4>
            <div className="btn-section dwn-btn single-button">
              <a target="_blank" rel="noreferrer noopener" href="https://pangolin.agiletestware.com/ci-integration/jenkins/" className="btn-custom btn-icon free_trial_track" title="Jenkins Docs"><i className="fa fa-book"></i>Jenkins Docs</a>
            </div>
            <h4 className="margintop40 dwn-h2">Bamboo User Guide</h4>
            <div className="btn-section dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://pangolin.agiletestware.com/ci-integration/bamboo" className="btn-custom btn-icon free_trial_track" title="Bamboo Docs"><i className="fa fa-book"></i>Bamboo Docs</a>
            </div>
            <h4 className="margintop40 dwn-h2">TeamCity User Guide</h4>
            <div className="btn-section dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://pangolin.agiletestware.com/ci-integration/teamcity" className="btn-custom btn-icon free_trial_track" title="TeamCity Docs"><i className="fa fa-book"></i>TeamCity Docs</a>
            </div>
            <h4 className="margintop40 dwn-h2">IBM Urban Code User Guide</h4>
            <div className="btn-section dwn-btn">
              <a target="_blank" rel="noreferrer noopener" href="https://pangolin.agiletestware.com/ci-integration/urbancode" className="btn-custom btn-icon free_trial_track" title="Urban Code Docs"><i className="fa fa-book"></i>Urban Code Docs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Download;