import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import './IndexPages.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImage from '../assets/images/m1.png';

const IndexPages: React.FC = () => {
  const [activeSection, setActiveSection] = useState('accueill');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const controls = useAnimation();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [activeSection, controls]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const skillVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, y: -5 }
  };

  return (

    <div className="modern-portfolio">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-element"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, window.innerHeight],
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Navigation */}
      <motion.header 
        className="floating-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <span>Portfolio</span>
            <span className="accent"></span>
          </motion.div>
          
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['accueill', 'a propos', 'compétence', 'projets', 'contact'].map((item) => (
              <motion.button
                key={item}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <motion.button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="accueill" className="hero-section">
        <div className="container ensemble-hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Bonjour, c'est moi</h2>
            <motion.h1 
              className="hero-title"
              animate={{
                textShadow: ["0 0 1px #0ef", "0 0 1px #0ef", "0 0 1px #fff"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Wilson <span className="accent">Frederique</span>
            </motion.h1>
            
            <div>
              <motion.div
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="typewriter">
                  <h2>Et je suis un développeur Fullstack passionné</h2>
                </div>
              </motion.div>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Développeur Frontend et Backend passionné, spécialisé en React.js, TypeScript, 
                Node.js (Express) et PHP Laravel. Alliant créativité et rigueur, je conçois des 
                interfaces modernes et dynamiques, tout en garantissant une expérience utilisateur 
                fluide, intuitive et performante.
              </motion.p>
              
              <div className="ens-btns">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255,182,193,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Accéder à mon CV</span>
                  </motion.button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <motion.button
                    className="cta-button cta-button2"
                    onClick={() => scrollToSection('contact')}
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255,182,193,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Contactez-moi</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </div>

          </motion.div>

          <div>
              <div className="illustration-container">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="window-title">portfolio.tsx</div>
                  </div>
                  <div className="code-content">
                    <pre>
                      <code>
                        {`const Frederique = () => {\n  return (\n    <Developer\n      frontend={["React", "TypeScript"]}\n      backend={["Node.js", "Laravel"]}\n      design={["UI/UX", "Responsive"]}\n    />\n  );\n};`}
                      </code>
                    </pre>
                  </div>
                </div>
                
                <div className="floating-shapes">
                  <motion.div 
                    className="shape pink"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="shape purple"
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </div>
          </div>
          
          
        </div>
      </section>

      <hr />

      {/* About Section */}
      <section id="a propos" className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <span className="title-number">01.</span> À propos
            </h2>
          </motion.div>

          <p className='titre-apropo'>Développeur à la fois Frontend et Backend, je maîtrise l’ensemble de la chaîne Fullstack.</p>
          
          Passionné par le développement web, je conçois et développe des interfaces modernes, dynamiques et centrées sur l’expérience utilisateur. Fort d’une expertise en HTML, CSS, JavaScript, ainsi qu’en frameworks comme React, Laravel, Node.js et Express, je transforme des idées en solutions web interactives, intuitives et performantes.          

          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                💡 Mon objectif ? Fournir des solutions sur mesure, innovantes et performantes, tout en garantissant une expérience utilisateur fluide et engageante.
              </p>
              <p>
                📩 Me contacter pour échanger sur de nouvelles opportunités et collaborations !
              </p>
              <div className="about-highlights">
                <motion.div 
                  className="highlight-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V12L15 15" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>3 ans</h4>
                  <p>d'expérience en développement</p>
                </motion.div>
                
                <motion.div 
                  className="highlight-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 3.13C17.8604 3.3503 18.623 3.8507 19.1676 4.55231C19.7122 5.25392 20.0078 6.11683 20.0078 7.005C20.0078 7.89317 19.7122 8.75608 19.1676 9.45769C18.623 10.1593 17.8604 10.6597 17 10.88" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>20+ projets</h4>
                  <p>réalisés avec succès</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
                <div className="image-container">
                  <img 
                    src={profileImage} 
                    alt="Elyssa Solofonirina" 
                    className="main-image"
                  />
                  <div className="image-frame"></div>
                  <motion.div 
                    className="image-dots"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              className="cta-button cta-button-apropo"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255,182,193,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>En savoir plus</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétence" className="skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <span className="title-number">02.</span> Mes Compétences
            </h2>
          </motion.div>

          <p className='p-competence'>Passionné par l'apprentissage continu, je maîtrise ces technologies pour répondre aux besoins les plus exigeants.</p>
          

          <h3 className="text-2xl font-bold mb-1 mt-6">Compétences techniques</h3>
          <motion.div
            className="skills-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              // { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Bootstrap", "HTML/CSS", "Tailwind"] },
              { category: "Frontend", skills: ["React", "TypeScript", "Vue.js", "Bootstrap", "HTML/CSS", "Tailwind"] },
              { category: "Backend", skills: ["Node.js", "Laravel", "Express", "MySQL", "PostgreSQL", "API REST"] },
              { category: "Outils", skills: ["Git", "VSCODE", "Office", "Android Studio", "Visual Paradigm", "XAMPP"] }
            ].map((categoryData) => (
              <motion.div 
                key={categoryData.category}
                className="skill-category"
                variants={itemVariants}
              >
                <h3>{categoryData.category}</h3>
                <div className="skills-grid">
                  {categoryData.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      variants={skillVariants}
                      initial="initial"
                      whileHover="hover"
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="skill-icon">
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} 
                          alt={skill} 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/50x50/FFB6C1/121212?text=${skill.substring(0,3)}`;
                            // https://via.placeholder.com/50?text=${skill}
                          }}
                        />
                      </div>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <br /><br />
          <div className="competence-professionnelles">
            <div>
              <h3 className="text-2xl font-bold mb-6">Compétences professionnelles</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Communication</span>
                    <span className="text-slate-400">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Travail d'équipe</span>
                    <span className="text-slate-400">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                {/* <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Gestion de projet</span>
                    <span className="text-slate-400">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div> */}
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Résolution de problèmes</span>
                    <span className="text-slate-400">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Créativité</span>
                    <span className="text-slate-400">83%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '83%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="projects-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <span className="title-number">03.</span> Mes Projets
            </h2>
          </motion.div>
          
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Digitalisation de process interne",
                description: "Solution complète avec panier, paiement et dashboard admin.",
                tags: ["React", "Node.js", "MongoDB"],
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                title: "Réseau Social",
                description: "Application avec publications, commentaires et messagerie.",
                tags: ["Laravel", "Vue.js", "MySQL"],
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                title: "Dashboard Analytique",
                description: "Visualisation de données en temps réel avec graphiques interactifs.",
                tags: ["TypeScript", "Chart.js", "Firebase"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            ].map((project) => (
              <motion.div 
                key={project.title}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-links">
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir le projet <span>→</span>
                  </motion.a>
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code source <span>↗</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="more-projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="#"
              className="view-more"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir plus de projets
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <span className="title-number">04.</span> Contactez-moi
            </h2>
          </motion.div>
          
          <motion.div
            className="contact-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Travaillons ensemble</h3>
              <p>
                Vous avez un projet ou une question ? Envoyez-moi un message et je vous répondrai dès que possible.
              </p>
              
              <div className="contact-details">
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:elyssa@example.com">elyssaelypiso@example.com</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8V16H18V8Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 12V14H11V12H13Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <a href="tel:+261340000000">+261 34 84 999 82</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Localisation</h4>
                    <span>Antananarivo, Madagascar</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="social-links">
                {['github', 'linkedin', 'twitter', 'dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="social-icon"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`fab fa-${social}`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.form className="contact-form" variants={itemVariants}>
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name">Votre nom</label>
                <input type="text" id="name" required />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email">Votre email</label>
                <input type="email" id="email" required />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" required />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message">Votre message</label>
                <textarea id="message" rows={5} required></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(255,182,193,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="footer-logo">
              <span>Elyssa</span>
              <span className="accent">Solofonirina</span>
            </div>
            
            <div className="footer-links">
              {['accueill', 'a props', 'skills', 'projects', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  whileHover={{ y: -3 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
            
            <div className="footer-social">
              {['github', 'linkedin', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab fa-${social}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>© {new Date().getFullYear()} Elyssa Solofonirina. Tous droits réservés.</p>
            <p>Conçu et développé avec ❤️ par moi-même</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPages;