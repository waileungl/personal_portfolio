import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        Avon str. 22, NYC, USA
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">+77 022 155 02 02</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-facebook-rect" />
                    <span>
                      <a href="https://www.facebook.com">@facebookNick</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={(e) => onChange(e)}
                            value={name}
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={(e) => onChange(e)}
                            value={email}
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <input className="a" type="submit" value="Submit Message" />
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
