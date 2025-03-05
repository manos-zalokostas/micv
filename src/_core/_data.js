export const T = {
    ACCE: 'access',
    ACCO: 'accounting',
    AJAX: 'ajax',
    ANAL: 'analysis',
    ANDR: 'android',
    APAC: 'apache',
    BOOT: 'bootstrap',
    BUSI: 'business',
    CENT: 'centos',
    CHRO: 'chrome_developer_tools',
    CLAN: 'c_language',
    COMM: 'communication',
    CSHA: 'c_sharp',
    CSS3: 'css3',
    DMAI: 'data_maintenance',
    DATA: 'data_mining',
    DBAP: 'database_application',
    DESK: 'desktop_application',
    DOCK: 'docker',
    DCOM: 'docker_compose',
    DREA: 'dreamweaver',
    ECLI: 'eclipse',
    ES6: 'es6',
    EXCE: 'excel',
    EXPR: 'expressjs',
    FLAS: 'flash',
    GIT: 'git',
    GOAC: 'goaccess',
    GRAF: 'grafana',
    HTML: 'html',
    HTM5: 'html5',
    ILLU: 'illustrator',
    JAVA: 'java',
    JSCR: 'javascript',
    JOOM: 'joomla',
    JQUE: 'jquery',
    JSON: 'json',
    KEYC: 'keycloak',
    LARA: 'laravel',
    LINU: 'linux_terminal',
    MARK: 'marketing',
    MATL: 'matlab',
    MOBI: 'mobile',
    MONI: 'monitoring',
    MVC: 'mvc',
    MYSQ: 'mysql',
    NETB: 'netbeans',
    NEXT: 'nextjs',
    NGIN: 'nginx',
    NODE: 'nodejs',
    OOP: 'oop',
    ORAC: 'oracle',
    PHOT: 'photoshop',
    PHP: 'php',
    PHPS: 'phpstorm',
    POWE: 'powerpoint',
    PRIS: 'prisma',
    PROJ: 'project',
    PMAN: 'project_management',
    PROM: 'prometheus',
    PMOT: 'promotion',
    RABB: 'rabbitmq',
    REAC: 'reactjs',
    REDI: 'redis',
    REQU: 'requirements',
    RESE: 'research',
    RESP: 'responsive_design',
    REST: 'rest_api',
    RISK: 'risk_management',
    SCSS: 'scss',
    SECU: 'security',
    SEO: 'seo',
    SEQU: 'sequelize',
    SOUR: 'sourcetree',
    SQLS: 'sql_server',
    SVEL: 'sveltekit',
    SVN: 'svn',
    SWAG: 'swagger',
    TEAM: 'teamwork',
    TEST: 'testing',
    TWIG: 'twig',
    UBUN: 'ubuntu',
    VBA: 'vba',
    VIRT: 'virtualbox',
    VISI: 'visio',
    VISU: 'visual_studio',
    VITE: 'vite',
    WEBA: 'web_application',
    WEBP: 'webpack',
    WEB_: 'web_standards',
    WEKA: 'weka',
    XML: 'xml',
    XPAT: 'xpath',
    XSLT: 'xslt',
    YIIM: 'yii_mvc',
    ZEND: 'zend'
}

// let  t = Object.entries(T).map(a => a.reverse());
// t = Object.fromEntries(t);

export default [
    {
        domain: 'WORK',
        id: 'WK25',
        section: 'Facilities Monitoring',
        category: 'Design and Development',
        title: 'Electro  - Facilities Management',
        tools: [
            T.WEBA, T.JSCR, T.SVEL,
            T.VITE, T.ES6, T.CSS3,
            T.SCSS, T.ANAL, T.REQU,
            T.NODE, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.KEYC,
            T.SQLS, T.PROM, T.GRAF,
            T.MONI, T.PRIS, T.RABB
        ],
        description: '<p>scope of the project</p><ul><li> analyze business processes, gather and structure their data relations</li><li> responsive layouts for desktop / mobile viewing</li><li> users can register numerous companies that they maintain</li><li> provide numerous searching / filtering features that apply special meaning to units-status / -damages /-services /-freon installments</li><li> crud operations on units, units status and scheduling</li><li> data importing / exporting w/ .xsl files + .xls templates for consistent usage of the services</li><li> units actions scheduling and historical search</li><li> register multiple entries w/ single commands / .xls imports</li><li> application parameters configuration + create new properties etc</li><li> user profile + authentication / authorization integrations</li><li> qrcodes that when scanned will direct users to unit status page where all unit details are presentable</li><li> exportable qrcodes for printing in high resolution + company log on top</li><li> multiple language support</li><li> installed on google cloud platform</li><li> refreshable app access while using the app</li><li> user authentication - resources access authorization</li><li> sw | service worker integration for better app performance and static asset caching</li><li> published online / nginx server w/ reverse proxy</li><li> https renewable ssl certificates</li></ul>\n',
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/elec/elec-dam-handl.png',
            '/micv/images/elec/elec-dam-multi.png',
            '/micv/images/elec/elec-land.png',
            '/micv/images/elec/elec-param.png',
            '/micv/images/elec/elec-sche-freon.png',
            '/micv/images/elec/elec-serv-new.png',
            '/micv/images/elec/elec-unit-filter.png',
            '/micv/images/elec/elec-unit-qrcode.png',
            '/micv/images/elec/elec-unit-search.png',
            '/micv/images/elec/elec-unit-status.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK24',
        section: 'Merchandise',
        category: 'Design and Development',
        title: 'Marine Service Parts',
        tools: [
            T.WEBA, T.JSCR, T.SVEL,
            T.VITE, T.ES6, T.CSS3,
            T.SCSS, T.ANAL, T.REQU,
            T.NODE, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.KEYC,
            T.SQLS, T.PROM, T.GRAF,
            T.MONI, T.PRIS, T.RABB
        ],
        description: '<ul><li> internal housekeeping + eshop services for marine service parts</li><li> analyze business processes, gather and structure their data relations</li><li> responsive layouts for desktop / mobile viewing</li><li> integrate payments online / offline w/ paypal and on-delivery respectively</li><li> create carts and bookmark features</li><li> send emails after online / offline purchases commited</li><li> provide several filters / search areas for products indexing + global search w/ barcode / service part keywords indxing</li><li> user profile + authentication / authorization integrations</li><li> provide meaningfull urls / page content for increased seo indexability</li><li> multiple language support</li><li> https renewable ssl certificates</li></ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/mare/mare-land.png',
            '/micv/images/mare/mare-part-prev.png',
            '/micv/images/mare/mare-search-thermo.png',
            '/micv/images/mare/mare-book.png',
            '/micv/images/mare/mare-buy-conf.png',
            '/micv/images/mare/mare-buy-end.png',
            '/micv/images/mare/mare-cart.png',
            '/micv/images/mare/mare-engine.png',
            '/micv/images/mare/mare-engine-part.png',
            '/micv/images/mare/mare-search.png',
            '/micv/images/mare/mare-search-belt.png',
            '/micv/images/mare/mare-search-gasket.png',
            '/micv/images/mare/mare-user.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK23',
        section: 'Energy',
        category: 'Design and Development',
        title: 'R2D2 - Reliability Resilience & Grid Defence',
        tools: [
            T.WEBA, T.JSCR, T.SVEL,
            T.VITE, T.ES6, T.CSS3,
            T.SCSS, T.ANAL, T.REQU,
            T.NODE, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.KEYC,
            T.SQLS, T.PROM, T.GRAF,
            T.MONI, T.PRIS, T.RABB
        ],
        description: `<p>deliverable was a part of multi european endevour that roots and founded by greater movement “horizon 2020"</p><ul><li> 2 energy web appls</li><li> remote user authentication "keycloak" + sso</li><li> resposive mobile / desktop layouts</li><li> integrate python api to simulate feedback</li><li> run preconfigured daily scheduling to run simulations</li><li> use redis for session management / caching</li><li> use monitoring tools to supervise the infrastructure status</li><li> publish applications onlne w/ nginx proxy</li></ul><h6>> app 'flexibility'</h6><ul><li> integrate layouts for 3 different roles 'tso / dso / aggregators'</li><li> numerous charts to provide a solid understanding of the data flow in a daily basis</li><li> numerous filters + chronological searches to examine data</li></ul><h6>> app 'planning'</h6><ul><li> scenarios builder forms</li><li> build scenarios and use numerous charts to gain understanding of the resuts</li><li> push effective results to remove services</li></ul>\n`,
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/r2d2/r2d2-search.png',
            '/micv/images/r2d2/r2d2-resilience.png',
            '/micv/images/r2d2/r2d2-create.png',
            '/micv/images/r2d2/r2d2-latest.png',
            '/micv/images/r2d2/r2d2-spat.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK22',
        section: 'Energy',
        category: 'Design and Development',
        title: 'Synergies',
        tools: [
            T.WEBA, T.JSCR, T.SVEL,
            T.VITE, T.ES6, T.CSS3,
            T.SCSS, T.ANAL, T.REQU,
            T.NODE, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.KEYC,
            T.SQLS, T.PROM, T.GRAF,
            T.MONI, T.PRIS, T.RABB
        ],
        description: `<p>Deliverable was a part of multi European big-data project ‘Synergies” that comes as a continuity of v.1 "Synergy" project  that roots and founded by greater movement “Horizon 2020”. Project customers are major national energy suppliers across Europe</p><ul><li> 2 energy web appls</li><li> remote user authentication "keycloak" + sso</li><li> resposive mobile / desktop layouts</li><li> integrate python api to simulate feedback</li><li> run preconfigured daily scheduling to run simulations</li><li> use redis for session management / caching</li><li> use monitoring tools to supervise the infrastructure status</li><li> publish applications onlne w/ nginx proxy</li></ul><h6>> app 'flexibility'</h6><ul><li> integrate layouts for 3 different roles 'tso / dso / aggregators'</li><li> numerous charts to provide a solid understanding of the data flow in a daily basis</li><li> numerous filters + chronological searches to examine data</li></ul><h6>> app 'planning'</h6><ul><li> scenarios builder forms</li><li> build scenarios and use numerous charts to gain understanding of the resuts</li><li> push effective results to remove services</li></ul>\n`,
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/synergies/sgsflex-agr-search.png',
            '/micv/images/synergies/sgsflex-land.png',
            '/micv/images/synergies/sgsflex-log.png',
            '/micv/images/synergies/sgsflex-tso.png',
            '/micv/images/synergies/sgsflex-tso-asset.png',
            '/micv/images/synergies/sgsplan-planres.png',
            '/micv/images/synergies/sgsplan-scen-res.png',
            '/micv/images/synergies/sgsplan-scennew.png',
            '/micv/images/synergies/sgsplan-scenover.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK21',
        section: 'Energy',
        category: 'Design and Development',
        title: 'EcoEms Energy Analytics - Denmark',
        tools: [
            T.WEBA, T.JSCR, T.SVEL,
            T.VITE, T.ES6, T.CSS3,
            T.SCSS, T.ANAL, T.REQU,
            T.NODE, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.KEYC,
            T.SQLS, T.PROM, T.GRAF,
            T.MONI, T.PRIS, T.RABB
        ],
        description: '<p>the scope of the project was to attain a good overview of partners resources state and in return simulate and pushback an optimised schedule for their resources in order to achieve this we would requilarly consume data like forecasts, weather reports, temperature levels, resources status etc in different intervals during the day. internally then after maintaining and evaluating data we would dispatch python simulations and come up w/ the base case scenarios. eventually we would push back our estimations to partners remote services.</p><ul><li>compose a complete system infrastructure to perform respective routines at each phase - subscribe to remote channels w/ rabbitmq & mqtt to retrieve datasets in spare intervals - create internal scheduling system that would invoke procedures at predefined times - create a python api that would provide endpoints for simulating different tasks - publish our processes estimations at several remote channels</li><li>invole keycloak iam controls server to control the authentication, authorization of users and resources</li><li>retrieve daily measurements from extrnal resources, both real-time / scheduled-time using mqtt protocol</li><li>provide the visuals for the administrators to analylize the original datasets consumed daily/hourly by remote services but also for the final results pushed back after performing simlulations</li><li>monitor the infrastructure safety with prometheus and grafana tools</li></ul>,',
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/ecodk/ecodk-elec.png',
            '/micv/images/ecodk/ecodk-tank.png',
            '/micv/images/ecodk/ecodk-heatdem.png',
            '/micv/images/ecodk/ecodk-dem.png',
            '/micv/images/ecodk/ecodk-heat.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK20',
        section: 'Energy',
        category: 'Design and Development',
        title: 'EcoEms Energy Analytics - Greece',
        tools: [
            T.WEBA, T.JSCR, T.SVEL,
            T.VITE, T.ES6, T.CSS3,
            T.SCSS, T.ANAL, T.REQU,
            T.NODE, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.KEYC,
            T.SQLS, T.PROM, T.GRAF,
            T.MONI, T.PRIS, T.RABB
        ],
        description: '<p> The scope of the project was to structure and visualize the overall energy consumption generated by conventional units and eventually use input for administrators to perform simulations so that renewable empowered energy could find and claim its effective margin on the daily demand. </p> <ul> <li> In technical perspective, the workload dealt with design and implement the infrastructure and 2 web applications for the Greek and Denmark counterparts. </li> <li> Invole Keycloak IAM controls server to control the authentication, authorization of users and resources </li> <li> Retrieve daily measurements from extrnal resources, both real-time / scheduled-time using MQTT protocol </li> <li> Provide the visuals for the administrators to analylize load / demand / deficit of energy </li> <li> Monitor the infrastructure safety with Prometheus and Grafana tools </li> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/ecoems/ecosys.png',
            '/micv/images/ecoems/ecostn.png',
            '/micv/images/ecoems/ecoliveq.png',
            '/micv/images/ecoems/ecospec.png',
            '/micv/images/ecoems/ecoform.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK19',
        section: 'Energy',
        category: 'Design and Development',
        title: 'Synergy - Energy Analytics Apps',
        tools: [
            T.WEBA, T.JSCR, T.REAC,
            T.NEXT, T.EXPR, T.SWAG,
            T.ES6, T.CSS3, T.SCSS,
            T.ANAL, T.REQU, T.NODE,
            T.WEBP, T.GIT, T.REST,
            T.DOCK, T.DCOM, T.REDI,
            T.KEYC, T.MYSQ, T.PROM,
            T.GRAF, T.MONI, T.SEQU,
            T.GOAC, T.NGIN
        ],
        description: "<ul> <li> Scopes of the project are to build infrastructure for the Greek domains hosting the 2 GUI Applications </li> <li> Delegate apps 'authentication / authorization' processes and SSO features to remote core platform invoking the Keycloak IAM controls </li> <li> Provide analytics and chart visualizations in a way to enhance the customers understanding and tendencies of excessive, collaborative amounts of data </li> <li> Dockerized infrastructure utilized to maintain the interconnections active between infrastructure nodes </li> <li> Monitor the infrastructure safety with Prometheus, Grafana and GoAccess tools </li> </ul>",
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/synergy/sfreq.png',
            '/micv/images/synergy/sintro.png',
            '/micv/images/synergy/splan.png',
            '/micv/images/synergy/sscen.png',
            '/micv/images/synergy/ssel.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK18',
        section: 'Energy',
        category: 'Design and Development',
        title: 'Hybrid Power Management',
        tools: [
            T.WEBA, T.JSCR,
            T.REAC, T.NEXT,
            T.ES6, T.CSS3,
            T.SCSS, T.REQU,
            T.ANAL, T.NODE,
            T.WEBP, T.GIT,
            T.REST, T.DOCK,
            T.MYSQ, T.NGIN
        ],
        description: ' <ul> <li> Core scopes of the project: Power Production / Load / Availability, Technical status of units and ultimately alignment with the official Schedule announced by the national supplier on daily basis </li> <li> The project consists of several policy restrictions applied at all levels and impose strict time submissions compliance and algorithmic data dependencies </li> <li> Communication amongst all members addressed within the app with Notifications and Message exchanges </li> <li> Dockerized infrastructure was installed remotely to national supplier premises at project completion </li> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/hybrid/htos.png',
            '/micv/images/hybrid/hintro.png',
            '/micv/images/hybrid/hload.png',
            '/micv/images/hybrid/hprod.png',
            '/micv/images/hybrid/hshed.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK17',
        section: 'Hospitality',
        category: 'Design and Development',
        title: 'Rateparity - Hospitality Tools',
        tools: [
            T.WEBA, T.JSCR,
            T.REAC, T.ES6,
            T.CSS3, T.SCSS,
            T.REQU, T.NODE,
            T.WEBP, T.GIT,
            T.REST
        ],
        description: "<h3>Employed as standalone Frontend Developer to build fully customizable UI widgets and the backend configuration app  in association with a backend data api developer.</h3> <p> The objective was to create a new product that would explore the potentials of UI widgets and thus enter a new market for the company <br /> My role as a Frontend developer was to create the independable CORS empowered Javascript widgets that would load on affiliate sites. The widgets should invoke the latest Js trends, load on sites without causing or receiving Js / CSS defects and should be as lightweight as possible restraining from vaguely loading countless libraries. Additianally I was attached to build the backend configuration application. </p> <h4>Main Developments</h4> <u>FRONTEND WIDGETS</u> <ul> <li>Design and develop the app's Installer that can be used on affiliate sites with a single HTML “Head”entry</li> <li>Design and develop decoupled SPA widgets, that reside on their own domains and can be launched by installer on demand</li> <li> <p> Publish 5 distinct widget types, with 4 viewport layouts for each, to accommodate diversity of screen displays: <br /> - Price checks::          Integrates calendar that helps users check hotel prices per accommodation and compare with major booking channels <br />- Active offers::          Registered offers can be displayed with a user click <br />- Notifications::          Intresting metrics, in the form of notifications are displayed on sites screen <br />- Popup offers::          Offers can popup on user display at navigation time, based on submitted configuration </p> </li> <li>Utilize the latest React 16.8 build and make use of powerful features like Hooks, Code splitting, Lazy loading, Context api, Dynamic imports etc</li> <li>Make extensive use of cache so that widgets restrain from excessive calls to the remote service</li> <li>Structure the development environment with NodeJs, Webpack, Babel etc</li> </ul> <br /> <u>BACKEND APPLICATION</u> <ul> <li> <p>Create a React 16.4 application based on a helper theme with some main group activities <br />- Configuration domains per widget <br />- Metrics and evaluation of widget usage <br />- Main Dashboard, Install and more.. </p> </li> <li> <p> The widgets configuration includes <br />- Configurable, on screen, positioning <br />- Configurable colors and literals <br />- Configurable activation / deactivation periods </p> </li> </ul>",
        score: '-',
        tutor: '-',
        comment: '-',
        links: '',
        shots: [
            '/micv/images/rateparity/widget_max_roomstream.png',
            '/micv/images/rateparity/widget_price_full.png',
            '/micv/images/rateparity/widget_offer_full.png',
            '/micv/images/rateparity/config_price_position.png',
            '/micv/images/rateparity/config_offer_colors.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK16',
        section: 'Hospitality',
        category: 'Design and Development',
        title: 'Cosmores Booking Engine',
        tools: [
            T.WEBA, T.PHP,
            T.JSCR, T.JQUE,
            T.CSS3, T.OOP,
            T.REQU, T.MYSQ,
            T.CENT, T.SECU,
            T.GIT, T.REST
        ],
        description: "<h3>Employed as standalone Fullstack Developer to maintain and extend the company's products.</h3> <p> The objective was to update the company's products, increase and enforce security on critical fields and launch new tools and features <br /> My role as a fullstack developer was to update the overall environment of a more than a decade past developed PHP system, without any coding formation style and mixed up technologies (php, js, css) on huge pages. Additionally I would need to create some common reusable helper structures to assist me build new things properly. </p> Main Developments <ul> <li>Build common and explicit PHP helper structures to make development lifecycle natively simple and secure</li> <li> <p> Build a configurable, Javascript CORS widget for displaying best price of an affiliate hotels.</p> <br />- A new REST-like, PHP API build to accommodate the exchange of CORS data consumed by widget <br />- The widget travels from Cosmores to customer site in string formate and then self-installed with included javascript launcher <br />- The widget is build with vanilla Js and plain CSS in order to avoid confiict with installed Jquery / Bootstrap or own site styles <br />- The widget is compatible with IE 8, Safari, Chrome etc <br />- The widget is fully controllable and customizable from respective backend app. </p> </li> <li>Put the application under GIT versioning and create a master repository on a remote server</li> <li>Create a portable, local virtual clone (vbox) of the Production environment server, so that development and testing activities</li> restrain from Production.</li> <li> <p>Leverage the security processes overall: <br /> - Leverage the security of entry by blocking the front entrance and allow only recognizable devices to log in. The activity uses expirable tokens that are only accepted for limited amount of time, and provide respective messages to users for guidance. <br />- Enforce strong passwords with mixed char types and length <br />- Leverage the encryption/decryption procedures for all sensitive data in the DB, which led to more than 1M rows update <br />- Enforce a finite number of times informative data can be displayed before locked for ever <br />- Leverage the restriction rules for image uploads and malicious code indexing methods <br />- Invoke sanitize/filtering on data import/display respectively <br />- Enforce PDO with MySQL inserts <br />- Make extensive use of .httaccess for filtering urls, root and child directories with explicit rules for each </p> </li> </ul>",
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/cosmores/compareme_config.png',
            '/micv/images/cosmores/compareme_info.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK15',
        section: 'Warehouse',
        category: 'Design and Development',
        title: 'Ecep Technologies Inventory',
        tools: [
            T.WEBA, T.JSCR,
            T.PHP, T.CSS3,
            T.PHP, T.OOP,
            T.REQU, T.MYSQ,
            T.LARA, T.BOOT,
            T.GIT, T.PHPS,
            T.MVC, T.REST
        ],
        description: " <p> The objective was to build a web system that would allow company's employees to perform daily workflow procedures handily and reduce the times needed to perform such tasks with spreadsheets and manpower. <br /> My role was to bring that system to life right from the ground, by communicating with the entrepreneur on a daily basis, to collect and elicit requirements. <br /> The initial task was to design and build a database of a centralized inventory application for company's products, and replace spreadsheets that were used instead. Following steps would issue the extensions  activities required to cover companies processes like purchases, deliveries, sales etc.</p> <h4>Main Developments</h4> <ul> <li>Design and build an efficient DB system by analyzing and evaluating legacy spreadsheet procedures for more than 500K distinct barcodes</li> <li>Use the Laravel MVC 5.1 Framework to as a robust and secure foundation to build the application and a REST-like API</li> <li>Use remote Git Repository to control development progress but also for deployments</li> <li>Create a Local virtual (VBOX) clone of Production for development purposes</li> <li> <p>Develop the core parts of the Application, ilke <br />- Product Imports with spreadsheets, barcode recognition, manually <br />- Product CRUD & Products Indexing w/ numerous filter combinations <br />- Indexing products lack / surplus <br />- Indexing of Purchases / Deliveries / Sales <br />- Instant evaluation of a devery in a way to identify lack / surplus on time <br />- Instant monitoring of past delivery status like complete / pending items </p> </li> </ul>",
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/ecep/delivery_status.png',
            '/micv/images/ecep/pending_purchaces.png',
            '/micv/images/ecep/search_tool.png',
            '/micv/images/ecep/purchase_details.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK14',
        section: 'Conferences',
        category: 'Design and Development',
        title: 'Noblelinx CRM',
        tools: [
            T.WEBA, T.JSCR, T.PHP,
            T.CSS3, T.JQUE, T.CHRO,
            T.OOP, T.REQU, T.JSON,
            T.SVN, T.PHPS, T.VIRT,
            T.LINU, T.MYSQ, T.SECU,
            T.PMAN, T.TEST, T.MVC,
            T.APAC, T.UBUN, T.CENT
        ],
        description: " <p>The overall objective was to upgrade, extend and maintain a legacy CRM commercial system that was build on top of PHP legacy constructs. My role was to make the app portable by detaching all hardcoded paths of the project from the server, invoke svn versioning, launch on an updated server and afterwards extend with new features. <br /> The project was large, consisting of more than 500 DB tables and the lack of any viable coding formation to separate diverse technologies was making it difficult to maintain. <br /> The result was to work on the same page with all mixed-up  on  thousand-lined pages. </p> <h4>Main Developments</h4> <ul> <li>Put application under SVN Versioning control</li> <li>Provide portability: Unroot the project that was harcoded  on the host and move all configuration data and links to custom-made external '.ini' configuration,</li> <li>Install and setup a Centos 5 copy of the Production to run as Staging environment and perform tests before updates publishing to Production.</li> <li>Set up a Ubuntu-based virtual 'Local' and Centos-based remote 'Staging' hosts to deploy and test application before move on 'Production'</li> <li>Set up a clone virtual machine (vbox) for development environment</li> <li>Implement Utility classes and a Core class, with MVC-like capabilities, as a root class to extend and inherit all essential activities for the newly invoked classes afterwards.</li> <li>Amongst others, newly initialized child classes, would genuinely have access to: Main and own Configuration, Database storage, Session storage, Access Restrictions, Self-Debug, Debug-Logs, Exceptions, Helper methods, and more.</li> <li>Synchronize 2 legacy Calendar libraries (1 php, 1 js) with Exchange Web Services (EWS) to enable control over Microsoft Calendar Events, User Tasks, Emails, Contacts etc</li> <li>Launch time evaluated,filtered, charts for performance auditing Employees / Teams / Managers / Directors</li> <li>Enforce 90-Days expiring passwords for all users, validated with unique tokens and time restricted activation boundaries,</li> </ul>",
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/noblelinx/performance-manager.png',
            '/micv/images/noblelinx/performance-director.png',
            '/micv/images/noblelinx/logs.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK13',
        section: 'Banking',
        category: 'Design and Development',
        title: 'Commerzbank Infobroker',
        tools: [
            T.WEBA, T.JSCR, T.PHP,
            T.CSS3, T.JQUE, T.CHRO,
            T.OOP, T.REQU, T.TEAM,
            T.JSON, T.ZEND, T.TWIG,
            T.BOOT, T.SVN, T.PHPS,
            T.SECU, T.TEST, T.MVC
        ],
        description: "<p>The objective was for the team to build a concurrent web solution for the German Commerzbank that would be used internally by company's employees, namely Infobroker.  The intranet would assist bank's employees to monitor,  evaluate and gain insight from data visualizations. <br /> My role was to adhere to design blueprints dictated by company's UI/UX experts and deliver interactive pages and widgets. Enabling daily web meetings with with foreign colleagues and data maintainers, we would need to resolve the required data and the paths to collect before delivering the solutions. <br /> Data would need to get collected with the use of a graphical interface that would ensure data security all the way through. By the time the project reached to a certain level of completeness, my job was moved to provide ticketing support services. </p> Key Responsibilities: <ul> <li>Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)</li> <li>Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs</li> <li>Provide ticketing solutions for acknowledged bugs</li> </ul>",
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/commerzbank/certificates.png',
            '/micv/images/commerzbank/indexsystem.png',
            '/micv/images/commerzbank/indexwerte.png',
            '/micv/images/commerzbank/stockexchange.png',
            '/micv/images/commerzbank/topflop.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK12',
        section: 'Safekeeping',
        category: 'Design and Development',
        title: 'DeltaComsos ERP',
        tools: [
            T.WEBA, T.PHP,
            T.MVC, T.YIIM,
            T.MYSQ, T.OOP,
            T.JQUE, T.CSS3
        ],
        description: ` <p> Company's Employee Management systems build with the power of MVC, Yii Framework, that extends to thousands lines long functionality. The system mainly implements PHP, MySQL, JQuery and multiple Javascript plugins like Bootstrap for CSS, Ajaxplorer file sytems, Lightbox and more. During a short time period that I was employeed for the company I have delivered the following results: </p> <ul> <span> <li>1. Plan an all-over from-scratch design for measuring employees monthly workhours. The legacy design had to be upgraded so that we could now count each working second instead of simply adding the succeeding hours. The proccess revealed erronous deliverables granted by the legacy workhour counter. The new design delivered accurate-to-second results, taking into perception each correlation among the business rules listed above: </li> <li> • DateZone Type: Simple Day - Holiday/Sunday.</li> <li> • ShiftZone Type : Plain Shift (8 Hours) - OverHour (81 Hour) - ExtraHours (9+ Hours).</li> <li> • HourZone Type: Morning - Night .</li> <li>2. Moreover the Shifts display, figured on an Interactive Board, would now need to visually alert Administration when the following conflicts occured: </li> <li> • Employees were prohibited from taking a Shift 12 Hours before their last Shift</li> <li> • Employees would need to follow a "5-2" Shifts Rule, issuing 5 working days and 2 Dayoffs during a week long time period</li> <li>3. An application migration to a new Host Server that brough various mulfunctions to extension plugins operation</li> <li>4. A major front-end facelift update, conforming the visual display to latest CSS3 standards with overall Crossbrowser Compatibility efficiency</li> </span> </ul>`,
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/deltacosmos/interactive_board.png',
            '/micv/images/deltacosmos/month_workhour.png',
            '/micv/images/deltacosmos/employee_info.png',
            '/micv/images/deltacosmos/customer_guard.png',
            '/micv/images/deltacosmos/map_monitor.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK11',
        section: 'Education',
        category: 'Design and Development',
        title: 'Pearson E-learning',
        tools: [
            T.WEBA, T.JSCR,
            T.JQUE, T.JSON,
            T.GIT, T.SOUR,
            T.HTM5, T.CSS3
        ],
        description: ' <p> E-learning system delivered for Pearson USA, totally consisting by Javascript-Jquery and JSON folded data. During a short-time period that I have been occupied for CSSEducation company I have delivered a demo of the Javascript engine. Its operation is described below: </p> <ul> <span> <li>Design a Json string-patterned API that plain users would need to issue for giving instructions to Javascript engine.</li> <li>Following the pattern-instructions, Javascript engine distincts and allocates page content as: </li> <li> •  Interactive Page Title and Page Description on top of the page, </li> <li> •  Interactive Page Content Description on the left of the page, </li> <li> •  Main Interactive Content on the right, </li> <li> Main Content issues most of interactivity addressed as: </li> <li> •  Aligns multiple interactive paragraph examples along with their functionality-initializing handlers</li> <li> •  Paragraph content-parts come preformated with styles, according to user instructions issued by the API</li> <li> •  Paragraph parts deliver text animating effects</li> <li> •  Paragraph handlers mostly issue video/audio emerging events</li> <li> •  Audio/Video events are synchronized with prioritized text animating effects</li> <li> •  Handler events bring paragraphs to the original preformated state and immediately address the anime</li> <li> •  A variety of text animating effects are addressed, regarded to API issued instructions</li> </span> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/pearson/simple_words.png',
            '/micv/images/pearson/tutor_intro.png',
            '/micv/images/pearson/anime_audio_synch_1.png',
            '/micv/images/pearson/anime_audio_synch_2.png'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK10',
        section: 'Portfolio',
        category: 'Design and Development',
        title: 'Curriculum Vitae',
        tools: [
            T.WEBA, T.WEB_,
            T.JSCR, T.JQUE,
            T.XML, T.CHRO,
            T.ECLI, T.CSS3,
            T.HTML
        ],
        description: ' <span> <ul> <li>Restrictively Dynamic Implementation (Every element designed with jQuery-Javascript)</li> <li>Animating Features - Dynamicaly Navigating menus - Scrolable Main Pages (Not loaded)</li> <li>Use Keywords to Categorize Projects and Groups-Navigates upon</li> <li>Dynimacally makes the decisions and creates hosts for presenting :</li> <li> 1. Images - JPEG</li> <li> 2. Documents - PDF</li> <li> 2. Videos - AVI (builds connection to Google Drive)</li> </ul> </span>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/micv/studies_grouped.jpg',
            '/micv/images/micv/skills_showcase.jpg',
            '/micv/images/micv/video_hosted.jpg',
            '/micv/images/micv/projects_preview.jpg',
            '/micv/images/micv/extra_info.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK09',
        section: 'Merchandise',
        category: 'Design and Development',
        title: 'ELGREG [2013]',
        tools: [
            T.WEBA, T.WEB_,
            T.JSCR, T.AJAX,
            T.XML, T.XSLT,
            T.XPAT, T.PHP,
            T.HTM5, T.CSS3,
            T.RESP, T.SEO,
            T.ECLI
        ],
        description: ' <h5>STORE-FRONT</h5> <ul> <li>• SEO-Friendly Design - Readable Seo-Friendly URLS</li> <li>• Breadcrumb (dynamic user navigation)</li> <li>• Sitemap</li> <li>• Responsive Design</li> <li>• Back-end Administration - Customizable</li> <li>• Language Translation </li> <li>• Animating Features (Javascript)</li> <li>• Javascript History API</li> </ul> <h5>BACK-END ADMINISTRATION</h5> <ul> <span> <li>A. Insert Data</li> <li> - Insert Data Row (with form)</li> <li> - Insert Complete Files (.CSV)</li> <li>B Update Data </li> <li> - Data Row (inline)</li> <li> - Distinct Values</li> <li>C. Delete Data</li> <li>D. Filter Data (+ Multiple Filters)</li> <li>E. Avoid Duplicate Values</li> <li>F. Messages to Users (Saved, Not Saved etc)</li> <li>G. Ascend/Descend Order (+ filtered)</li> <li>H. Upload Images -> 1 upload produces 3 images with scaled image sizes</li> </span> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/elgreg_upd/home.jpg',
            '/micv/images/elgreg_upd/product_category.jpg',
            '/micv/images/elgreg_upd/partner.jpg',
            '/micv/images/elgreg_upd/product_full_description.jpg',
            '/micv/images/elgreg_upd/administration.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK08',
        section: 'Merchandise',
        category: 'Design and Development',
        title: 'Elgreg',
        tools: [
            T.WEBA, T.WEB_,
            T.XML, T.JSCR,
            T.AJAX, T.DREA,
            T.FLAS
        ],
        description: ` <span><p>Elgreg is a building constructions company that provides customers with goods such as marbles, granites, tiles etc, while at the erection state of the premise. </p> <p>Throught the web site the company wishes to showcase its products and provide the 'look and feel' of the company to its prospect customers.</p> <p><i>*The site is not concluded when it comes to textual material. Therefore most text areas that are found within this domain were originaly placed only for visual matters. </i></p></span>`,
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/elgreg/elgreg_home.jpg',
            '/micv/images/elgreg/contact.jpg',
            '/micv/images/elgreg/full_preview.jpg',
            '/micv/images/elgreg/prods_preview.jpg',
            '/micv/images/elgreg/slide_show.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK07',
        section: 'Education',
        category: '-',
        title: 'Schedule Handler',
        tools: [],
        description: ' <ul> <p>The system is originally built for providing functionality with regard to the following sections: </p> <span> <li>The system is an instrument for users to arrange, conduct and maintain an annual school   schedule in a relative intuitive and easy way. The users should be provided with guidance to those cases where the operation of the system is ambiguous. </li> <li>The system will maintain hierarchically privileged accessing roles for its users, and top-privileged roles should maintain the faculty to adjust the privileges of the other user-roles.</li> <li>The system maintains diverse accessing level sections, where sections of high importance can only be accessed by the corresponding accessing user roles, as those are imposed by administration.</li> <li>The arrangement of the schedule can only be conducted by highly privileged roles and will be iterated automatically by the system, but verified manually by lower privileged roles, on a daily basis.</li> </span> <li>The schedule can override the formal arrangements or can change completely during a running semester. The system will need to easily integrate the changes and those must be provided for verification as well. </li> <li>The informative resources of the organizations (like registered courses, tutors, campuses addresses etc) can be accessed effectively by all user roles of the system, but only authorized users will be in position to add new resources to the system. </li> <li>The system will maintain a registry where the users interaction with the system can be monitored.</li> <li>The system should be deployed in a secure environment and will maintain the privacy of the registered records from unauthorized users.</li> <li><ul>The system should maintain extra faculties for top-level privileged roles as to: <li>make overall estimations for given time-periods, based on the daily recordings</li> <li>securely backup and/or retrieve the database data on demand</li> </ul></li> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/sheduler/pic_msch.jpg',
            '/micv/images/sheduler/pic_hours.jpg',
            '/micv/images/sheduler/pic_restrict.jpg',
            '/micv/images/sheduler/pic_backup.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK06',
        section: 'HSE and Facility Department',
        category: 'graphics design',
        title: 'HSE Newsletter',
        tools: [T.FLAS, T.ILLU, T.PHOT, T.COMM, T.PMOT],
        description: ' <span> <p>An electronic leaflet distributed by the Facility Security & HSE Department, with an intention of being delivered to all employees of the company via email on a 3 month basis. Context of the paper would conclude up information regarded relevant to the department’s original scope and principals.</p> <p>The driving concept beneath the newspaper was for the department to establish an active communication port with the members of the company, broadcasting informative and alerting messages for precaution but within a joyful environment, thus more readable for the audience.</p> </span>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/hse_newsletter/p1.jpg',
            '/micv/images/hse_newsletter/p2.jpg',
            '/micv/images/hse_newsletter/p3.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK05',
        section: 'Human Resources Department',
        category: 'graphics design',
        title: 'Innovation Club',
        tools: [T.FLAS, T.PHOT, T.ILLU, T.COMM, T.PMOT],
        description: ' <span><p>‘Innovation Club’ was an Initiative that was taken by the HR department of the company and was announced to all employees at a specific day. </p> <p>The key concept that laid behind this announcement was the fact that the company motivated it’s employees to identify any major drawbacks on its daily business routines and suggest their ideas to the administrators for overcoming any prospective barriers. </p> <p>This was a huge project that was undertaken by the HR department and included several meetings amongst directors of the company and external advisors. </p> </span> <p>My part in this workload was to design and dress up visually the campaign of the HR department, both for digital and printable mediums. Therefore I participated in gatherings with an external advisor that kept the full picture of the initiative and who would need to pass me a number of perspectives of the idea, so that I could come up with a visual representation of the logo, banners and video animations. </p>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/innovation_club/logo_final.jpg',
            '/micv/images/innovation_club/banner1.jpg',
            '/micv/images/innovation_club/banner2.jpg',
            '/micv/images/innovation_club/banner3.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK04',
        section: 'Personal Workload Diary',
        category: 'Design and Development',
        title: 'Daily Scheduler',
        tools: [T.DESK, T.ACCE, T.DMAI],
        description: ' <p><b> Description of the Application</b></p> <ul> <span> <li>  Register the daily program with adequate information </li> <li>  Track down the date that the notification was made by the departments </li> <li>  Take seriously into account the due date of each assignment </li> <li>  The program maintains a checkbox that designates which of the assignment were fulfilled and those that still pending </li> <li>  Provide special meaning to when exactly was the department informed - since if it was the same date (and not the previous as it formally should) it could cause a serious disorder to the actual schedule of that day </li> <li>  Maintain date-time registry of the actual recording made </li> <li>  Maintain control button for “new”, “save”, “delete” recordings and “refreshing” the actual table due to changes made in the back-end </li> </span> </ul> <u> Two Additional buttons: </u> <ul> <li> One button to preview a report with the assignments that were requested for the following dates, but also for those that are pending from previous dates (highlighted). </li> <li> Second button would delegate to enable the ms-outlook ‘sent mail’ functionality, and attach the next day’s report and send it to the supervisor so that he/she should be informed. </li> </ul> <p><u>Additional Benefits</u></p> <ul> <p>Employing such a database application would empower the department also to: </p> <li>1. Keep the supervisor informed about the next day’s schedule, so that where emerging assignments were requested could respond effectively. </li> <li>2. Explore those departments that we frequently missing to inform us about their critical assignments, so that we could potentially request back for their conformance. </li> <li>3. While working with the system enough we would collect enough data to underline out those day’s that our department would be most likely to have greater traffic, so that we could be prepared. </li> <li>4. Address any prospective conflicts with the departments about past day of the schedule </li> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/daily_schedule/application_main.jpg',
            '/micv/images/daily_schedule/report_sent.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK03',
        section: 'HSE and Facility Department',
        category: 'Design and Development',
        title: 'Monthly Bills Monitoring',
        tools: [T.DESK, T.ACCE, T.EXCE, T.DMAI],
        description: '<p> <span>The monthly bills statements were recorded and further indexed by Microsoft Access application, providing us with greater efficiency and speed in collecting numerous data and make more wise monitoring upon. The initiative was initially taken in order to monitor the physical resources consumption that was emerging within the company on a monthly basis. Additionally the querying mechanism implemented was enabling us to provide feedback for the HR Department with charts and reports due to the end of each semester. </p> <p> Moving a step further, as the consumption was already acknowledged, the system integrated the faculty to come up and present also the monthly expenditure for all of the consumed resources and finally estimate the total monthly expenditure. Therefore even though the main purpose of the initiative was to monitor the consumption, it was transformed so that it could also monitor and verify our partners charges and invoices. Since adaptation the application has proven successful in doing so, as during all following months did brought to surface small to wide inconsistencies among partners charges and our evaluations. </p> </span> <p> Moreover the data increment was expected to provide us with augmented input for exploration and exploitation. </p> <p> In the background, the application is closely related with an MS Excel table that hosts in an explicit format the consumption of resources made by the company. The Excel file is filled by the user, who upon completion can move to the MS Access environment enabled either to: <ul> <li> Monitor the monthly resources consumption, within the use of chart diagrams </li> <li> Monitor the monthly expenditure, within a report statement </li> </ul> </p> <p> In both cases, the previewing can either be summarised or distinct with explicit information for each service. The partner’s charging statement could then be crosschecked with the applications summarised expenditure report and any diverse outcomes could be examined extensively. </p>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/month_bills/month_report.jpg',
            '/micv/images/month_bills/excel_file_inside_access.jpg',
            '/micv/images/month_bills/month_bills_excel_file.jpg',
            '/micv/images/month_bills/request_report_month.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK02',
        section: 'HSE and Facility Department',
        category: 'Design and Development',
        title: 'Booking Rooms',
        tools: [T.DESK, T.ACCE, T.DMAI, T.VBA],
        description: ' <p><b>Description of the Application</b></p> <ul> <span> <li> The project is a Microsoft Access application that was hosted in the shared files of the company and employees could use while having the access rights on that certain folder. Its main purpose was to resolve the booking of the rooms provided by the company for its members for meetings. </li> <li> Employees were to apply the provided inputs and using the ‘mail’ button a report was triggered in the background to be sent to the meeting-rooms administrator. </li> <li> A number of inputs were required and others were not. Missing to apply a required input would bring up an informative message for the user while trying to save the data, alerting where the omission emerged and highlighting the input[s]. </li> <li> While hovering with the mouse or focusing on an input using the keyboard ‘tab’ key, the ‘message box’ displays messages for the user informing whether the input is required or not. </li> </span> <li> Where the form has been applied effectively and saved, an informative message is displayed to users inform them that the registration was made. </li> <li> Saving a form, would enable the ‘preview request’ and ‘email sent’ buttons and those can further be used by the user. </li> <li> ‘preview request’ would display the report that will be sent to the administrator, while ‘email sent’ would sent it immediately without further activity by the user. </li> </ul> <p><u> Additional Benefits </u></p> <p> The initiative was taken by the department since there were numerous conflicts following the ‘phone calling’ procedure between departments and administrator. Implementing this application would effectively empower the admin to monitor and take care of the whole procedure. Likewise: </p> <ul> <li> We would escape any space for missing phone calls since the requests would land straight to the admin’s email. </li> <li> The admin would maintain a directory of the ‘report requests’ sent, that could be monitored with greater effectiveness than moving back to actual emails and  rolling down conversations before taking the booking decisions. </li> <li> Department delegates would never again sent emails missing any critical information since now the mail could never been sent with the regarded omissions. </li> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/meeting_rooms/meeting_rooms_main.jpg',
            '/micv/images/meeting_rooms/message_box_alert.jpg',
            '/micv/images/meeting_rooms/coffee_break_policy.jpg',
            '/micv/images/meeting_rooms/successful_registration.jpg',
            '/micv/images/meeting_rooms/click_preview_report.jpg'
        ]
    },
    {
        domain: 'WORK',
        id: 'WK01',
        section: 'HSE and Facility Department',
        category: 'Design and Development',
        title: 'HSE Database',
        tools: [T.DESK, T.ACCE, T.DMAI, T.VBA],
        description: ' <p><b>Description of the Application</b></p> <ul> <span> <li>The application is a unified ms access environment that delivers instantly, coherent and verbose information about all of the company employees in several distinct domains. </li> <li>Amongst all of the main pages there is a ‘search input’ that will add value while in search of data for an individual. </li> <li>All domains provide also stand-alone and multi-rows presentation of data while indexing the data. </li> <li>Maintain a registry of all the company employees with all of their company-relevant credentials. </li> </span> </ul> <p><u>The domains where the application evolves function are the following: </u></p> <ul> <li> <b> Domain: PERSONS.</b> Employee company-related credentials (name, job purpose, department, geographical area, phone/mobile, email etc.. ) </li> <li> <b> Domain: CARS</b>. Employees training in driving skills is examined and the page incorporates elements like the ‘date’ that examination was taken, the ‘score’ that was achieved and the trainer ‘comments’ about the nominee </li> <li> <b> Domain: CARS</b>. The page resolves the matches between company’s cars fleet and employees. There is a adequate description of the car assigned recorded, as ‘brand’, ‘cc’, ‘color’, ‘leasing-company’, ‘car features’, ‘car km’ and ‘date bought’. Also there is the name of the driver that has been assigned the car. </li> <li> <b> Domain: PARKING</b>. The page resolves the parking seats of 2 different buildings and their correlation with the actual cars of company and assigned drivers (only for employees occupied in office - not sales force).  The page makes extensive use of searching operations providing 3 different domains for indexing. </li> <li> <b> Domain: OVERVIEW</b>. The page gathers and accumulates information from 3 distinct pages and provides a quick overview for each employee. The retrieved pages are ‘roadsafety’, ‘safetracks’ and ‘accidents’ </li> <li> <b> Domain: ANNUAL ROADSAFETY RATES</b>. The page is applied by the HSE department due to each year ending and is a multi-rows evaluation map for each driver. The driver is evaluated from its manager and the HSE department. Next to each driver row there are buttons for quick referencing the employees driving behavior. </li> <li> <b> Domain: ACCIDENTS</b>. The page hosts information about the driving accidents that employees have encountered. Therefore the recording made are: ‘the driver’, ‘accident date’, ‘driver description’ and ‘HSE department categorization’ of the accident. </li> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/hse_db/person_alone.jpg',
            '/micv/images/hse_db/accidents.jpg',
            '/micv/images/hse_db/annual_safetrack_rates.jpg',
            '/micv/images/hse_db/welcome_page.jpg',
            '/micv/images/hse_db/cars_alone_km.jpg'
        ]
    },

    {
        domain: 'STUDY',
        id: 'ST01',
        section: 'Programming Technologies',
        category: 'desktop application',
        title: 'Java Development',
        tools: [T.JAVA, T.NETB, T.OOP],
        description: ' <p>The program is a small application that stores the records for multiple users while they submit to its main application window. For each user the application should be in place to store information such as the user IP, user name etc. Some of the inputs are of significant value and the program needs to secure that they are filled appropriately with valid inputs, as also to secure that they will not be disregarded and remain blank by users. </p> <ul> <span> <li> The program obtains that no duplication of values is allowed for inputs such as the user IP and user name. </li> <li>The port inputs must be designed in a way that they shall deliver valid port numbers for registration, not surpassing the number of 65.536, as neither contains inappropriate text characters. </li> <li>Same port numbers can be used among different users, while the program needs to obtain that no port number is allowed to be used twice by the same user. Nevertheless, if a port input is omitted by a user this will not have any defect to the application and the user will be registered. </li> <li>The application will allow a certain number of users to be registered and the program provides notification that informs dynamically the number of registered users. </li> <li>A user that has applied erroneous data will be escaped from registered and the count want run is such case. </span> Pop-up windows alert and inform the users of prospect conflicts traced by the system while also a valid path that should be followed in order to resolve those conflicts. </li> <li>A false action by the user will prevent him from registering. At the same time the application will rather leave correctly applied inputs intact and will provide instructions how to correct those values that generated the conflict. In case where all inputs where applied conformingly, the system will make the registration and following will clear all previous data from the inputs. </li> <li>If the user feels the need to clear the inputs before submitting, there is a button signed as “clear” that can take away all input values with a click. </li> <li>By the time that the number of allowed registered users reaches the limit, the systems informs that no further records can be applied and the “submit” button becomes disabled and blurred, implying that no further call can be applied further. Instead a new button “statistics” is enabled and prompts the user to trigger. </li> <li>Firing the “Statistics” button invokes the system to output a new window that hosts a table with records stored within for all users.</li> <li>At the top of the window there is a certain section where the user is prompted to search for a specific port number currently in use. Clicking the ‘search’ button will generate a query in the background and the results will be displayed in a pop-up window. </li> </ul>',
        score: '-',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/in/gprok">Prokopakis, George MSc</a></h4> <p>US Naval Postgraduate School, CA</p>',
        comment: '-',
        shots: [
            '/micv/images/ptech_a2/alert_2_invalid_input_value.jpg',
            '/micv/images/ptech_a2/alert_1_value.jpg',
            '/micv/images/ptech_a2/alert_3_dublicate_value_inputs.jpg',
            '/micv/images/ptech_a2/alert_4_invalid_input_values.jpg',
            '/micv/images/ptech_a2/information_board.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST09',
        section: 'Web Applications for Businesses',
        category: 'Design and Development',
        title: 'Simple Web Store Development with PHP',
        tools: [T.WEB_, T.WEBA, T.MYSQ, T.PHP],
        description: ' <p>The report describes the development of a simple portal, designed and hardcoded exclusively making use of: </p> <ul> <span> <li>XHTML-CSS standards </li> <li>PHP scripting language </li> <li>MySQL database system terminal</li> </ul> <p>The demonstration following provides both textual and visual information for the site navigation and at the same time the functionality that is implemented and running behind the scenes. </p> <ul> <p>The portal provides a minimum functionality level that creates impact for three distinct role categories of users. As of those: </p> <li> First group figures the users that enter the site to gain information on selling products </li> <li> Second group figures users that are leaded by the idea to acquire products and therefore need to become registered members of the portal. </li> <li> Third is the group of authorized users. Those are credited members of the company and obtain the capacity to maintain the products database and the previewing of the products, while also handle user registrations and design benefits for the registered users </li> </span> </ul> <p>Throughout the report there is a detailed description for all user groups and their experience with the site, while also the functions that lie underneath each group. </p>',
        score: '68',
        tutor: '<h4><a target="_blank"  href="https://facebook.com/ioannis.pandithas?fref=ts">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p>',
        comment: '-',
        shots: [
            '/micv/images/webdes_a1/welcome_page.jpg',
            '/micv/images/webdes_a1/add_product_to_basket.jpg',
            '/micv/images/webdes_a1/single_product_description.jpg',
            '/micv/images/webdes_a1/preview_registered_products.jpg',
            '/micv/images/webdes_a1/preview_registered_users.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST10',
        section: 'Systems Development',
        category: 'Design and Development',
        title: 'Media Player Development with C#',
        tools: [T.DESK, T.CSHA, T.VISU],
        description: ' <p>The report describes the design, development and further the functionality of the media player that created with the use of current trend of Rapid Application Development philosophy. The concept of RAD programming consists of developing and advancing applications within powerful IDE components like Microsoft Visual Studio. Such IDEs retaining the faculty and qualify developers with consistent and optimized functional components that can be embedded to applications visually and can be configured extensively. </p> <p>The application is build totally hardcoded with the use of C# language and some of its popular libraries. Some of the functional features that are enabled by the media player are: </p> <ul> <span> <li> Browsing of the file system using the standard “open file dialog’ component and additionally navigating through the directories paths </li> <li> Playing single files or Creating playlists of preference and arranging their order </li> <li> Drag & Drop functionality </li> <li> Standalone area, that announces informative messages to the user, extents the usability of the application and enhances user experience </li> <li> Extended error handling and window messaging </li> <li> Flexible and adjustable environment </span> </li> </ul>',
        score: '80',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/in/ioannischatzis">Chatzis, Ioannis Phd</a></h4> <p> Machine Vision, University of Patras</p>',
        comment: ' <span>Very well analyzed and explained. Very thorough in every aspect of the desing and implementation. Very well commented code. Good functionality. Well designed and user friendly interface. All the extra features asked are added succesfully</span>',
        shots: [
            '/micv/images/sysdev_a1/play_playlist_selected_only.jpg',
            '/micv/images/sysdev_a1/media_player_welcome_page.jpg',
            '/micv/images/sysdev_a1/create_playlist.jpg',
            '/micv/images/sysdev_a1/copy_multiple_file_to_playlist.jpg',
            '/micv/images/sysdev_a1/list_view_navigation.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST02',
        section: 'Systems Development',
        category: 'Design and Development',
        title: 'GUI Development with Matlab',
        tools: [T.DESK, T.MATL],
        description: ' <p>The report describes the development of a simple GUI application in Matlab IDE environment. </p> <span> <p>The key concept behind this application is to design an interface with Matlab coding that will enable a user to index sound files located in the host’s directory, load them and finally ‘plot’ them in a live chart board. Additionally the application will provide preconfigured filters that can be appended on the sound file and either distort or stabilize their sound. </p> <p>The application incorporates some of the fundamental procedures met in the majority of application developments. </p> <ul><p>As some of those are </p> <li> Browsing activity in the directories of the host system </li> <li> Choosing and loading specific file formats on the application</li> <li> Providing interaction for the user regarding the loaded file.</li> </ul></span> <p>A range of powerful facilities, provided by the Matlab IDE, are programmed accordingly as to provide users with the capacity to submit filtering functionality on loaded sound files and overcome inefficiencies encountered in the original one. </p>',
        score: '75',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/in/ioannischatzis">Chatzis, Ioannis Phd</a></h4> <p> Machine Vision, University of Patras</p>',
        comment: ' <span>The features asked where implemented and were justified adequately. Moreover an additional feature was added as a trial to implement a better filtering method.I was pleased with the presentation, the implementation and the justification of the various steps </span>',
        shots: [
            '/micv/images/sysdev_a2/program_interface.jpg',
            '/micv/images/sysdev_a2/load_file.jpg',
            '/micv/images/sysdev_a2/apply_filter.jpg',
            '/micv/images/sysdev_a2/remove_filter.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST03',
        section: 'Advanced Database Systems and Applications',
        category: 'Design and Development',
        title: 'Machine Learning Algorithms',
        tools: [T.WEKA, T.DBAP, T.DATA],
        description: ' <p>The report describes the procedure of taking a corrupted raw set of data in MS Excel format and apply numerous modifications upon, transforming it to a valid dataset able to provide us with classification and prediction rules.</p> <p>The procedure starts, with the given dataset on a spreadsheet format that initially needs to be preprocessed through several preliminary modifications. The applications that are used during this phase modifications are MS Excel and MS WordPad. Finishing the activity the file should be converted into ‘csv’ or ‘arff’ format and become appropriate for insertion in a data mining tool.</p> <p>The data mining tool is WEKA application. Within the WEKA application we will continue to preprocess the data and attributes of the dataset with diverse techniques in a way to construct a more effective model for prediction. Finishing the preprocessing section, the model will be regarded ready for starting to actually appending on it predictive algorithms build in the WEKA application.</p> <ul> <p>Amongst those we choose to qualify on, are:</p> <span> <li> “Decision Tables” </li> <li> “M5 Rules”</li> <li>  “J48”</li> <li> “Bayes Net” </li> </span> </ul> <p> Eventually some of the above models will enforce us to attempt making predictions for a class attribute of a new data set. </p> <p>Throughout the entire exploration, the cases will be analyzed extensively through textual and visual mediums of contents. </p>',
        score: '83',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/pub/petros-bofakos/a/149/b90">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK </p>',
        comment: ' <span>The student work stands out for clarity. All phases of the assignment (data cleaning, data conversion, pre-processing, classification, forecasting) were performed and described in a remarkably clear and systematic manner. The report structure and presentation is excellent. </span> A minor point: For increased readability of the Table of Contents, please use shorter. Section titles. The  Conclusion summarizes the student’s work. It does not provide a  critical evaluation of the data mining process as experienced by the student during the assignment.',
        shots: [
            '/micv/images/adsa_a1/weka_tool.jpg',
            '/micv/images/adsa_a1/j48_weka_classifier.jpg',
            '/micv/images/adsa_a1/bayes_net_graph_visualizer_2.jpg',
            '/micv/images/adsa_a1/j48_graph_visualizer.jpg',
            '/micv/images/adsa_a1/unpruned_m5rules.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST04',
        section: 'Advanced Database Systems and Applications',
        category: 'Design and Development',
        title: 'Oracle Advanced Database Development',
        tools: [T.DBAP, T.ORAC],
        description: ' <p>The report undertakes a case scenario where a director of a company has requested to employ a file hosting application for his/her business and has referred to us for developing a database plan that will stand out for the idea. </p> <span> <p>The first section introduces the proposed database design along with descriptive information for the entities that compose it for pulling out and covering the director’s requirements effectively. At the end of the section some complementary entities will be proposed from us to the director for upgrading the project’s operation. </p> <p>The second section induces the actual development of the database using the “Oracle Database Developer”. Creation of tables, application of the essential constraints and loading of plain data for the entities dominates the section. At the end of the section there is the appropriate testing performed, as it was imposed by the director in the message.</p> <p> The third section covers the implementation of specific advanced queries that will be used by the administrator of the database to address and monitor the recorded data.</p> </span>',
        score: '95',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/pub/petros-bofakos/a/149/b90">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK </p>',
        comment: ' <span>An excellent piece of work! The student has answered correctly all question items including the complex queries of the last section. His answers are clear, detailed and well-presented in an excellent report. It is quite hard to spot any significant area of improvement to the student’s work. </span>',
        shots: [
            '/micv/images/adsa_a2/entity_file_transfer.jpg',
            '/micv/images/adsa_a2/advanced_subqueries_oracle.jpg',
            '/micv/images/adsa_a2/bitmap_indexes.jpg',
            '/micv/images/adsa_a2/sequences_in_oracle.jpg',
            '/micv/images/adsa_a2/advanced_subqueries_oracle2.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST05',
        section: 'Systems Analysis and Visualizations',
        category: 'Management',
        title: 'Programming Languages Evolution',
        tools: [T.ANAL, T.RESE],
        description: '<p>The report provides <span>a brief overview on the evolution of programming languages, referring to some of the most popular achievements, respectably developed from early computing days till current. In order to safeguard the limitations in word count the report examines extensively only 1st, 2nd and 3rd generation languages evolution, and provides a shorter reference on 4th and 5th generation languages. </p> <p>Taking into account the needs and potentials for diverse time eras of history, this evolution is investigated in parallel along with the machineries that programming languages have deployed within.</p> <p>At the closing of the document there is also an forecasting approach made to future developments.</p> </span>',
        score: '95',
        tutor: `<h4><a target="_blank" href="https://linkedin.com/pub/michael-hands/30/8ba/61b">Hands, Mike Ph.D</a></h4> <p> Part-Time Ph.D Optoelectronics, King's College London, UK</p>`,
        comment: ' <p>Manos Zalokostas has placed significant effort on this first coursework assignment. His descriptions develop the background of the topic well, although his descriptions in English do not present the topic concisely. However, the message within his descriptions is correct.  </p> <p>The only issue with the content is that it has limited consideration of “What did the developers of the technology do to try and make the transition to it better / simpler?“ which was a question that was presented in the assignment description to be considered as part of the essay task. However, he has brought together concepts with a broader consideration than the main suggested questions, relating the development of computer programming languages to social impact, and that such impact will be greater as the development of programming languages continues towards greater levels of abstraction. </p> <p>He has provided material that shows that he made notes from the references he used, and that these notes were used to help him develop a plan regarding the content of the essay. My review of the references that he used suggests that most of the wording used in the construction of the essay is his own. His references include texts that are not accessible simply through accessing internet sites and are some of the more significant texts covering the topic. </p> <p>My personal discussions with Manos on this topic show that he has benefited from this research exercise and that he is motivated to learn about such interesting topics. <span> I am very satisfied with his performance. His enthusiasm for the topic shows from the quality of his work and my personal discussions with him </span>. </p> <ul><p> My recommendations are: </p> <li> Marks for working notes (out of a possible 30%) : 30% - A thorough set of working notes was provided. </li> <li>Marks for essay (out of a possible 70%) :  65%.</li> </ul>',
        shots: '/micv/images/sav_a1/designers_engineers.jpg'
    },
    {
        domain: 'STUDY',
        id: 'ST06',
        section: 'Systems Analysis and Visualizations',
        category: 'Management',
        title: 'Business Plan for Entrepreneur',
        tools: [T.ANAL, T.RESE, T.REQU],
        description: '<p>The document examines the case where a current trend e-learning educating system could be designed and published for delivering an enhancement to the knowledge that is provided by official school system, while also how that project could be a feasible solution for an entrepreneur.</p> <ul><p> </p> <span> Among the key things that are examined are <li> Description of the service </li> <li> User requirements and how those should be designed effectively so that they could gradually challenge the objectives that are delivered in the extra tutorial schools </li> <li> Technical requirements that evolve within and around the application</li> <li> Application requirements in diverse phases of the project development</li> <li> Content requirements of the accommodated video formats</li> <li> Instructional design requirements</li> <li> Marketing requirements</li> <li> Total investment and payback period</li> </span> </ul>',
        score: '90',
        tutor: `<h4><a target="_blank" href="https://linkedin.com/pub/michael-hands/30/8ba/61b">Hands, Mike Ph.D</a></h4> <p> Part-Time Ph.D Optoelectronics, King's College London, UK</p>`,
        comment: ' <p> Manos Zalokostas provides a well composed product concept development and places it within a significantly well developed business proposal. </p> <p> He has placed significant work to research the technical considerations that affect the market and the market potential in order to quote “real numbers” than use a simpler estimation process, even though the lecturer suggested that simple estimation process for his particular scenario. This led Manos to spend more effort than was really required to complete this assignment, but he admitted that his interest in the topic caused him to get carried away. Since he did this extra work, Manos has exposed himself to wider considerations than this assignment had intended but his lecturer is able to appreciate from his submission and from discussions with him that he has truly learned practical research-quality skills that he will benefit from. </p> <p>He has presented the market niche and product concepts succinctly. </p> <p>  He has considered the requirements for the product and service that he suggests. He has considered the variations of how the service could be provided; leading to an optimum form. His considerations cover the balance between the service variety of e-learning topics, the likely demand and capacity factors that limit the ability to deliver the service. He has that a mix of content delivery would be appropriate, including videos (it is not certain whether this is real-time or downloaded in delivery from his text) and other online material. </p> <p>Manos used “above-average” quality English throughout his report. He has used an appropriate report structure. Significantly, Manos has provided a large body of references that support his technical and business focus. </p> <ul> <li>Lecturer recommendations are: FINAL MARK = 90%</li> <li>Marks for presentation (out of a possible 10) : 0/10</li> <li>Marks for working notes (out of a possible 30) : 30/30 - A thorough set of working notes was provided, running to 32 pages! Significantly, these notes document his progression of thought and questions he is considering about the topics.  </li> <li>Marks for essay (out of a possible 60) :  60/60 -  The information provided in the report is of sufficient depth to believe that the market niche exists and can be serviced by the “optimal form of product” that Manos proposes. Many aspects of the technical considerations are put into context with real-world problems in order to arrive at the considered optimal service form. The length of the report is excessive but reflects the completeness and professional approach to providing in-depth researched information on the topic. </li> </ul> <p><span>This assignment has proved to be a useful learning vehicle for Manos, beyond all expectations and requirements. His enthusiasm for learning is obvious by his general approach to his assignments </span> but Manos should take note of the advice of the lecturer to moderate his enthusiasm, taking into consideration the learning objectives of an assignment and the “required level of effort” to achieve these objectives. </p>',
        shots: '/micv/images/sav_a2/prospect_languages.jpg'
    },
    {
        domain: 'STUDY',
        id: 'ST07',
        section: 'Learning and Communications',
        category: 'Management',
        title: 'Cisco and Education',
        tools: [T.RESE, T.TEAM, T.POWE],
        description: '<p>The presentation is a research on CISCO company evolvement through time that will eventually spot light on the current position that the company maintains on the education domain and what is its contribution on the specific area. </p> <ul>The examined areas are: <span> <li>The academy’s history</li> <li>The model that the company adopted while entering the education domain</li> <li>The certifications that the company awards students</li> <li>What the academy has accomplished thus far, in count of established academies and enrolled students</li> <li>The company’s insight & engagement for global education </li> </span> </ul>',
        score: '85',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/pub/anna-serefeas-koulas/1/490/a15</a></h4> <p>Marketing at Drexel University </p>',
        comment: '-',
        shots: [
            '/micv/images/lc_a3/initiatives.jpg',
            '/micv/images/lc_a3/certificates.jpg',
            '/micv/images/lc_a3/charts.jpg',
            '/micv/images/lc_a3/21century_school.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST08',
        section: 'Operating Systems',
        category: 'Design and Development',
        title: 'C Development in Unix-like Operating Systems',
        tools: [T.DESK, T.CLAN, T.LINU],
        description: '<p>The report describes <span>the development of a short application on a Unix-Like Operating System that is called by name from the command line window (terminal), followed by two integers. The script should contain capacity to generate a corresponding added result from the integers provided and alert the user with a message.</p> <p>The procedure is requesting to implement facilities traditionally used in a Unix-Like environment such as “gedit” and “emacs”, while for the latter additional utilities like “Makefile” and “Version Control” procedures should be regarded and invoked additionally.</p> <p>In the last section of the assignment a complementary routine joins the system and enforces the user to decide the calculation method that system should use, by providing extra input declaring exactly this method with a character sign. Acknowledged methods are restrained to addition, subtraction, multiplication and division</p> <p>Erroneous inputs will generate informative display messages to the user’s terminal.</p> </span>',
        score: '80',
        tutor: '<h4><a target="_blank"  href="https://www.facebook.com/ioannis.pandithas?fref=ts">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p>',
        comment: ' <span>Excellent work that was written in a very professional manner </span>',
        shots: [
            '/micv/images/os_a1/compile_file_with_emacs.jpg',
            '/micv/images/os_a1/compile_file_from_linux_terminal.jpg',
            '/micv/images/os_a1/emacs_version_control_facility.jpg',
            '/micv/images/os_a1/make_file_graph.jpg',
            '/micv/images/os_a1/calculator_running_terminal.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST11',
        section: 'Database Applications',
        category: 'Design and Development',
        title: 'Database ERD Design',
        tools: [T.DBAP, T.VISI],
        description: ' <p>The assignment is to develop and illustrate <span>a relational database model for a subcontracting insulation company. Information is provided through the details given by the company’s internal forms and invoices that are generated at distinct phases of its operational process. </p> <p>After studying those internal forms we need to understand the order that the procedures are followed within the company and respond with a valid case scenario that could handle those activities effectively. </p> <p>The semantic model that is used in the database design is empowered by the “crow’s foot” relational model notation, and clarifies the diverse and variable kind relationships that are emerging among the database entities. </p></span> <ul> <p>The report steps as:</p> <li> Description of the case study</li> <li> Importance of the model diagram</li> <li> The rationale of the model and assumptions made</li> <li> Detailed to the entities, attributes and relationships</li> <li> Database Diagram</li> </ul>',
        score: '75',
        tutor: '<h4><a target="_blank" href="https://old.nyc.gr/informatics_dept_members">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK</p>',
        comment: '-',
        shots: [
            '/micv/images/dba_a1/entity_task_described.jpg',
            '/micv/images/dba_a1/form_proposal.jpg',
            '/micv/images/dba_a1/form_work_assignment.jpg',
            '/micv/images/dba_a1/keepwarm_business_model.jpg',
            '/micv/images/dba_a1/form_invoice.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST12',
        section: 'Database Applications',
        category: 'Design and Development',
        title: 'Oracle Database Development',
        tools: [T.DBAP, T.ORAC],
        description: ' <p>The report describes the <span>development of a collaborative tagging resource system that is planned to be employed on a college’s online platform and that will assist student to append ‘tags’ on resource materials, thus organize and categorize them. The resources will be shared among the students and the academic staff of a College (User authentication and authorization is performed by the build platform and is beyond the scope of this system). </p> <p>The database of the system should keep track of Users, Resources and Tags. A ternary relationship between these 3 entities has been modeled using a bridge relation ‘UserResourceTag’. </p> <p>The database for this activity should be completely designed and hardcoded using the ‘oracle developer’ IDE and provide screenshotss of the process. </p></span> <ul><p>Therefore the report further describes the design and development of:</p> <li> Entities, Attributes, Constraints</li> <li> Modifications to the entities</li> <li> Insertion of data</li> <li> Maintenance of the data</li> <li> Display of selection queries</li> </ul> <p>The second section of the report issues a table with mixed attributes that needs to break down to distinct entities using ‘normalization’ to the 3-rd normal form, and there are diagrams provided that describe the procedure. </p>',
        score: '86',
        tutor: '<h4><a target="_blank" href="https://old.nyc.gr/informatics_dept_members">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK</p>',
        comment: '-',
        shots: [
            '/micv/images/dba_a2/select_group_orderby.jpg',
            '/micv/images/dba_a2/miultiple_joins.jpg',
            '/micv/images/dba_a2/normalization_2nd_form.jpg',
            '/micv/images/dba_a2/the_resource_entity.jpg',
            '/micv/images/dba_a2/normalization_to_3rd_form.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST13',
        section: 'Management and Communication',
        category: 'Management',
        title: 'Reflective Journal',
        tools: [T.MARK, T.TEAM, T.ACCO],
        description: ' <p>The reflective journal is the diary that we kept updated while working on the course of “Management & Communication” as we became familiar with multiple of business rules and management techniques.  </p> <ul><p>Among others there were processes acknowledged like the following: </p> <span> <li> Business Environment analysis </li> <li>SLEPT/PEST - SWOT Analysis </li> <li> Market Research - Segmentation - Marketing Mix</li> <li> Resource Allocation - Demand Curve - Demand & Supply Curve Rules</li> <li> Accounting - Balance Sheet - PnL (Profit & Loss Statement)</li> <li> Budget - Break Even Point</li> <li>Capital Investment - Payback Period - Interest - Present/Future Value</li> <li>Strategic Management  Process</li> <li>Levels of strategy -Mission - Vision - Objectives</li> </span> </ul>',
        score: '80',
        tutor: ' <h4><a target="_blank" href="https://linkedin.com/pub/ariadne-beatrice-kapetanaki/39/75b/50b">Ariadne-Beatrice, Kapetenaki PhD </h4> <p>Candidate at Centre for Food Policy</p>',
        comment: ' I would like to see more personal reflections, talking about your challenges and how you have been improved through this process. <span>Very good work </span>though.',
        shots: [
            '/micv/images/mc_rfg/balance_sheet.jpg',
            '/micv/images/mc_rfg/demand_and_supply_curves.jpg',
            '/micv/images/mc_rfg/net_presennt_vallue.jpg',
            '/micv/images/mc_rfg/variable_cost_scale_effect.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST14',
        section: 'Management and Communication',
        category: 'Management',
        title: 'Business Plan Proposal',
        tools: [T.BUSI, T.RESE, T.MARK, T.REQU, T.TEAM, T.RISK],
        description: ' <p>The report is a <span>part of a group project activity on a request to constitute a corporation and deliver a business plan for future growth. </p> <p>The domain that we have decided to do business was to provide inland e-learning solutions for the middle-state education of the country. </p></span>',
        score: '75',
        tutor: '<h4><a target="_blank" href="https://linkedin.com/pub/ariadne-beatrice-kapetanaki/39/75b/50b">Ariadne-Beatrice, Kapetenaki PhD </h4> <p>Candidate at Centre for Food Policy</p>',
        comment: "<ul> <li>Introduction and Conclusion of the report:Very good their initiative to include their notes in order to show evidence about their work and effort. </li> <li>Evidence and validity of business strategy:They have a well-designed strategic plan along with specific objectives for the future of the company</li> <li><span>Analysis of Business Environment and SWOT analysis:Very thorough analysis of the business micro and macro environment including SLEPT analysis and Porter's 5 forces. All these were very good interpreted into the SWOT analysis of the company.</li><li>Use of marketing concepts Fantastic analysis of the target audiences (consumers’ audit) and a very thorough marketing mix to support the suggested strategy and business objectives. Also, very good use of pull and push strategies.</span> </ul> <li>Application and validity of accounting and finance analysis:Very precise and quite valid financial plan and a four-year sales forecast create a clear picture of the financial aspects of the company. They have not used best and worst case scenarios. Very well formed profit and loss statement, while for the break-even point analysis there was a debate during the presentation about the existence of variable costs. Nevertheless, the use of two methods of capital investment (payback method and net present value) is a plus. </li> <li>Overall quality of report:The overall structure is very good, but the disadvantage is the lack of an introduction and a conclusion. Also, it is written in good and relatively concise English. </li> </ul> <ul><p> <b>Report’s marks</b></p> <li>5% Introduction and Conclusion 20</li> <li>15% Business Strategy 80</li> <li>15% Analysis of Business Environment 85</li> <li>10% SWOT analysis 85</li> <li>20% Marketing 90</li> <li>15% Accounting 75</li> <li>15% Finance 70</li> <li>5% Quality of report (professional) 75</li> </ul> <ul><p> <b>Presentation’s marks</b></p> <li>5% Introduction 80</li> <li>10% Evidence of strategic planning 75</li> <li>15% Application of business environment analysis 80</li> <li>15% Application of SWOT and marketing 85</li> <li>15% Application of Accounting and Finance Concepts 80</li> <li>15% Reflection on working as a team, team performance and suggestions for improvement 40</li> <li>10% Quality of presentation delivery 50</li> <li>10% Quality of slides 85</li> <li>5% Conclusion and recommendation 60</li> </ul> ",
        shots: [
            '/micv/images/mc_a2/balance_sheet.jpg',
            '/micv/images/mc_a2/break_even_analysis.jpg',
            '/micv/images/mc_a2/business_structure.jpg',
            '/micv/images/mc_a2/performance_grooup_expectations.jpg',
            '/micv/images/mc_a2/products_for_group_target.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST15',
        section: 'Information and Network Security Engineering',
        category: 'Networking',
        title: 'SQL Injection Security',
        tools: [T.SECU, T.RESE],
        description: ' <p>The report explores one of the most popular and <span>hazardous application security attacks that is closely related to databases and SQL coding implementations; SQL Injection.</p> <p>Initializing the report there is a brief reference on some of the most familiar characteristics of this specific attack followed by the patterns that are used to intervene on applications development code and take control of their function. </p> <p>An enumeration of the accredited best practices that could be recruited as precaution measures to the attack will follow along, accompanied with short but meaningful examples. Embedding those measures - more likely in conjunction - to our applications, will certainly enlist security to defend over an SQL Injection attack. </p> <p>At the end of each security technique described, there is complementary information about the common drawbacks the methodology might experiences as well. </p> </span>',
        score: '86',
        tutor: '<h4><a target="_blank"  href="https://facebook.com/ioannis.pandithas?fref=ts">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p>',
        comment: ' <span>Excellent effort. The subject was covered in well placed examples in a prefessional style with a very good report.  The examples are concise and to the point. </span> Text is well written and the  references  cover the resources needed',
        shots: [
            '/micv/images/inse_a1/blind_sql_injection_regex.jpg',
            '/micv/images/inse_a1/blind_sql_injection.jpg',
            '/micv/images/inse_a1/prepared_statements.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST16',
        section: 'Software Engineering and Project Management',
        category: 'Management',
        title: 'Feasibility Study',
        tools: [T.ACCO, T.RESE, T.RISK, T.REQU, T.BUSI, T.TEAM],
        description: '<p>The report is a part of <span>group project assignment that its ultimate purpose is to conduct and propose an e-commerce solution to one of its partners. During this initial step we undertake the ‘feasibility study’ phase of the project. </p> <p>The project has been analyzed by the team that has come up with a proper solution for the client. Amongst other, the issues that are examined while conducting the document are: </p> <ul> <span> <li>User roles analysis (extended)</li> <li>Functional requirements analysis</li> <li>Technical requirements analysis</li> <li>Total Cost of Ownership (TCO)</li> <li> Measureable Organization Value (MOV)</li>l <li>Risk Management & Monitoring</li> </span> </ul>',
        score: '70',
        tutor: ' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',
        comment: '-',
        shots: '/micv/images/sepm_a3/user_role_features.jpg'
    },
    {
        domain: 'STUDY',
        id: 'ST17',
        section: 'Software Engineering and Project Management',
        category: 'Management',
        title: 'Project Planning',
        tools: [T.ANAL, T.PMAN, T.REQU, T.PROJ, T.TEAM],
        description: ' <p>The report is a part of group project assignment that its ultimate purpose is to conduct and propose an e-commerce solution to one of its partners. </p> <p>During this 2nd step we already pass the ‘feasibility study’ phase and now we are moving to ‘project planning’. </p> <p>Project planning is an important skilled part of the project management process, and probably the most time consuming project manager activity, as it is a continuous activity that begins from initial concept all the way to the project deliver. It does not finish until the project completes.</p> <ul> Amongst other, the issues that are examined while conducting the document are: <span> <li>Project Scope</li> <li>Project Objectives</li> <li>Deliverable Definition Table (DDT)</li> <li>Work Breakdown Structure (WBS)</li> <li>Work Packages - Deliverables - Activities</li> <li>Visualize the workload and time needed with MS Project</li> </span> </ul>',
        score: '86',
        tutor: ' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',
        comment: '-',
        shots: '/micv/images/sepm_a3/portal_navigation.jpg'
    },
    {
        domain: 'STUDY',
        id: 'ST18',
        section: 'Software Engineering and Project Management',
        category: 'Management',
        title: 'Project Design',
        tools: [T.ANAL, T.REQU, T.PMAN, T.TEAM],
        description: ' <p>The report is a part of group project assignment that its ultimate purpose is to conduct and propose and deliver an e-commerce solution to one of our partners. </p> <p>During this 3rd step we are moving to the ‘design’ of the project. Therefore we actually we need to illustrate the function of the e-commerce application that will help us later to implement. </p> <p>Analysis for the user requirements, the functional requirements and the non functional requirements of the project in more depth is the key feature in this phase. Also a more clear view and wider perspective on how the system behaves in certain cases, as those are affected by the diverse user roles interacting with the system.</p> <ul> <span> Amongst other, the issues that are further examined while documenting the design of the project are: <li> Simple and Complex scenarios and how those are handled by the system</li> <li> Use Cases</li> <li> Sequence Diagrams</li> <li> Application requirements with diagrams </li> <li> Functional requirements</li> <li> User requirement (abstract - 9 major issued)</li> <li>Functional/non Functional Requirements Table</li> </span> </ul>',
        score: '80',
        tutor: ' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',
        comment: '-',
        shots: [
            '/micv/images/sepm_a3/portal_domains.jpg',
            '/micv/images/sepm_a3/portal_navigation.jpg',
            '/micv/images/sepm_a3/user_role_features.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST19',
        section: 'Software Engineering and Project Management',
        category: 'Design and Development',
        title: 'Project Implementation / Testing',
        tools: [T.WEBA, T.JOOM, T.TEST, T.TEAM],
        description: '<p>The report is a part of group project assignment that its ultimate purpose is to conduct and propose and deliver an e-commerce solution to one of our partners. </p> <p>During this 4TH step we are moving to the actual ‘implementation’ of the project. </p> <p>Therefore during this report we are about to demonstrate the functionality implemented on the web portal. The portal was developed upon making use of “Joomla!” development tool. This phase also includes the ‘testing’ of the product by showcasing how the functionality that has been arranged by stakeholders can now be verified. Additionally, this last report is also a handy guiding manual. Therefore front-end and, back-end users, reading this document can acknowledge of how to make an effective use of the web tool.</p> <p>Streaming procedures are demonstrated within the use of both textual and visual material (screenshotss) and reference the portal’s functionality to readers, confiding that the system incorporates most of current trend services found on the web today.</p> <ul> <span> <p> Amongst other, the functionality described verifies: </p> <li> Core functionality for the domains of: Information, Communication, e-Commerce <li> <li> User communication: Article releases, RSS feeds, Calendar, Newsletters</li> <li> User Registration</li> <li>Products Availability, Search, Shopping Cart</li> <li>Forums, Polls</li> <li>Sitemap</li> <li>Administration extended functionality </li> </span> </ul>',
        score: '82',
        tutor: ' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',
        comment: '-',
        shots: [
            '/micv/images/sepm_a4/home_page.jpg',
            '/micv/images/sepm_a4/product_description.jpg',
            '/micv/images/sepm_a4/forum.jpg',
            '/micv/images/sepm_a4/administratin_backend.jpg',
            '/micv/images/sepm_a4/polls.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST20',
        section: 'Scheduler development with PHP and MySQL',
        category: 'Design and Development',
        title: 'NYC Scheduler',
        tools: [
            T.WEBA, T.MYSQ,
            T.PHP, T.REQU,
            T.TEST, T.ANAL,
            T.PMAN
        ],
        description: "<p>The system is originally built for providing functionality with regard to the following sections: </p> <ul> <span> <li>1. Designs, Registers and Maintain the annual courses schedule.</li> <li>• Design: Administrators matches Courses-Instructors-Weekdays-Buildings-Classroom etc.</li> <li>• Register: Day Schedule iterated every week based on Arranged Master Schedule and Front-Desk, and other authors, validates or cancels it. Further info can be recorded.</li> <li>• Maintain: Authors may query all sort of information about its properties, scheduled courses, exact times of instructors with time periods, add extra lessons, check system usage, maintain database, add new users etc</li> <li>2. Integrate User Roles (4 - Admin, Exec, Officer, Public) with scaled authority over the system.</li> <li>3. Login Security and Hashed (md5) urls concealing database schema.</li> <li>4. Calculates the exact time of Instructors work with given time spaces (based on officer registrations)</li> <li>5. Back-End System maintains system's operation (Database backup/restore, user/system logs, add/delete/update Users)</li> </span> </ul>",
        score: '92',
        tutor: '<h4><a target="_blank"  href="https://linkedin.com/in/gprok">Prokopakis, George MSc</a></h4> <p>US Naval Postgraduate School, CA</p>',
        comment: '<a target="_blank" href="https://linkedin.com/in/gprok">Prokopakis, George MSc</a> <p> <span>Mano, congratulations for your final assignment.  What you have implemented involves much complexity within it, and it is a rare thing for a tutor to see bachelor degree students build such developments </span>. </p>',
        shots: [
            '/micv/images/sheduler/pic_msch.jpg',
            '/micv/images/sheduler/pic_hours.jpg',
            '/micv/images/sheduler/pic_restrict.jpg',
            '/micv/images/sheduler/pic_backup.jpg'
        ]
    },
    {
        domain: 'STUDY',
        id: 'ST21',
        section: 'Mobile Applications',
        category: 'Design and Development',
        title: 'Android Applications Development',
        tools: [T.WEBA, T.ANDR, T.JAVA, T.OOP, T.MOBI],
        description: ' <p> Online certificate received with distinction by Coursera, covering the fundamental programming principles, software architecture and user experience considerations underlying handheld software applications and their development environments. To bring these concepts alive, the course involved in-depth, hands-on training, implemented in the Android Platform, Amongst others, I gained fundamental understating on the Android development API, delivered strictly supervised on-time assignments on a week basis, and deliver a cover-all final project implementing most of the above: </p> <ul> <span> <li>The Android Platform, The Android Development Environment</li> <li>The Activity Class</li> <li>The Intent Class, Permissions, The Fragment Class</li> <li>User Interface Classes</li> <li>User Notifications, The BroadcastReceiver Class, Threads, AsyncTask & Handlers</li> <li>Networking</li> <li>Graphics & Animation, Multi-touch & Gestures, MultiMedia</li> <li>Sensors, Location & Maps</li> <li>DataManagement, The ContentProvider Class, The Service Class</li> </span> </ul>',
        score: '-',
        tutor: '-',
        comment: '-',
        shots: [
            '/micv/images/android/capture_video.png',
            '/micv/images/android/capture_photo.png',
            '/micv/images/android/avail_data_preview.png',
            '/micv/images/android/filter_data.png'
        ]
    }
]

// d.forEach(
//     o => {
//         o.tools = o.tools.map(v => '@' + t[v] +"@")
//     }
// )
//
//
// console.log(d)