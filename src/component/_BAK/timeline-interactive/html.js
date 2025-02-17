import {html} from 'lit';


const assets = {
    STUDY: [
        [
            "2000 Enroll 'Desktop Publishing and 3D Animation' | AKMI Vocational Institute ",
            " For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while also studying 'Art History' and 'Typography History'. The next year I had my first experience with computing using tools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3' "
        ],
        [
            "2005 Enroll 'Graphics Design for Printable Mediums and Web' | AKMI Vocational Institute ",
            " There I had my original experience with web concepts, namely site design and development, since we gained practicing skills on Macromedia's web tools such as Dreamweaver & Flash. "
        ],
        [
            "2008 Intergraphics | Enroll 'Web Design and Development' ",
            " During the class, I faced a well-structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL and Apache. While the training turned out really advantageous and the outcome was my first web site, build with ajax technology, exclusively consisting on protocols, my appetite on comprehending web technologies was enormous and the need to integrate myself with a root understanding over the concepts has generated my interest to obtain more advanced education. ** Graduated College with a 'first class honors' degree from University and attached a 'student of the year' distinction for last year performance. My final Thesis was proposed for adoption by the associated 'New York College' for Maintaining and Scheduling institute's year resources. "
        ]
    ],
    WORK: [
        [
            "2001 Employed by 'Aventis Pharma' ",
            " I was employed as 'messenger' of the company with the 'out world' partners, while also providing random assistance, whenever it was required, within the premises. At the moment ‘aventis pharma’ was a newly consisted company, the outcome merger of 'rhone pouleng rhorer' and 'hegst marrion russel' pharmaceuticals, that its competitiveness was ranking more or less at the middle. "
        ],
        [
            "2007 'Aventis Pharma' merged with 'Sanofi' Pharmaceutical ",
            " At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical, there was a 'before the gate' major merger announced by our company with 'Sanofi' Pharmaceutical. The merger is purposely described as 'major' since the newborn company would climb high above previous competitive placements, and gaining huge market shares would now strive in competition to top ranking pharmaceuticals world-wide. ** FI was released from Sanofi aventis after 11 years employment.The recession that stroke the country has led company to unleash almost half of the crew in near three years time; "
        ],
        [
            "2013 Self-Employeed 'Web Design and Development' ",
            ' Take over freelance projects for local merchants. Mainly invoked hardcoded storefronts and web solutions completely designed and developed from scratch, grounded on web technologies like PHP, JS, XSLT, HTML5, CSS3 more. Most prominent project, ELGREG, a mixture of all afordmentioned techs provided a hardcoded bottom-up storefront and backend portal. '
        ],
        [
            "2014 Employeed shortly for 'Deltacosmos' and 'CCS Education' ",
            "Occupied as Full stack and Front-end Developer for the companies corespondingly, maintaining, upgrading and extending 'Deltacosmos' ERP and building a JSON API for 'CSS Eduction' that would be consumed internally by HMTL5 - Javascript application "
        ],
        [
            `2015 Contracted to 'Interactive Data' as Front-end Developer for German 'Commerzbank' intranet" Infobroker' `,
            ' Occupied as a part of Scrum maintained, multicultural developers environment for the implementation of Commerzbank Intranet project, namely Infobroker. Main responsibility was to collect, design and retrieve proprietary data - or complete data-views - through Interactive Data web services, using a custom graphical interface of enterprise. The final output would be visually styled for web monitoring, dictated strictly through customer specifications. '
        ],
        [
            `2016 Contracted remotely as Full Stack Developer to 'Seecago' for American Noblelinx CRM" CRM' `,
            " Occupied remotely as standalone Full Stack Developer in Agile mode with the Manager, on a lecacy CRM system, originated nearly a decade backwards. Key assingment was to maintain and upgrade legacy coded mixed technologies, to more efficient, controllable environment and to design and adjust new features that would add value to company's daily routines. "
        ],
        [
            `2017 Contracted remotely as Full Stack Developer for London-based company 'ECEP Technologies' " 'ECEP Technologies' `,
            ' Contracted as freelance, standalone Full stack Developer to design and build a warehouse inventory for Ecep Technologies .The English, Londoner enterpreneur needed a .weba monitoring system that could keep track of products, purchases, deliveries and sales activities of the company. The tool that was used was Laravel 5.1 MVC '
        ],
        [
            '2017 Employeed by domestic company Cosmores as in-house Fullstack Developer " ',
            " Employeed by Cosmores as in-house Fullstack Developer with the PHP-MySQL and plain Js / Jquery in the backend and frontend respectively. The mission was to upgrade, extend, maintain and enforce security processes on many parts of the company's daily routines "
        ],
        [
            "2018 Developing Rateparity as single Frontend Developer, while still employeed by Cosmores ' ",
            ' Still employeed by Cosmores I started developing Rateparity as single Frontend Developer building with the latest ES6+ upgrade and the popular React Js library and in collab with a remote datastore in the Backend. Developing customizable, one-line-installation CORS Widgets for enriching the user experience on customers sites. Additionally developing the configuration app in the backend for widgets customization and usage monitoring and evaluation '
        ],
        [
            `2020 Contracted by ICCS as Fullstack Developer to building 'Hybrid' App " ' `,
            ' Core scopes of the projectPower Production / Load / Availability, Technical status of units and ultimately alignment with the official Schedule announced by the national supplier "HEDNO" on daily basis '
        ],
        [
            `2021 Contracted by ICSS as Fullstack Developer to build 2 Synergy Energy Apps " Apps ' `,
            ' Deliverable was a part of of multi European big-data project ‘Synergy” that roots and founded by greater movement “Horizon 2020”. Project customers are major national suppliers across Europe '
        ],
        [
            '2023 Contracted by ICSS as Fullstack Developer to build 2 EcoEMS Energy Apps " Apps ',
            ' The project, part of the European-Indian collaboration "Re-Empowered" required to structure and visualize the overall energy consumption generated daily by conventional units and eventually use input for administrators to perform simulations so that renewable empowered energy could find and claim its effective margin on the daily demand.'
        ]
    ]


}


export default (elem) => html`
    <article id="interactive_cv_field">
        <header>
            <h2>Interactive Timeline</h2>
        </header>
        <nav id="timeline_btns">
            <li><a id="mlt" href="#">Clear</a></li>
            <li><a id="std" href="#">Studies</a></li>
            <li><a id="job" href="#">Work</a></li>
        </nav>

<!--        <ul id="objectives">-->
<!--            <li id="label">Label</li>-->
<!--            <li id="skills">Skills</li>-->
<!--        </ul>-->

        <div id="timeline">
            <section id="timeline-work">
                ${
                    assets.STUDY.map(
                            ([head, info]) => html`
                            <span>
                                <strong>${head.split(" ").shift()}</strong>
                                <br />
                                <em>${head}</em>
                                <small>${info}</small>
                            </span>
                            `
                    )
                }
            </section>
            <hr />
            <section id="timeline-work">
                ${
                    assets.WORK.map(
                            ([head, info]) => html`
                            <span>
                                <strong>${head.split(" ").shift()}</strong>
                                <br />
                                <em>${head}</em>
                                <small>${info}</small>
                            </span>
                            `
                    )
                }
            </section>
        </div>
    </article>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
