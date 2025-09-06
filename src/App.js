import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Hi, I'm Gadigeppa Tegginamani 👋</h1>
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
          <div className="buttons">
            <button className="btn-primary" onClick={() => document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>  <button className="btn-secondary" onClick={() => document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>

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
              <p>Real-time weather monitoring system using ESP32-C3 with DHT22, soil moisture sensor, and LDR. Features WebSocket-based live data transmission and responsive dashboard with Chart.js visualization.</p>
              <div className="project-links">
                <a href="https://github.com/Pscyho/EnviroLogiX-" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>

           

            <div className="project-card floating" style={{ animationDelay: '0.4s' }}>
              <div className="project-header">
                <h3>🏆 HackVyuha2025</h3>
                <span className="project-tag">Hackathon • Innovation</span>
              </div>
              <p>Hackathon project developed for HackVyuha2025 competition. Innovative solution showcasing problem-solving skills and technical creativity under time constraints.</p>
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
              <p>Interactive web-based game built with JavaScript and HTML. Features engaging gameplay mechanics and responsive design for seamless user experience across devices.</p>
              <div className="project-links">
                <a href="https://github.com/Pscyho/deadgame" className="project-btn">
                  <span>View Code</span>
                  <i className="arrow">→</i>
                </a>
              </div>
            </div>


          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="bg-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Let's Connect 🚀</h2>
          <p>gadigeppategginamani8@gmail.com</p>
          <div className="social-links">
            <a href="http://linkedin.com/in/gadigeppa-tegginamani-493b45272/" className="social-btn">LinkedIn</a>
            <a href="https://github.com/Pscyho" className="social-btn">GitHub</a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
