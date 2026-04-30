import React from "react";
import "./Resume.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import { useRef } from "react";

export default function Resume() {
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    // This will open the print dialog which can be saved as PDF
    window.print();
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="resume-container" ref={resumeRef}>
        <div className="resume-header-section">
          <div className="resume-dp-container">
            <img
              src={require("../../assets/images/profile-dp.jpg")}
              alt="Rizwan Karim"
              className="resume-dp"
            />
          </div>
          <h1 className="resume-name">Rizwan Karim</h1>
          <p className="resume-title">
            Quality Assurance Engineer | Web Developer | AI Developer
          </p>
          <div className="resume-contact-info">
            <span>
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              i221370@nu.edu.pk
            </span>
            <span>
              <span role="img" aria-label="phone">
                📱
              </span>{" "}
              +92 3129797925
            </span>
            <span>
              <span role="img" aria-label="link">
                🔗
              </span>{" "}
              github.com/shahzadarksher
            </span>
            <span>
              <span role="img" aria-label="briefcase">
                💼
              </span>{" "}
              linkedin.com/in/shahzadarksher
            </span>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <div className="resume-content">
            <p>
              Motivated Quality Assurance Engineer and Full Stack Developer with
              expertise in manual testing, automation, web development, and
              artificial intelligence. Passionate about ensuring software
              quality, building responsive web applications, and implementing AI
              solutions. Currently pursuing studies at FAST-NUCES Islamabad
              (2022-2026) with a strong foundation in computer science and
              practical development skills.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">
            <span role="img" aria-label="target">
              🎯
            </span>{" "}
            Core Competencies
          </h2>
          <div className="resume-skills-grid">
            <div className="skill-category">
              <h3>Quality Assurance & Testing</h3>
              <ul>
                <li>Manual Testing & Test Case Design</li>
                <li>Automated Testing (Selenium)</li>
                <li>Bug Tracking & Reporting</li>
                <li>Test Management Tools</li>
                <li>API Testing</li>
                <li>Performance Testing Basics</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web & AI Development</h3>
              <ul>
                <li>Python & JavaScript</li>
                <li>React.js & Node.js</li>
                <li>Machine Learning Basics</li>
                <li>Deep Learning (TensorFlow, PyTorch)</li>
                <li>REST API Development</li>
                <li>Database Management</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript & TypeScript</li>
                <li>Responsive Web Design</li>
                <li>Git & GitHub</li>
                <li>Bootstrap & Tailwind CSS</li>
                <li>Web Accessibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">
            <span role="img" aria-label="briefcase">
              💼
            </span>{" "}
            Education
          </h2>
          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>Bachelor of Science in Computer Science</h3>
              <span className="exp-date">2022 - 2026</span>
            </div>
            <p className="exp-company">
              FAST-NUCES (National University of Computer and Emerging Sciences)
              - Islamabad
            </p>
            <ul className="exp-description">
              <li>
                Passionate coder who loves to learn new technologies and solve
                complex problems
              </li>
              <li>
                Experienced in web development, quality assurance, and
                artificial intelligence
              </li>
              <li>
                Always eager to take on new challenges and contribute to
                innovative projects
              </li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">
            <span role="img" aria-label="projects">
              🚀
            </span>{" "}
            Key Projects
          </h2>

          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>E-Commerce Web Application</h3>
              <span className="exp-date">2024</span>
            </div>
            <ul className="exp-description">
              <li>
                Developed full-stack web application using React and Node.js
              </li>
              <li>Implemented automated testing for QA and bug detection</li>
              <li>Created responsive UI with modern CSS frameworks</li>
            </ul>
          </div>

          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>AI-Powered Chatbot</h3>
              <span className="exp-date">2024</span>
            </div>
            <ul className="exp-description">
              <li>Built conversational AI using TensorFlow and Python</li>
              <li>Trained neural networks on custom datasets</li>
              <li>Deployed web interface for chatbot interaction</li>
            </ul>
          </div>

          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>Quality Assurance & Testing Framework</h3>
              <span className="exp-date">2023-2024</span>
            </div>
            <ul className="exp-description">
              <li>Designed comprehensive test cases and documentation</li>
              <li>Implemented Selenium-based automation testing</li>
              <li>
                Identified and reported critical bugs with detailed analysis
              </li>
            </ul>
          </div>
        </div>

        <div className="resume-footer">
          <button className="download-btn" onClick={handleDownloadPDF}>
            <span role="img" aria-label="download">
              📥
            </span>{" "}
            Download Resume (PDF)
          </button>
          <a
            href="https://github.com/shahzadarksher"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <span role="img" aria-label="user">
              👤
            </span>{" "}
            View GitHub Profile
          </a>
        </div>
      </div>
    </Fade>
  );
}
