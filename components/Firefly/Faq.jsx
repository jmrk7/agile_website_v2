import React from "react"

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
                Firefly Standard license can be used for upto 5 users/machines. Firefly Enterprise License has no restrictions and the same license can be can be used by any number users/machines within the organization.
              </div>
            </div>
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">What versions of ReadyAPI is Firefly compatible with?</h3>
              </div>
              <div className="panel-body">Firefly works with all versions of ReadyAPI. We work very closely with the ReadyAPI team to make sure that Firefly is always compatible with all ReadyAPI builds.</div>
            </div>
            <div className="panel panel-default row-eq-height">
              <div className="panel-heading">
                <h3 className="panel-title">How can I place an order?</h3>
              </div>
              <div className="panel-body">
                We offer a variety of ways to place an order. You can order via credit card, check, or wire transfer.
                <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">Send us a message </a>about your sales inquiry and we can help you with the process.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
          <div className="panel panel-default row-eq-height">
            <div className="panel-heading">
              <h3 className="panel-title">I need a quote. How can I get one?</h3>
            </div>
            <div className="panel-body">Simply fill out the <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">contact form</a> and someone from our sales team will contact you.</div>
          </div>
          <div className="panel panel-default row-eq-height">
            <div className="panel-heading">
              <h3 className="panel-title">What versions of HP ALM is Firefly compatible with?</h3>
            </div>
            <div className="panel-body">Firefly supports both TestRail Cloud and TestRail On Premise. Firefly support all LTS versions of TestRail.</div>
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
