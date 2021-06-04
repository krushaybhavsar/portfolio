import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  // https://www.youtube.com/watch?v=QrVYLLpoyMw

  async function handleOnSubmit(e) {
    e.preventDefault();

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
  }

  return (
    <div className="contact" id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <div className="formContainer">
        <div className="formInner">
          <form method="post" onSubmit={handleOnSubmit}>
            <div className="formTopWrapper">
              <p className="topP">
                <label className="formLabel" htmlFor="name">
                  Name
                </label>
                <input className="formInput" type="text" name="name"></input>
              </p>
              <p className="topP">
                <label className="formLabel" htmlFor="email">
                  Email Adresss
                </label>
                <input className="formInput" type="email" name="email"></input>
              </p>
            </div>
            <p>
              <label className="formLabel" htmlFor="message">
                Subject
              </label>
              <input
                className="formInput"
                type="message"
                name="subject"
              ></input>
            </p>
            <p>
              <label className="formLabel" htmlFor="message">
                Message
              </label>
              <textarea
                className="formTextArea"
                type="message"
                name="message"
                rows="4"
                cols="70"
              ></textarea>
            </p>
            <p>
              <button className="submitButton">Send Email</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
