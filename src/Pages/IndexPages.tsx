import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const IndexPages: React.FC = () => {

    useEffect(() => {
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const backdrop = document.getElementById('backdrop');
        
        const toggleMenu = () => {
        mobileMenu?.classList.toggle('open');
        menuIcon?.classList.toggle('open');
        backdrop?.classList.toggle('active');
        document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
        };
        
        const closeMenu = () => {
        mobileMenu?.classList.remove('open');
        menuIcon?.classList.remove('open');
        backdrop?.classList.remove('active');
        document.body.style.overflow = '';
        };
        
        menuToggle?.addEventListener('click', toggleMenu);
        backdrop?.addEventListener('click', closeMenu);
        
        // Close menu when clicking on menu items
        document.querySelectorAll('#mobile-menu a').forEach(item => {
        item.addEventListener('click', closeMenu);
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId || '');
            
            if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            }
        });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        const handleScroll = () => {
        if (window.pageYOffset > 300) {
            backToTopButton?.classList.remove('opacity-0', 'invisible');
            backToTopButton?.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton?.classList.remove('opacity-100', 'visible');
            backToTopButton?.classList.add('opacity-0', 'invisible');
        }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        backToTopButton?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });
        
        // Animate elements when they come into view
        const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
            (element as HTMLElement).style.opacity = '1';
            (element as HTMLElement).style.transform = 'translateY(0)';
            }
        });
        };
        
        // Set initial state and add scroll event
        document.querySelectorAll('.fade-in').forEach(el => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(20px)';
        (el as HTMLElement).style.transition = 'opacity 0.6s cubic-bezier(0.39, 0.575, 0.565, 1), transform 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Animate skill bars when skills section is in view
        const animateSkillBars = () => {
        const skillSection = document.getElementById('skills');
        const skillBars = document.querySelectorAll('.skill-progress');
        
        if (!skillSection || !skillBars.length) return;
        
        const sectionPosition = skillSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionPosition < windowHeight - 200) {
            skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width') || (bar as HTMLElement).style.width;
            (bar as HTMLElement).style.width = '0';
            
            setTimeout(() => {
                (bar as HTMLElement).style.width = width || '0';
            }, 200);
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateSkillBars);
        }
        };
        
        // Set data-width attributes
        document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.setAttribute('data-width', (bar as HTMLElement).style.width);
        (bar as HTMLElement).style.width = '0';
        });
        
        window.addEventListener('scroll', animateSkillBars);
        window.addEventListener('load', animateSkillBars);
        
        // Form submission handling
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = (document.getElementById('name') as HTMLInputElement)?.value;
            const email = (document.getElementById('email') as HTMLInputElement)?.value;
            const subject = (document.getElementById('subject') as HTMLInputElement)?.value;
            const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, subject, message });
            
            // Show temporary success message
            const successAlert = document.createElement('div');
            successAlert.className = 'fixed top-6 right-6 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
            successAlert.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle mr-2"></i>
                <span>Message envoyé avec succès !</span>
            </div>
            `;
            
            document.body.appendChild(successAlert);
            
            // Remove after 5 seconds
            setTimeout(() => {
            successAlert.classList.remove('animate-fade-in');
            successAlert.classList.add('animate-fade-out');
            
            setTimeout(() => {
                document.body.removeChild(successAlert);
            }, 300);
            }, 5000);
            
            // Reset form
            contactForm.reset();
        });
        }
        
        // Cleanup function
        return () => {
        menuToggle?.removeEventListener('click', toggleMenu);
        backdrop?.removeEventListener('click', closeMenu);
        document.querySelectorAll('#mobile-menu a').forEach(item => {
            item.removeEventListener('click', closeMenu);
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', () => {});
        });
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', animateOnScroll);
        window.removeEventListener('load', animateOnScroll);
        window.removeEventListener('scroll', animateSkillBars);
        window.removeEventListener('load', animateSkillBars);
        contactForm?.removeEventListener('submit', () => {});
        };
    }, []);
  

    return (
        <div className="antialiased text-gray-300 leading-relaxed">
                {/* <!-- Backdrop for mobile menu --> */}
            <div className="backdrop" id="backdrop"></div>
            
            {/* <!-- Navigation --> */}
            <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-2xl font-bold gradient-text flex items-center">
                            <i className="fas fa-code text-indigo-400 mr-2"></i>WILSON
                        </a>
                        
                        <div className="hidden md:flex space-x-6">
                            <a href="#home" className="nav-link text-white hover:text-indigo-300 transition-all-smooth px-3 py-2">Accueil</a>
                            <a href="#about" className="nav-link text-white hover:text-indigo-300 transition-all-smooth px-3 py-2">À propos</a>
                            <a href="#skills" className="nav-link text-white hover:text-indigo-300 transition-all-smooth px-3 py-2">Compétences</a>
                            <a href="#projects" className="nav-link text-white hover:text-indigo-300 transition-all-smooth px-3 py-2">Projets</a>
                            <a href="#contact" className="nav-link text-white hover:text-indigo-300 transition-all-smooth px-3 py-2">Contact</a>
                        </div>
                        
                        <a href="#contact" className="hidden md:block ml-6 px-5 py-2 gradient-bg text-white rounded-full font-medium hover:shadow-lg transition-all-smooth">
                            Disponible
                        </a>
                        
                        <button className="md:hidden text-white focus:outline-none" id="menu-toggle">
                            <i className="fas fa-bars text-xl menu-icon" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Mobile Menu --> */}
                <div className="md:hidden mobile-menu bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/50 shadow-lg" id="mobile-menu">
                    <div className="px-6 py-4 space-y-6">
                        <a href="#home" className="block text-white hover:text-indigo-300 transition-all-smooth font-medium menu-item flex items-center">
                            <i className="fas fa-home mr-3 text-indigo-400 w-4 text-center"></i>Accueil
                        </a>
                        <a href="#about" className="block text-white hover:text-indigo-300 transition-all-smooth font-medium menu-item flex items-center">
                            <i className="fas fa-user mr-3 text-emerald-400 w-4 text-center"></i>À propos
                        </a>
                        <a href="#skills" className="block text-white hover:text-indigo-300 transition-all-smooth font-medium menu-item flex items-center">
                            <i className="fas fa-cogs mr-3 text-blue-400 w-4 text-center"></i>Compétences
                        </a>
                        <a href="#projects" className="block text-white hover:text-indigo-300 transition-all-smooth font-medium menu-item flex items-center">
                            <i className="fas fa-project-diagram mr-3 text-purple-400 w-4 text-center"></i>Projets
                        </a>
                        <a href="#contact" className="block text-white hover:text-indigo-300 transition-all-smooth font-medium menu-item flex items-center">
                            <i className="fas fa-envelope mr-3 text-yellow-400 w-4 text-center"></i>Contact
                        </a>
                        <a href="#contact" className="mt-4 px-6 py-2 gradient-bg text-white rounded-full font-medium hover:shadow-lg transition-all-smooth flex items-center justify-center menu-item">
                            <span>Disponible</span>
                            <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* <!-- Hero Section --> */}
            <section id="home" className="bg-slate-900 min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* <!-- Grid pattern background --> */}
                    <div className="absolute inset-0 opacity-10 bg-grid-slate-900 dark:bg-grid-slate-800"></div>
                    {/* <!-- Gradient overlay --> */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6 z-10 w-full fade-in">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* <!-- Left Text Content --> */}
                        <div className="lg:w-1/2 lg:text-left">
                            <h2 className="text-lg md:text-xl text-indigo-400 mb-4 font-medium">Bonjour, je suis</h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Wilson <span className="gradient-text">Frederique</span>
                            </h1>
                            
                            <div className="mb-6">
                                <h2 className="text-xl md:text-2xl font-medium">
                                    <span className="text-gray-300">Développeur </span>
                                    <span className="gradient-text">Full Stack</span>
                                </h2>
                            </div>
                            
                            <p className="text-left text-gray-400 text-base md:text-lg mb-8 max-w-lg  lg:mx-0">
                                Passionné par la création d'applications web performantes et esthétiques. 
                                Spécialisé en JavaScript, React, Node.js et architectures cloud.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all-smooth transform hover:-translate-y-0.5 btn-shadow flex items-center justify-center">
                                    <span>Télécharger mon CV</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                </a>
                                <a href="#contact" className="px-6 py-3 border-2 border-indigo-400 text-white hover:bg-indigo-400/10 font-medium rounded-full transition-all-smooth transform hover:-translate-y-0.5 flex items-center justify-center">
                                    <span>Discutons</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </a>
                            </div>                    
                            
                            <div className="mt-12 flex justify-center md:justify-start space-x-6 animate-delay-600">
                                <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow">
                                    <i className="fab fa-github text-lg"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow">
                                    <i className="fab fa-linkedin-in text-lg"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow">
                                    <i className="fab fa-twitter text-lg"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow">
                                    <i className="fab fa-codepen text-lg"></i>
                                </a>
                            </div>
                        </div>
                        
                        {/* <!-- Right Illustration --> */}
                        <div className="outer lg:w-1/2 flex justify-center mt-1 mb-20 lg:mt-0">
                            <div className="box relative w-full">
                                <div className="code-block rounded-xl overflow-hidden shadow-2xl border-home border-slate-700">
                                    <div className="code-header">
                                        <div className="code-dots">
                                            <div className="code-dot bg-red-500"></div>
                                            <div className="code-dot bg-yellow-400"></div>
                                            <div className="code-dot bg-green-500"></div>
                                        </div>
                                        <div className="code-filename text-sm">portfolio.tsx</div>
                                    </div>
                                    <div className="p-4 bg-slate-900 font-mono text-sm md:text-base">
                                        <div className="text-emerald-400 mb-2">// Développeur Full Stack avec 5 ans d'expérience</div>
                                        <div className="text-slate-400 mb-4"><span className="text-purple-400">const</span> <span className="text-blue-400">WilsonFrederique</span> <span className="text-slate-400">= {"{"} </span></div>
                                        <div className="ml-4 text-sky-300 mb-1">skills: <span className="text-slate-400">[</span></div>
                                        <div className="ml-8 text-amber-300 font-medium">'JavaScript', 'TypeScript', 'React', 'Node.js',</div>
                                        <div className="ml-8 text-amber-300 font-medium mb-1">'GraphQL', 'Docker', 'AWS'</div>
                                        <div className="ml-4 text-sky-300"><span className="text-slate-400">],</span></div>
                                        <div className="ml-4 text-sky-300">specialty: <span className="text-lime-300">"Applications web performantes"</span><span className="text-slate-400">,</span></div>
                                        <div className="ml-4 text-sky-300">available: <span className="text-emerald-400">true</span></div>
                                        <div className="text-slate-400"> {"}"} </div>
                                        <div className="text-slate-400 mt-4">export default WilsonFrederique;</div>
                                    </div>
                                </div>
                                
                                <div className="absolute -z-10 w-full h-full rounded-xl bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 blur-xl -bottom-2 -right-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a href="#about" className="text-slate-400 hover:text-white transition-all-smooth">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </a>
                </div>
            </section>

            <section id="about" className="py-20 bg-slate-900/95">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="section-title gradient-text">À propos</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            En savoir plus sur mon parcours, mes compétences et ma philosophie de travail.
                        </p>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* <!-- About Image --> */}
                        <div className="lg:w-2/5 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                                    alt="Wilson Frederique" 
                                    className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="bg-indigo-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <p className="text-white text-sm font-medium">5+ ans d'expérience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- About Content --> */}
                        <div className="lg:w-3/5">
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700/50 transition-all-smooth card-hover">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                                        <i className="fas fa-code text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Développement Web</h3>
                                    <p className="text-gray-400">
                                        Création d'applications web modernes avec les dernières technologies comme React, Next.js et Node.js.
                                    </p>
                                </div>
                                
                                <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700/50 transition-all-smooth card-hover">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                                        <i className="fas fa-mobile-alt text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Applications Mobile</h3>
                                    <p className="text-gray-400">
                                        Développement d'applications hybrides avec React Native pour iOS et Android.
                                    </p>
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-white">Qui suis-je ?</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Passionné par les technologies web depuis mon adolescence, j'ai transformé ma passion en métier. 
                                Après un diplôme en informatique, j'ai travaillé avec des startups et entreprises pour créer des 
                                solutions web performantes et innovantes.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Mon approche combine rigueur technique et sens créatif pour offrir des expériences utilisateur 
                                fluides et des architectures robustes. Je m'adapte rapidement aux nouvelles technologies pour 
                                toujours proposer des solutions à la pointe.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all-smooth btn-shadow flex items-center">
                                    <span>Voir mes projets</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                                
                                <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-indigo-400 text-white hover:text-indigo-400 font-medium rounded-full transition-all-smooth flex items-center">
                                    <span>Contactez-moi</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Timeline --> */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold mb-8 text-center text-white">Mon parcours professionnel</h3>
                        
                        <div className="relative pl-8 timeline max-w-3xl mx-auto">
                            {/* Timeline Item */}
                            <div className="relative mb-8 timeline-item">
                                <div className="bg-slate-800 p-6 rounded-xl card-hover hover:bg-slate-700/50 transition-all-smooth">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold gradient-text">2021 - Présent</span>
                                        <span className="ml-auto text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">Full Stack</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Développeur Full Stack Senior</h4>
                                    <p className="text-gray-500 mb-3">TechVision, Paris</p>
                                    <p className="text-gray-400">
                                        Conception et développement d'applications web full stack avec React, Node.js et MongoDB.
                                        Supervision d'une équipe de développeurs juniors et mise en place de bonnes pratiques.
                                    </p>
                                </div>
                            </div>
                            
                            {/* <!-- Timeline Item --> */}
                            <div className="relative mb-8 timeline-item">
                                <div className="bg-slate-800 p-6 rounded-xl card-hover hover:bg-slate-700/50 transition-all-smooth">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold gradient-text">2019 - 2021</span>
                                        <span className="ml-auto text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">Frontend</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Développeur Frontend</h4>
                                    <p className="text-gray-500 mb-3">DigitalWave, Lyon</p>
                                    <p className="text-gray-400">
                                        Développement d'interfaces utilisateur réactives avec React et Vue.js.
                                        Collaboration étroite avec les designers pour des expériences utilisateur intuitives.
                                    </p>
                                </div>
                            </div>
                            
                            {/* <!-- Timeline Item --> */}
                            <div className="relative timeline-item">
                                <div className="bg-slate-800 p-6 rounded-xl card-hover hover:bg-slate-700/50 transition-all-smooth">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold gradient-text">2017 - 2019</span>
                                        <span className="ml-auto text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300">Junior</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Développeur Web Junior</h4>
                                    <p className="text-gray-500 mb-3">StartUpX, Toulouse</p>
                                    <p className="text-gray-400">
                                        Première expérience professionnelle en développement web.
                                        Participation à divers projets, apprentissage des bonnes pratiques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //  Skills Section  */}
            <section id="skills" className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Mes <span className="section-title gradient-text">compétences</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Un aperçu des technologies et méthodologies que je maîtrise.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {/* <!-- Technical Skills --> */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Technologies principales</h3>
                            
                            <div className="space-y-6">
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fab fa-js text-yellow-400 mr-3"></i> JavaScript / TypeScript
                                        </span>
                                        <span className="text-gray-500">95%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '95%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                                
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fab fa-react text-blue-400 mr-3"></i> React & Next.js
                                        </span>
                                        <span className="text-gray-500">90%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '90%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                                
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fab fa-node-js text-green-500 mr-3"></i> Node.js & Express
                                        </span>
                                        <span className="text-gray-500">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '85%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Professional Skills --> */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Compétences professionnelles</h3>
                            
                            <div className="space-y-6">
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fas fa-lightbulb text-yellow-400 mr-3"></i> Résolution de problèmes
                                        </span>
                                        <span className="text-gray-500">90%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '90%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                                
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fas fa-users text-green-400 mr-3"></i> Travail d'équipe
                                        </span>
                                        <span className="text-gray-500">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fas fa-project-diagram text-purple-400 mr-3"></i> Gestion de projet
                                        </span>
                                        <span className="text-gray-500">80%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '80%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Technologies Grid --> */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center text-white">Outils & Technologies</h3>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-react text-4xl text-blue-400 mb-3"></i>
                                <span className="font-medium text-white">React</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-vuejs text-4xl text-emerald-400 mb-3"></i>
                                <span className="font-medium text-white">Vue.js</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-node-js text-4xl text-green-500 mb-3"></i>
                                <span className="font-medium text-white">Node.js</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-database text-4xl text-blue-500 mb-3"></i>
                                <span className="font-medium text-white">MongoDB</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-docker text-4xl text-blue-300 mb-3"></i>
                                <span className="font-medium text-white">Docker</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-aws text-4xl text-orange-400 mb-3"></i>
                                <span className="font-medium text-white">AWS</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-git-alt text-4xl text-orange-500 mb-3"></i>
                                <span className="font-medium text-white">Git</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-figma text-4xl text-purple-400 mb-3"></i>
                                <span className="font-medium text-white">Figma</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-sass text-4xl text-pink-400 mb-3"></i>
                                <span className="font-medium text-white">Sass</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-server text-4xl text-cyan-400 mb-3"></i>
                                <span className="font-medium text-white">REST API</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-npm text-4xl text-red-500 mb-3"></i>
                                <span className="font-medium text-white">npm</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-terminal text-4xl text-green-400 mb-3"></i>
                                <span className="font-medium text-white">CLI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* // Projects Section */}
            <section id="projects" className="py-20 bg-slate-900/95">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Mes <span className="section-title gradient-text">projets</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Une sélection des projets récents que j'ai réalisés.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Project 1 --> */}
                        <div className="relative overflow-hidden rounded-xl project-card bg-slate-800 hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative">
                                <i className="fas fa-graduation-cap text-6xl text-white opacity-20"></i>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">Full Stack</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">Plateforme E-learning</h3>
                                <p className="text-gray-400 mb-5">
                                    Solution complète d'apprentissage en ligne avec cours interactifs, suivi de progression et certifications.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">React</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">Node.js</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">MongoDB</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-all-smooth flex items-center">
                                        <i className="fas fa-external-link-alt mr-2"></i> Visiter
                                    </a>
                                    <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-all-smooth flex items-center">
                                        <i className="fab fa-github mr-2"></i> Code source
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Project 2 --> */}
                        <div className="relative overflow-hidden rounded-xl project-card bg-slate-800 hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="h-48 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center relative">
                                <i className="fas fa-chart-line text-6xl text-white opacity-20"></i>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">Dashboard</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">Analyse de Données</h3>
                                <p className="text-gray-400 mb-5">
                                    Tableau de bord analytique avec visualisations interactives et export de rapports personnalisés.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">Vue.js</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">D3.js</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">API REST</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-all-smooth flex items-center">
                                        <i className="fas fa-external-link-alt mr-2"></i> Visiter
                                    </a>
                                    <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-all-smooth flex items-center">
                                        <i className="fab fa-github mr-2"></i> Code source
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Project 3 --> */}
                        <div className="relative overflow-hidden rounded-xl project-card bg-slate-800 hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="h-48 bg-gradient-to-r from-pink-500/20 to-orange-500/20 flex items-center justify-center relative">
                                <i className="fas fa-mobile-alt text-6xl text-white opacity-20"></i>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">Mobile</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">App Fitness</h3>
                                <p className="text-gray-400 mb-5">
                                    Application mobile de suivi d'activité physique avec plans d'entraînement personnalisés.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">React Native</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">Firebase</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">Redux</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-all-smooth flex items-center">
                                        <i className="fas fa-external-link-alt mr-2"></i> Visiter
                                    </a>
                                    <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-all-smooth flex items-center">
                                        <i className="fab fa-github mr-2"></i> Code source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <a href="#" className="px-8 py-3 gradient-bg text-white rounded-full font-semibold hover:shadow-lg transition-all-smooth inline-flex items-center">
                            <span>Voir plus de projets</span>
                            <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* // Testimonials Section  */}
            <section className="py-20 bg-slate-900 from-slate-800/50 to-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="section-title gradient-text">Témoignages</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Ce que disent mes clients et collègues à propos de mon travail.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Testimonial 1 --> */}
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="flex items-center mb-6">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                                <div>
                                    <h4 className="font-bold text-white">Sophie Martin</h4>
                                    <p className="text-sm text-gray-500">CEO @TechVision</p>
                                </div>
                            </div>
                            <p className="text-gray-400 italic mb-6">
                                "Wilson a transformé notre plateforme avec des solutions innovantes. Son code est propre et bien documenté."
                            </p>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        
                        {/* <!-- Testimonial 2 --> */}
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="flex items-center mb-6">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                                <div>
                                    <h4 className="font-bold text-white">Pierre Lefevre</h4>
                                    <p className="text-sm text-gray-500">CTO @DigitalWave</p>
                                </div>
                            </div>
                            <p className="text-gray-400 italic mb-6">
                                "Un professionnel consciencieux qui comprend rapidement les besoins métiers. Très réactif et compétent."
                            </p>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        
                        {/* <!-- Testimonial 3 --> */}
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="flex items-center mb-6">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
                                <div>
                                    <h4 className="font-bold text-white">Élodie Bernard</h4>
                                    <p className="text-sm text-gray-500">Lead Designer @StartUpX</p>
                                </div>
                            </div>
                            <p className="text-gray-400 italic mb-6">
                                "Collaboration fluide avec un excellent esprit d'équipe. Wilson transforme nos designs en expériences interactives."
                            </p>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section  */}
            <section id="contact" className="py-20 bg-slate-900/95">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-indigo-400">05.</span> <span className="section-title gradient-text">Contact</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Vous avez un projet ou une question ? N'hésitez pas à me contacter.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* <!-- Contact form --> */}
                        <div className="bg-slate-800 borders border-slate-700 rounded-xl p-8 hover:shadow-xl transition-all-smooth">
                            <form id="contact-form" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nom complet *</label>
                                        <input type="text" id="name" name="name" required 
                                            className="w-full px-4 py-3 bg-slate-800 borders border-slate-700 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 transition-all-smooth" 
                                            placeholder="Votre nom" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                        <input type="email" id="email" name="email" required 
                                            className="w-full px-4 py-3 bg-slate-800 borders border-slate-700 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 transition-all-smooth" 
                                            placeholder="votre@email.com" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Sujet *</label>
                                    <input type="text" id="subject" name="subject" required 
                                        className="w-full px-4 py-3 bg-slate-800 borders border-slate-700 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 transition-all-smooth" 
                                        placeholder="Objet du message" />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                    <textarea id="message" name="message" rows={5} required 
                                        className="w-full px-4 py-3 bg-slate-800 borders border-slate-700 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 transition-all-smooth" 
                                        placeholder="Décrivez votre projet ou votre demande..."></textarea>
                                </div>
                                
                                <button type="submit" className="w-full px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:shadow-lg transition-all-smooth transform hover:-translate-y-0.5 flex items-center justify-center">
                                    <span>Envoyer le message</span>
                                    <i className="fas fa-paper-plane ml-2"></i>
                                </button>
                            </form>
                        </div>
                        
                        {/* <!-- Contact info --> */}
                        <div className="bg-slate-800 borders border-slate-400 rounded-xl p-8 hover:shadow-xl transition-all-smooth">
                            <h3 className="text-xl font-bold mb-6 text-indigo-400">Informations de contact</h3>
                            <p className="text-gray-400 mb-8">
                                Pour toute demande de collaboration ou question, vous pouvez me contacter directement par email ou téléphone. 
                                Je m'efforce de répondre dans les 24 heures.
                            </p>
                            
                            <div className="space-y-6 mb-Map-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4 text-indigo-400 flex-shrink-0">
                                        <i className="fas fa-envelope text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                                        <a href="mailto:wilson@example.com" className="text-white hover:text-indigo-400 transition-all-smooth">wilson.frederique@example.com</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4 text-indigo-400 flex-shrink-0">
                                        <i className="fas fa-phone text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Téléphone</h4>
                                        <a href="tel:+261340000000" className="text-white hover:text-indigo-400 transition-all-smooth">+261 34 84 999 82</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4 text-indigo-400 flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Localisation</h4>
                                        <p className="text-white">Antananarivo, Madagascar</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <h4 className="text-sm font-medium text-gray-400 mb-4">Réseaux sociaux</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer  */}
            <footer className="py-12 bg-slate-950 text-gray-400">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="text-2xl font-bold gradient-text flex items-center">
                                <i className="fas fa-code text-indigo-400 mr-2"></i>WILSON
                            </a>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                            <a href="#home" className="hover:text-white transition-all-smooth">Accueil</a>
                            <a href="#about" className="hover:text-white transition-all-smooth">À propos</a>
                            <a href="#skills" className="hover:text-white transition-all-smooth">Compétences</a>
                            <a href="#projects" className="hover:text-white transition-all-smooth">Projets</a>
                            <a href="#contact" className="hover:text-white transition-all-smooth">Contact</a>
                        </div>
                        
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-slate-800 pt-8 text-center text-sm">
                        &copy; 2023 Wilson Frederique. Tous droits réservés.
                    </div>
                </div>
            </footer>

            {/* Back to Top Button  */}
            <button id="back-to-top" className="fixed bottom-8 right-8 w-12 h-12 gradient-bg rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all opacity-0 invisible z-40">
                <i className="fas fa-arrow-up"></i>
            </button>

        </div>
    );
};

export default IndexPages;