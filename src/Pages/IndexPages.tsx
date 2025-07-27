import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import CV from '/CV_Wilson_Frederique.pdf';

import Profil2 from '../assets/images/3021.jpg';
import AndroidStudio from '../assets/images/android.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  type: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
};

const additionalProjects: Project[] = [
  {
    id: 4,
    title: "Gestion des emplois du temps et des salles",
    description: "Conception et développement d’une application web complète permettant la gestion centralisée des emplois du temps et l’organisation des salles de classe au sein d’un établissement. L’application offre une interface intuitive permettant aux administrateurs de planifier les cours, d’assigner des salles, d’éviter les conflits de réservation et de visualiser les emplois du temps en temps réel. Le projet a été réalisé en utilisant React pour le développement du front-end, Express.js pour la création d’une API REST sécurisée, et MySQL pour le stockage structuré et fiable des données.",
    tags: ["React", "TypeScript", "Express", "MySQL", "API REST", "HTML & CSS"],
    githubUrl: "https://github.com/WilsonFrederique/GESTION-EDT-ET-SALLE-DE-CLASSE.git",
    type: "Full Stack",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-cyan-500/20",
    icon: "fas fa-book"
  },
  {
    id: 5,
    title: "Digitalisation des processus internes",
    description: "Stage de fin d’études axé sur la digitalisation des processus internes d’une organisation à travers le développement sécurisé d’une application web. L’application a été conçue en utilisant le framework Laravel (Blade) côté back-end, associé à une base de données MySQL, dans le but d’optimiser la gestion des flux de travail, d’automatiser les opérations récurrentes, et de renforcer la traçabilité des données.",
    tags: ["Laravel", "HTML & CSS", "MySQL"],
    githubUrl: "https://github.com/WilsonFrederique/DIGITALISATION.git",
    type: "Full Stack",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-pink-500/20",
    icon: "fas fa-dumbbell"
  },
  {
    id: 6,
    title: "Platforme de communication mobile",
    description: "Conception de l’interface front-end d’un clone de WhatsApp avec messagerie, notifications et gestion des utilisateurs.",
    tags: ["Flutter"],
    githubUrl: "https://github.com/WilsonFrederique/Plateforme-de-communication-mobile.git",
    // demoUrl: "#",
    type: "Mobile",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 7,
    title: "Authentification requise avant l’accès à la page d’accueil",
    description: "Application mobile développée avec Flutter, mettant en œuvre une interface d’authentification sécurisée. Cette application assure que les utilisateurs doivent se connecter avec leurs identifiants valides avant de pouvoir accéder à la page d’accueil et aux fonctionnalités principales, garantissant ainsi la protection des données et un accès contrôlé.",
    tags: ["Flutter"],
    githubUrl: "https://github.com/WilsonFrederique/Interface-d-accueil-mobile.git",
    // demoUrl: "#",
    type: "Mobile",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 8,
    title: "Suivi et traitement des paiements de bourses",
    description: "Développement d’une application web responsive permettant le suivi en temps réel et la gestion sécurisée des paiements de bourses. Réalisée avec React (TypeScript) pour l’interface utilisateur, Node.js pour la logique serveur, et MySQL pour la gestion fiable des données financières. L’outil vise à automatiser les processus de versement, garantir la traçabilité des transactions et améliorer la transparence dans l’attribution des aides.",
    tags: ["React", "TypeScript", "HTML & CSS", "Express", "MySQL", "API REST"],
    githubUrl: "https://github.com/WilsonFrederique/PAIEMENT-DE-BOURSE.git",
    type: "Full Stack",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 9,
    title: "Système de gestion pour station-service",
    description: "Système complet de gestion pour station-service, développé avec React pour le front-end et PHP pour le back-end via une API. Cette application permet de gérer efficacement les opérations quotidiennes, incluant le suivi des stocks, la gestion des ventes, ainsi que l’administration des clients et des transactions, offrant une interface utilisateur intuitive et réactive.",
    tags: ["React", "HTML & CSS", "PHP", "MySQL", "API"],
    githubUrl: "https://github.com/WilsonFrederique/Application-web-front-end-pour-une-station-service.git",
    type: "Full Stack",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 10,
    title: "Système d’organisation et de suivi des livres",
    description: "Développement d’un système complet d’organisation et de suivi des livres, offrant une interface utilisateur dynamique réalisée avec Java JSP pour le front-end, ainsi qu’un back-end utilisant MySQL pour la gestion structurée et fiable des données. Ce système permet une gestion efficace des collections, des emprunts et des retours au sein d’une bibliothèque.",
    tags: ["Application web Java utilisant JSP", "MySQL"],
    githubUrl: "https://github.com/WilsonFrederique/GESTION-BIBLIOTHEQUE.git",
    type: "Full Stack",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 11,
    title: "Suivi et administration des opérations commerciales",
    description: "Développement d’une interface utilisateur réactive et performante avec React et TypeScript, dédiée au suivi et à l’administration des opérations commerciales. Cette application front-end permet aux utilisateurs de visualiser, gérer et analyser les ventes, les commandes et les clients, offrant une expérience fluide et sécurisée adaptée aux besoins commerciaux modernes.",
    tags: ["React", "TypeScript", "HTML & CSS"],
    githubUrl: "https://github.com/WilsonFrederique/ADMIN-PAGE-N-2.git",
    type: "Front-end",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 12,
    title: "Espace de gestion administrateur",
    description: "Conception d’un espace de gestion administrateur permettant le contrôle et la supervision des différentes fonctionnalités du site. L’interface a été entièrement développée en HTML, CSS et JavaScript, offrant une navigation fluide, une structure claire et une expérience utilisateur intuitive adaptée à l’administration des contenus.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/WilsonFrederique/ADMIN-PAGE.git",
    type: "Front-end",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 13,
    title: "Tableau de bord administratif",
    description: "Développement d’un tableau de bord administratif interactif et responsive, conçu avec React et TypeScript, permettant la visualisation, la gestion et le suivi en temps réel des données clés. L’interface offre une navigation fluide et une organisation claire des fonctionnalités pour une administration efficace et intuitive.",
    tags: ["React", "TypeScript"],
    githubUrl: "https://github.com/WilsonFrederique/ADMIN-PAGE-N-1.git",
    type: "Front-end",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 14,
    title: "Système de gestion pour grande surface",
    description: "Développement d’un système de gestion pour grande surface conçu en Python, avec une architecture simplifiée utilisant des fichiers .txt pour le stockage des données. Ce système permet la gestion basique des produits, des ventes et des stocks, tout en offrant une interface en ligne de commande adaptée aux besoins d’une petite ou moyenne structure.",
    tags: ["Python"],
    githubUrl: "https://github.com/WilsonFrederique/SUPER-MARCHE.git",
    type: "Front-end",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 15,
    title: "Suivi et traitement des pensions",
    description: "Développement d’une application desktop en Java destinée au suivi et au traitement efficace des pensions. Ce système permet de gérer les dossiers des bénéficiaires, d’automatiser le calcul et la distribution des paiements, tout en assurant une gestion sécurisée et centralisée des données.",
    tags: ["Application desktop en Java", "PostgreSQL"],
    // githubUrl: "https://github.com/WilsonFrederique/SUPER-MARCHE.git",
    type: "Full Stack",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 16,
    title: "Application de messagerie instantanée",
    description: "Développement d’une application de messagerie instantanée permettant aux utilisateurs d’échanger des messages en temps réel via une interface web. Le front-end a été réalisé avec HTML, CSS et JavaScript pour garantir une expérience utilisateur fluide et réactive, tandis que le back-end, conçu en PHP, assure la gestion des échanges, des utilisateurs et du stockage des messages.",
    tags: ["HTML & CSS", "JavaScript", "MySQL"],
    githubUrl: "https://github.com/WilsonFrederique/CHAT.git",
    type: "Full Stack",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 17,
    title: "Agent conversationnel intelligent",
    description: "Développement d’un agent conversationnel intelligent simple, conçu à l’aide des technologies HTML, CSS et JavaScript. Cette application front-end permet à l’utilisateur d’interagir avec une interface dynamique simulant des échanges automatisés, dans un environnement responsive et accessible via un navigateur web.",
    tags: ["HTML & CSS", "JavaScript"],
    githubUrl: "https://github.com/WilsonFrederique/CHAT-BOT.git",
    type: "Front-end",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  },
  {
    id: 18,
    title: "Page d’ouverture",
    description: "Conception d’une page d’ouverture interactive développée en HTML, CSS et JavaScript, offrant une interface d’accueil fluide et esthétique destinée à guider l’utilisateur vers les différentes sections de l’application ou du site web.",
    tags: ["HTML & CSS", "JavaScript"],
    githubUrl: "https://github.com/WilsonFrederique/ACCUEIL.git",
    type: "Front-end",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-yellow-500/20",
    icon: "fas fa-graduation-cap"
  }
];

const IndexPages: React.FC = () => {

    const [result, setResult] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);

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

    // Plus de projet 
    const ProjectsModal = () => {
        if (!showMoreProjects) return null;

        const projectImages = {
            4: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            5: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            6: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            7: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            8: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            9: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            10: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            11: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            12: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            13: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            14: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            15: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            16: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            17: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            18: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
        };

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                {/* Backdrop avec animation */}
                <div 
                    className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setShowMoreProjects(false)}
                ></div>
                
                {/* Conteneur principal */}
                <div className="relative w-full max-w-6xl bg-slate-800 rounded-2xl shadow-2xl borders border-slate-700 max-h-[90vh] flex flex-col overflow-hidden">
                    {/* En-tête fixe avec effet de verre */}
                    <div className="sticky top-0 z-10 bg-slate-800/80 backdrop-blur-md px-6 py-4 border-b border-slate-700/50">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                Mes Projets Supplémentaires
                            </h3>
                            <button 
                                className="p-2 text-gray-400 hover:text-white rounded-full bg-slate-900/30 hover:bg-slate-700 transition-all duration-200"
                                onClick={() => setShowMoreProjects(false)}
                                aria-label="Fermer la modal"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Contenu scrollable avec padding responsive */}
                    <div className="overflow-y-auto flex-1 p-4 sm:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {additionalProjects.map(project => (
                                <div 
                                    key={project.id} 
                                    className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Carte de projet avec effet de hover amélioré */}
                                    <div className="cursor-pointer h-full flex flex-col bg-slate-900/20 borders border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-slate-700/30">
                                        {/* Image avec overlay gradient */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img 
                                                src={projectImages[project.id as keyof typeof projectImages]} 
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-80`}></div>
                                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                                            
                                            {/* Badge type de projet */}
                                            <div className="absolute top-3 right-3">
                                                <span className="text-xs px-2.5 py-1 rounded-full backdrop-blur-sm bg-slate-900/80 text-indigo-300 font-medium flex items-center">
                                                    <i className={`fas fa-${project.type === 'Mobile' ? 'mobile-alt' : 'globe'} mr-1.5 text-[0.65rem]`}></i> 
                                                    {project.type}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Contenu texte */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
                                                {project.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                                {project.description}
                                            </p>
                                            
                                            {/* Tags technologies */}
                                            <div className="mt-auto flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span 
                                                        key={tag} 
                                                        className="text-xs px-2.5 py-1 rounded-full bg-slate-700/70 text-slate-300 hover:bg-slate-600/70 transition-colors duration-150"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Overlay hover */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                            <span className="text-white text-sm font-medium flex items-center">
                                                Voir les détails
                                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Pied de page fixe avec stats */}
                    <div className="sticky bottom-0 bg-slate-800/80 backdrop-blur-md px-6 py-3 border-t border-slate-700/50">
                        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                            <div className="items-center mb-2 sm:mb-0">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                                {/* <span>{additionalProjects.length} projets disponibles</span> */}
                                <span>Projets disponibles</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span>Cliquez sur un projet pour voir les détails</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Detail Projet 
    const ProjectDetailModal = () => {
        if (!selectedProject) return null;

        const projectDetailImages = {
            4: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            5: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            6: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            7: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            8: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            9: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            10: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            11: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            12: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            13: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            14: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            15: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            16: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            17: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            18: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
        };

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                {/* Backdrop avec animation */}
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
                    onClick={() => setSelectedProject(null)}
                ></div>
                
                {/* Contenu principal de la modal */}
                <div className="relative w-full max-w-4xl bg-slate-800 rounded-xl shadow-2xl borderSeb border-slate-700 overflow-hidden flex flex-col max-h-[90vh] animate-scale-in">
                    {/* Bouton de fermeture */}
                    <button 
                        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 bg-slate-800/50 rounded-full hover:bg-slate-700/70 shadow-lg"
                        onClick={() => setSelectedProject(null)}
                        aria-label="Fermer la modal"
                    >
                        <i className="fas fa-times text-xl"></i>
                    </button>
                    
                    {/* En-tête avec image */}
                    <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                        <img 
                            src={projectDetailImages[selectedProject.id as keyof typeof projectDetailImages]}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${selectedProject.gradientFrom} ${selectedProject.gradientTo} opacity-70 transition-opacity duration-300`}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70"></div>
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                            <h3 className="size-responsive text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{selectedProject.title}</h3>
                            <div className="flex items-center mt-2 flex-wrap gap-2">
                                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 backdrop-blur-sm">
                                    <i className={`fas fa-${selectedProject.type === 'Mobile' ? 'mobile-alt' : 'globe'} mr-1 text-[0.6rem]`}></i> 
                                    {selectedProject.type}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-300 backdrop-blur-sm bg-slate-800/30 px-2 py-1 rounded-full">
                                    {selectedProject.tags.length} technologie{selectedProject.tags.length > 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contenu scrollable */}
                    <div className="overflow-y-auto flex-1 p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col gap-6 md:gap-8">
                            {/* Description et technologies */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center">
                                        <i className="fas fa-align-left text-indigo-400 mr-2 text-sm"></i>
                                        Description du projet
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                        {selectedProject.description}
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center">
                                        <i className="fas fa-code text-emerald-400 mr-2 text-sm"></i>
                                        Technologies utilisées
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span 
                                                key={tag} 
                                                className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-slate-700 text-slate-300 flex items-center hover:bg-slate-600 transition-colors duration-200"
                                            >
                                                <i className="fas fa-check-circle text-emerald-400 mr-2 text-xs"></i>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Liens et détails techniques */}
                            <div className="bg-slate-700/30 rounded-xl p-4 sm:p-6 borderSe border-slate-700 hover:border-slate-600 transition-colors duration-300">
                                <div className="space-y-6">
                                    {/* Liens */}
                                    <div>
                                        <h4 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center">
                                            <i className="fas fa-link text-blue-400 mr-2 text-sm"></i>
                                            Liens du projet
                                        </h4>
                                        <div className="space-y-3">
                                            <a 
                                                href={selectedProject.githubUrl} 
                                                className="block px-4 py-3 bg-slate-600/20 hover:bg-slate-600/30 text-white rounded-lg transition-all duration-300 group hover:shadow-md"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(selectedProject.githubUrl, '_blank');
                                                }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center mr-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                                        <i className="fab fa-github text-lg"></i>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium truncate">Code source</div>
                                                        <div className="text-xs text-gray-400 group-hover:text-gray-300 truncate transition-colors duration-300">
                                                            GitHub Repository
                                                        </div>
                                                    </div>
                                                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"></i>
                                                </div>
                                            </a>

                                            {selectedProject.demoUrl && (
                                                <a 
                                                    href={selectedProject.demoUrl} 
                                                    className="block px-4 py-3 bg-slate-600/20 hover:bg-slate-600/30 text-white rounded-lg transition-all duration-300 group hover:shadow-md"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center mr-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                                            <i className="fas fa-external-link-alt text-lg"></i>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="font-medium truncate">Démo live</div>
                                                            <div className="text-xs text-gray-400 group-hover:text-gray-300 truncate transition-colors duration-300">
                                                                Voir en action
                                                            </div>
                                                        </div>
                                                        <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"></i>
                                                    </div>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Détails techniques */}
                                    <div className="pt-4 border-t border-slate-700">
                                        <h4 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center">
                                            <i className="fas fa-cogs text-purple-400 mr-2 text-sm"></i>
                                            Détails techniques
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start group">
                                                <i className="fas fa-check-circle text-emerald-400 mt-1 mr-3 text-sm group-hover:animate-pulse"></i>
                                                <span className="text-gray-400 flex-1 group-hover:text-gray-300 transition-colors duration-200">
                                                    Architecture moderne et scalable avec une séparation claire des couches
                                                </span>
                                            </li>
                                            <li className="flex items-start group">
                                                <i className="fas fa-check-circle text-emerald-400 mt-1 mr-3 text-sm group-hover:animate-pulse"></i>
                                                <span className="text-gray-400 flex-1 group-hover:text-gray-300 transition-colors duration-200">
                                                    Code propre, bien documenté et suivant les meilleures pratiques
                                                </span>
                                            </li>
                                            <li className="flex items-start group">
                                                <i className="fas fa-check-circle text-emerald-400 mt-1 mr-3 text-sm group-hover:animate-pulse"></i>
                                                <span className="text-gray-400 flex-1 group-hover:text-gray-300 transition-colors duration-200">
                                                    Optimisation des performances et temps de chargement
                                                </span>
                                            </li>
                                            <li className="flex items-start group">
                                                <i className="fas fa-check-circle text-emerald-400 mt-1 mr-3 text-sm group-hover:animate-pulse"></i>
                                                <span className="text-gray-400 flex-1 group-hover:text-gray-300 transition-colors duration-200">
                                                    Tests unitaires et d'intégration pour une meilleure maintenabilité
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pied de page avec bouton de fermeture */}
                    <div className="borders sticky bottom-0 from-slate-800 to-transparent pt-8 pb-4 px-6 flex justify-end">
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full font-medium transition-all duration-300 flex items-center shadow hover:shadow-lg"
                        >
                            <span>Fermer</span>
                            <i className="fas fa-times ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Service 
    type ServiceDetailModalProps = {
        service: string;
        onClose: () => void;
    };
    // Service modal
    const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
        const services = {
            'web-dev': {
                title: "Développement Web",
                icon: "fas fa-code",
                color: "indigo",
                description: "Je crée des sites web modernes, performants et entièrement responsives, adaptés aux besoins spécifiques de votre entreprise. Mes solutions sur mesure utilisent les dernières technologies web pour offrir une expérience utilisateur exceptionnelle.",
                features: [
                    "Sites vitrines modernes et responsives",
                    "Applications web sur mesure",
                    "Plateformes e-commerce",
                    "Système de prêt de documents",
                    "Gestion des commandes et facturation",
                    "Suivi des prestations sociales"
                ],
                technologies: ["React", "Vue.js", "TypeScript", "Node.js", "Express", "Laravel", "PHP", "MySQL", "PostgreSQL", "HTML5 & CSS3", "JavaScript"]
            },
            'frontend': {
                title: "Intégration Front-end",
                icon: "fas fa-laptop-code",
                color: "blue",
                description: "Je développe des interfaces utilisateur fluides et intuitives en utilisant les meilleures pratiques du marché. Mes intégrations sont parfaitement compatibles avec tous les appareils et navigateurs.",
                features: [
                    "Interfaces utilisateur réactives",
                    "Animations fluides et modernes",
                    "Optimisation des performances",
                    "Compatibilité multi-navigateurs",
                    "Maintenance et support technique",
                    "Tests utilisateurs"
                ],
                technologies: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Vue.js", "Bootstrap", "Tailwind CSS"]
            },
            'maintenance': {
                title: "Maintenance & Optimisation",
                icon: "fas fa-tools",
                color: "emerald",
                description: "Je propose des services complets de maintenance pour garder votre site web à jour, sécurisé et performant. Mes optimisations peuvent considérablement améliorer la vitesse et l'expérience utilisateur.",
                features: [
                    "Mises à jour de sécurité",
                    "Correction de bugs",
                    "Optimisation des performances",
                    "Amélioration du SEO",
                    "Support technique"
                ],
                technologies: ["Git"]
            },
            'digital': {
                title: "Digitalisation des Processus",
                icon: "fas fa-digital-tachograph",
                color: "purple",
                description: "Je transforme vos processus métiers en solutions numériques efficaces pour automatiser les tâches répétitives, améliorer la productivité et réduire les erreurs humaines.",
                features: [
                    "Workflows personnalisés",
                    "Tableaux de bord analytiques",
                    "Intégration avec systèmes existants",
                    "Solutions sur mesure",
                    "Interfaces intuitives"
                ],
                technologies: ["HTML5 & CSS3", "React", "TypeScript", "Vue.js", "Node.js", "Express", "Laravel", "MySQL", "PostgreSQL", "API REST"]
            },
            'database': {
                title: "Bases de Données",
                icon: "fas fa-database",
                color: "amber",
                description: "Je conçois et optimise des structures de données robustes pour garantir la performance, la sécurité et l'évolutivité de vos applications.",
                features: [
                    "Conception de schémas relationnels",
                    "Optimisation des requêtes",
                    "Migration de données"
                ],
                technologies: ["MySQL", "PostgreSQL", "SQLite"]
            },
            'api': {
                title: "API RESTful",
                icon: "fas fa-plug",
                color: "red",
                description: "Je développe des API modernes, sécurisées et documentées qui permettent à vos différents systèmes de communiquer efficacement entre eux.",
                features: [
                    "Conception d'API RESTful selon les standards",
                    "Authentification sécurisée",
                    "Intégration avec systèmes existants",
                    "Système de pagination",
                    "Versioning des API"
                ],
                technologies: ["Node & Express.js", "Laravel", "API REST", "OAuth2", "Postman"]
            }
        };

        const selected = services[service as keyof typeof services];

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                {/* Backdrop */}
                <div 
                    className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
                    onClick={onClose}
                ></div>
                
                {/* Contenu modal */}
                <div className={`relative w-full max-w-2xl mx-4 bg-slate-800 rounded-2xl shadow-2xl borderSe border-${selected.color}-500/30 overflow-hidden animate-scale-in`}>
                    {/* Header */}
                    <div className={`sticky top-0 z-10 bg-gradient-to-r from-${selected.color}-500/10 to-${selected.color}-600/10 px-4 sm:px-6 py-3 sm:py-4 border-b border-${selected.color}-500/20`}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                                <i className={`${selected.icon} text-${selected.color}-400 mr-2 sm:mr-3 text-lg sm:text-xl`}></i>
                                <span className='txt-responsive'>{selected.title}</span>
                            </h3>
                            <button 
                                className="p-1 sm:p-2 text-gray-400 hover:text-white rounded-full bg-slate-700/50 hover:bg-slate-700 transition-all duration-200"
                                onClick={onClose}
                                aria-label="Fermer la modal"
                            >
                                <i className="fas fa-times text-sm sm:text-base"></i>
                            </button>
                        </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="overflow-y-auto max-h-[calc(100vh-450px)] sm:max-h-[70vh] p-4 sm:p-6">
                        <div className="mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Description</h4>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                {selected.description}
                            </p>
                        </div>
                        
                        <div className="mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Services Offerts</h4>
                            <ul className="space-y-1 sm:space-y-2">
                                {selected.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className={`fas fa-check-circle text-${selected.color}-400 mt-1 mr-2 sm:mr-3 text-xs sm:text-sm`}></i>
                                        <span className="text-gray-400 flex-1 text-sm sm:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies utilisées</h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                {selected.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-700 text-slate-300 hover:bg-${selected.color}-500/20 hover:text-${selected.color}-400 transition-colors duration-200`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="bordert sticky bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between border-t border-slate-700/50">
                        <div className="flex items-center text-xs sm:text-sm text-slate-400 mb-2 sm:mb-0">                            
                            <p><i className="fas fa-info-circle mr-1 sm:mr-2 text-indigo-400"></i> <span>Bien plus selon vos besoins</span></p>
                        </div>
                        <button 
                            onClick={onClose}
                            className={`px-3 sm:px-5 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 flex items-center 
                                bg-${selected.color}-500/10 borders border-${selected.color}-500/20 
                                text-${selected.color}-400 hover:text-white hover:bg-${selected.color}-500/20 
                                shadow-sm hover:shadow-md text-sm sm:text-base`}
                        >
                            <span>Fermer</span>
                            <i className="fas fa-times ml-1 sm:ml-2 text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    };


    // Gestion de l'envoi du formulaire de contact
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Active l'état de chargement
        setResult("Sending...");

        try {
            const formData = new FormData(event.currentTarget);
            const objetInput = event.currentTarget.elements.namedItem("objet") as HTMLInputElement;
            if (objetInput && !formData.get("objet")) {
                formData.append("objet", objetInput.value);
            }

            formData.append("access_key", "325c281e-dbbb-45d2-b20f-49ea0d8250a9");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message envoyé avec succès !", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                event.currentTarget.reset();
            } else {
                console.error("Error", data);
                toast.error(data.message || "Une erreur s'est produite", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error("Request failed", error);
        } finally {
            setIsLoading(false); // Désactive l'état de chargement
        }
    };

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
                        <a href="#services" className="block text-white hover:text-indigo-300 transition-all-smooth font-medium menu-item flex items-center">
                            <i className="fas fa-handshake mr-3 text-yellow-700 w-4 text-center"></i>Services
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
                            <h2 className="responsive responsive-margin text-lg md:text-xl text-indigo-400 mb-4 font-medium">Bonjour, je suis</h2>
                            <h1 className="responsive text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Wilson <span className="gradient-text">Frederique</span>
                            </h1>
                            
                            <div className="responsive mb-6">
                                <h2 className="text-xl md:text-2xl font-medium">
                                    <span className="text-gray-300">Développeur </span>
                                    <span className="gradient-text">Full Stack</span>
                                </h2>
                            </div>
                            
                            <div className="responsive">
                                <p className="responsive-txt text-left text-gray-400 text-base md:text-lg mb-8 max-w-lg  lg:mx-0">
                                    Développeur Full Stack passionné, spécialisé en React.js, TypeScript, Express.js, Node.js, PHP, Laravel, je conçois des interfaces web modernes offrant une expérience utilisateur fluide, intuitive et optimisée.
                                </p>
                            </div>
                            
                            <div className="responsive text-left flex flex-col sm:flex-row gap-4  lg:justify-start">
                                <a href={CV} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all-smooth transform hover:-translate-y-0.5 btn-shadow flex items-center justify-center">
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
                                <a href="https://github.com/WilsonFrederique" className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow">
                                    <i className="fab fa-github text-lg"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/wilson-frederique-500b82352?" className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow">
                                    <i className="fab fa-linkedin-in text-lg"></i>
                                </a>
                                <a
                                    href="https://wa.me/261344596117"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-700/50 hover:bg-green-400/10 rounded-full flex items-center justify-center text-gray-300 hover:text-green-400 transition-all duration-300 shadow"
                                    >
                                    <i className="fab fa-whatsapp text-lg"></i>
                                </a>
                                <a
                                    href="https://discord.com/users/1384846261013975061"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-700/50 hover:bg-indigo-500/10 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all duration-300 shadow"
                                    >
                                    <i className="fab fa-discord text-lg"></i>
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
                                        <div className="text-emerald-400 mb-2">// Développeur Full Stack avec 3 ans d'expérience</div>
                                        <div className="text-slate-400 mb-4">
                                            <span className="text-purple-400">const</span>{' '}
                                            <span className="text-blue-400">WilsonFrederique</span>{' '}
                                            <span className="text-slate-400">= {'{'}</span>
                                        </div>

                                        <div className="ml-4 text-sky-300 mb-1">
                                            skills: <span className="text-slate-400">[</span>
                                        </div>
                                        <div className="ml-8 text-amber-300 font-medium">
                                            'HTML & CSS', 'JavaScript', 'React', 'TypeScript',
                                        </div>
                                        <div className="ml-8 text-amber-300 font-medium">
                                            'Express', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL'
                                        </div>
                                        <div className="ml-4 text-sky-300">
                                            <span className="text-slate-400">],</span>
                                        </div>

                                        <div className="ml-4 text-sky-300">
                                            specialty:{' '}
                                            <span className="text-lime-300">"Applications web performantes"</span>
                                            <span className="text-slate-400">,</span>
                                        </div>

                                        <div className="ml-4 text-sky-300">
                                            available: <span className="text-emerald-400">true</span>
                                        </div>

                                        <div className="text-slate-400">{"}"}</div>
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
            
            {/* <!-- Social Media Floating Bar --> */}
            <div className="fixed none-responsive left-responsive bottom-1/2 transform translate-y-1/2 hidden lg:flex flex-col items-center space-y-4 z-20">
                <a href="https://github.com/WilsonFrederique" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all transform hover:-translate-y-1 shadow-lg">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/wilson-frederique-500b82352?" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-full flex items-center justify-center text-white transition-all transform hover:-translate-y-1 shadow-lg">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/261344596117" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-green-400 rounded-full flex items-center justify-center text-white transition-all transform hover:-translate-y-1 shadow-lg">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://discord.com/users/1384846261013975061" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-indigo-500 rounded-full flex items-center justify-center text-white transition-all transform hover:-translate-y-1 shadow-lg">
                    <i className="fab fa-discord"></i>
                </a>
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500 to-transparent mx-auto"></div>
            </div>
            
            {/* <!-- Email Floating Link --> */}
            <div className="fixed none-responsive right-responsive bottom-1/2 transform translate-y-1/2 hidden lg:flex flex-col items-center space-y-4 z-20">
                <div className="text-gray-400 text-sm rotate-90 mb-20 tracking-wider">
                    <a href="mailto:wilsonfrederique3@gmail.com" className="hover:text-blue-400 transition">wilsonfrederique3@gmail.com</a>
                </div>
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-emerald-500 to-transparent mx-auto"></div>
            </div>

            {/* About Section */}
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
                        <div className="lg:w-2/5 mb-12 lg:mb-0 flex justify-center animate-fade-in">
                            {/* <div className="relative size md:w-80 md:h-80 hexagon gradient-border overflow-hidden shadow-2xl"> */}
                                <div className="size md:w-80 md:h-80 hexagon overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 z-10"></div>
                                <img src={Profil2}
                                    alt="Wilson Frederique"
                                    className="h-full object-cover" />
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
                                        Création d'applications web modernes en utilisant les dernières technologies telles que React, Laravel, Node.js et Express.
                                    </p>
                                </div>
                                
                                <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700/50 transition-all-smooth card-hover">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                                        <i className="fas fa-mobile-alt text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Applications Mobile</h3>
                                    <p className="text-gray-400">
                                        Développement d'applications hybrides avec Flutter pour Android.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-7 flex gap-4 bg-slate-800 p-6 rounded-xl hover:bg-slate-700/70 transition duration-300 card-hover shadow-lg">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                                    <i className="size-icon fas fa-desktop text-2xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Développement Desktop</h3>
                                    <p className="text-slate-400 text-sm">Conception d'applications bureautiques performantes et ergonomiques.</p>
                                </div>
                            </div>

                            
                            <h3 className="text-2xl font-bold mb-4 text-white">Qui suis-je ?</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Je m'appelle Wilson Frederique, un passionné de développement web avec plus de 3 ans 
                                d'expérience dans la création d'applications web modernes et performantes.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Mon approche combine rigueur technique et sens créatif pour offrir des expériences utilisateur 
                                fluides et des architectures robustes. Je m'adapte rapidement aux nouvelles technologies pour 
                                toujours proposer des solutions à la pointe.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="px-6 py-3 gradient-bg hover:bg-indigo-700 text-white font-medium rounded-full transition-all-smooth flex items-center">
                                    <span>Voir mes projets</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                                
                                <a href="#contact" className="hover-moderne px-6 py-3 border border-gray-600 hover:border-indigo-400 text-white hover:text-indigo-400 font-medium rounded-full transition-all-smooth flex items-center">
                                    <span className='invisible-responsive'>Contactez-moi</span>
                                    <svg className="icon-responsive w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Timeline --> */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold mb-8 text-center text-white">Mon parcours professionnel</h3>
                        
                        <div className="relative pl-8 timeline">
                            {/* Timeline Item */}
                            <div className="relative mb-8 timeline-item">
                                <div className="bg-slate-800 p-6 rounded-xl card-hover hover:bg-slate-700/50 transition-all-smooth">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold gradient-text">2024 - Aujourd’hui</span>
                                        <span className="ml-auto text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">Full Stack</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Développeur Full Stack</h4>
                                    <p className='text-gray-500 mb-3'>École Nationale d’Informatique, Fianarantsoa – Madagascar</p>
                                    <p className="text-gray-400">
                                        Conception et développement d’applications web full stack en utilisant des technologies telles que React, TypeScript, Express, Node.js, PHP, Laravel, MySQL et PostgreSQL.
                                        Encadrement d’une équipe de développeurs juniors et mise en œuvre de bonnes pratiques de développement.
                                    </p>
                                </div>
                            </div>
                            
                            {/* <!-- Timeline Item --> */}
                            <div className="relative mb-8 timeline-item">
                                <div className="bg-slate-800 p-6 rounded-xl card-hover hover:bg-slate-700/50 transition-all-smooth">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold gradient-text">2023 - 2024</span>
                                        <span className="ml-auto text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">Frontend</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Développeur Frontend</h4>
                                    <p className="text-gray-500 mb-3">École Nationale d’Informatique, Fianarantsoa – Madagascar</p>
                                    <p className="text-gray-400">
                                        Développement d'interfaces utilisateur réactives avec React.js,
                                        collaboration étroite avec les designers pour des expériences utilisateur intuitives.
                                    </p>
                                </div>
                            </div>
                            
                            {/* <!-- Timeline Item --> */}
                            <div className="relative timeline-item">
                                <div className="bg-slate-800 p-6 rounded-xl card-hover hover:bg-slate-700/50 transition-all-smooth">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold gradient-text">2022 - 2023</span>
                                        <span className="ml-auto text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300">Junior</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Développeur Web Junior</h4>
                                    <p className='text-gray-500 mb-3'>École Nationale d’Informatique, Fianarantsoa – Madagascar</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* <!-- Frontend --> */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Stack technique</h3>
                            
                            <div className="space-y-6">
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fab fa-react text-blue-400 mr-3"></i> React & Vue.js
                                        </span>
                                        <span className="text-gray-500">80%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '80%' } as React.CSSProperties}></div>
                                    </div>
                                </div>

                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fab fa-js text-yellow-400 mr-3"></i> JavaScript & TypeScript
                                        </span>
                                        <span className="text-gray-500">75%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '75%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                                
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fab fa-node-js text-green-500 mr-3"></i> Bootstrap & Tailwind CSS
                                        </span>
                                        <span className="text-gray-500">70%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '70%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Backend  */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Stack Backend</h3>
                            
                            <div className="space-y-6">
                                {/* Node.js & Express */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                    <span className="font-medium flex items-center text-white">
                                        <i className="fab fa-css3-alt text-cyan-400 mr-3"></i> Node.js & Express
                                    </span>
                                    <span className="text-gray-500">83%</span>
                                    </div>
                                    <div className="skill-bar">
                                    <div className="skill-progress" style={{ '--target-width': '83%' } as React.CSSProperties}></div>
                                    </div>
                                </div>

                                {/* Laravel & PHP */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                    <span className="font-medium flex items-center text-white">
                                        <i className="fab fa-php text-blue-600 mr-3"></i> Laravel & PHP
                                    </span>
                                    <span className="text-gray-500">76%</span>
                                    </div>
                                    <div className="skill-bar">
                                    <div className="skill-progress" style={{ '--target-width': '76%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                                
                                {/* MySQL & PostgreSQL */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                    <span className="font-medium flex items-center text-white">
                                        <i className="fas fa-database text-yellow-500 mr-3"></i> MySQL & PostgreSQL
                                    </span>
                                    <span className="text-gray-500">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                    <div className="skill-progress" style={{ '--target-width': '85%' } as React.CSSProperties}></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Compétences professionnelles */}
                        <div>
                            <h3 className="fs-moderne text-2xl font-bold mb-6 text-white">Compétences professionnelles</h3>
                            
                            <div className="space-y-6">
                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fas fa-users text-green-400 mr-3"></i> Travail d'équipe & Communication
                                        </span>
                                        <span className="text-gray-500">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '85%' } as React.CSSProperties}></div>
                                    </div>
                                </div>

                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fas fa-project-diagram text-purple-400 mr-3"></i> Créativité
                                        </span>
                                        <span className="text-gray-500">80%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '80%' } as React.CSSProperties}></div>
                                    </div>
                                </div>

                                {/* <!-- Skill Item --> */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium flex items-center text-white">
                                            <i className="fas fa-lightbulb text-yellow-400 mr-3"></i> Résolution de problèmes
                                        </span>
                                        <span className="text-gray-500">70%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ '--target-width': '70%' } as React.CSSProperties}></div>
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
                                <i className="fas fa-database text-4xl text-yellow-400 mb-3"></i>
                                <span className="font-medium text-white">MySQL</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-database text-4xl text-[#336791] mb-3"></i>
                                <span className="font-medium text-white">PostgreSQL</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-code text-4xl text-blue-400 mb-3"></i>
                                <span className="font-medium text-white">VS Code</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <img src={AndroidStudio} alt="Android Studio" className="w-10 h-10 mb-3" />
                                <span className="font-medium text-white">Android Studio</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fab fa-github text-4xl text-gray-400 mb-3"></i>
                                <span className="font-medium text-white">GitHub & Git Bash</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-code text-4xl text-red-500 mb-3"></i>
                                <span className="font-medium text-white">Laravel</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-server text-4xl text-cyan-400 mb-3"></i>
                                <span className="font-medium text-white">REST API</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-mobile-alt text-4xl text-blue-400 mb-3"></i>
                                <span className="font-medium text-white">Flutter</span>
                            </div>
                            
                            {/* <!-- Tech Item --> */}
                            <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center card-hover hover:bg-slate-700/50 transition-all-smooth">
                                <i className="fas fa-project-diagram text-4xl text-green-400 mb-3"></i>
                                <span className="font-medium text-white">Visual Paradigm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectsModal />
            <ProjectDetailModal />

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
                        {/* Project 1 */}
                        <div className="relative overflow-hidden rounded-xl project-card bg-slate-800 hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative">
                                <i className="fas fa-graduation-cap text-6xl text-white opacity-20"></i>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                                        <i className="fas fa-globe mr-1 text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem]"></i> Full Stack
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">{additionalProjects[0].title}</h3>
                                <p className="text-gray-400 mb-5 line-clamp-3">
                                    {additionalProjects[0].description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {additionalProjects[0].tags.slice(0, 3).map((tag, index) => (
                                        <span key={index} className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    {/* Lien Détails */}
                                    <button 
                                        onClick={() => setSelectedProject(additionalProjects[0])}
                                        className="a-btn text-sm font-medium text-indigo-400 hover:text-white transition-all-smooth flex items-center group"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <i className="fas fa-external-link-alt mr-2"></i> 
                                            Détails
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    {/* Lien Code Source */}
                                    <a 
                                        href={additionalProjects[0].githubUrl} 
                                        className="a-btn text-sm font-medium text-gray-400 hover:text-white transition-all-smooth flex items-center group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(additionalProjects[0].githubUrl, '_blank');
                                        }}
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <i className="fab fa-github mr-2"></i> 
                                            Code source
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gray-400 to-gray-200 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 2 */}
                        <div className="relative overflow-hidden rounded-xl project-card bg-slate-800 hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="h-48 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center relative">
                                <i className="fas fa-chart-line text-6xl text-white opacity-20"></i>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                                        <i className="fas fa-globe mr-1 text-[0.6rem]"></i> Full Stack
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">{additionalProjects[1].title}</h3>
                                <p className="text-gray-400 mb-5 line-clamp-3">
                                    {additionalProjects[1].description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {additionalProjects[1].tags.slice(0, 4).map((tag, index) => (
                                        <span key={index} className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    {/* Lien Détails */}
                                    <button 
                                        onClick={() => setSelectedProject(additionalProjects[1])}
                                        className="a-btn text-sm font-medium text-indigo-400 hover:text-white transition-all-smooth flex items-center group"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <i className="fas fa-external-link-alt mr-2"></i> 
                                            Détails
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    {/* Lien Code Source */}
                                    <a 
                                        href={additionalProjects[1].githubUrl} 
                                        className="a-btn text-sm font-medium text-gray-400 hover:text-white transition-all-smooth flex items-center group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(additionalProjects[1].githubUrl, '_blank');
                                        }}
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <i className="fab fa-github mr-2"></i> 
                                            Code source
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gray-400 to-gray-200 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 3 */}
                        <div className="relative overflow-hidden rounded-xl project-card bg-slate-800 hover:bg-slate-700/50 transition-all-smooth card-hover">
                            <div className="h-48 bg-gradient-to-r from-pink-500/20 to-orange-500/20 flex items-center justify-center relative">
                                <i className="fas fa-mobile-alt text-6xl text-white opacity-20"></i>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">
                                        <i className="fas fa-mobile-alt mr-1 text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem]"></i> Mobile
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">{additionalProjects[2].title}</h3>
                                <p className="text-gray-400 mb-5 line-clamp-3">
                                    {additionalProjects[2].description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {additionalProjects[2].tags.slice(0, 4).map((tag, index) => (
                                        <span key={index} className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    {/* Lien Détails */}
                                    <button 
                                        onClick={() => setSelectedProject(additionalProjects[2])}
                                        className="a-btn text-sm font-medium text-indigo-400 hover:text-white transition-all-smooth flex items-center group"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <i className="fas fa-external-link-alt mr-2"></i> 
                                            Détails
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    {/* Lien Code Source */}
                                    <a 
                                        href={additionalProjects[2].githubUrl} 
                                        className="a-btn text-sm font-medium text-gray-400 hover:text-white transition-all-smooth flex items-center group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(additionalProjects[2].githubUrl, '_blank');
                                        }}
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <i className="fab fa-github mr-2"></i> 
                                            Code source
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gray-400 to-gray-200 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <button 
                            onClick={() => setShowMoreProjects(true)}
                            className="px-8 py-3 gradient-bg text-white rounded-full font-semibold hover:shadow-lg transition-all-smooth inline-flex items-center"
                        >
                            <span>Voir plus de projets</span>
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Service Section  */}
            <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Mes <span className="section-title gradient-text">Services</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Des solutions sur mesure pour répondre à tous vos besoins numériques
                        </p>
                    </div>
                    
                    {/* Première ligne de services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {/* Service 1 - Développement Web */}
                        <div className="relative group bg-slate-800/50 borderSe border-slate-700 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-code text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors duration-300">Développement Web</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Création de sites web modernes, performants et responsives, adaptés aux besoins des entreprises grâce à des solutions sur mesure utilisant les technologies web actuelles.
                                </p>
                                <button 
                                    onClick={() => setSelectedService('web-dev')}
                                    className="px-5 py-2 text-sm font-medium text-indigo-400 hover:text-white bg-slate-800/50 borderSeb border-indigo-500/20 rounded-lg hover:bg-indigo-500/10 transition-all duration-300 inline-flex items-center group"
                                >
                                    <span>En savoir plus</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </div>
                        </div>
                        
                        {/* Service 2 - Intégration Front-end */}
                        <div className="relative group bg-slate-800/50 borderSe border-slate-700 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-laptop-code text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">Intégration Front-end</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Développement d'interfaces web responsives et performantes avec HTML, CSS, JavaScript, Bootstrap, Tailwind, React et TypeScript, assurant compatibilité et accessibilité.
                                </p>
                                <button 
                                    onClick={() => setSelectedService('frontend')}
                                    className="px-5 py-2 text-sm font-medium text-blue-400 hover:text-white bg-slate-800/50 borderSeb border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center group"
                                >
                                    <span>En savoir plus</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </div>
                        </div>
                        
                        {/* Service 4 - Digitalisation */}
                        <div className="relative group bg-slate-800/50 borderSe border-slate-700 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-digital-tachograph text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">Digitalisation</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Développement d'applications sur mesure pour digitaliser et optimiser vos processus métiers, combinant performance technique et ergonomie intuitive.
                                </p>
                                <button 
                                    onClick={() => setSelectedService('digital')}
                                    className="px-5 py-2 text-sm font-medium text-purple-400 hover:text-white bg-slate-800/50 borderSeb border-purple-500/20 rounded-lg hover:bg-purple-500/10 transition-all duration-300 inline-flex items-center group"
                                >
                                    <span>En savoir plus</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Deuxième ligne de services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">                                               
                        {/* Service 5 - Bases de données */}
                        <div className="relative group bg-slate-800/50 borderSe border-slate-700 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-database text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors duration-300">Bases de données</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Conception et optimisation de bases MySQL & PostgreSQL, garantissant performance, sécurité et intégrité des données pour vos applications web.
                                </p>
                                <button 
                                    onClick={() => setSelectedService('database')}
                                    className="px-5 py-2 text-sm font-medium text-amber-400 hover:text-white bg-slate-800/50 borderSeb border-amber-500/20 rounded-lg hover:bg-amber-500/10 transition-all duration-300 inline-flex items-center group"
                                >
                                    <span>En savoir plus</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </div>
                        </div>
                        
                        {/* Service 6 - API RESTful */}
                        <div className="relative group bg-slate-800/50 borderSe border-slate-700 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-plug text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">API RESTful</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Conception et développement d'API robustes, sécurisées et performantes, facilitant l'échange de données entre applications.
                                </p>
                                <button 
                                    onClick={() => setSelectedService('api')}
                                    className="px-5 py-2 text-sm font-medium text-red-400 hover:text-white bg-slate-800/50 borderSeb border-red-500/20 rounded-lg hover:bg-red-500/10 transition-all duration-300 inline-flex items-center group"
                                >
                                    <span>En savoir plus</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </div>
                        </div>

                        {/* Service 3 - Maintenance */}
                        <div className="relative group bg-slate-800/50 borderSe border-slate-700 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-tools text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">Maintenance & Optimisation</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Maintenance, correction de bugs et optimisation pour améliorer la performance, l'accessibilité et le SEO de votre site web existant.
                                </p>
                                <button 
                                    onClick={() => setSelectedService('maintenance')}
                                    className="px-5 py-2 text-sm font-medium text-emerald-400 hover:text-white bg-slate-800/50 borderSeb border-emerald-500/20 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 inline-flex items-center group"
                                >
                                    <span>En savoir plus</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal pour les détails des services */}
                {selectedService && (
                    <ServiceDetailModal 
                        service={selectedService} 
                        onClose={() => setSelectedService(null)}
                    />
                )}
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
                            <form onSubmit={onSubmit} className="space-y-6">
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
                                    <input type="text" id="objet" name="objet" required 
                                        className="w-full px-4 py-3 bg-slate-800 borders border-slate-700 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 transition-all-smooth" 
                                        placeholder="Objet du message" />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                    <textarea name="message" id="message" rows={5} required 
                                        className="w-full px-4 py-3 bg-slate-800 borders border-slate-700 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 transition-all-smooth" 
                                        placeholder="Décrivez votre projet ou votre demande..."></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:shadow-lg transition-all-smooth transform hover:-translate-y-0.5 flex items-center justify-center"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            {/* Animation spirale */}
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi en cours...
                                        </div>
                                    ) : (
                                        <>
                                            <span>Envoyer le message</span>
                                            <i className="fas fa-paper-plane ml-2"></i>
                                        </>
                                    )}
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
                                        <a href="mailto:wilsonfrederique3@gmail.com" className="txt text-white hover:text-indigo-400 transition-all-smooth">wilsonfrederique3@gmail.com</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4 text-indigo-400 flex-shrink-0">
                                        <i className="fas fa-phone text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Téléphone</h4>
                                        <a href="tel:+261344596117" className="txt text-white hover:text-indigo-400 transition-all-smooth">+261 34 45 961 17</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4 text-indigo-400 flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Localisation</h4>
                                        <p className="txt text-white">Fianarantsoa, Madagascar</p>
                                    </div>
                                </div>
                            </div>
                                                       
                            <div className="mt-8">
                                <h4 className="text-sm font-medium text-gray-400 mb-4">Réseaux sociaux</h4>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/WilsonFrederique" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/wilson-frederique-500b82352?" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://wa.me/261344596117" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-green-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-green-400 transition-all-smooth">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="https://discord.com/users/1384846261013975061" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-indigo-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 transition-all-smooth">
                                        <i className="fab fa-discord"></i>
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
                            <a href="#services" className="hover:text-white transition-all-smooth">Services</a>
                            <a href="#contact" className="hover:text-white transition-all-smooth">Contact</a>
                        </div>
                        
                        <div className="flex space-x-6">
                            <a href="https://github.com/WilsonFrederique" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/wilson-frederique-500b82352?" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://wa.me/261344596117" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-all-smooth">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://discord.com/users/1384846261013975061" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-all-smooth">
                                <i className="fab fa-discord"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-slate-800 pt-8 text-center text-sm">
                        &copy; 2025 Wilson Frederique. Tous droits réservés.
                    </div>
                </div>
            </footer>

            {/* Back to Top Button  */}
            <button id="back-to-top" className="fixed bottom-8 right-8 w-12 h-12 gradient-bg rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all opacity-0 invisible z-40">
                <i className="fas fa-arrow-up"></i>
            </button>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </div>
    );
};

export default IndexPages;