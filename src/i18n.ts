export interface Translations {
  navbar: {
    toggleTheme: string;
    toggleLanguage: string;
  };
  hero: {
    bio: string;
    projects: string;
    experience: string;
    workflow: string;
    cv: string;
    contact: string;
  };
  bio: {
    sectionTitle: string;
    renderLabel: string;
    liveLabel: string;
    educationTitle: string;
    mastersDegree: string;
    mastersInstitution: string;
    mastersDescription: string;
    wpCourse: string;
    wpInstitution: string;
    wpDescription: string;
    manifestTitle: string;
    engineeredFor: string;
    optimInterfaces: string;
    bioP1: string;
    bioP2: string;
    uptimeLabel: string;
  };
  projects: {
    sectionTitle: string;
    wageDescription: string;
    eachtechDescription: string;
    tejadosDescription: string;
    braberDescription: string;
  };
  experience: {
    sectionTitle: string;
    role1Title: string;
    role1Date: string;
    role1Description: string;
    role2Title: string;
    role2Date: string;
    role2Description: string;
    role3Title: string;
    role3Date: string;
    role3Description: string;
  };
  workflow: {
    sectionTitle: string;
  };
  contact: {
    sectionTitle: string;
    heading: string;
    description: string;
    location: string;
    downloadCv: string;
  };
  footer: {
    copyright: string;
  };
  mobileNav: {
    root: string;
    code: string;
    path: string;
    ping: string;
  };
  sectionHeader: {
    prefix: string;
  };
}

export const en: Translations = {
  navbar: {
    toggleTheme: 'Toggle theme',
    toggleLanguage: 'Switch to Spanish',
  },
  hero: {
    bio: 'BIO',
    projects: 'PROJECTS',
    experience: 'EXPERIENCE',
    workflow: 'MY WORKFLOW',
    cv: 'CV',
    contact: 'CONTACT',
  },
  bio: {
    sectionTitle: 'BIO',
    renderLabel: 'RENDER: WORKSTATION.OBJ',
    liveLabel: 'LIVE',
    educationTitle: 'EDUCATION.MD',
    mastersDegree: "Master's Degree in Web Development & UX/UI Design",
    mastersInstitution: 'C.E.I. - 2023',
    mastersDescription:
      'Core front-end development fundamentals: HTML, CSS, JavaScript, React, and working knowledge of Figma.',
    wpCourse: 'WordPress Fundamentals & Core Development Course',
    wpInstitution: 'Discovery Formación - 2024',
    wpDescription:
      'WordPress CMS & Elementor Builder Specialization — Advanced CSS3 customization and template design.',
    manifestTitle: 'MANIFEST.MD',
    engineeredFor: 'ENGINEERED FOR',
    optimInterfaces: 'OPTIM INTERFACES',
    bioP1:
      'Front-end developer specializing in high-performance, accessible, and scalable web interfaces. I architect robust UI systems with a focus on determinism and zero-latency experiences — combining technical precision with a genuine passion for rich, innovative design.',
    bioP2:
      "Beyond the code, I'm a collaborative problem-solver who communicates clearly, adapts to fast-moving teams, and maintains a high bar for quality at every stage. I integrate AI-assisted development workflows — particularly Claude Code — to define agents, skills, and development contexts through a Spec-Driven approach.",
    uptimeLabel: 'UPTIME:',
  },
  projects: {
    sectionTitle: 'PROJECTS',
    wageDescription:
      'A dynamic and intuitive SaaS app that offers fresh and useful salary statistical data for U.E. professionals. Compare, analyze and evaluate your earnings and career possibilities as a professional worker in the european job market.',
    eachtechDescription:
      "Tech moves fast. Stay on top of the latest news and updates, one story at a time. Don't get left behind and visit Each One Tech One news web.",
    tejadosDescription: 'Roofing business web',
    braberDescription: 'Building & Remodeling Studio business web',
  },
  experience: {
    sectionTitle: 'CAREER_LOG',
    role1Title: 'Junior Front-End Developer · UX/UI Designer',
    role1Date: 'FEB 2025 - APR 2026',
    role1Description:
      'Front-End Web Development. UI design in Figma. React + Vite for component-driven development. Styling with Tailwind CSS and Shadcn UI. Git-based version control with Vercel for continuous deployment. On-page SEO strategies implementation and performance tracking through Google Search Console. RESTful API integration using Axios for seamless backend connectivity.',
    role2Title: 'Web Designer',
    role2Date: 'FEB 2024 - JAN 2025',
    role2Description:
      'Turn Figma prototypes into live websites using WordPress CMS and Elementor. Kept projects running smoothly through ongoing maintenance and on-page SEO improvements.',
    role3Title: 'FRONT-END SaaS Developer',
    role3Date: 'SEPT 2023 - FEB 2024',
    role3Description:
      'Developed front-end experiences for SaaS and web applications, working directly with clients to translate their needs into clean, functional UX/UI. Followed an API-first approach throughout.',
  },
  workflow: {
    sectionTitle: 'MY WORKFLOW',
  },
  contact: {
    sectionTitle: 'INIT_CONNECTION',
    heading: 'AVAILABLE FOR HIRING',
    description:
      'Currently available for front-end roles focused on high-performance interfaces and exceptional user experiences across web and mobile.',
    location: 'Spain & U.E.',
    downloadCv: 'DOWNLOAD CV (PDF)',
  },
  footer: {
    copyright: '© 2024 LOMBARDERO INFRASTRUCTURE. ALL_SYSTEMS_OPERATIONAL.',
  },
  mobileNav: {
    root: 'ROOT',
    code: 'CODE',
    path: 'PATH',
    ping: 'PING',
  },
  sectionHeader: {
    prefix: 'SECTION',
  },
};

export const es: Translations = {
  navbar: {
    toggleTheme: 'Cambiar tema',
    toggleLanguage: 'Switch to English',
  },
  hero: {
    bio: 'BIO',
    projects: 'PROYECTOS',
    experience: 'EXPERIENCIA',
    workflow: 'MI WORKFLOW',
    cv: 'CV',
    contact: 'CONTACTO',
  },
  bio: {
    sectionTitle: 'BIO',
    renderLabel: 'RENDER: WORKSTATION.OBJ',
    liveLabel: 'EN VIVO',
    educationTitle: 'EDUCATION.MD',
    mastersDegree: 'Máster en Desarrollo Web y Diseño UX/UI',
    mastersInstitution: 'C.E.I. - 2023',
    mastersDescription:
      'Fundamentos del desarrollo front-end: HTML, CSS, JavaScript, React y uso básico de Figma.',
    wpCourse: 'Curso de disño web con WordPress',
    wpInstitution: 'Discovery Formación. - 2024',
    wpDescription:
      'Especialización en WordPress CMS y Elementor — Personalización de elementos y plantillas con CSS3.',
    manifestTitle: 'MANIFIESTO.MD',
    engineeredFor: 'DISEÑADO PARA',
    optimInterfaces: 'INTERFACES ÓPTIMAS',
    bioP1:
      'Desarrollador front-end especializado en interfaces innovadoras, accesibles y escalables. Enfocado en proyectos con estructura modular, componentes altamente reutilizables y aplicaciones con latencia mínima, combinado con la creación de expriencias de usuario atractivas.',
    bioP2:
      'Más allá del código, soy un "problem-solver" colaborativo que se comunica con claridad, se adapta a equipos dinámicos, documentando de forma detallada cada commit del proyecto. Integro flujos de trabajo con IA — especialmente Claude Code — para definir agents, skills y otros archivos markdown para la creación de un contexto global previo orientado al Spect Driven Development durante toda la fase de desarrollo.',
    uptimeLabel: 'ACTIVO:',
  },
  projects: {
    sectionTitle: 'PROYECTOS',
    wageDescription:
      'Una app SaaS dinámica e intuitiva con datos salariales útiles para profesionales a nivel europeo. Compara, analiza y evalúa tus ingresos y posibilidades de carrera en el mercado laboral de la U.E.',
    eachtechDescription:
      'La tecnología avanza rápido. Mantente al día con las últimas noticias. Noticas frescas cada hora. No te quedes atrás y visita Each One Tech One.',
    tejadosDescription: 'Web para empresa de reparación y reformas de tejados',
    braberDescription: 'Web para estudio de construcción y reformas',
  },
  experience: {
    sectionTitle: 'TRAYECTORIA',
    role1Title: 'Desarrollador Front-End Junior · Diseñador UX/UI',
    role1Date: 'FEB 2025 - ABR 2026',
    role1Description:
      'Desarrollo web front-end. Diseño de UI en Figma. React + Vite para desarrollo orientado a webs con rendimineto optimo y escalabilidad. Estilos con Tailwind CSS y Shadcn UI, control de versiones con Git y Vercel para deploy final. SEO on-page e integración de APIs REST con Axios.',
    role2Title: 'Diseñador Web',
    role2Date: 'FEB 2024 - ENE 2025',
    role2Description:
      'Conversión de prototipos de Figma a proyectos WordPress CMS + Elementor. Mantenimiento continuo y mejoras de SEO on-page.',
    role3Title: 'Desarrollador Front-End SaaS',
    role3Date: 'SEPT 2023 - FEB 2024',
    role3Description:
      'Desarrollo de experiencias front-end para aplicaciones SaaS y web, trabajando directamente con clientes para adaptar sus necesidades en UX/UI funcional y limpia.',
  },
  workflow: {
    sectionTitle: 'MI FLUJO DE TRABAJO',
  },
  contact: {
    sectionTitle: 'INIT_CONEXIÓN',
    heading: 'DISPONIBLE PARA CONTRATAR',
    description:
      'Actualmente disponible para puestos front-end enfocados en interfaces de alto rendimiento y experiencias de usuario excepcionales en web y móvil.',
    location: 'España & U.E.',
    downloadCv: 'DESCARGAR CV (PDF)',
  },
  footer: {
    copyright: '© 2025 LOMBARDERO INFRASTRUCTURE. TODOS_LOS_SISTEMAS_OPERATIVOS.',
  },
  mobileNav: {
    root: 'INICIO',
    code: 'CÓDIGO',
    path: 'CARRERA',
    ping: 'CONTACTO',
  },
  sectionHeader: {
    prefix: 'SECCIÓN',
  },
};

export const translations = { en, es };
