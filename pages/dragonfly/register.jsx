import React from "react"

import FormContainer from "/components/form-container"
import SignUpHero from "/components/Dragonfly/SignUpHero"
import SignUpForm from "/components/Dragonfly/SignUpForm"

import classnames from "classnames/bind"
import * as styles from "./register.module.scss"

const cx = classnames.bind(styles);

const Register = () => {
  return (
    <div style={{ backgroundColor: "#fffff" }}>
      <div className={cx("signUpWrapper")}>
        <SignUpHero />
        <FormContainer>
          <SignUpForm />
        </FormContainer>
      </div>
    </div>
  );
};

export default Register;
