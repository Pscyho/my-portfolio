import React from 'react';
import './App.css';
{/* Navigation */}
<nav className="navbar">
  <div className="container">
    <div className="nav-brand">Gadigeppa T.</div>
    <div className="nav-links">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>


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
          </div>

          <div className="project-card">
            <h3>Real-Time Vibration Monitoring</h3>
            <p>Developed a system with ESP32 + ADXL345 for vibration data collection and live FFT visualization.</p>
          </div>
        </div>
      </section>
      {/* About Section */}
<section className="about">
  <div className="container">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          I'm a passionate Electronics & Communication Engineer with expertise in FPGA design, 
          IoT systems, and embedded development. I love creating innovative solutions that bridge 
          the gap between hardware and software.
        </p>
        <p>
          Currently focused on digital signal processing, VLSI design, and real-time systems 
          for industrial applications.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-tags">
          <span className="skill-tag">Verilog/VHDL</span>
          <span className="skill-tag">FPGA Design</span>
          <span className="skill-tag">ESP32/Arduino</span>
          <span className="skill-tag">C/C++</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">PCB Design</span>
          <span className="skill-tag">Signal Processing</span>
          <span className="skill-tag">IoT</span>
        </div>
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
