import React from 'react'

const Faq = () => {
  return (
  <div id="faq" className="wrap-container400">
    <div className="container">
      <div className="row row-eq-height">
        <div className="col-lg-5 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom40">
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">How many licenses do I need?</h3>
              </div>
              <div className="panel-body">
                For organizations with 5 or less users/machines, and processing less than 500 tests/day, we recommend <b>Bumblebee Basic Edition</b>. <br /><br />For organizations with large number of users and test processing needs, we
                recommend <b>Bumblebee Enterprise Edition</b>. Bumblebee Enterprise has no useage restrictions.
              </div>
            </div>
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">I need a quote. How can I get one?</h3>
              </div>
              <div className="panel-body">Send us a <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">quote request</a> via our <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2"> contact page</a>. Our team will send a quote within a few hours.</div>
            </div>
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">How can I place an order?</h3>
              </div>
              <div className="panel-body">
                The invoice can be paid in a variety of ways. <br />
                1. Credit Card online<br />
                2. Wire transfer<br />
                3. Check by mail<br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-1">
          <div className="panel panel-default row-eq-height">
            <div className="panel-heading">
              <h3 className="panel-title">What versions of HP ALM is Bumblebee compatible with?</h3>
            </div>
            <div className="panel-body">Bumblebee supports HP ALM 10, 11, 12, and ALM SAAS. Bumblebee is throughly tested with all releases of HP ALM.</div>
          </div>
          <div className="panel panel-default row-eq-height">
            <div className="panel-heading">
              <h3 className="panel-title">What versions of Jenkins, Bamboo, TeamCity, and IBM UrbanCode is Bumblebee compatible with?</h3>
            </div>
            <div className="panel-body">
              Bumblebee is compatible with the following versions <br />
              <b>Jenkins:</b> Jenkins 1.x LTS, Jenkins 2.x LTS<br />
              <b>Bamboo:</b> Bamboo 5.10.x and higher<br />
              <b>TeamCity</b> TeamCity 9.x and higher<br />
              <b>IBM Urban Code:</b> 6.x and higher<br />
            </div>
          </div>
          <div className="panel panel-default row-eq-height">
            <div className="panel-heading">
              <h3 className="panel-title">I registered online and I still haven&apos;t received my license. Where is my evaluation license?</h3>
            </div>
            <div className="panel-body">It takes about 24 hours for our team to send an evaluation license and a welcome email. Please make sure you have registered using your corporate email address.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Faq;