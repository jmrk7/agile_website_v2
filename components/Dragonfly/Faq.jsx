import React from "react"

const Faq = () => {
  return (
    <div id="faq" className="wrap-container400 grid-dragonfly">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-lg-5 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <div className="margin-bottom40">
              <div className="panel panel-default row-eq-height">
                <div className="panel-heading">
                  <h3 className="panel-title">How many licenses do I need?</h3>
                </div>
                <div className="panel-body">
                  Dragonfly Standard license can be used for up to 5
                  users/machines. Dragonfly Enterprise License has no
                  restrictions and the same license can be can be used by any
                  number users/machines within the organization.
                </div>
              </div>
              <div className="panel panel-default row-eq-height">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    What versions of ReadyAPI is Dragonfly compatible with?
                  </h3>
                </div>
                <div className="panel-body">
                  Dragonfly works with all versions of ReadyAPI and soapUI. We
                  work very closely with the ReadyAPI team to make sure that
                  Dragonfly is always compatible with all ReadyAPI builds.
                </div>
              </div>
              <div className="panel panel-default row-eq-height">
                <div className="panel-heading">
                  <h3 className="panel-title">How can I place an order?</h3>
                </div>
                <div className="panel-body">
                  We offer a variety of ways to place an order. You can order
                  via credit card, check, or wire transfer. Send us a message
                  about your sales inquiry and we can help you with the process.
                  <b>
                    <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">
                      Contact Sales
                    </a>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">I need a quote. How can I get one?</h3>
              </div>
              <div className="panel-body">
                Simply fill out the contact form and someone from our sales team
                will contact you.{" "}
                <b>
                  <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">
                    Contact Sales
                  </a>
                </b>
              </div>
            </div>
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">
                  What versions of HP ALM is Dragonfly compatible with?
                </h3>
              </div>
              <div className="panel-body">
                Dragonfly supports HP ALM 10, 11, 12, and ALM SAAS. Dragonfly is
                throughly tested with all releases of HP ALM.
              </div>
            </div>
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">
                  I registered online and I still haven&apos;t received my license.
                  Where is my evaluation license?
                </h3>
              </div>
              <div className="panel-body">
                It takes about 24 hours for our team to send an evaluation
                license and a welcome email. Please make sure you have
                registered using your corporate email address.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
