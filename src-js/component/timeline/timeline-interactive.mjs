import Monitor from "/component/monitor/monitor.mjs";
import Layout from "/core/layout.mjs";

function listen() {

    document.addEventListener(
        'click', (event) => {
            const target = event.target;

        //     if (target.closest('#timeline_btns a')) {
        //         const domain = target.id;
        //
        //         let color;
        //         if (domain === 'mlt') {
        //             color = 'gainsboro';
        //         } else if (domain === 'std') {
        //             color = 'teal';
        //         } else {
        //             color = 'goldenrod';
        //         }
        //
        //         const selectedTimelineA = document.querySelector('#timeline a.selected');
        //         const timelineObjectives = document.querySelector('#objectives');
        //         const timelineBtnsAWithStyle = document.querySelector('#timeline_btns a[style]');
        //
        //         if (selectedTimelineA) {
        //             selectedTimelineA.classList.remove('selected');
        //             selectedTimelineA.style.paddingBottom = '0';
        //             // timelineObjectives.style.opacity = '0';
        //         }
        //
        //         if (timelineBtnsAWithStyle) {
        //             timelineBtnsAWithStyle.removeAttribute('style');
        //         }
        //
        //         target.style.backgroundColor = color;
        //         document.querySelector('#label').style.color = color;
        //
        //         document.querySelectorAll('#timeline li').forEach((li) => {
        //             if (li.classList.contains(domain)) {
        //                 li.classList.remove('_off');
        //                 // li.style.opacity = '0';
        //                 li.style.paddingLeft = '6px';
        //                 li.style.opacity = '1';
        //             } else {
        //                 if (!li.classList.contains('_off') && li.classList !== 'default') {
        //                     li.classList.add('_off');
        //                     li.style.paddingLeft = '0';
        //                 }
        //             }
        //         });
        //     }
        //
        //     /*
        //     // LISTENERS FOR THE TIMELINE DATES (2001, 2005 etc) TO DELIVER (ONCLICKED) THEIR CONTENT ONSCREEN
        //      */
        //
        //
        //     if (target.closest('#timeline > li a')) {
        //         const selectedTimelineA = document.querySelector('#timeline > li a.selected');
        //         const timelineObjectives = document.querySelector('#objectives');
        //
        //         if (selectedTimelineA) {
        //             selectedTimelineA.classList.remove('selected');
        //             selectedTimelineA.removeAttribute('style');
        //         }
        //
        //         target.classList.add('selected');
        //         target.animate([{paddingBottom: '0'}, {paddingBottom: '100px'}], {
        //             duration: 500,
        //             easing: 'ease-in-out',
        //             fill: 'both'
        //         });
        //
        //         // timelineObjectives.style.opacity = '0';
        //
        //         const label = target.parentNode.querySelector('p[title="item_label"]').innerHTML;
        //         const skill = target.parentNode.querySelector('p[title="item_skills"]').innerHTML;
        //         document.querySelector('#label').innerHTML = label;
        //         document.querySelector('#skills').innerHTML = skill;
        //
        //         timelineObjectives.animate({opacity: '1'});
        //     }
        //
        }
    )

}

function html() {

    return `
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
                ${css()}
    `

}


function css(){
    return `
    <style>
    

#interactive_cv_field h2 {
    color: #aaa;
    float: right;
    width: 10%;
    font-size: 2.5em;
    padding: 0;
    margin: 1%;
    position: absolute;
    right: 0;
    text-align: right;
}


#interactive_cv_field #timeline_btns {
    list-style-type: none;
    position: absolute;
    left: 0;
    top: 19%;
    padding: 0;
    width: 10%;
    height: 60%;
    float: left;
    margin: 0;
    margin-right: 1%;
    margin-top: 3%;
}

 #interactive_cv_field #timeline_btns li {
    float: left;
    width: 100%;
    margin: 4%;
    overflow: hidden;
}

#timeline_btns a {
    float: left;
    text-decoration: none;
    background-color: #555;
    width: 78%;
    height: 90%;
    text-align: center;
    padding: 5%;
    color: white;
    font-weight: bold;
    font-family: calibri;
    border-top: #ccc 2px solid;
    border-bottom: #aaa 2px solid;
    /*border-radius: 10px;*/
}

#interactive_cv_field #timeline_btns li a:hover {
    border-bottom: 2px solid #ddd;
}

 #document_cv_field {
    overflow: auto;
}

 #document_cv_field img {
    width: 100%;
    border: solid #ddd;
}

#interactive_cv_field #objectives {
    list-style-type: none;
    position: absolute;
    left: 15%;
    top: 30%;
    padding: 0;
    margin: 0;
    width: 74%;
    height: 58%;
    /*opacity: 0;*/
}

 #interactive_cv_field #objectives #label {
    list-style-type: none;
    padding-left: 2%;
    padding-bottom: 1%;
    margin: 1%;
    margin-top: 5%;
    width: 35%;
    font-family: calibri;
    color: darkcyan;
    font-weight: bold;
    font-size: 2em;
    border-bottom: solid 2px #aaa;
}

 #interactive_cv_field #objectives #skills {
    padding-left: 4%;
    padding-top: 2%;
    margin: 1%;
    width: 92%;
    height: 70%;
    color: #888;
    font-family: calibri;
    text-align: left;
    font-size: 1.5em;
}

#interactive_cv_field #timeline {
    position: absolute;
    background-color: #bbb;
    width: 70%;
    height: 2px;
    padding: 0 1%;
    font-size: 0.8em;
    font-weight: bold;
    font-family: calibri;
    float: left;
    list-style-type: none;
    top: 12%;
    left: 15%;
}

 #interactive_cv_field #timeline li {
    position: relative;
    margin: 0 2%;
    float: left;
    background-color: #ccc;
    width: 1px;
    font-family: arial;
    /*border-radius: 20px;*/
}

 #interactive_cv_field #timeline li p {
    visibility: hidden;
    height: 1px;
}

 #interactive_cv_field #timeline li.default {
    color: #bbb;
    font-size: inherit;
    text-decoration: none;
    position: relative;
    bottom: 0;
    left: -6px;
    float: left;
}

 #interactive_cv_field #timeline li.job_start {
    color: #ca8;
    font-size: 1.5em;
    bottom: 20px;
    background-color: #ca8;
}

 #interactive_cv_field #timeline li.job_end {
    color: darkkhaki;
    margin-left: 19px;
    font-size: 0.8em;
}

 #interactive_cv_field #timeline li.std_start {
    color: teal;
    font-size: 1.5em;
    position: relative;
    margin-left: 22px;
    bottom: 20px;
    background-color: teal;
}

 #interactive_cv_field #timeline li.std_start a {
    left: -16px;
    bottom: 20px;
}

 #interactive_cv_field #timeline li.job_start a {
    left: -15px;
    bottom: 21px;
    padding-bottom: 42px;
}

 #interactive_cv_field #timeline li.std_end {
    color: teal;
    font-size: 0.8em;
}

 #interactive_cv_field #timeline li.job_start_off,  #interactive_cv_field #timeline li.job_end_off,  #interactive_cv_field #timeline li.std_start_off,  #interactive_cv_field #timeline li.std_end_off {
    color: #aaa;
    font-size: 0.8em;
}

 #interactive_cv_field #timeline li a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    position: relative;
    bottom: 10px;
    left: -8px;
    float: left;
}

 #interactive_cv_field #timeline li a.default {
    color: #888;
    font-size: 0.8em;
    text-decoration: none;
    position: relative;
    bottom: 10px;
    left: -8px;
    float: left;
}

 #interactive_cv_field #timeline li a:hover {
    font-size: 1.5em;
    bottom: 1.5em;
    padding: 0 0.5em;
    padding-bottom: 2em;
    left: -1.5em;
}

 #interactive_cv_field #timeline li a.selected {
    font-size: 1.5em;
    bottom: 1.5em;
    left: -1em;
    font-weight: bold;
}
</style>
    `
}


function install(id){
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    listen,
    html,
}