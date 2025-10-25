import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaTools, FaDownload, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DG</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
        <a href="/assets/DebasishGhosh_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">
          <FaDownload /> Resume
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="gradient-text">Debasish Ghosh</span>
          </h1>
          <p className="tagline">
            Aspiring Software Developer specializing in modern web technologies and AI/ML. 
            Currently pursuing B.Tech in CSE (AI & ML) '27, passionate about creating innovative 
            digital experiences through clean code and intelligent design.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-btn primary">
              <FaRocket /> View My Work
            </a>
            <a href="#about" className="cta-btn secondary">
              <FaCode /> Learn More
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/debasishghosh-lab" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/debasish-ghosh-440730315" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=debasishghosh20032025@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Email Me">
              <FaEnvelope />
            </a>

          </div>
        </div>
        <img src="/assets/debasish.png" alt="Debasish Ghosh" className="profile-photo" />
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h3>👋 Hello World!</h3>
              <p>
                I'm a passionate <strong>B.Tech CSE (AI & ML)</strong> student with a deep fascination for technology and innovation. 
                My journey in computer science began with curiosity and has evolved into a commitment to building impactful solutions 
                that solve real-world problems through elegant code and intelligent systems.
              </p>
              <p>
                With expertise in <strong>full-stack development</strong>, I specialize in creating seamless user experiences using 
                modern frameworks like <strong>React</strong> and building robust backends with <strong>Node.js</strong>. I thrive on 
                transforming complex problems into elegant, scalable solutions that users love.
              </p>
              <p>
                Beyond web development, I'm deeply interested in <strong>artificial intelligence and machine learning</strong>, constantly 
                exploring how these technologies can revolutionize the way we interact with software. I've solved <strong>120+ DSA problems</strong> 
                and completed multiple certifications in AI, GenAI, and ML to strengthen my foundation in both traditional and emerging technologies.
              </p>
              <p>
                Currently, I'm seeking <strong>SDE internship opportunities</strong> where I can contribute to innovative projects, 
                collaborate with talented teams, and continue growing as a software engineer. I believe in writing clean, maintainable 
                code, following best practices, and building products that make a tangible difference in people's lives.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">120+</div>
                <div className="stat-label">DSA Problems Solved</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-label">Professional Certifications</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2027</div>
                <div className="stat-label">Expected Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3><FaCode /> Languages</h3>
            <p>C, C++, Python, JavaScript, SQL</p>
          </div>
          <div className="skill-card">
            <h3><FaLaptopCode /> Frontend</h3>
            <p>React, HTML, CSS, Tailwind</p>
          </div>
          <div className="skill-card">
            <h3><FaTools /> Backend & Database</h3>
            <p>Node.js, MongoDB, MySQL</p>
          </div>
          <div className="skill-card">
            <h3><FaCode /> AI/ML & Tools</h3>
            <p>TensorFlow, Scikit-learn, Pandas, NumPy</p>
          </div>
          <div className="skill-card">
            <h3><FaTools /> DevOps & Others</h3>
            <p>Git, GitHub, Socket.io, AWS, REST APIs</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Real-Time Collaborative Code Editor</h3>
            <p className="tech-stack">MERN</p>
            <p className="project-description">
             A web-based code editor that allows multiple users to collaborate in real time. Users can join rooms using a
unique ID, write and edit code together, share files, and see who’s typing. The app features a responsive interface
that works seamlessly on desktop and mobile.
            </p>
            <div className="project-links">
              <a href="https://github.com/debasishghosh-lab/codeCollab/tree/master" target="_blank" rel="noreferrer" className="project-link github">
                <FaGithub /> View Code
              </a>
              <a href="https://codecollab-puu6.onrender.com" target="_blank" className="project-link demo">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <h3>PredictOstock</h3>
            <p className="tech-stack">React • Flask• SQLite </p>
            <p className="project-description">
               An AI-driven demand forecasting software designed for B2B businesses to prevent stockouts before they happen. The system analyzes historical sales data, inventory levels, and seasonal patterns to predict future demand using machine learning models. It provides real-time alerts and dashboards to help businesses maintain optimal stock levels, reduce losses, and improve supply chain efficiency.
            </p>
            <div className="project-links">
              <a href="https://github.com/ahanadasgupta26/Invent-O-Predict" target="_blank" className="project-link github">
                <FaGithub /> View Code
              </a>
              {/* <a href="#" className="project-link demo">
                <FaExternalLinkAlt /> Live Demo
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          <div className="cert-card">
            <h4>Foundations of Data Structures & Algorithms</h4>
            <p style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '10px' }}>University of Colorado Boulder</p>
            <a href="https://coursera.org/share/c7995acb951d9453e512198be68a10d9" target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
          <div className="cert-card">
            <h4>Introduction to Artificial Intelligence</h4>
            <p style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '10px' }}>IBM</p>
            <a href="https://coursera.org/share/7f13d58076584d7d7e676cfb990d3763" target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
          <div className="cert-card">
            <h4>Introduction to Generative AI</h4>
            <p style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '10px' }}>Google Cloud</p>
            <a href="https://coursera.org/share/df133ecb72eea622f851653e372b4bfd" target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
          <div className="cert-card">
            <h4>Generative AI: Introduction & Applications</h4>
            <p style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '10px' }}>IBM</p>
            <a href="https://coursera.org/share/1705552fbf2681d3be309432cc7c8caa" target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
          <div className="cert-card">
            <h4>Machine Learning & NLP Basics</h4>
            <p style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '10px' }}>Edureka</p>
            <a href="https://coursera.org/share/3c8220b173b4165f42bc973227bf9691" target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="https://github.com/debasishghosh-lab" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/debasish-ghosh-440730315" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=debasishghosh20032025@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Email Me">
              <FaEnvelope />
            </a>
        </div>
        <p>&copy; 2025 Debasish Ghosh. Built with passion for tech.</p>
      </footer>
    </div>
  );
}

export default App;