import React, { useRef, useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import emailjs from "emailjs-com";
import MessageBox from "../../components/MessageBox";
import { resume } from "../../data";

function clearForm() {
    var form = document.getElementById("frmAbout");

    // Loop through all form elements and reset their values
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        // Check if the element is an input, select, or textarea
        if (element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA") {
            element.value = "";
        }
    }
}

const Contact = () => {
  const form = useRef();
  
  const [isMessageBoxOpen, setMessageBoxOpen] = useState(false);
  const [messageValue, setMessageValue] = useState('');

  const openMessageBox = (messageValue) => {
    setMessageValue(messageValue);
    setMessageBoxOpen(true);
  };

  const closeMessageBox = () => {
    setMessageBoxOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();    

    emailjs
      .sendForm(
        "service_vxx10vs",
        "template_iks98l1",
        form.current,
        "JlRSuaciuEINcaMDg"
      )
      .then(
        (result) => {
          console.log(result.text, result.status);
          clearForm();
          openMessageBox("Email sent success");
          //alert("Email sent success");
        },
        (error) => {
          console.log(error.text, error.status);
          openMessageBox("Email sent failed");
          //alert("Email sent failed");
        }
      );
  };



  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <div className="contact__title">Don't be Shy !</div>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or oppotunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">dev.abdaziz@outlook.com</h4>
              </div>
            </div>

            {/* <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+62 856 1010 569</h4>
              </div>
            </div> */}
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/fb.abdaziz"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/abdaziznet"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>

            <a
              href="https://youtube.com/@abdaziznet"
              className="contact__social-link"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/in/abdaziznet"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/abdaziznet"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@abdaziznet"
              className="contact__social-link"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <form id="frmAbout" className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="from_name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="user_email"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
            ></textarea>
          </div>

          <button type="submit" value="Send" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
        <MessageBox
          isOpen={isMessageBoxOpen}
          onClose={closeMessageBox}
          title="Message Box"
          message={messageValue}
        />
      </div>
    </section>
  );
};

export default Contact;
