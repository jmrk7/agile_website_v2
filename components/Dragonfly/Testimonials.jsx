import React from "react"

const Testimonials = () => {
  return (
    <div id="testimonials" className="wrap-container60 bg-grey-ag">
      <div className="container">
        <div className="">
          <h2 className="head-h2">What Our&apos;s Clients Says</h2>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div id="testimonial-slider" className="owl-carousel" style={{display:"block", opacity: "1"}}>
              <div className="testimonial">
                <div className="content">
                  <p className="description">
                    &quot;We started using Dragonfly from Agiletestware since 2013
                    and it&apos;s been a great tool to export SoapUI/ReadyAPI tests
                    results to HP-ALM Quality Center. But more important is
                    their customer support that goes above and beyond to provide
                    a flawless service and tool integration.&quot;
                  </p>
                </div>
                <div className="testimonial-pic">
                  <img
                    src="/images/user-avatar.jpg"
                    alt="user avatar"
                  />
                </div>
                <div className="testimonial-review">
                  <h3 className="testimonial-title">Sebastian Schrader</h3>
                  <span>Interval International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
