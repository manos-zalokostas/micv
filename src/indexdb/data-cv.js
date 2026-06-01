export const work = [
    {
        type: "2020 / now - Architecting & Building End-to-End Systems @ICCS-NTUA | Athens Greece",
        tasks: [

            [
                `2026 | ODEON (Horizon Europe) | [Budget: €22.5M]`,
`
Official Project Scope: An active distributed simulation and long-term grid hosting capacity platform designed to evaluate electricity network expansion and future renewable energy integration scenarios over a 10-year horizon.
My Subsystem & Delivery: Designed and delivered the complete three-tier distributed architecture. Personally built the SvelteKit Backend-for-Frontend (BFF) client, the NestJS Core API gateway, the Prisma-based database persistence layers, the Python Flask solver container, and the federated authentication and Redis session caching systems.
Engineering Challenges:
Orchestrating long-running grid-physics optimization models that exceed standard HTTP gateway timeout thresholds.
Enforcing strict, zero-trust organization-level data separation within multi-tenant shared environments.
System Innovations:
Schema-Driven System Execution: Engineered a unified architecture where frontend UI form generation, API structures, cross-layer validation logic, and database access are dynamically derived from shared schema definitions, eliminating manual development synchronization.
Asynchronous Simulation Pipeline: Designed a decoupled execution pipeline that asynchronously dispatches heavy computational simulation workloads from the NestJS core to an isolated Python solver, preventing application gateway timeouts and UI lag.
Multi-Layer Tenant Isolation: Implemented a database-level tenant isolation system, injecting organization-level parameters (org_id) directly into database queries at the query-construction level via NestJS and Prisma middleware.
Tech Stack: SvelteKit, NestJS, Python (Flask), Prisma ORM (MySQL), Redis, Keycloak, Docker, Docker Compose, Nginx, Linux.
`,
                [
                    "https://cordis.europa.eu/project/id/101136128",
                    "https://odeonproject.eu",
                    "https://www.linkedin.com/company/odeoneu",
                ],
                {
                    points: [
                        ""
                    ],
                    stack: [],
                    links: [],
                }
            ],


            [
`2024 | SYNERGIES (Horizon Europe) | [Budget: €10M]`,
`
Official Project Scope: A multi-tenant, system-of-systems energy data space designed for secure, sovereign grid data exchange and localized operational services among European energy communities.
My Subsystem & Delivery: Designed and delivered the software suite for the Greek pilot node, consisting of a SvelteKit frontend, NestJS core API, Python-Flask solver wrapper, and a MySQL database. Engineered and published three pre-compiled, immutable container images to the Google Artifact Registry marketplace (the Planning application, the Flexibility application, and a shared Optimization Solver package) designed for completely decoupled, on-premises licensing and deployment.
Engineering Challenges:
Resolving critical runtime and network bridging failures when deploying Linux-based Docker images on-premises on physical Windows hosts operated by the national utility (HEDNO).
Vite/SvelteKit build-time environmental variable interpolation hardcoding the build-server’s host credentials directly into compiled frontend assets, preventing the distribution of stateless, credential-free marketplace containers.
System Innovations:
Network-Shielded BFF Architecture: Implemented a Backend-for-Frontend (BFF) pattern, hiding the database dataserver behind a private Docker network and authenticating SvelteKit-to-NestJS calls via server-to-server signed API requests.
Schema-Driven Form Generation: Prototyped a reactive schema-driven frontend runtime utilizing a custom Svelte store to dynamically generate UI input components and validation rules directly from backend-defined JSON schemas.
Decoupled Packaging Model: Designed a three-tier container architecture allowing third-party utilities to purchase, license, and run isolated application and solver layers on their own premises with local domain separation.
Tech Stack: SvelteKit, NestJS, Python (Flask), MySQL, Redis, Keycloak SSO, Docker, Nginx, GCP (Google Artifact Registry).
`,
                [
                    "https://cordis.europa.eu/project/id/101069839",
                    "https://synergies-project.eu/",
                    "https://www.linkedin.com/company/synergies-energy-data-spaces",
                ]
            ],


            [
                `2023 | R2D2 (Horizon Europe) | [Budget: €10M]`,
`
Official Project Scope: A European energy grid resilience and cybersecurity portal designed to orchestrate specialized weather, load forecasting, and power-flow simulation tools.
My Subsystem & Delivery: Designed and delivered the complete, end-to-end full-stack monorepo architecture consisting of a SvelteKit BFF client and a NestJS backend gateway. Built and owned the dynamic form rendering components (TP-Form and TP-Fieldset), a custom session-based security flow (AUTHALL), a global dynamic guard (AUTH-Z), and reusable backend controller abstraction layers. Orchestrated the containerized, zero-dependency deployment and compiled artifact pipelines.
Engineering Challenges:
NestJS compiler-time decorator limitations (@Roles / @UseGuards) breaking standard class inheritance on the generic parent controller class.
Manual file synchronization and schema drift across isolated repositories, requiring copy-paste harmonization of parallel schema files between the frontend and backend.
Unexpected runtime reactive loops and UI parsing crashes when implementing Svelte 5 $state runes within dynamic form component effect wrappers.
System Innovations:
Config-Driven Authorization: Developed a dynamic, global NestJS authorization guard (AUTH-Z) that bypassed static framework limitations by evaluating route permissions on-the-fly via a declarative JSON configuration.
Monorepo Consolidation: Migrated separate frontend and backend codebases into a unified pnpm monorepo workspace, establishing a shared-types package to eliminate cross-repository schema drift.
BFF Security Architecture: Implemented a SvelteKit Backend-for-Frontend (BFF) architecture to route all client interactions through SvelteKit, isolating the backend NestJS gateway from direct browser-side public API requests.
Tech Stack: SvelteKit (Svelte 5), NestJS, Prisma ORM (MySQL), WebSockets, RabbitMQ, Argon2, Docker, pnpm workspaces.
`,
                [
                    "https://cordis.europa.eu/project/id/101075714",
                    "https://r2d2project.eu/",
                    "https://www.linkedin.com/company/r2d2eu",
                ]
            ],


            [
                `2022 | RE-EMPOWERED (Horizon 2020 / EU-India) | [Budget: €5M]`,
`
Official Project Scope: A joint European-Indian Energy Management System (EMS) and Microgrid Controller platform designed to process physical grid telemetry and execute mathematical optimization forecasts.
My Subsystem & Delivery: Designed and delivered a multi-service energy forecasting and grid analytics platform. Built the SvelteKit frontend, Node.js orchestration backend, Python (Flask) computation layer, MSSQL database architecture, and a multi-protocol integration layer. Orchestrated the unified system deployment via Docker Compose on ICCS-NTUA bare-metal infrastructure.
Engineering Challenges:
Coordinating heterogeneous execution models across physically decoupled regional applications utilizing cloned codebases.
Managing the architectural divergence between a batch-oriented SCADA ingestion system and an event-driven message forecasting system.
System Innovations:
Multi-Protocol Integration: Designed a communication architecture integrating HTTP for synchronous orchestration, MQTT for real-time event propagation, and RabbitMQ for asynchronous external data pipelines.
Schema-Driven Frontend Generation: Built a dynamic UI system that decoupled rendering from static components, driving frontend forms and cross-stack validation logic exclusively via backend-defined schema structures.
Infrastructure Consolidation: Engineered a deployment merge, consolidating the previously separated, cloned regional container architectures into a single unified runtime environment while strictly preserving their isolated execution workflows.
Tech Stack: SvelteKit, Node.js, Python (Flask), MSSQL, RabbitMQ, MQTT, Docker (Compose), Prometheus, Grafana, Linux.
`,
                [
                    "https://cordis.europa.eu/project/id/101018420",
                    "https://reempowered-h2020.com/",
                    "https://www.linkedin.com/company/re-empowered-eu-india",
                ]
            ],


            [
                `2021 | SYNERGY (Horizon 2020) | [Budget: €12.7M]`,
`
Official Project Scope: A smart grid big-data sharing platform and AI analytics marketplace for the Greek pilot demonstrator, processing operational grid data and network planning scenarios.
My Subsystem & Delivery: Designed and delivered the core platform architectures for two separately licensed, distinct software products (Planning and Coordination) managed by different product teams. Built the Next.js frontends, Node.js backend services, a dedicated authentication layer, and physically isolated MySQL database architectures. Orchestrated their concurrent, resource-optimized deployment under a shared Nginx reverse proxy on ICCS-NTUA bare-metal infrastructure.
Engineering Challenges:
Maintaining independent codebases and product lifecycles across cloned branches while synchronizing shared database and validation utility models.
Preventing containerized Node.js web servers from event-loop blocking during high-latency mathematical compute workloads.
System Innovations:
Session State Retention: Engineered an internal authentication layer utilizing Redis to manage token lifecycles and synchronize cross-application login continuity from an external identity provider.
Hybrid Compute Offloading: Designed an execution flow that delegated heavy Python computational workloads from the Dockerized web layer directly to the bare-metal host execution environment.
Backend Orchestration Abstraction: Developed internal abstraction layers to standardize request validation, data access, and Server-Side Rendering (SSR) execution lifecycles across multiple independent product codebases.
Tech Stack: Next.js (React), Node.js, Python, MySQL, Redis, Docker (Compose), Nginx, Linux (Bare-metal).
`,
                [
                    "https://cordis.europa.eu/project/id/872734",
                    "https://synergyh2020.eu/",
                    "https://www.linkedin.com/company/synergyh2020",
                ]
            ],


            [
                `2020 | HELLENIC “HYBRID” (National Grid Project)`,
`
Official Project Scope: A mission-critical energy scheduling and grid workflow platform for the national energy supplier, designed to orchestrate Day-Ahead and Intraday dispatch operations for renewable energy producers.
My Subsystem & Delivery: Serving as the sole systems engineer, I designed and delivered the complete end-to-end platform topology on ICCS-NTUA infrastructure. My explicit ownership included building the Next.js frontend state-machine, the Node.js API Gateway, a custom Ticket-based RBAC authentication system, an automated XLS Extract-Transform-Load (ETL) pipeline, and the underlying MySQL database schema and Docker deployment assembly.
Engineering Challenges:
Overcoming severe Node.js event-loop blocking caused by executing heavy OS-level workloads, batch processes, and database dumps on the main application thread.
Executing strict, isolated containerization and reverse-proxy routing on bare-metal Windows Server/Linux infrastructure without the use of Docker Compose orchestration.
System Innovations:
Isomorphic Validation Parity: Engineered a deterministic cross-layer rule engine that executed identical mathematical constraints across both the UI validation state and the backend API enforcement layer.
Event-Loop Sidecar: Designed a decoupled dual-system architecture, utilizing child_process to delegate high-latency maintenance tasks to a separate daemon (HYBRID-AUX), protecting the main runtime.
Tech Stack: Next.js, Node.js, MySQL, Docker (Raw CLI/Networking), Nginx, Bare-metal (Windows/Linux).
`,
                [
                    "https://www.linkedin.com/company/diaxeiristis-ellinikou-diktiou-dianomis-ilektrikis-energeias",
                    "https://www.deddie.gr/en/hedno"
                ]
            ]


        ]
    },
    {
        type: '2018 / 2020 - Founding Engineer & Frontend Architect @Rateparity  | Piraeus Greece',
        tasks: [
            [`Booking Conversion Widgets`, `Recruited as one of two core builders and the sole frontend engineer to take a new hospitality tech product from concept to a successful commercial exit. Architected and built a suite of high-performance SPA conversion widgets (installable with a single HTML line) using React.js that were an order of magnitude more efficient than competing paid products.`],
        ]
    },
    {
        type: '2017 / 2020 - System Modernization & Security @Cosmores  | Piraeus Greece',
        tasks: [
            [`Hospitality - Booking Engine`, `Brought on to modernize and secure a decade-old legacy PHP booking engine and PMS. Architected and implemented a complete security overhaul, including a new device-based authentication system and the encryption of over 1 million rows of sensitive data.`]
        ]
    },
    {
        type: `2016 / 2017 - System Modernization @ECEP TECHNOLOGIES | London England (remote)`,
        tasks: [
            [`Warehouse Inventory`, `Architected and built an inventory management system, migrating the company's core business logic from a chaotic, multi-spreadsheet process for over 500,000 distinct barcodes. Designed and implemented a robust database schema and a secure, RESTful API using Laravel 5.1.`]
        ]
    },
    {
        type: `2015 / 2016 - Legacy System Integration @SEECAGO | Florida USA (remote)`,
        tasks: [
            [`Enterprise CRM Project`, `Contracted to extend and modernize a large-scale, commercial legacy PHP enterprise CRM system with over 500 database tables. Architected a core, reusable parent class with MVC-like principles to serve as a stable foundation for new feature development and successfully integrated the system with Microsoft Exchange Web Services (EWS).`]
        ]
    },
    {
        type: '2014 / 2015 -  Agile Web Developer @INTERACTIVE DATA | Frankfurt Germany (remote)',
        tasks: [
            [`Commerzbank "Infobroker" Multinational Project`, `Contracted as a remote engineer within a large, multinational Agile team tasked with modernizing and developing front-end solutions for a critical internal intranet application for the German Commerzbank. Responsible for translating UI/UX blueprints into functional components and contributed to the refactoring of a complex legacy JavaScript class to improve stability.`]
        ]
    },
    {
        type: '2001 / 2011 - HSE Assistant / Messenger @SANOFI AVENTIS S.A | Athens Greece',
        tasks: [
            [`HSE Assstant and Media Support (06'-11')`, `While in an HSE assistant role, I independently involved with MS Access and was given the chance to build a suite of 4 custom applications to handle departmental challenges. This initiative led to senior management making an unprecedented decision to fully fund my BSc in Internet Engineering.`],
            ["Messenger & Hands-on Logistics (01'-06')", `My career began in a demanding, hands-on logistics role responsible for company-wide messenger services and operations support. This period was foundational in building my work ethic and a deep, practical understanding of real-world business operations.`]
        ]
    }
];


export const free = [
    {
        type: "2022 / now  -  Full Stack Architect & Consultant | Athens Greece",
        tasks: [
            [`2025 | Electrical Units Management | “Electro”`, `Designed and built a comprehensive facilities management platform from a legacy XLS-based system. Architected the system (SvelteKit, Node.js, Prisma) to manage units, services, and scheduling for multiple client companies, including features like dynamic QR code generation and XLS import/export.`],
            [`2023 | E-Commerce | “Marine Service Parts"`, `Migrated a marine parts e-commerce business entirely from a legacy spreadsheet process to a modern, full-stack web application (Next.js, Node.js). Architected the entire system, including a product catalog with advanced search, a shopping cart with PayPal integration, and an automated email notification system.`],
            [`2018 | Interiors Design & Materials | "Elgreg"`, `Executed an early digital transformation project, migrating a building materials company from a manual, spreadsheet-based product list to a full-featured, SEO-friendly e-commerce website with a custom backend administration panel using PHP and XML/XSLT.`]
        ]
    },
];


export const study = [
    {
        type: "2009 / 2012  -  BSc (Hons) in Internet Engineering & Web Management",
        tasks: [
            `University of Greenwich in association with New York College Athens, Greece. Grade: First Class Honours (Graduated first in class with distinction).Achieved this degree while working a demanding, full-time 9-to-5 role. The entire course was funded by an unprecedented investment from my then-employer (Sanofi), who recognized my potential to solve problems with technology. My Bachelor's thesis, a complex scheduling system, was praised by my tutor as "a rare thing to see" and was nominated for internal adoption by the college.`
        ]
    },
    {
        type: "Web Design & Development | 2008 / 2009 ",
        tasks: ["Full year course certification studies at Intergraphics’ Vocational Training, Athens, Greece"]
    },
    {
        type: "Graphical Design | 2005 / 2006  ",
        tasks: ["Full year course certification studies at AKMI’ Vocational Training, Athens, Greece"]
    },
    {
        type: "3D-Animation Design | 2001 / 2003",
        tasks: ["2 years full course diploma studies at AKMI’ Vocational Training, Athens, Greece"]
    },
];


export const tool = [
    {
        type: null,
        tasks: [
            ['Frontend', `JavaScript-ES6+, TypeScript, Web-Components, SvelteKit,  React.js /  Next.js`],
            ['Backend', `Node.js, Nest.js, PHP-Laravel, Python-Flask`],
            ['Operations', `Linux, Docker, Nginx, Apache, Git`],
            ['Monitoring', `Prometheus, Grafana, GoAccess, Google-GCP`],
            ['Databases', `MySQL, MSSQL, Prisma, Sequelize`],
            ['Development', `PHPStorm, PyCharm, VSCode, Eclipse, Notepad++`],
            ['Design', `Adobe-Suite, Illustrator, Gimp, Inkspace`],
        ]
    },
];


export const lang = [
    {
        type: null,
        tasks: [
            [
                "english",
                "Studies in English University, Cambridge Lower Certificate"
            ],
            [
                'greek',
                "Native speaker"
            ],
        ]
    },
];


export const arendi = [
    {
        type: "2026 - PERSONAL R&D | WEBBOX: SCHEMA-DRIVEN DISTRIBUTED SYSTEMS",
        tasks: [
            `Focus: Schema-driven full-stack architectures and transport-abstracted distributed systems.Description: Developed an engine that abstracts transport layers (REST, WebSockets, Kafka, Redis) behind unified structural schemas, eliminating boilerplate code and allowing seamless shifts in underlying network infrastructure without modifying business logic`,
        ],
        links: ["Technical Write-up", "https://www.linkedin.com/pulse/webbox-rd-engineering-transport-agnostic-distributed-manos-zalokostas-ewdtc"]
    },
    {
        type: `2026 - CIGRE PARIS SESSION | TECHNICAL CONTRIBUTION (ACCEPTED)`,
        tasks: [
            `Paper: Data-driven distribution network expansion planning for hosting new green investments. Role: Technical Contributor & Platform Architect. Designed the core platform architecture supporting the simulation engine and cyber-physical power system planning (C1 Power system development & economics / PS3: Planning the cyber-physical system). Consortium: Developed in collaboration with the National Technical University of Athens (NTUA) and the Hellenic Distribution System Operator (HEDNO/DEDDIE).
        `]
    },
    {
        type: `2023 - IEEE XPLORE | CONFERENCE PROCEEDINGS PUBLICATION (2023)`,
        tasks: [
            `Paper: Data-driven network planning and congestion management in cyber-physical power systems. Role: Co-author & Systems Architect, designing the simulation platforms and analytics interfaces behind the research`,
        ],
        links: ["Publication Link", "https://ieeexplore.ieee.org/document/10182637"]
    },
]







