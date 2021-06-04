import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import Recaptcha from "react-recaptcha";

class Contact extends Component {
  // https://www.youtube.com/watch?v=QrVYLLpoyMw
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.reCaptchaLoaded = this.reCaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      isVerified: false,
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state.isVerified);
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
    } else {
      alert("Please verify that you are a human!");
    }

    // const formData = {};
    // Array.from(e.currentTarget.elements).forEach((field) => {
    //   if (!field.name) return;
    //   formData[field.name] = field.value;
    // });
  }

  reCaptchaLoaded() {
    console.log("recaptcha successfully loaded");
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
                  cols={
                    (window.innerWidth ||
                      document.documentElement.clientWidth ||
                      document.body.clientWidth) > 768
                      ? 60
                      : 35
                  }
                  placeholder="Message"
                  required
                ></textarea>
              </p>
              <div class="recaptchaContainer">
                <Recaptcha
                  sitekey="6LezMxEbAAAAAAfqx_Cy_84zqdVCOQPg2zWUUrO8"
                  render="explicit"
                  onloadCallback={this.reCaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                  size="normal"
                />
              </div>
              <p>
                <button className="submitButton">Send Email</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
