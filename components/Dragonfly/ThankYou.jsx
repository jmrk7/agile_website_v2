import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import Image from "next/image";

import * as styles from "./ThankYou.module.scss";

import LayoutSectionContainer from "/components/Home/Layout.jsx";

import DocsImage from '/public/doc.png';
import DogImage from '/public/giphy-dog.webp';

const cx = classnames.bind(styles);

const ThankYou = () => {

  return (
    <section id="thank-you" className={cx("thankYou")}>
      <LayoutSectionContainer>
        <div className={cx("thankYou_sectionContainer")}>
          <h1 className={cx("thankYou_title")}>
            Thank you for signing up with Railflow.
          </h1>
          <p className={cx("thankYou_text")}>
            We have emailed you Railflow trial license details. You can also see
            them on this page. If you don&lsquo;t see the trial email, please check
            your spam folder.
          </p>
          <p className={cx("thankYou_text")}>
            To contact the our customer support team, simply reply to our email,
            talk to us via the website chatbot (real humans), or contact us via
            our &nbsp;
            <a
              rel="noopener noreferrer"
              href="https://railflow.atlassian.net/servicedesk/customer/portal/1"
              target="_blank"
            >
              support portal
            </a>
            .
          </p>          
          <div className={cx("thankYou_linkitem")}>
            <Image src={DocsImage} alt="download" />
            <a
              rel="noopener noreferrer"
              href="https://docs.railflow.io/docs/intro"
              target="_blank"
            >
              Railflow User Documentation
            </a>
          </div>
          <p className={cx("thankYou_text")}>
            We hope Railflow helps meet all your TestRail integration needs and
            we can add you as a valued customer. If you need some special
            feature or have a highly customized ask, simply ask our team. We are
            here to help, move very fast, and excited for you to evaluate
            Railflow.
          </p>
          <p className={cx("thankYou_text")}>The Railflow Engineering Team</p>
          <div className={cx("thankYou_image")}>
            <Image src={DogImage} alt="Dog" />
          </div>
        </div>
      </LayoutSectionContainer>
    </section>
  );
};

export default ThankYou;
