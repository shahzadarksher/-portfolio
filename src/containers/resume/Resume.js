import React from "react";
import "./Resume.css";
import { Fade } from "react-reveal";
import { greeting, skills } from "../../portfolio";
import { useRef } from "react";

export default function Resume() {
  const resumeRef = useRef();

  const downloadResume = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // This will open the print dialog which can be saved as PDF
    window.print();
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="resume-container" ref={resumeRef}>
        <div className="resume-header-section">
          <h1 className="resume-name">Shahzad</h1>
          <p className="resume-title">DevOps Engineer & Full Stack Developer</p>
          <div className="resume-contact-info">
            <span>📧 shahzad@example.com</span>
            <span>📱 +91 (Your Phone)</span>
            <span>🔗 github.com/shahzadarksher</span>
            <span>💼 linkedin.com/in/shahzad</span>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <div className="resume-content">
            <p>
              {greeting.subTitle} I began my career as a Full-Stack Developer
              working with Python, Django, and Vue.js, and later transitioned
              into a DevOps Engineer, driven by a strong interest in Linux,
              cloud platforms, and infrastructure automation.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">🎯 Core Competencies</h2>
          <div className="resume-skills-grid">
            <div className="skill-category">
              <h3>DevOps & Infrastructure</h3>
              <ul>
                <li>Docker & Kubernetes</li>
                <li>CI/CD (Jenkins)</li>
                <li>Linux Administration</li>
                <li>Cloud Infrastructure</li>
                <li>Database Clustering (MySQL, PostgreSQL, MongoDB)</li>
                <li>Monitoring (Prometheus, Grafana, Loki)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Python & Django</li>
                <li>Node.js</li>
                <li>Django REST Framework</li>
                <li>Database Design</li>
                <li>API Development</li>
                <li>MQTT Protocol</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>Responsive Design</li>
                <li>Git & Version Control</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">💼 Work Experience</h2>
          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>DevOps Engineer</h3>
              <span className="exp-date">June 2023 - Current</span>
            </div>
            <p className="exp-company">
              Kochar Innovations Private Limited - Amritsar, Punjab
            </p>
            <ul className="exp-description">
              <li>
                Deployment of applications using Docker on production
                infrastructure
              </li>
              <li>
                Configuration of Database clusters for High Availability (MySQL,
                PostgreSQL, MongoDB, Typesense, Clickhouse, Redis, KeyDB)
              </li>
              <li>
                Deployed Keycloak in High Availability mode and integrated SSO
                for applications
              </li>
              <li>Managing Cloud Infrastructure and leading the DevOps team</li>
              <li>Designing System Architecture for High Availability</li>
              <li>Configuration of CI/CD using Jenkins from scratch</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">📚 Internship Experience</h2>

          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>IT Intern</h3>
              <span className="exp-date">June 2022 - May 2023</span>
            </div>
            <p className="exp-company">
              Kochar Infotech Ltd. - Gurgaon, Haryana
            </p>
            <ul className="exp-description">
              <li>
                Configured monitoring infrastructure using Prometheus,
                Alertmanager, Grafana, Loki and Fluentbit
              </li>
              <li>
                Streamlined deployment process by dockerizing applications
              </li>
              <li>Customized Linux distro for organizational needs</li>
              <li>
                Developed admin panel using Python, Django and MQTT for system
                tracking
              </li>
              <li>Configured auto data backup to S3 buckets</li>
            </ul>
          </div>

          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>Full Stack Development Intern</h3>
              <span className="exp-date">June 2021 - Oct 2021</span>
            </div>
            <p className="exp-company">The Code Work</p>
            <ul className="exp-description">
              <li>Worked on Django and Django REST Framework projects</li>
              <li>Developed frontend applications using Vue.js</li>
            </ul>
          </div>

          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>Software Development Intern</h3>
              <span className="exp-date">Feb 2021 - May 2021</span>
            </div>
            <p className="exp-company">All World Gayatri Pariwar</p>
            <ul className="exp-description">
              <li>Worked on Django, JavaScript and PHP projects</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">🤝 Open Source Contributions</h2>
          <div className="resume-experience-item">
            <div className="exp-header">
              <h3>Volunteer Contributor</h3>
              <span className="exp-date">July 2020 - June 2021</span>
            </div>
            <p className="exp-company">Fedora Community Outreach Task Force</p>
            <ul className="exp-description">
              <li>Contributor at Fedora Community</li>
              <li>Maintained open source projects on GitHub</li>
            </ul>
          </div>
        </div>

        <div className="resume-footer">
          <button className="download-btn" onClick={handleDownloadPDF}>
            📥 Download Resume (PDF)
          </button>
          <a
            href="https://github.com/shahzadarksher"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            👤 View GitHub Profile
          </a>
        </div>
      </div>
    </Fade>
  );
}
