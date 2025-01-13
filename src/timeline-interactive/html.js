import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <div id="interactive_cv_field">
        <h2>Interactive Timeline</h2>
        <ul id="timeline_btns">
            <li><a id="mlt" href="#">Clear</a></li>
            <li><a id="std" href="#">Studies</a></li>
            <li><a id="job" href="#">Work</a></li>
        </ul>
        <ul id="objectives">
            <li id="label">Label</li>
            <li id="skills">Skills</li>
        </ul>
        <ul id="timeline">
            <li class="default">1999</li>
            <li class="std_start_off">
                <a href="#" title="Enroll 'Desktop Publising and 3D Animation' | ">2000</a>
                <p title="item_label">Enroll 'Desktop Publishing and 3D Animation' | AKMI Vocational
                    Institute</p>
                <p title="item_skills">
                    For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand
                    Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while
                    also studying 'Art History' and
                    'Typography
                    History'. The next year I had my first experience with computing using tools like
                    'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3'
                </p>
            </li>
            <li class="job_start_off">
                <a href="#" title="Employed in 'sanofi aventis' ">2001</a>
                <p title="item_label">Employed by 'Aventis Pharma'</p>
                <p title="item_skills">
                    I was employed as 'messenger' of the company with the 'out world' partners, while also
                    providing random assistance, whenever it was required, within the premises. At the
                    moment ‘aventis pharma’ was a newly
                    consisted
                    company, the outcome merger of 'rhone pouleng rhorer' and 'hegst marrion russel'
                    pharmaceuticals, that its competitiveness was ranking more or less at the middle.
                </p>
            </li>
            <li class="std_end_off"><a href="#"
                                       title="Graduate 'Desktop Publising and 3D Animation' ">2002</a>
                <p title="item_label">Graduate 'Desktop Publishing and 3D Animation' | AKMI Vocational
                    Institute</p>
                <p title="item_skills">-</p>
            </li>
            <li class="default">2003</li>
            <li class="default">2004</li>
            <li class="std_start_off">
                <a href="#" title="Enroll 'Graphics Design for Printable Mediums and Web' ">2005</a>
                <p title="item_label">Enroll 'Graphics Design for Printable Mediums and Web' | AKMI
                    Vocational Institute</p>
                <p title="item_skills">There I had my original experience with web concepts, namely site
                    design and development, since we gained practicing skills on Macromedia's web tools such
                    as Dreamweaver & Flash. </p>
            </li>
            <li class="std_end_off"><a href="#"
                                       title="Graduate 'Graphics Design for Printable Mediums and Web' ">2006</a>
                <p title="item_label">Graduate 'Graphics Design for Printable Mediums and Web' | AKMI
                    Vocational Institute</p>
                <p title="item_skills">-</p>
            </li>
            <li class="job_start_off">
                <a href="#" title="'Aventis Pharma' merged with 'Sanofi' Pharmaceutical">2007</a>
                <p title="item_label">'Aventis Pharma' merged with 'Sanofi' Pharmaceutical</p>
                <p title="item_skills">
                    At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical,
                    there was a 'before the gate' major merger announced by our company with 'Sanofi'
                    Pharmaceutical. The merger is purposely
                    described as
                    'major' since the newborn company would climb high above previous competitive
                    placements, and gaining huge market shares would now strive in competition to top
                    ranking pharmaceuticals world-wide.
                </p>
            </li>
            <li class="std_start_off">
                <a href="#" title="Enroll 'Web Design & Development' ">2008</a>
                <p title="item_label">Intergraphics | Enroll 'Web Design and Development'</p>
                <p title="item_skills"> During the class, I faced a well structured introduction to Web
                    protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL
                    and Apache. While the training turned out
                    really advantageous and the outcome was my first web site, build with ajax technology,
                    exclusively consisting on protocols, my appetite on comprehending web technologies was
                    enormous and the need to integrate
                    myself
                    with a root understanding over the concepts has generated my interest to obtain more
                    advanced education.</p>
            </li>
            <li class="std_start_off"><a href="#"
                                         title="Graduate 'Web Design & Development | Enroll 'Internet Engineering & Web Management' ">2009</a>
                <p title="item_label">New York College in Association to University of Greenwich | Internet
                    Engineering and Web Management</p>
                <p title="item_skills">

                </p>
            </li>
            <li class="default">2010</li>
            <li class="job_start_off"><a href="#"
                                         title="Released from Sanofi-Aventis Pharmaceutical">2011</a>
                <p title="item_label">Released from Sanofi-Aventis Pharmaceutical</p>
                <p title="item_skills">
                    I was released from Sanofi aventis after 11 years employment.The recession that stroke
                    the country has led company to unleash almost half of the crew in near three years time;
                </p>
            </li>
            <li class="std_end_off"><a href="#" title="Graduate 'Internet Engineering & Web Management' ">2012</a>
                <p title="item_label">Graduate 'Internet Engineer and Web Management' | University of
                    Greenwich</p>
                <p title="item_skills">
                    Graduated College with a 'first class honors' degree from University and attached a
                    'student of the year' distinction for last year performance. My final Thesis was
                    proposed for adoption by the associated 'New York College' for Maintaining and
                    Scheduling institute's
                    year resources.
                </p>
            </li>
            <li class="job_start_off"><a href="#" title="Self-employed as 'Web Designer and Developer' ">2013</a>
                <p title="item_label">Self-Employeed 'Web Design and Development'</p>
                <p title="item_skills">
                    Take over freelance projects for local merchants. Mainly invoked hardcoded storefronts
                    and web solutions completely designed and developed from scratch, grounded on web
                    technologies like PHP, JS, XSLT, HTML5, CSS3 more. Most prominent project, ELGREG, a
                    mixture of all
                    afordmentioned techs provided a hardcoded bottom-up storefront and backend portal.
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Short Passings from 'Deltacosmos' and 'CCS Education'' ">2014</a>
                <p title="item_label">Employeed shortly for 'Deltacosmos' and 'CCS Education'</p>
                <p title="item_skills">Occupied as Full stack and Front-end Developer for the companies
                    corespondingly, maintaining, upgrading and extending 'Deltacosmos' ERP and building a
                    JSON API for 'CSS Eduction' that would be
                    consumed internally by HMTL5 - Javascript application
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Contracted to 'Interactive Data' as Front-end Developer for German 'Commerzbank' intranet">2015</a>
                <p title="item_label">Contracted 'Remote Web Developer' for German 'Commerzbank
                    Infobroker'</p>
                <p title="item_skills">
                    Occupied as a part of Scrum maintained, multicultural developers environment for the
                    implementation of Commerzbank Intranet project, namely Infobroker. Main responsibility
                    was to collect, design and retrieve proprietary data - or complete data-views - through
                    Interactive Data web services, using a custom graphical interface of enterprise. The
                    final output would be visually styled for web monitoring, dictated strictly through
                    customer specifications.
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Contracted remotely as Full Stack Developer to 'Seecago' for American Noblelinx CRM">2016</a>
                <p title="item_label">Contracted 'Remote Full Stack Developer' for American 'Noblelinx
                    CRM'</p>
                <p title="item_skills">
                    Occupied remotely as standalone Full Stack Developer in Agile mode with the Manager, on
                    a lecacy CRM system, originated nearly a decade backwards. Key assingment was to
                    maintain and upgrade legacy coded mixed technologies, to more efficient, controllable
                    environment
                    and to design and adjust new features that would add value to company's daily routines.
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Contracted remotely as Full Stack Developer for London-based company 'ECEP Technologies' ">2017</a>
                <p title="item_label">Contracted remotely as Full Stack Developer for London-based company
                    'ECEP Technologies'</p>
                <p title="item_skills">
                    Contracted as freelance, standalone Full stack Developer to design and build a warehouse
                    inventory for Ecep Technologies .The English, Londoner enterpreneur needed a .weba
                    monitoring system that could keep track of products, purchases, deliveries and sales
                    activities
                    of the company. The tool that was used was Laravel 5.1 MVC
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Employeed by domestic company Cosmores as in-house Fullstack Developer ">2017</a>
                <p title="item_label">Employeed by domestic company Cosmores as in-house Fullstack Developer
                    '</p>
                <p title="item_skills">
                    Employeed by Cosmores as in-house Fullstack Developer with the PHP-MySQL and plain Js /
                    Jquery in the backend and frontend respectively. The mission was to upgrade, extend,
                    maintain and enforce security processes on many parts of the company's daily routines
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Employeed by Cosmores I started developing Rateparity as single Frontend Developer ">2018</a>
                <p title="item_label">Developing Rateparity as single Frontend Developer, while still
                    employeed by Cosmores '</p>
                <p title="item_skills">
                    Still employeed by Cosmores I started developing Rateparity as single Frontend Developer
                    building with the latest ES6+ upgrade and the popular React Js library and in collab
                    with a remote datastore in the Backend. Developing customizable, one-line-installation
                    CORS
                    Widgets for enriching the user experience on customers sites. Additionally developing
                    the configuration app in the backend for widgets customization and usage monitoring and
                    evaluation
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Contracted by ICCS as Fullstack Developer to building 'Hybrid' App ">2020</a>
                <p title="item_label">Employeed by ICCS as Fullstack Developer to building 'Hybrid' App
                    '</p>
                <p title="item_skills">
                    Core scopes of the project: Power
                    Production / Load / Availability, Technical status of units and ultimately alignment
                    with the official Schedule announced by the national supplier "DEDDIE" on daily basis
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Contracted by ICSS as Fullstack Developer to build 2 Synergy Energy Apps ">2021</a>
                <p title="item_label">Contracted by ICSS as Fullstack Developer to build 2 Synergy Energy
                    Apps '</p>
                <p title="item_skills">
                    Deliverable was a part of of multi European big-data project ‘Synergy” that roots and
                    founded by greater movement “Horizon 2020”. Project
                    customers are major national suppliers across Europe
                </p>
            </li>
            <li class="job_start_off"><a href="#"
                                         title="Contracted by ICSS as Fullstack Developer to build 2 EcoEMS Energy Apps ">2023</a>
                <p title="item_label">Contracted by ICSS as Fullstack Developer to build 2 EcoEMS Energy
                    Apps </p>
                <p title="item_skills">
                    The project, part of the European-Indian collaboration "Re-Empowered" required to
                    structure and visualize the overall energy consumption generated daily by conventional
                    units and eventually use input for administrators to perform simulations so that
                    renewable empowered energy could find and claim its effective margin on the daily
                    demand.
                </p>
            </li>
        </ul>
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
