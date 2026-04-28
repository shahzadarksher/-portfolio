import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-content">
          <p
            className="footer-text"
            style={{ color: props.theme.secondaryText }}
          >
            Made with <span role="img">❤️</span> by {greeting.title}
          </p>
          <div className="footer-links">
            <a
              href={greeting.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: props.theme.text }}
              className="footer-link"
            >
              GitHub Profile
            </a>
            <span style={{ color: props.theme.secondaryText }}>•</span>
            <a
              href="/"
              style={{ color: props.theme.text }}
              className="footer-link"
            >
              Resume
            </a>
            <span style={{ color: props.theme.secondaryText }}>•</span>
            <a
              href={`mailto:shahzad@example.com`}
              style={{ color: props.theme.text }}
              className="footer-link"
            >
              Contact
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
