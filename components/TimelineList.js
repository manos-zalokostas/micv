import {dq} from "./ally.js";

const CSSID = '#resume-interactive';

export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {

    return `
    <article class="timeline">
    <nav class="timeline_tabs">
        <a id="mlt" href="#">Clear</a>
        <a id="std" href="#">Studies</a>
        <a id="job" href="#">Work</a>
    </nav>
    <section>${DATA.list}</section>
    <style>${STYLE}</style>
    </article>
    `;
}


const STYLE = `
   #timeline {
        float: left;
        display: inline;
        list-style-type: none;
        padding:0;
    }
    #timeline li {
        float: left;
        margin: 4px;
    }
    #timeline li > section {
        display: none;
        position: absolute;
        left: 20%;
        width: 60%;
        margin-top: 25px;
    }
    #timeline li > section > a {
        visibility: hidden;
    }
    #timeline li > section > a:hover {
        cursor:pointer;
    }
    #timeline li:hover > section {
        position: absolute;
        display: block;
        margin-left:5%;
    }
article.timeline {
    display: flex;
}
article.timeline > nav {
    flex:0.2;
    display: flex;
    flex-direction: column;
    place-content: space-between;
}
article.timeline > nav > a {
    text-decoration:none;
    background:#555;
    color:white;
}
article.timeline > nav > a:hover {
    cursor:pointer;
}
article.timeline > nav > a:hover {
    background: white;
    color:#555;
}
article.timeline > section {
    flex:0.8;
    display: flex;
}
article.timeline > section li:hover{
    color:white;
    cursor:pointer;
}

`;

const DATA =
    {
        id: 'id',
        list: `
  <ul id="timeline">
    <li class="default">1999</li>
    <li class="std_start_off">2000
        <section><a href="#" title="Enroll 'Desktop Publising and 3D Animation' | ">2000</a>
            <p title="item_label">Enroll 'Desktop Publishing and 3D Animation' | AKMI Vocational Institute</p>
            <p title="item_skills">For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while also studying 'Art History' and 'Typography History'. The next year I had my first
                experience with computing using tools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3'</p></section>
    </li>
    <li class="job_start_off">2001
        <section><a href="#" title="Employed in 'sanofi aventis' ">2001</a>
            <p title="item_label">Employed by 'Aventis Pharma'</p>
            <p title="item_skills">I was employed as 'messenger' of the company with the 'out world' partners, while also providing random assistance, whenever it was required, within the premises. At the moment ‘aventis pharma’ was a newly consisted company, the outcome merger of 'rhone pouleng
                rhorer' and 'hegst marrion russel' pharmaceuticals, that its competitiveness was ranking more or less at the middle.</p></section>
    </li>
    <li class="std_end_off">2002
        <section><a href="#" title="Graduate 'Desktop Publising and 3D Animation' ">2002</a>
            <p title="item_label">Graduate 'Desktop Publishing and 3D Animation' | AKMI Vocational Institute</p>
            <p title="item_skills">-</p></section>
    </li>
    <li class="default">2003</li>
    <li class="default">2004</li>
    <li class="std_start_off">2005
        <section><a href="#" title="Enroll 'Graphics Design for Printable Mediums and Web' ">2005</a>
            <p title="item_label">Enroll 'Graphics Design for Printable Mediums and Web' | AKMI Vocational Institute</p>
            <p title="item_skills">There I had my original experience with web concepts, namely site design and development, since we gained practicing skills on Macromedia's web tools such as Dreamweaver & Flash. </p></section>
    </li>
    <li class="std_end_off">2006
        <section><a href="#" title="Graduate 'Graphics Design for Printable Mediums and Web' ">2006</a>
            <p title="item_label">Graduate 'Graphics Design for Printable Mediums and Web' | AKMI Vocational Institute</p>
            <p title="item_skills">-</p></section>
    </li>
    <li class="job_start_off">2007
        <section><a href="#" title="'Aventis Pharma' merged with 'Sanofi' Pharmaceutical">2007</a>
            <p title="item_label">'Aventis Pharma' merged with 'Sanofi' Pharmaceutical</p>
            <p title="item_skills">At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical, there was a 'before the gate' major merger announced by our company with 'Sanofi' Pharmaceutical. The merger is purposely described as 'major' since the newborn company would climb
                high above previous competitive placements, and gaining huge market shares would now strive in competition to top ranking pharmaceuticals world-wide.</p></section>
    </li>
    <li class="std_start_off">2008
        <section><a href="#" title="Enroll 'Web Design & Development' ">2008</a>
            <p title="item_label">Intergraphics | Enroll 'Web Design and Development'</p>
            <p title="item_skills"> During the class, I faced a well structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL and Apache. While the training turned out really advantageous and the outcome was my first web site, build with
                ajax technology, exclusively consisting on protocols, my appetite on comprehending web technologies was enormous and the need to integrate myself with a root understanding over the concepts has generated my interest to obtain more advanced education.</p></section>
    </li>
    <li class="std_start_off">2009
        <section><a href="#" title="Graduate 'Web Design & Development | Enroll 'Internet Engineering & Web Management' ">2009</a>
            <p title="item_label">New York College in Association to University of Greenwich | Internet Engineering and Web Management</p>
            <p title="item_skills"></p></section>
    </li>
    <li class="default">2010</li>
    <li class="job_start_off">2011
        <section><a href="#" title="Released from Sanofi-Aventis Pharmaceutical">2011</a>
            <p title="item_label">Released from Sanofi-Aventis Pharmaceutical</p>
            <p title="item_skills">I was released from Sanofi aventis after 11 years employment.The recession that stroke the country has led company to unleash almost half of the crew in near three years time;</p></section>
    </li>
    <li class="std_end_off">2012
        <section><a href="#" title="Graduate 'Internet Engineering & Web Management' ">2012</a>
            <p title="item_label">Graduate 'Internet Engineer and Web Management' | University of Greenwich</p>
            <p title="item_skills">Graduated College with a 'first class honors' degree from University and attached a 'student of the year' distinction for last year performance. My final Thesis was proposed for adoption by the associated 'New York College' for Maintaining and Scheduling
                institute's year resources.</p></section>
    </li>
    <li class="job_start_off">2013
        <section><a href="#" title="Self-employed as 'Web Designer and Developer' ">2013</a>
            <p title="item_label">Self-Employeed 'Web Design and Development'</p>
            <p title="item_skills">Take over freelance projects for local merchants. Mainly invoked hardcoded storefronts and web solutions completely designed and developed from scratch, grounded on web technologies like PHP, JS, XSLT, HTML5, CSS3 more. Most prominent project, ELGREG, a mixture of
                all afordmentioned techs provided a hardcoded bottom-up storefront and backend portal.</p></section>
    </li>
    <li class="job_start_off">2014
        <section><a href="#" title="Short Passings from 'Deltacosmos' and 'CCS Education'' ">2014</a>
            <p title="item_label">Employeed shortly for 'Deltacosmos' and 'CCS Education'</p>
            <p title="item_skills">Occupied as Full stack and Front-end Developer for the companies corespondingly, maintaining, upgrading and extending 'Deltacosmos' ERP and building a JSON API for 'CSS Eduction' that would be consumed internally by HMTL5 - Javascript application</p></section>
    </li>
    <li class="job_start_off">2015
        <section><a href="#" title="Contracted to 'Interactive Data' as Front-end Developer for German 'Commerzbank' intranet">2015</a>
            <p title="item_label">Contracted 'Remote Web Developer' for German 'Commerzbank Infobroker'</p>
            <p title="item_skills">Occupied as a part of Scrum maintained, multicultural developers environment for the implementation of Commerzbank Intranet project, namely Infobroker. Main responsibility was to collect, design and retrieve proprietary data - or complete data-views - through
                Interactive Data web services, using a custom graphical interface of enterprise. The final output would be visually styled for web monitoring, dictated strictly through customer specifications.</p></section>
    </li>
    <li class="job_start_off">2016
        <section><a href="#" title="Contracted remotely as Full Stack Developer to 'Seecago' for American Noblelinx CRM">2016</a>
            <p title="item_label">Contracted 'Remote Full Stack Developer' for American 'Noblelinx CRM'</p>
            <p title="item_skills">Occupied remotely as standalone Full Stack Developer in Agile mode with the Manager, on a lecacy CRM system, originated nearly a decade backwards. Key assingment was to maintain and upgrade legacy coded mixed technologies, to more efficient, controllable
                environment and to design and adjust new features that would add value to company's daily routines.</p></section>
    </li>
    <li class="job_start_off">2017
        <section><a href="#" title="Contracted remotely as Full Stack Developer for London-based company 'ECEP Technologies' ">2017</a>
            <p title="item_label">Contracted remotely as Full Stack Developer for London-based company 'ECEP Technologies'</p>
            <p title="item_skills">Contracted as freelance, standalone Full stack Developer to design and build a warehouse inventory for Ecep Technologies .The English, Londoner enterpreneur needed a .weba monitoring system that could keep track of products, purchases, deliveries and sales
                activities of the company. The tool that was used was Laravel 5.1 MVC</p></section>
    </li>
    <li class="job_start_off">2017
        <section><a href="#" title="Employeed by domestic company Cosmores as in-house Fullstack Developer ">2017</a>
            <p title="item_label">Employeed by domestic company Cosmores as in-house Fullstack Developer '</p>
            <p title="item_skills">Employeed by Cosmores as in-house Fullstack Developer with the PHP-MySQL and plain Js / Jquery in the backend and frontend respectively. The mission was to upgrade, extend, maintain and enforce security processes on many parts of the company's daily routines</p>
        </section>
    </li>
    <li class="job_start_off">2018
        <section><a href="#" title="Employeed by Cosmores I started developing Rateparity as single Frontend Developer ">2018</a>
            <p title="item_label">Developing Rateparity as single Frontend Developer, while still employeed by Cosmores '</p>
            <p title="item_skills">Still employeed by Cosmores I started developing Rateparity as single Frontend Developer building with the latest ES6+ upgrade and the popular React Js library and in collab with a remote datastore in the Backend. Developing customizable, one-line-installation CORS
                Widgets for enriching the user experience on customers sites. Additionally developing the configuration app in the backend for widgets customization and usage monitoring and evaluation</p></section>
    </li>
</ul>
        `
    }

run()
