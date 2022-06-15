import React from "react"
import Router from "next/router"
import Link from "next/link"

const Header = () => {
  const goHome = () => {
    Router.push("/")
  }

  return (
  <header id="header">    
    <nav id="navigation" className="navbar">      
      <div className="container">        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse-1">
            <span className="sr-only">Menu</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand">
            <a href="#header">
              <img src="/images/pangolin/pangolin_logo.png" alt="Agiletestware" className="hidden-xs" />
              <img src="/images/pangolin/pangolin_logo.png" alt="Agiletestware" className="visible-xs" />
            </a>
          </div>          
          <div className="navbar-brand pull-right visible-xs" style={{paddingRight: "16px"}}>
            <a onClick={goHome}><i className="fa fa-home" style={{fontSize: "32px", color: "#fff", cursor: "pointer"}}/></a>
          </div>          
        </div>
        
        <div className="collapse navbar-collapse" id="menu-collapse-1">
          <ul className="nav navbar-nav navbar-right" style={{overflow: "visible"}}>
            <li className="hidden-xs">
              <a onClick={goHome}><i className="fa fa-home" style={{fontSize: "20px", cursor: "pointer"}}/></a>
            </li>
            <li><a href="#features7" className="smooth-scroll">Features</a></li>
            <li><a href="http://pangolin.agiletestware.com/" target="_blank" rel="noreferrer noopener">Docs</a></li>
            <li><a href="#pricing" className="smooth-scroll">Pricing</a></li>
            <li><a href="#download" className="smooth-scroll">Download</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Support <span className="caret"></span></a>
              <ul className="dropdown-menu" style={{marginTop: "-5px"}}>
                <li><a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2" target="_blank" rel="noreferrer noopener">Contact Us</a></li>
                <li><a href="/partners">Partners</a></li>
              </ul>
            </li>
            <li className="trial-cta"><a href="https://railflow.io/register/" className="free_trial_track" style={{cursor: "pointer"}} title="Pangolin Trial">Free Trial</a></li>
          </ul>
        </div>
      </div>      
    </nav>
        
    <div className="header-content">
      <div className="container">
        <div className="row header-text-pangolin">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-6">
            <div className="margin-top40 margin-bottom40">
              <div className="">
                <h1 className="agh1">Continuous Delivery with TestRail and Jenkins, Atlassian Bamboo, Teamcity, or IBM Urban Code</h1>
              </div>
              <div className="btn-section">
                <a className="btn-custom btn-freetrial free_trial_track" style={{cursor: "pointer"}} title="Pangolin Trial" href="https://railflow.io/register/"> Free Trial</a>
                <a className="btn-custom btn-dwn btn-download" href="#download">Download</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 headerimage1"></div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;
