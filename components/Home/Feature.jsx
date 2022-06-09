import React, { useEffect } from "react";

const Feature = () => {
  useEffect(() => {
    // if (typeof owlCarousel === "function") {
    //   $(".owl-carousel").owlCarousel({
    //     items: 1,
    //     itemsDesktop: [1000, 2],
    //     itemsDesktopSmall: [990, 1],
    //     itemsTablet: [768, 1],
    //     pagination: true,
    //     navigation: false,
    //     navigationText: ["", ""],
    //     slideSpeed: 1000,
    //     autoPlay: true,
    //   });
      // $("#testimonial-slider").trigger("play.owl.autoplay", [1000]);
    // }
  }, []);

  return (
    <div id="features" className="wrap-container8040">
      <div className="container">
        <div className="row head-images text-center animation animated animation-fade-in-up">
          <div className="margin-bottom40">
            <div className="text-center">
              <h2 className="home-cmp">
                Our products are used by <span>over 200 great companies</span>{" "}
                around the world
              </h2>
            </div>
          </div>
          <div className="row margin-bottom40">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="user-avatar.jpg" alt="user avatar" />
                </div>
                <p className="description">
                  &quot;We started using Dragonfly from Agiletestware since 2013 and
                  it&apos;s been a great tool to export SoapUI/ReadyAPI tests results
                  to HP-ALM Quality Center. But more important is their customer
                  support that goes above and beyond to provide a flawless
                  service and tool integration.&quot;
                </p>
                <h3 className="title">Sebastian Schrader</h3>
                <small className="post">- Interval International</small>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src="user-avatar.jpg" alt="user avatar" />
                </div>
                <p className="description">
                  &quot;We started using Dragonfly from Agiletestware since 2013 and
                  it&apos;s been a great tool to export SoapUI/ReadyAPI tests results
                  to HP-ALM Quality Center. But more important is their customer
                  support that goes above and beyond to provide a flawless
                  service and tool integration.&quot;
                </p>
                <h3 className="title">Sebastian Schrader</h3>
                <small className="post">- Interval International</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row head-images-ag-sp six-columns">
          <div className="margin-bottom20 image-div-sp">
            <img src="HPE.png" alt="HPE" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="Air_France.jpg" alt="airfrance" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="FedEx-Logo.png" alt="fedex" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="intel-logo.png" alt="Intel" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="kmdlogosvgsvg.svg" alt="KMD" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="mckesson.jpg" alt="mckesson" />
          </div>
        </div>
        <div className="row head-images-ag-sp six-columns">
          <div className="margin-bottom20 image-div-sp">
            <img src="barclays.png" alt="barclays" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="logo-visa.png" alt="visa" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="lufthansa.png" alt="lufthansa" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="logo-accenture.png" alt="accenture" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="Fiserv.png" alt="Fiserv" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="Maersk_Logo.svg.png" alt="Maersk" />
          </div>
        </div>
        <div className="row head-images-ag-sp six-columns margin-bottom40">
          <div className="margin-bottom20 image-div-sp">
            <img src="telenor.png" alt="telenor" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="telus.png" alt="telus" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="Vodaphone.png" alt="Vodaphone" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="Amgen.jpg" alt="Amgen" />
          </div>
          <div className="margin-bottom20 image-div-sp">
            <img src="verizon.jpg" alt="verizon" />
          </div>
          <div className="margin-bottom20 image-div-sp image-div-sp-last">
            200+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
