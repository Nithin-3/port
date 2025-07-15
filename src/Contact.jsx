import React from "react";
import "./css/contact.css";

function Contact() {
  return (
    <div className="contact container">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Feel free to reach out using the information
        below:
      </p>
      <ul className="contact-list">
        <li>
          <a href="tel:+917639824119" className="contact-item">
            <span className="contact-item-icon">📞</span> Mobile: +91 7639824119
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nithin3dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <span class="contact-item-icon">📧</span> Gmail:
            nithin3dev@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nithin-3"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-item-icon">🌐</span> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nithin03/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-item-icon">🔗</span> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
