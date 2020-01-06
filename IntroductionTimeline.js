export const IntroductionTimeline = () => {
    return (`
    <div id="interactive_cv_field" style="opacity: 1; left: 0;">
        <h2>Interactive Timeline</h2>
        ${makeButtons()}
        <ul id="timeline">
            <li class="default">1999</li>
               ${makeItems()}
            <li class="default">2020</li>
        </ul>
    </div>
    `);
};


const makeItems = () => {

    let data = getData();

    return (
        data.map(entries => {

                let [year, type, title, description] = entries;
                let classname = type === 'study' ? 'std_start_off' : 'std_job_off';

                if (!title) return `<li class="default">${year}</li>`;

                return (`
                <li class=${classname}>
                    <a href="#" title="${title}">${year}</a>
                    <p title="item_label">${title}</p>
                    <p title="item_skills">${description}</p>
                </li>
            `)
            }
        ).join('')
    )
};


const makeButtons = () => {
    return (`
        <ul id="timeline_btns">
            <li><a id="mlt" href="#">Clear</a></li>
            <li><a id="std" href="#">Studies</a></li>
            <li><a id="job" href="#">Work</a></li>
        </ul>
        <ul id="objectives">
            <li id="label">Label</li>
            <li id="skills">Skills</li>
        </ul>
    `)
}


const getData = () => {
    return [
        [
            "2000",
            "study ",
            "Enroll 'Desktop Publishing and 3D Animation' | AKMI Vocational Institute ",
            " For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while also studying 'Art History' and 'Typography History'. The next year I had my first experience with computing using tools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3' "
        ],
        [
            "2001",
            "job ",
            "Employed by 'Aventis Pharma' ",
            " I was employed as 'messenger' of the company with the 'out world' partners, while also providing random assistance, whenever it was required, within the premises. At the moment ‘aventis pharma’ was a newly consisted company, the outcome merger of 'rhone pouleng rhorer' and 'hegst marrion russel' pharmaceuticals, that its competitiveness was ranking more or less at the middle. "
        ],
        [
            "2002",
            "study_end ",
            "Graduate 'Desktop Publishing and 3D Animation' | AKMI Vocational Institute ",
            "- "
        ],
        [
            "2005",
            "study ",
            "Enroll 'Graphics Design for Printable Mediums and Web' | AKMI Vocational Institute ",
            "There I had my original experience with web concepts, namely site design and development, since we gained practicing skills on Macromedia's web tools such as Dreamweaver &amp; Flash. "
        ],
        [
            "2006",
            "study_end ",
            "Graduate 'Graphics Design for Printable Mediums and Web' | AKMI Vocational Institute ",
            "- "
        ],
        [
            "2007",
            "job ",
            "'Aventis Pharma' merged with 'Sanofi' Pharmaceutical ",
            " At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical, there was a 'before the gate' major merger announced by our company with 'Sanofi' Pharmaceutical. The merger is purposely described as 'major' since the newborn company would climb high above previous competitive placements, and gaining huge market shares would now strive in competition to top ranking pharmaceuticals world-wide. "
        ],
        [
            "2008",
            "study ",
            "Intergraphics | Enroll 'Web Design and Development' ",
            " During the class, I faced a well structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL and Apache. While the training turned out really advantageous and the outcome was my first web site, build with ajax technology, exclusively consisting on protocols, my appetite on comprehending web technologies was enormous and the need to integrate myself with a root understanding over the concepts has generated my interest to obtain more advanced education. "
        ],
        [
            "2009",
            "study ",
            "New York College in Association to University of Greenwich | Internet Engineering and Web Management ",
            " "
        ],
        [
            "2011",
            "job ",
            "Released from Sanofi-Aventis Pharmaceutical ",
            " I was released from Sanofi aventis after 11 years employment.The recession that stroke the country has led company to unleash almost half of the crew in near three years time; "
        ],
        [
            "2012",
            "study_end ",
            "Graduate 'Internet Engineer and Web Management' | University of Greenwich ",
            " Graduated College with a 'first class honors' degree from University and attached a 'student of the year' distinction for last year performance. My final Thesis was proposed for adoption by the associated 'New York College' for Maintaining and Scheduling institute's year resources. "
        ],
        [
            "2013",
            "job ",
            "Self-Employeed 'Web Design and Development' ",
            " Take over freelance projects for local merchants. Mainly invoked hardcoded storefronts and web solutions completely designed and developed from scratch, grounded on web technologies like PHP, JS, XSLT, HTML5, CSS3 more. Most prominent project, ELGREG, a mixture of all afordmentioned techs provided a hardcoded bottom-up storefront and backend portal. "
        ],
        [
            "2014",
            "job ",
            "Employeed shortly for 'Deltacosmos' and 'CCS Education' ",
            "Occupied as Full stack and Front-end Developer for the companies corespondingly, maintaining, upgrading and extending 'Deltacosmos' ERP and building a JSON API for 'CSS Eduction' that would be consumed internally by HMTL5 - Javascript application "
        ],
        [
            "2015",
            "job ",
            "Contracted 'Remote Web Developer' for German 'Commerzbank Infobroker' ",
            " Occupied as a part of Scrum maintained, multicultural developers environment for the implementation of Commerzbank Intranet project, namely Infobroker. Main responsibility was to collect, design and retrieve proprietary data - or complete data-views - through Interactive Data web services, using a custom graphical interface of enterprise. The final output would be visually styled for web monitoring, dictated strictly through customer specifications. "
        ],
        [
            "2016",
            "job ",
            "Contracted 'Remote Full Stack Developer' for American 'Noblelinx CRM' ",
            " Occupied remotely as standalone Full Stack Developer in Agile mode with the Manager, on a lecacy CRM system, originated nearly a decade backwards. Key assingment was to maintain and upgrade legacy coded mixed technologies, to more efficient, controllable environment and to design and adjust new features that would add value to company's daily routines. "
        ],
        [
            "2017/A",
            "job ",
            "Contracted remotely as Full Stack Developer for London-based company 'ECEP Technologies' ",
            " Contracted as freelance, standalone Full stack Developer to design and build a warehouse inventory for Ecep Technologies .The English, Londoner enterpreneur needed a .weba monitoring system that could keep track of products, purchases, deliveries and sales activities of the company. The tool that was used was Laravel 5.1 MVC "
        ],
        [
            "2017/B",
            "job ",
            "Employeed by domestic company Cosmores as in-house Fullstack Developer ' ",
            " Employeed by Cosmores as in-house Fullstack Developer with the PHP-MySQL and plain Js / Jquery in the backend and frontend respectively. The mission was to upgrade, extend, maintain and enforce security processes on many parts of the company's daily routines "
        ],
        [
            "2018/B",
            "job ",
            "Developing Rateparity as single Frontend Developer, while still employeed by Cosmores ' ",
            " Still employeed by Cosmores I started developing Rateparity as single Frontend Developer building with the latest ES6+ upgrade and the popular React Js library and in collab with a remote datastore in the Backend. Developing customizable, one-line-installation CORS Widgets for enriching the user experience on customers sites. Additionally developing the configuration app in the backend for widgets customization and usage monitoring and evaluation"
        ]
    ]
};

