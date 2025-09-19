import React from 'react';
import './App.css';
import { FaRobot } from "react-icons/fa";
import { SiEspressif } from "react-icons/si";
import { GiSolderingIron } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Hi, I'm Gadigeppa Tegginamani </h1>
          <p className="subtitle">
            Passionate Electronics & Communication Engineer specializing in IoT systems, embedded development, and hackathon innovations.
            I create real-time monitoring solutions, interactive web applications, and compete in coding challenges.
          </p>
          <p className="intro-details">
            🌦️ Built weather monitoring systems with ESP32-C3 and WebSocket streaming<br />
            🎮 Developed interactive web games with JavaScript<br />
            🏆 Active hackathon participant with innovative problem-solving approach<br />
            ⚡ Experienced in C++, embedded systems, HTML/CSS, JavaScript and IoT protocols<br />
          </p>

          {/* Resume Download Button */}
          <div className="buttons">
            <a
              href="/resume.pdf"
              className="btn-primary"
              download
            >
              📄 Download Resume
            </a>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Projects 🚀</h2>
            <p className="section-subtitle">Innovative solutions built with passion and precision</p>
          </div>

          <div className="projects-grid">
            <div className="project-card floating">
              <div className="project-header">
                <h3>🌦️ EnviroLogiX</h3>
                <span className="project-tag">IoT • ESP32</span>
              </div>
              <p>
                Real-time weather monitoring system using ESP32-C3 with DHT22, soil moisture sensor, and LDR.
                Features WebSocket-based live data transmission and responsive dashboard with Chart.js visualization.
              </p>
              <div className="project-links">
                <a href="https://github.com/Pscyho/EnviroLogiX-" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>

            <div className="project-card floating" style={{ animationDelay: '0.4s' }}>
              <div className="project-header">
                <h3>HackVyuha2025</h3>
                <span className="project-tag">Hackathon •Innovation</span>
              </div>
              <p>
                Hackathon project developed for HackVyuha2025 competition. Innovative solution showcasing problem-solving
                skills and technical creativity under time constraints.
              </p>
              <div className="project-links">
                <a href="https://github.com/Pscyho/Hackvyuha2025_1191" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>

            <div className="project-card floating" style={{ animationDelay: '0.2s' }}>
              <div className="project-header">
                <h3>🎮 DeadGame</h3>
                <span className="project-tag">JavaScript • Game</span>
              </div>
              <p>
                Interactive web-based game built with JavaScript and HTML. Features engaging gameplay mechanics and
                responsive design for seamless user experience across devices.
              </p>
              <div className="project-links">
                <a href="https://github.com/Pscyho" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Electronics Icons Background */}
        <div className="bg-animation">
          <FaRobot className="electronics-icon icon-robot" />
          <SiEspressif className="electronics-icon icon-esp" />
          <GiSolderingIron className="electronics-icon icon-solder" />
        </div>
      </section>

      {/* Lab Programs Section */}
      <section className="labs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Lab Programs 💻</h2>
            <p className="section-subtitle">7th sem lab programs</p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>ME & AT</h3>
                <span className="project-tag">BEC701</span>
              </div>
              <p>Microwave and Antenna lab program in Matlab</p>
              <div className="project-links">
                <a href="https://github.com/Pscyho/ME-AT" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>CNP</h3>
                <span className="project-tag">BEC702</span>
              </div>
              <p>Computer Network Protocols lab program C </p>
              <div className="project-links">
                <a href="https://github.com/Pscyho/Computer_Networking" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Let's Connect 🚀</h2>
          <div className="social-links">
            <a href="mailto:gadigeppategginamani8@gmail.com" className="social-btn">
              <i className="fas fa-envelope"></i> Mail
            </a>
            <a href="http://linkedin.com/in/gadigeppa-tegginamani-493b45272/" className="social-btn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Pscyho" className="social-btn">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.reddit.com/u/gadigeppa31/s/BcW3mgAVwb" className="social-btn">
              <i className="fab fa-reddit"></i> Reddit
            </a>
            
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;