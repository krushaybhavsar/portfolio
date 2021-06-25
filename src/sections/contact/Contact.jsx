import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import Recaptcha from "react-recaptcha";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.reCaptchaLoaded = this.reCaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.disableIsSent = this.disableIsSent.bind(this);
    this.state = {
      isVerified: false,
      isSent: false,
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();
    if (this.state.isVerified) {
      emailjs
        .sendForm(
          "service_7o3l0hq",
          "portfolio_email_template",
          e.target,
          "user_XvdZN1t0s9N6EJ0D07jFO"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      this.setState({
        isSent: true,
      });
    } else {
      alert("Please verify that you are a human!");
    }
  }

  disableIsSent() {
    this.setState({ isSent: false });
  }

  reCaptchaLoaded() {
    console.log("Recaptcha successfully Loaded");
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }

  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <div className="formContainer">
          <div className="formInner">
            <form method="post" onSubmit={this.handleOnSubmit}>
              <div className="formTopWrapper">
                <p className="topP">
                  <input
                    className="formInput"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </p>
                <p className="topP">
                  <input
                    className="formInput"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  ></input>
                </p>
              </div>
              <p>
                <input
                  className="formInput"
                  type="message"
                  name="subject"
                  placeholder="Subject"
                  required
                ></input>
              </p>
              <p>
                <textarea
                  className="formTextArea"
                  type="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </p>
              <div class="recaptchaContainer">
                <Recaptcha
                  //============= localhost =============
                  // sitekey="6Ld3GxEbAAAAAKZQfuNA5oen4BVC3BbOweVro7cd"
                  //============== netlify ==============
                  sitekey="6LezMxEbAAAAAAfqx_Cy_84zqdVCOQPg2zWUUrO8"
                  render="explicit"
                  onloadCallback={this.reCaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                  size="normal"
                />
              </div>
              <p className={`sentText-${this.state.isSent}`}>
                Your email has been sent! I'll be sure to reply back soon.
              </p>
              <p>
                <button className="submitButton" id="submitButton">
                  Send Email
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
