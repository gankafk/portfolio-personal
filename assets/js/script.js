/* =====================================================================
   Juanma Escudier — Portfolio
   script.js — i18n (EN/ES), navigation, reveal animations, progress bars
   Vanilla JS, no dependencies.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Translation dictionary  { key: { en, es } }
        English is the baked-in default in the HTML.
  ------------------------------------------------------------------ */
  var I18N = {
    /* shared */
    "a11y.skip": { en: "Skip to content", es: "Saltar al contenido" },
    "arch.hint": { en: "Swipe to explore the full diagram", es: "Desliza para ver el diagrama completo" },
    "nav.home": { en: "Home", es: "Inicio" },
    "nav.skills": { en: "Skills", es: "Competencias" },
    "nav.projects": { en: "Projects", es: "Proyectos" },
    "nav.contact": { en: "Contact", es: "Contacto" },
    "footer.tagline": { en: "building reliable, automated infrastructure", es: "construyendo infraestructura fiable y automatizada" },
    "footer.build": { en: "Built with HTML, CSS, JavaScript · deployed on Cloudflare Pages", es: "Hecho con HTML, CSS, JavaScript · desplegado en Cloudflare Pages" },
    "footer.cv": { en: "CV (PDF)", es: "CV (PDF)" },

    /* hero */
    "hero.status": { en: "Available for remote &amp; relocation", es: "Disponible para teletrabajo y reubicación" },
    "hero.lead": {
      en: "Former biomedical researcher transitioning into Cloud Infrastructure and DevOps. Building cloud-native solutions with AWS, Linux, Terraform, Docker and automation.",
      es: "Investigador biomédico en transición hacia la Infraestructura Cloud y DevOps. Construyo soluciones cloud-native con AWS, Linux, Terraform, Docker y automatización."
    },
    "hero.cta.projects": { en: "View Projects", es: "Ver proyectos" },
    "hero.cta.cv": { en: "Download CV", es: "Descargar CV" },

    /* about */
    "about.label": { en: "about", es: "sobre mí" },
    "about.title": { en: "From scientific method to infrastructure", es: "Del método científico a la infraestructura" },
    "about.p1": {
      en: "Six years in <strong>biomedical research</strong> taught me to design experiments, analyse data and solve problems methodically — then communicate the results clearly. I now apply that same rigour to <strong>cloud infrastructure and automation</strong>.",
      es: "Seis años en <strong>investigación biomédica</strong> me enseñaron a diseñar experimentos, analizar datos y resolver problemas con método — y a comunicar los resultados con claridad. Aplico ese mismo rigor a la <strong>infraestructura cloud y la automatización</strong>."
    },
    "about.p2": {
      en: "Today I build and operate cloud-native systems: provisioning with <strong>Terraform</strong>, containerising with <strong>Docker</strong>, automating delivery with <strong>CI/CD</strong>, and running it all on <strong>Linux</strong> and <strong>AWS</strong>. I'm an ASIR student with a 9.73/10 GPA, certified on AWS and Azure.",
      es: "Hoy construyo y opero sistemas cloud-native: aprovisionando con <strong>Terraform</strong>, contenerizando con <strong>Docker</strong>, automatizando con <strong>CI/CD</strong> y ejecutándolo todo sobre <strong>Linux</strong> y <strong>AWS</strong>. Soy estudiante de ASIR con expediente de 9,73/10, certificado en AWS y Azure."
    },
    "about.stat.years": { en: "Years in research &amp; analysis", es: "Años en investigación y análisis" },
    "about.stat.gpa": { en: "ASIR GPA / 10", es: "Expediente ASIR / 10" },
    "about.stat.certs": { en: "Cloud certifications", es: "Certificaciones cloud" },
    "about.t1.h": { en: "Scientific methodology", es: "Método científico" },
    "about.t1.b": { en: "hypothesis, measurement, iteration applied to systems.", es: "hipótesis, medición e iteración aplicadas a los sistemas." },
    "about.t2.h": { en: "Data analysis", es: "Análisis de datos" },
    "about.t2.b": { en: "statistical thinking and structured problem-solving.", es: "pensamiento estadístico y resolución estructurada de problemas." },
    "about.t3.h": { en: "Technical communication", es: "Comunicación técnica" },
    "about.t3.b": { en: "documentation, publications, teaching to specialists.", es: "documentación, publicaciones y docencia a especialistas." },
    "about.t4.h": { en: "Autonomy", es: "Autonomía" },
    "about.t4.b": { en: "planning and delivering projects end to end.", es: "planificación y ejecución de proyectos de principio a fin." },
    "about.t5.h": { en: "University teaching", es: "Docencia universitaria" },
    "about.t5.b": { en: "supervised final-year and master's theses.", es: "dirección de Trabajos Fin de Grado y Fin de Máster." },

    /* certifications */
    "certs.label": { en: "certifications", es: "certificaciones" },
    "certs.title": { en: "Verified credentials", es: "Credenciales verificadas" },
    "certs.intro": { en: "Foundational cloud certifications across AWS and Azure.", es: "Certificaciones cloud fundamentales en AWS y Azure." },
    "certs.status.earned": { en: "Earned", es: "Obtenida" },
    "certs.status.planned": { en: "Planned", es: "Prevista" },
    "certs.verified": { en: "Verified", es: "Verificada" },

    /* timeline */
    "timeline.label": { en: "career path", es: "trayectoria" },
    "timeline.title": { en: "A deliberate transition into cloud", es: "Una transición meditada hacia el cloud" },
    "timeline.now": { en: "now", es: "ahora" },
    "tl.1.h": { en: "Biomedical Researcher", es: "Investigador biomédico" },
    "tl.1.b": { en: "Designed and ran research projects on exercise, health and depression. Data analysis, statistical thinking and technical documentation.", es: "Diseño y ejecución de proyectos de investigación sobre ejercicio, salud y depresión. Análisis de datos, pensamiento estadístico y documentación técnica." },
    "tl.1.tag": { en: "research · data · analysis", es: "investigación · datos · análisis" },
    "tl.2.h": { en: "University Lecturer", es: "Docente universitario" },
    "tl.2.b": { en: "Taught at university level and supervised final-year and master's theses — communicating complex technical content to varied audiences.", es: "Docencia universitaria y dirección de Trabajos Fin de Grado y Fin de Máster — comunicando contenido técnico complejo a audiencias diversas." },
    "tl.2.tag": { en: "teaching · communication", es: "docencia · comunicación" },
    "tl.3.h": { en: "ASIR Student", es: "Estudiante de ASIR" },
    "tl.3.org": { en: "Higher Diploma in Network Systems Administration · GPA 9.73/10", es: "Técnico Superior en Administración de Sistemas Informáticos en Red · Expediente 9,73/10" },
    "tl.3.b": { en: "Formal training in Linux administration, networking, virtualisation and databases.", es: "Formación reglada en administración Linux, redes, virtualización y bases de datos." },
    "tl.3.tag": { en: "linux · networking · systems", es: "linux · redes · sistemas" },
    "tl.4.h": { en: "Cloud &amp; DevOps Transition", es: "Transición a Cloud y DevOps" },
    "tl.4.org": { en: "Self-directed · hands-on labs &amp; projects", es: "Autodidacta · labs y proyectos prácticos" },
    "tl.4.b": { en: "AWS &amp; Azure certified. Building serverless projects, infrastructure as code with Terraform, containers and CI/CD pipelines.", es: "Certificado AWS y Azure. Construyendo proyectos serverless, infraestructura como código con Terraform, contenedores y pipelines CI/CD." },
    "tl.4.tag": { en: "aws · terraform · docker · ci/cd", es: "aws · terraform · docker · ci/cd" },

    /* generic CTA */
    "cta.title": { en: "Let's build reliable infrastructure", es: "Construyamos infraestructura fiable" },
    "cta.sub": { en: "Open to Junior Cloud, DevOps, Platform, Infrastructure and Systems roles — remote or relocation.", es: "Abierto a posiciones Junior de Cloud, DevOps, Plataforma, Infraestructura y Sistemas — remoto o reubicación." },
    "cta.projects": { en: "See the work", es: "Ver el trabajo" },
    "cta.contact": { en: "Get in touch", es: "Contactar" },

    /* contact */
    "contact.label": { en: "contact", es: "contacto" },
    "contact.title": { en: "Get in touch", es: "Hablemos" },
    "contact.intro": { en: "The fastest way to reach me is email or LinkedIn. No forms — just a direct line.", es: "La forma más rápida de contactarme es por email o LinkedIn. Sin formularios — una línea directa." },
    "contact.location": { en: "Location", es: "Ubicación" },
    "contact.langs": { en: "Languages", es: "Idiomas" },
    "contact.langs.v": { en: "Spanish (native) · English (B2–C1)", es: "Español (nativo) · Inglés (B2–C1)" },
    "contact.cvk": { en: "Résumé", es: "Currículum" },

    /* skills page */
    "skills.label": { en: "capabilities", es: "capacidades" },
    "skills.title": { en: "Technical skills matrix", es: "Matriz de competencias técnicas" },
    "skills.intro": { en: "A grouped view of the tools and platforms I work with across cloud, automation, infrastructure and programming.", es: "Una vista agrupada de las herramientas y plataformas con las que trabajo en cloud, automatización, infraestructura y programación." },
    "skills.cat.cloud": { en: "Cloud", es: "Cloud" },
    "skills.cat.devops": { en: "DevOps", es: "DevOps" },
    "skills.cat.infra": { en: "Infrastructure", es: "Infraestructura" },
    "skills.cat.prog": { en: "Programming", es: "Programación" },
    "skills.cat.secmon": { en: "Security &amp; Monitoring", es: "Seguridad y Monitorización" },
    "skills.item.sshhard": { en: "SSH hardening", es: "Hardening SSH" },
    "skills.item.netseg": { en: "Network segmentation", es: "Segmentación de red" },
    "skills.item.firewall": { en: "ufw firewall", es: "Firewall (ufw)" },
    "skills.item.networking": { en: "Networking", es: "Redes" },
    "skills.item.shell": { en: "Shell scripting", es: "Shell scripting" },
    "skills.cta.title": { en: "See these skills applied", es: "Ve estas competencias en acción" },
    "skills.cta.sub": { en: "Explore the projects where this stack comes together in production.", es: "Explora los proyectos donde este stack se une en producción." },

    /* learning lab */
    "lab.label": { en: "learning lab", es: "laboratorio" },
    "lab.title": { en: "Hands-on, always shipping", es: "Práctica constante, siempre construyendo" },
    "lab.intro": { en: "Ongoing practical labs where I build, break and automate real environments. Progress reflects current depth, not a finish line.", es: "Laboratorios prácticos continuos donde construyo, rompo y automatizo entornos reales. El progreso refleja mi nivel actual, no una meta final." },
    "lab.status.active": { en: "ACTIVE", es: "ACTIVO" },
    "lab.status.progress": { en: "IN PROGRESS", es: "EN CURSO" },
    "lab.progress": { en: "proficiency", es: "dominio" },
    "lab.linux.desc": { en: "System administration on the command line: users &amp; permissions, services, processes, networking and shell scripting.", es: "Administración de sistemas en línea de comandos: usuarios y permisos, servicios, procesos, redes y shell scripting." },
    "lab.aws.desc": { en: "Building serverless and static-hosting architectures: S3, CloudFront, Lambda, API Gateway, DynamoDB and IAM least-privilege.", es: "Construyendo arquitecturas serverless y de hosting estático: S3, CloudFront, Lambda, API Gateway, DynamoDB e IAM de mínimo privilegio." },
    "lab.docker.desc": { en: "Containerising applications, writing Dockerfiles, multi-stage builds, volumes, networks and Compose for local stacks.", es: "Contenerizando aplicaciones: Dockerfiles, builds multi-stage, volúmenes, redes y Compose para stacks locales." },
    "lab.terraform.desc": { en: "Provisioning AWS infrastructure as code: providers, variables, state, modules and reproducible environments.", es: "Aprovisionando infraestructura AWS como código: providers, variables, state, módulos y entornos reproducibles." },

    /* projects page */
    "projects.label": { en: "selected work", es: "trabajo destacado" },
    "projects.title": { en: "Featured projects", es: "Proyectos destacados" },
    "projects.intro": { en: "Real, deployed work — built end to end, from architecture and infrastructure as code to CI/CD and documentation.", es: "Trabajo real y desplegado — construido de principio a fin, desde la arquitectura y la infraestructura como código hasta el CI/CD y la documentación." },
    "projects.featured": { en: "FEATURED", es: "DESTACADO" },
    "projects.type.serverless": { en: "Serverless · AWS", es: "Serverless · AWS" },
    "projects.type.frontend": { en: "Web · Frontend", es: "Web · Frontend" },
    "projects.type.infra": { en: "Infrastructure · Self-hosted", es: "Infraestructura · Self-hosted" },
    "projects.lab.title": { en: "Linux + Cloud Infrastructure Lab", es: "Laboratorio de Infraestructura Linux + Cloud" },
    "projects.lab.desc": { en: "A production-style, three-tier infrastructure built from scratch on 4 virtualized Ubuntu servers. Segmented private network with bastion-only SSH access and hardening, an Nginx → Gunicorn → Flask → PostgreSQL stack and idempotent Bash automation — versioned and documented module by module. On the roadmap: Prometheus + Grafana monitoring, tested S3 backups and secure Cloudflare exposure.", es: "Una infraestructura de tres capas tipo producción, construida desde cero sobre 4 servidores Ubuntu virtualizados. Red privada segmentada con acceso SSH exclusivo por bastión y hardening, stack Nginx → Gunicorn → Flask → PostgreSQL y automatización idempotente con Bash — versionada y documentada módulo a módulo. En el roadmap: monitorización con Prometheus + Grafana, backups verificados a S3 y exposición segura con Cloudflare." },
    "projects.jazz.desc": { en: "A serverless web platform on AWS: static content served from S3 and distributed through CloudFront, with an API Gateway + Lambda backend and DynamoDB persistence. Provisioned with Terraform and shipped via GitHub Actions.", es: "Una plataforma web serverless en AWS: contenido estático servido desde S3 y distribuido con CloudFront, backend con API Gateway + Lambda y persistencia en DynamoDB. Aprovisionada con Terraform y desplegada con GitHub Actions." },
    "projects.btn.case": { en: "Case study", es: "Caso de estudio" },
    "projects.btn.live": { en: "Live demo", es: "Demo en vivo" },
    "projects.docs.title": { en: "This Portfolio", es: "Este portfolio" },
    "projects.docs.desc": { en: "The site you're on — a bilingual, fully static portfolio built from scratch with vanilla HTML, CSS and JavaScript. No frameworks: responsive, accessible, SEO-ready and deployed on Cloudflare Pages.", es: "El sitio en el que estás — un portfolio bilingüe totalmente estático, hecho desde cero con HTML, CSS y JavaScript puro. Sin frameworks: responsive, accesible, optimizado para SEO y desplegado en Cloudflare Pages." },
    "projects.more": { en: "more labs &amp; projects shipping from the Learning Lab", es: "más labs y proyectos saliendo del Laboratorio" },
    "projects.more.link": { en: "view the lab →", es: "ver el laboratorio →" },

    /* project detail: jazz */
    "jazz.label": { en: "case study · serverless", es: "caso de estudio · serverless" },
    "jazz.lead": { en: "A serverless web platform on AWS — static content delivered globally through CloudFront, a Lambda-backed API behind API Gateway, and DynamoDB for persistence. Infrastructure defined in Terraform and shipped continuously with GitHub Actions.", es: "Una plataforma web serverless en AWS — contenido estático distribuido globalmente con CloudFront, una API sobre Lambda detrás de API Gateway y DynamoDB para la persistencia. Infraestructura definida en Terraform y desplegada de forma continua con GitHub Actions." },
    "jazz.btn.repo": { en: "Source code", es: "Código fuente" },
    "jazz.btn.back": { en: "All projects", es: "Todos los proyectos" },
    "jazz.spec.role": { en: "Role", es: "Rol" },
    "jazz.spec.role.v": { en: "Design &amp; build", es: "Diseño y construcción" },
    "jazz.spec.pattern": { en: "Pattern", es: "Patrón" },
    "jazz.spec.pattern.v": { en: "Serverless", es: "Serverless" },
    "jazz.spec.cloud": { en: "Cloud", es: "Cloud" },
    "jazz.spec.iac": { en: "IaC + CI/CD", es: "IaC + CI/CD" },
    "jazz.arch.label": { en: "architecture", es: "arquitectura" },
    "jazz.arch.title": { en: "System architecture", es: "Arquitectura del sistema" },
    "jazz.arch.caption": { en: "Request flow: the browser hits CloudFront, which serves static assets from S3 and routes /api/* to API Gateway → Lambda → DynamoDB. IAM enforces least-privilege access.", es: "Flujo de petición: el navegador llega a CloudFront, que sirve los archivos estáticos desde S3 y enruta /api/* hacia API Gateway → Lambda → DynamoDB. IAM aplica el mínimo privilegio." },
    "jazz.ov.label": { en: "overview", es: "visión general" },
    "jazz.ov.title": { en: "What it is &amp; why I built it", es: "Qué es y por qué lo construí" },
    "jazz.ov.p1": { en: "Jazz en la Jungla is a production web platform built to a fully <strong>serverless</strong> design — no servers to patch, pay-per-use, and able to scale to zero. It was my vehicle for putting an end-to-end AWS architecture into practice: global static delivery, a managed API, and a NoSQL data layer, all reproducible from code.", es: "Jazz en la Jungla es una plataforma web en producción con un diseño totalmente <strong>serverless</strong> — sin servidores que parchear, pago por uso y capaz de escalar a cero. Fue mi vehículo para llevar a la práctica una arquitectura AWS de extremo a extremo: distribución estática global, una API gestionada y una capa de datos NoSQL, todo reproducible desde código." },
    "jazz.ov.p2": { en: "The goal was an architecture a team could trust: <strong>reproducible</strong> through infrastructure as code, <strong>automated</strong> through CI/CD, and <strong>secure</strong> through least-privilege IAM.", es: "El objetivo era una arquitectura en la que un equipo pudiera confiar: <strong>reproducible</strong> gracias a la infraestructura como código, <strong>automatizada</strong> con CI/CD y <strong>segura</strong> con IAM de mínimo privilegio." },
    "jazz.ov.h3": { en: "Highlights", es: "Puntos clave" },
    "jazz.ov.l1": { en: "<strong>Global, cached delivery</strong> — static front end on S3, distributed by CloudFront with HTTPS at the edge.", es: "<strong>Distribución global y cacheada</strong> — front estático en S3, distribuido por CloudFront con HTTPS en el edge." },
    "jazz.ov.l2": { en: "<strong>Managed API</strong> — API Gateway routes requests to Lambda functions; no servers to maintain.", es: "<strong>API gestionada</strong> — API Gateway enruta las peticiones a funciones Lambda; sin servidores que mantener." },
    "jazz.ov.l3": { en: "<strong>NoSQL persistence</strong> — DynamoDB for fast, scalable, fully managed storage.", es: "<strong>Persistencia NoSQL</strong> — DynamoDB para almacenamiento rápido, escalable y totalmente gestionado." },
    "jazz.ov.l4": { en: "<strong>Infrastructure as code</strong> — the whole stack is defined in Terraform and version-controlled.", es: "<strong>Infraestructura como código</strong> — todo el stack está definido en Terraform y versionado." },
    "jazz.ov.l5": { en: "<strong>Continuous deployment</strong> — GitHub Actions builds and ships changes on every push.", es: "<strong>Despliegue continuo</strong> — GitHub Actions construye y despliega los cambios en cada push." },
    "jazz.dec.label": { en: "engineering decisions", es: "decisiones de ingeniería" },
    "jazz.dec.title": { en: "Key decisions", es: "Decisiones clave" },
    "jazz.dec.1.q": { en: "// why serverless?", es: "// ¿por qué serverless?" },
    "jazz.dec.1.h": { en: "Serverless over EC2", es: "Serverless en lugar de EC2" },
    "jazz.dec.1.b": { en: "No instances to manage or patch, automatic scaling, and pay-per-request economics — ideal for variable, unpredictable traffic.", es: "Sin instancias que gestionar o parchear, escalado automático y pago por petición — ideal para tráfico variable e impredecible." },
    "jazz.dec.2.q": { en: "// why CloudFront + S3?", es: "// ¿por qué CloudFront + S3?" },
    "jazz.dec.2.h": { en: "CDN-first delivery", es: "Distribución CDN-first" },
    "jazz.dec.2.b": { en: "Caching static assets at the edge cuts latency worldwide and offloads origin traffic, while S3 gives durable, cheap hosting.", es: "Cachear los estáticos en el edge reduce la latencia global y descarga el origen, mientras S3 ofrece hosting duradero y barato." },
    "jazz.dec.3.q": { en: "// why Terraform?", es: "// ¿por qué Terraform?" },
    "jazz.dec.3.h": { en: "Infrastructure as code", es: "Infraestructura como código" },
    "jazz.dec.3.b": { en: "Declarative, reviewable and reproducible. The environment can be torn down and rebuilt identically — no console click-ops drift.", es: "Declarativa, revisable y reproducible. El entorno se puede destruir y reconstruir idéntico — sin drift por click-ops en la consola." },
    "jazz.dec.4.q": { en: "// why GitHub Actions?", es: "// ¿por qué GitHub Actions?" },
    "jazz.dec.4.h": { en: "Automated delivery", es: "Entrega automatizada" },
    "jazz.dec.4.b": { en: "Every push runs the pipeline, keeping deploys consistent and removing manual, error-prone release steps.", es: "Cada push ejecuta el pipeline, manteniendo despliegues consistentes y eliminando pasos manuales propensos a error." },
    "jazz.stack.label": { en: "tech stack", es: "stack técnico" },
    "jazz.stack.title": { en: "Stack &amp; responsibilities", es: "Stack y responsabilidades" },
    "jazz.stack.th.tech": { en: "Technology", es: "Tecnología" },
    "jazz.stack.th.layer": { en: "Layer", es: "Capa" },
    "jazz.stack.th.role": { en: "Responsibility", es: "Responsabilidad" },
    "jazz.stack.l.storage": { en: "Storage", es: "Almacenamiento" },
    "jazz.stack.l.delivery": { en: "Delivery", es: "Distribución" },
    "jazz.stack.l.api": { en: "API", es: "API" },
    "jazz.stack.l.compute": { en: "Compute", es: "Cómputo" },
    "jazz.stack.l.data": { en: "Data", es: "Datos" },
    "jazz.stack.l.iac": { en: "IaC", es: "IaC" },
    "jazz.stack.l.cicd": { en: "CI/CD", es: "CI/CD" },
    "jazz.stack.l.sec": { en: "Security", es: "Seguridad" },
    "jazz.stack.r.s3": { en: "Hosts the static front end (HTML, CSS, JS).", es: "Aloja el front estático (HTML, CSS, JS)." },
    "jazz.stack.r.cf": { en: "Global CDN with HTTPS and edge caching.", es: "CDN global con HTTPS y caché en el edge." },
    "jazz.stack.r.api": { en: "Exposes REST endpoints and routes to Lambda.", es: "Expone endpoints REST y enruta a Lambda." },
    "jazz.stack.r.lambda": { en: "Runs backend logic on demand, no servers.", es: "Ejecuta la lógica de backend bajo demanda, sin servidores." },
    "jazz.stack.r.ddb": { en: "Managed NoSQL persistence layer.", es: "Capa de persistencia NoSQL gestionada." },
    "jazz.stack.r.tf": { en: "Declarative provisioning of all resources.", es: "Aprovisionamiento declarativo de todos los recursos." },
    "jazz.stack.r.gha": { en: "Builds and deploys on every push.", es: "Construye y despliega en cada push." },
    "jazz.stack.r.iam": { en: "Least-privilege roles and policies.", es: "Roles y políticas de mínimo privilegio." },
    "jazz.pipe.label": { en: "delivery pipeline", es: "pipeline de entrega" },
    "jazz.pipe.title": { en: "From push to production", es: "Del push a producción" },
    "jazz.pipe.intro": { en: "A simplified view of the GitHub Actions workflow that provisions infrastructure and ships the site.", es: "Una vista simplificada del workflow de GitHub Actions que aprovisiona la infraestructura y despliega el sitio." },
    "jazz.cta.title": { en: "Want the full walkthrough?", es: "¿Quieres el recorrido completo?" },
    "jazz.cta.sub": { en: "See the live site and the source, or get in touch to talk through the architecture.", es: "Mira el sitio en vivo y el código, o contáctame para repasar la arquitectura." },
    "lab2.label": { en: "case study · infrastructure", es: "caso de estudio · infraestructura" },
    "lab2.lead": { en: "A self-hosted, production-style infrastructure on four virtualized Ubuntu servers — built to prove, and defend in an interview, practical skills across Linux administration, networking, security, automation, monitoring and AWS integration. Built incrementally, module by module, versioned and documented from day zero.", es: "Una infraestructura self-hosted de tipo producción sobre cuatro servidores Ubuntu virtualizados — construida para demostrar, y poder defender en una entrevista, competencias prácticas en administración Linux, redes, seguridad, automatización, monitorización e integración con AWS. Construida de forma incremental, módulo a módulo, versionada y documentada desde el día cero." },
    "lab2.spec.pattern.v": { en: "3-tier · self-hosted", es: "3 capas · self-hosted" },
    "lab2.spec.access": { en: "Access", es: "Acceso" },
    "lab2.spec.access.v": { en: "Bastion · SSH keys", es: "Bastión · claves SSH" },
    "lab2.spec.stack": { en: "Stack", es: "Stack" },
    "lab2.arch.caption": { en: "Four Ubuntu VMs on VirtualBox in a segmented private LAN (10.10.10.0/24): a bastion is the only SSH entry point (ProxyJump), the web tier reaches the database tier only over the segmented link, and a monitor node collects metrics. Cloudflare edge exposure and AWS (IAM · S3 backups) are on the roadmap.", es: "Cuatro VMs Ubuntu en VirtualBox dentro de una LAN privada segmentada (10.10.10.0/24): el bastión es el único punto de entrada SSH (ProxyJump), la capa web solo alcanza la capa de datos por el enlace segmentado, y un nodo de monitorización recoge métricas. La exposición de borde con Cloudflare y AWS (IAM · backups en S3) están en el roadmap." },
    "lab2.ov.title": { en: "What it is &amp; why I built it", es: "Qué es y por qué lo construí" },
    "lab2.ov.p1": { en: "The lab simulates a small but real company infrastructure. It isn't an academic exercise: the goal is to demonstrate hands-on competence across the sysadmin and DevOps stack — and to be able to justify every technical decision.", es: "El lab simula una infraestructura de empresa pequeña pero real. No es un ejercicio académico: el objetivo es demostrar competencia práctica en todo el stack de sysadmin y DevOps — y poder justificar cada decisión técnica." },
    "lab2.ov.p2": { en: "Everything runs on local VMs (VirtualBox) integrated with managed AWS services, mirroring a common enterprise scenario: your own infrastructure that consumes the cloud for identity (IAM) and offsite backups (S3).", es: "Todo corre en VMs locales (VirtualBox) integradas con servicios gestionados de AWS, reproduciendo un escenario empresarial habitual: tu propia infraestructura que consume la nube para identidad (IAM) y backups offsite (S3)." },
    "lab2.ov.l1": { en: "<strong>Segmented private network</strong> — 4 VMs on an isolated internal LAN; the database is only reachable from the web server.", es: "<strong>Red privada segmentada</strong> — 4 VMs en una LAN interna aislada; la base de datos solo es accesible desde el servidor web." },
    "lab2.ov.l2": { en: "<strong>Bastion-only access</strong> — a single SSH jump host with key auth, hardening (no root, no password) and ProxyJump.", es: "<strong>Acceso solo por bastión</strong> — un único jump host SSH con autenticación por clave, hardening (sin root, sin contraseña) y ProxyJump." },
    "lab2.ov.l3": { en: "<strong>Layered application</strong> — Nginx (reverse proxy) → Gunicorn → Flask → PostgreSQL, with credentials kept out of the code.", es: "<strong>Aplicación por capas</strong> — Nginx (reverse proxy) → Gunicorn → Flask → PostgreSQL, con las credenciales fuera del código." },
    "lab2.ov.l4": { en: "<strong>Idempotent automation</strong> — Bash scripts, cron jobs and health-checks for disk, memory and services.", es: "<strong>Automatización idempotente</strong> — scripts Bash, tareas cron y health-checks de disco, memoria y servicios." },
    "lab2.ov.l5": { en: "<strong>Versioned &amp; documented</strong> — Git from day zero, each module with its own README and recorded decisions.", es: "<strong>Versionado y documentado</strong> — Git desde el día cero, cada módulo con su propio README y sus decisiones registradas." },
    "lab2.dec.1.q": { en: "// why VirtualBox?", es: "// ¿por qué VirtualBox?" },
    "lab2.dec.1.h": { en: "Local VMs over cloud VMs", es: "VMs locales en lugar de en la nube" },
    "lab2.dec.1.b": { en: "Zero cost, snapshots before every change and spare hardware — the right sandbox to build and break safely.", es: "Coste cero, snapshots antes de cada cambio y hardware de sobra — el entorno ideal para construir y romper con seguridad." },
    "lab2.dec.2.q": { en: "// why a bastion?", es: "// ¿por qué un bastión?" },
    "lab2.dec.2.h": { en: "Single SSH entry point", es: "Único punto de entrada SSH" },
    "lab2.dec.2.b": { en: "Internal hosts refuse SSH from outside the private LAN; all admin access flows through one hardened jump host via ProxyJump. Minimal exposure.", es: "Las máquinas internas rechazan SSH desde fuera de la LAN privada; todo el acceso de administración pasa por un único jump host endurecido mediante ProxyJump. Mínima exposición." },
    "lab2.dec.3.q": { en: "// why segmentation?", es: "// ¿por qué segmentar?" },
    "lab2.dec.3.h": { en: "Defence in depth", es: "Defensa en profundidad" },
    "lab2.dec.3.b": { en: "The database tier is only reachable from the web tier (listen_addresses + pg_hba + firewall). A compromised web host still can't roam the network.", es: "La capa de datos solo es accesible desde la capa web (listen_addresses + pg_hba + firewall). Un servidor web comprometido aún no puede moverse por la red." },
    "lab2.dec.4.q": { en: "// why hybrid?", es: "// ¿por qué híbrido?" },
    "lab2.dec.4.h": { en: "Local infra + managed AWS", es: "Infra local + AWS gestionado" },
    "lab2.dec.4.b": { en: "A realistic enterprise pattern: own infrastructure that integrates the cloud for identity (IAM) and offsite backups (S3), kept at 0 € on the Free Tier.", es: "Un patrón empresarial realista: infraestructura propia que integra la nube para identidad (IAM) y backups offsite (S3), manteniendo el coste en 0 € con la capa gratuita." },
    "lab2.road.label": { en: "build status", es: "estado de construcción" },
    "lab2.road.title": { en: "Built module by module", es: "Construido módulo a módulo" },
    "lab2.road.intro": { en: "The lab grows incrementally. What's built is production-grade; the rest is a clear, honest roadmap — which is exactly the kind of planning I want to show.", es: "El lab crece de forma incremental. Lo construido es de nivel producción; el resto es un roadmap claro y honesto — que es justo el tipo de planificación que quiero mostrar." },
    "lab2.road.built": { en: "// built · modules 0–5", es: "// construido · módulos 0–5" },
    "lab2.road.planned": { en: "// on the roadmap · modules 6–11", es: "// en el roadmap · módulos 6–11" },
    "lab2.m0": { en: "Fundamentals &amp; version control", es: "Fundamentos y control de versiones" },
    "lab2.m1": { en: "Users, groups &amp; permissions (sudo, ACLs)", es: "Usuarios, grupos y permisos (sudo, ACLs)" },
    "lab2.m2": { en: "SSH, hardening &amp; bastion", es: "SSH, hardening y bastión" },
    "lab2.m3": { en: "Networking &amp; segmentation", es: "Redes y segmentación" },
    "lab2.m4": { en: "Services: Nginx + PostgreSQL", es: "Servicios: Nginx + PostgreSQL" },
    "lab2.m5": { en: "Bash scripting &amp; cron", es: "Bash scripting y cron" },
    "lab2.m6": { en: "Logs &amp; troubleshooting", es: "Logs y troubleshooting" },
    "lab2.m7": { en: "Monitoring: Prometheus + Grafana", es: "Monitorización: Prometheus + Grafana" },
    "lab2.m8": { en: "Backups &amp; recovery (RTO/RPO)", es: "Backups y recuperación (RTO/RPO)" },
    "lab2.m9": { en: "AWS: IAM least-privilege + S3", es: "AWS: IAM de mínimo privilegio + S3" },
    "lab2.m10": { en: "Secure exposure: Cloudflare Tunnel", es: "Exposición segura: Cloudflare Tunnel" },
    "lab2.m11": { en: "Capstone: docs, diagram &amp; post-mortem", es: "Capstone: documentación, diagrama y post-mortem" },
    "lab2.l.os": { en: "OS", es: "SO" },
    "lab2.l.net": { en: "Network", es: "Red" },
    "lab2.l.web": { en: "Web", es: "Web" },
    "lab2.l.auto": { en: "Automation", es: "Automatización" },
    "lab2.l.mon": { en: "Monitoring", es: "Monitorización" },
    "lab2.l.cloud": { en: "Cloud", es: "Cloud" },
    "lab2.l.edge": { en: "Edge", es: "Borde" },
    "lab2.l.ver": { en: "Versioning", es: "Versionado" },
    "lab2.r.os": { en: "Base of the 4 VMs (LVM, snapshots, right-sizing).", es: "Base de las 4 VMs (LVM, snapshots, right-sizing)." },
    "lab2.r.ssh": { en: "Key auth, hardening and single entry point (ProxyJump).", es: "Autenticación por clave, hardening y punto único de entrada (ProxyJump)." },
    "lab2.r.net": { en: "Private LAN and firewall; DB reachable only from web.", es: "LAN privada y firewall; BD accesible solo desde web." },
    "lab2.r.web": { en: "Reverse proxy and application tier.", es: "Reverse proxy y capa de aplicación." },
    "lab2.r.db": { en: "Segmented database tier, credentials outside code.", es: "Capa de datos segmentada, credenciales fuera del código." },
    "lab2.r.auto": { en: "Idempotent scripts, scheduled jobs and health-checks.", es: "Scripts idempotentes, tareas programadas y health-checks." },
    "lab2.r.mon": { en: "Metrics, dashboards and alerts. <em>(roadmap)</em>", es: "Métricas, dashboards y alertas. <em>(roadmap)</em>" },
    "lab2.r.cloud": { en: "Least-privilege identity and offsite backups. <em>(roadmap)</em>", es: "Identidad de mínimo privilegio y backups offsite. <em>(roadmap)</em>" },
    "lab2.r.edge": { en: "Tunnel, WAF and HTTPS exposure. <em>(roadmap)</em>", es: "Exposición con Tunnel, WAF y HTTPS. <em>(roadmap)</em>" },
    "lab2.r.ver": { en: "Everything versioned and documented from day zero.", es: "Todo versionado y documentado desde el día cero." },
    "lab2.cta.title": { en: "Want to walk through it?", es: "¿Quieres un recorrido?" },
    "lab2.cta.sub": { en: "The repo documents each module with its decisions and how to reproduce it — or get in touch to talk it through.", es: "El repo documenta cada módulo con sus decisiones y cómo reproducirlo — o contáctame para repasarlo." }
  };

  /* ------------------------------------------------------------------
     2. i18n engine
  ------------------------------------------------------------------ */
  var STORAGE_KEY = "je-lang";
  var SUPPORTED = ["en", "es"];

  function getStoredLang() {
    var saved;
    try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return nav === "es" ? "es" : "en";
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var entry = I18N[key];
      if (entry && entry[lang] != null) {
        nodes[i].innerHTML = entry[lang];
      }
    }

    // update toggle state
    var btns = document.querySelectorAll(".lang-toggle button[data-lang]");
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j].getAttribute("data-lang") === lang;
      btns[j].setAttribute("aria-pressed", on ? "true" : "false");
    }

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    applyLang(getStoredLang());
    var btns = document.querySelectorAll(".lang-toggle button[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  }

  /* ------------------------------------------------------------------
     3. Mobile navigation
  ------------------------------------------------------------------ */
  function initNav() {
    var burger = document.getElementById("navBurger");
    var links = document.getElementById("navLinks");
    if (!burger || !links) return;

    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // close menu when a link is tapped (mobile)
    var as = links.querySelectorAll("a");
    for (var i = 0; i < as.length; i++) {
      as[i].addEventListener("click", function () {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    }

    // close on escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.focus();
      }
    });
  }

  /* ------------------------------------------------------------------
     4. Reveal-on-scroll + progress bars
  ------------------------------------------------------------------ */
  function fillProgress(el) {
    var bar = el.querySelector(".progress-fill[data-progress]");
    if (bar && !bar.dataset.filled) {
      bar.style.width = bar.getAttribute("data-progress") + "%";
      bar.dataset.filled = "1";
    }
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduce) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add("is-visible");
        fillProgress(items[i]);
      }
      // still fill any standalone progress bars
      var bars = document.querySelectorAll(".progress-fill[data-progress]");
      for (var b = 0; b < bars.length; b++) { bars[b].style.width = bars[b].getAttribute("data-progress") + "%"; }
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          fillProgress(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    for (var k = 0; k < items.length; k++) io.observe(items[k]);

    // observe lab cards directly for progress fill (cards are also .reveal)
    var labCards = document.querySelectorAll(".lab-card");
    var io2 = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { fillProgress(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.2 });
    for (var m = 0; m < labCards.length; m++) io2.observe(labCards[m]);
  }

  /* ------------------------------------------------------------------
     5. Active section highlight (in-page anchors, home only)
  ------------------------------------------------------------------ */
  function initScrollSpy() {
    // Only relevant on the home page where #contact etc. exist.
    if (document.documentElement.getAttribute("data-page") !== "home") return;
    var sections = document.querySelectorAll("main section[id]");
    if (!sections.length || !("IntersectionObserver" in window)) return;
    // Not altering nav (links point to separate pages); reserved for future in-page nav.
  }

  /* ------------------------------------------------------------------
     6. Footer year (if present) + boot
  ------------------------------------------------------------------ */
  function boot() {
    initLang();
    initNav();
    initReveal();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
