import React from "react"

import FormContainer from "/components/form-container"
import Header from "/components/Bumblebee/Header_Register"
import SignUpHero from "/components/Bumblebee/SignUpHero"
import SignUpForm from "/components/Bumblebee/SignUpForm"

import classnames from "classnames/bind"
import * as styles from "./register.module.scss"

const cx = classnames.bind(styles);

const Register = () => {
  return (
    <div style={{backgroundColor: "#fffff"}}>
      <div className="agiletestware_body">
        <Header />
      </div> 
      <div className={cx('signUpWrapper')}>
        <SignUpHero />
        <FormContainer>
          <SignUpForm />
        </FormContainer>
      </div>
    </div>
  )
};

export default Register;
