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
            Electronics & Communication Engineer | FPGA Enthusiast | IoT & Embedded Systems Developer
          </p>
          <div className="buttons">
            <button className="btn-primary">Projects</button>
            <button className="btn-secondary">Contact</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2>Projects</h2>
          
          <div className="project-card">
            <h3>I2C Controller on FPGA</h3>
            <p>Designed and implemented an I2C communication protocol using Verilog on FPGA with testbench simulations.</p>
            <div className="project-links">
              <a href="#" className="project-btn">View Code</a>
              <a href="#" className="project-btn-secondary">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Real-Time Vibration Monitoring</h3>
            <p>Developed a system with ESP32 + ADXL345 for vibration data collection and live FFT visualization.</p>
            <div className="project-links">
              <a href="#" className="project-btn">View Code</a>
              <a href="#" className="project-btn-secondary">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Let's Connect 🚀</h2>
          <p>gadigeppaumeshtegginamani.ece@skit.org.in</p>
          <div className="social-links">
            <a href="#" className="social-btn">LinkedIn</a>
            <a href="#" className="social-btn">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
