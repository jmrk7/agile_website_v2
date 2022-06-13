import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header id="header">
      <nav id="navigation" className="navbar">
        <div className="container home-header homepagemenu">
          <div className="navbar-header">
            <div className="navbar-brand">
              <Link href="/">
                <img src="/agiletestware_logo.png" alt="Agiletestware" className="homelogo" style={{cursor: "pointer"}} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-content">
        <div className="container home-sections">
          <div className="row text-left home-section">
            <div className="col-sm-6 col-md-6 col-lg-6 home-section-block">
              <div data-animation="animation-fade-in-left" className="affa-testimonial animation animated animation-fade-in-left">
                <div className="testimonial-text">
                  <div className="testimonialheight">
                    <img alt="Dragonfly Agiletestware" className="margin-bottom15 imgdragonfly" src="/images/dragonfly_logo_home.png" />
                    <p>ReadyAPI and soapUI plugin for HP ALM</p>
                    <br />
                    <p>
                      Dragonfly plugin allows engineering teams to easily export
                      ReadyAPI tests and test results into HP ALM and
                      automatically create test plans, test cases, design steps,
                      Test Labs, Test Sets, and Test Runs
                    </p>
                    <br />
                  </div>
                  <div className="btn-section">
                    <div className="btn-custom btn-sucess btn-dragonfly">
                      <a href="/dragonfly">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 home-section-block">
              <div data-animation="animation-fade-in-right" className="affa-testimonial animation animated animation-fade-in-right">
                <div className="testimonial-text">
                  <div className="testimonialheight">
                    <img alt="Bumblebee Agiletestware" className="margin-bottom15 imgbumblebee" src="/images/Bumblebeelogo.png" />
                    <p>
                      HP ALM and HP Performance Center DevOps enablement
                      platform
                    </p>
                    <br />
                    <p>
                      Integrate Jenkins, Bamboo, TeamCity, IBM Urban Code,
                      Selenium, Appium, JUnit, TestNG, NUnit, Python, and other
                      tools with HP ALM and HP Performance Center
                    </p>
                    <br />
                  </div>
                  <div className="btn-section">
                    <div className="btn-custom btn-sucess btn-bumblebee">
                      <a href="/bumblebee">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 home-section-block">
              <div
                data-animation="animation-fade-in-right"
                className="affa-testimonial animation animated animation-fade-in-right"
              >
                <div className="testimonial-text">
                  <div className="testimonialheight">
                    <img alt="Firefly Agiletestware" className="margin-bottom15 imgfirefly" src="/images/firefly_banner_black.png" />
                    <p>ReadyAPI plugin for TestRail TCM</p>
                    <br />
                    <p>
                      Firefly plugin allows engineering teams to easily export
                      ReadyAPI tests and test results into TestRail and
                      automatically create test cases, test suites, milestones,
                      test runs, and test plans
                    </p>
                    <br />
                  </div>
                  <div className="btn-section">
                    <div className="btn-custom btn-sucess btn-firefly">
                      <a href="/firefly">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 home-section-block">
              <div
                data-animation="animation-fade-in-right"
                className="affa-testimonial animation animated animation-fade-in-right"
              >
                <div className="testimonial-text product-listing">
                  <div className="testimonialheight">
                    <img alt="Pangolin Agiletestware" className="margin-bottom15 imgfirefly" src="/images/pangolin_logo.png" />
                    <span className="corner-ribbon-tag corner-ribbon-tag-new pangolinribbontag">
                      New
                    </span>
                    <p>
                      CI application plugins, and testing framework solutions
                      for TestRail
                    </p>
                    <br />
                    <p>
                      Integrate Jenkins, Bamboo, TeamCity, IBM Urban Code,
                      Selenium, Appium, JUnit, TestNG, NUnit, and Python with
                      TestRail
                    </p>
                    <br />
                    <br />
                  </div>
                  <div className="btn-section">
                    <div className="btn-custom btn-sucess btn-pangolin">
                      <a href="/pangolin">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
