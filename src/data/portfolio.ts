import type { SkillGroup, Experience, Project, Contact } from '../types/portfolio';

export const profile = {
  name: 'Gbadamosi Mubaraq',
  role: '.NET Backend Developer',
  tagline:
    'I design and ship scalable backend systems and APIs — multi-tenant architecture, clean data layers, and production-grade .NET services.',
  summary:
    "Results-driven .NET Developer with proven experience designing and delivering scalable backend systems and APIs using C#, ASP.NET Core, and SQL Server. Skilled in object-oriented programming, RESTful API design, multi-tenant architecture, and enterprise software development. Track record of leading full-stack modernisation projects by migrating legacy desktop systems to modern web platforms and delivering production-grade solutions across agile and freelance environments.",
  location: 'Lagos, Nigeria',
  education: {
    degree: 'B.Eng, Electrical & Electronics Engineering',
    school: 'University of Lagos, Nigeria',
  },
};

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['C#', 'SQL', 'TypeScript', 'JavaScript'] },
  { category: 'Frameworks', items: ['.NET (10)', 'ASP.NET Core', 'Blazor', 'React'] },
  {
    category: 'Architecture & Patterns',
    items: ['Clean Architecture', 'CQRS', 'Mediator Pattern', 'Unit of Work', 'Multi-Tenancy', '3-Tier Architecture'],
  },
  {
    category: 'Data',
    items: ['SQL Server', 'Entity Framework Core', 'Stored Procedures', 'Enterprise Library 6.0'],
  },
  { category: 'Cloud & DevOps', items: ['Azure', 'Azure DevOps', 'Azure Key Vault', 'Docker'] },
  { category: 'Testing & Tools', items: ['Unit Testing', 'Swagger / OpenAPI', 'Postman', 'Git'] },
  {
    category: 'Concepts',
    items: ['RESTful APIs', 'JWT Authentication', 'RBAC', 'ERP Systems', 'Multithreading', 'Agile Development'],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Head of Software',
    company: 'SoftHarbor',
    location: 'Lagos, Nigeria',
    period: '2026 — Present',
    current: true,
    summary:
      'Leading architecture and end-to-end delivery of GlobalSuite, a multi-tenant ERP platform, while directing the modernisation of a legacy WinForms desktop system into a web-based platform.',
    highlights: [
      'Led architecture and end-to-end development of GlobalSuite, a multi-tenant ERP spanning 24 system modules and 395+ database tables, built on C# (.NET) with a 3-tier architecture.',
      'Directed the modernisation of a legacy WinForms desktop application into a web platform using ASP.NET Core (.NET 10) REST APIs and a React/TypeScript frontend.',
      'Designed a stored-procedure-only data access layer using Enterprise Library 6.0 and SQL Server, sustaining performance across complex General Ledger, Payroll, and Customer Management workflows.',
      'Implemented subdomain-driven multi-tenancy with JWT authentication and a two-level role-based permission system enforced across every API endpoint.',
      'Oversaw delivery of core business modules: General Ledger, Human Resources, Customer Management, Asset Management, and Capital Markets.',
      'Managed staging and production deployments to Azure, coordinating release cycles and environment configuration across the engineering team.',
    ],
    technologies: ['C#', '.NET 10', 'ASP.NET Core', 'SQL Server', 'Enterprise Library 6.0', 'React', 'TypeScript', 'Azure', 'JWT'],
  },
  {
    id: '2',
    title: '.NET Developer',
    company: 'Innovastra',
    location: 'Remote',
    period: '2025 — 2026',
    summary:
      'Built and maintained backend services with Clean Architecture and CQRS, focused on maintainability and secure configuration.',
    highlights: [
      'Developed and maintained backend services using ASP.NET Core and C#.',
      'Designed and implemented RESTful APIs using Clean Architecture and CQRS.',
      'Applied the Mediator Pattern and Unit of Work to build maintainable systems.',
      'Integrated SQL Server databases using Entity Framework Core and stored procedures.',
      'Implemented secure configuration management using Azure Key Vault.',
      'Wrote unit tests and collaborated within Agile sprints using Azure DevOps.',
    ],
    technologies: ['ASP.NET Core', 'C#', 'CQRS', 'MediatR', 'EF Core', 'Azure Key Vault', 'Azure DevOps'],
  },
  {
    id: '3',
    title: 'Freelance .NET Developer',
    company: 'Upwork',
    location: 'Remote',
    period: '2023 — 2025',
    summary: 'Delivered ASP.NET Core applications and APIs directly for clients, end to end.',
    highlights: [
      'Built ASP.NET Core MVC applications and RESTful APIs for clients.',
      'Designed SQL Server schemas and stored procedures.',
      'Integrated backend services using Entity Framework Core.',
      'Performed API testing and documentation using Swagger and Postman.',
    ],
    technologies: ['ASP.NET Core MVC', 'SQL Server', 'EF Core', 'Swagger', 'Postman'],
  },
];

export const projects: Project[] = [
  {
    id: 'globalsuite',
    tag: 'Flagship / Head of Software',
    title: 'GlobalSuite ERP',
    description:
      'A multi-tenant ERP platform spanning 24 modules and 395+ database tables — General Ledger, HR, Customer Management, Asset Management, and Capital Markets.',
    longDescription:
      'Architected and led development of GlobalSuite end-to-end, directing the modernisation of a legacy WinForms desktop application into a web platform on ASP.NET Core (.NET 10) with a React/TypeScript frontend. Built on a 3-tier architecture with a stored-procedure-only data access layer (Enterprise Library 6.0 + SQL Server) to sustain performance across complex General Ledger, Payroll, and Customer Management workflows. Subdomain-driven multi-tenancy is enforced through JWT authentication and a two-level role-based permission system on every endpoint.',
    stats: [
      { label: 'System modules', value: '24' },
      { label: 'Database tables', value: '395+' },
      { label: 'Architecture', value: '3-tier' },
      { label: 'Tenancy', value: 'Subdomain' },
    ],
    technologies: ['C#', '.NET 10', 'ASP.NET Core', 'SQL Server', 'Enterprise Library 6.0', 'React', 'TypeScript', 'JWT', 'Azure'],
    highlights: [
      'Stored-procedure-only data access layer for predictable performance at enterprise scale',
      'Two-level RBAC enforced consistently across all API endpoints',
      'Legacy WinForms → modern web platform migration with zero business-logic regression',
      'Owns staging/production release cycles and Azure environment configuration',
    ],
    featured: true,
  },
  {
    id: 'rest-apis',
    tag: 'Architecture',
    title: 'Clean Architecture REST APIs',
    description:
      'Designed and implemented scalable RESTful APIs using Clean Architecture, CQRS, the Mediator Pattern, and Entity Framework Core.',
    longDescription:
      'Backend services built on a layered Clean Architecture with CQRS separating reads from writes, MediatR wiring up handlers, and a Unit-of-Work pattern coordinating EF Core transactions. JWT authentication secures every endpoint, with configuration secrets managed through Azure Key Vault and APIs documented with Swagger for fast client integration.',
    technologies: ['ASP.NET Core', 'CQRS', 'Mediator Pattern', 'Unit of Work', 'EF Core', 'JWT', 'Swagger'],
    highlights: [
      'Request/response pipeline fully decoupled via CQRS + MediatR',
      'Unit of Work coordinating multi-repository transactions',
      'Centralized validation, error handling, and modular API surface',
    ],
    featured: true,
  },
  {
    id: 'microservices',
    tag: 'Services',
    title: 'Secure File-Storage Microservices',
    description:
      'Built microservices supporting secure file storage integrations while following Clean Architecture principles.',
    longDescription:
      'Standalone services isolating file storage concerns from core business logic, keeping ingestion, validation, and storage integration independently deployable and testable — while staying consistent with the layering conventions used across the rest of the platform.',
    technologies: ['ASP.NET Core', 'C#', 'Clean Architecture', 'REST'],
    highlights: [
      'Isolated, independently deployable file-handling service boundary',
      'Consistent layering and conventions with the wider platform',
    ],
  },
  {
    id: 'enterprise-backend',
    tag: 'Foundations',
    title: 'Enterprise Backend Systems',
    description:
      'Layered backend systems implementing CRUD operations, validation, error handling, and modular API architecture.',
    longDescription:
      'Core backend fundamentals applied repeatedly across freelance and enterprise engagements: consistent CRUD patterns, centralized validation and error handling, and modular API structures designed to extend cleanly as requirements grow.',
    technologies: ['ASP.NET Core', 'SQL Server', 'EF Core', 'Stored Procedures'],
    highlights: [
      'Consistent CRUD + validation conventions across modules',
      'Centralized error handling and response shaping',
    ],
  },
];

export const contact: Contact = {
  email: 'bidmusmubaraq0000@gmail.com',
  phone: '+234 815 367 2551',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  location: 'Lagos, Nigeria',
};
