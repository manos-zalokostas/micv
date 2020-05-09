import {dq} from "./aux.js";

const CSSID = '#resume_cv_field .aux_txt';

export default (o = null) => run(o);



const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {

    return `
    <section class="resume">
        <header>Timeline</header>
        <span>on / off</span>
        <p>${DATA.list}</p>
    </section>
    `;
}

const DATA =
    {
        id: 'id',
        list: `
        <ul>
            <li> In 2018, 2nd half Still employeed by Cosmores I started developing Rateparity as single Frontend Developer building with the latest ES6+ upgrade and the popular React Js library and in collab with a remote datastore in the Backend .<span>Developing customizable, one-line-installation CORS Widgets for enriching the user experience on customers sites. Additionally developing the configuration app in the backend for widgets customization and usage monitoring and evaluation. </span>
            </li>
            <li> In 2017, 2nd half Employeed by Cosmores as in-house Fullstack Developer with the PHP-MySQL and plain Js / Jquery<span>in the backend and frontend respectively. The mission was to upgrade, extend, maintain and enforce security processes on many parts of the company's daily routines. </span></li>
            <li> In 2017, 1st half Contracted as freelance, standalone Full stack Developer to design and build a warehouse inventory for Ecep Technologies<span>The English, London enterpreneur needed a .weba monitoring system that could keep track of products, purchases, deliveries and sales activities of the company. The tool that was used was Laravel 5.1 MVC </span>
            </li>
            <li> In 2016 Contracted as freelance, standalone Full stack Developer for American project Noblelinx CRM upgrades and extensions</li>
            <li> In 2015 Contracted by Interactive Data as freelance Front-end Developer for its new intranet project "Infobroker" hosted by Commerbank Germany.</li>
            <li> In 2014 Short passings from "DeltaCosmos Security" and "CCS Education" as Full stack and Javascript Develper respectively</li>
            <li> In 2013 Self-occupied as freelance "Web Developer and Graphics Designer"</li>
            <li> In 2012 Graduated College with a 'first class honors' degree and attached a 'student of the year' distinction for last year performance.</li>
            <li> In 2011 I was released from Sanofi aventis after 11 years employment. The recession that stroke the country has led company to unleash almost half of the crew in near three years time.</li>
            <li> In 2009 I have decided to pursue a bachelor diploma on the domain of web technology. <span>Nevertheless, while still occupied by 'sanofi aventis', has modified my decision in a way to select a title that would add value on the company as well. With those in mindEnrolled 'Internet Engineering and Web Management' class from University of Greenwich associated with 'New York' College.</span>
            </li>
            <li> In 2008 Enrolled full-year class at Athenian Vocational Institute ‘Integraphics’ labeled ‘Web Designed & Development’.<span>During the class, I faced a well structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL and Apache. While the training turned out really advantageous and the outcome was my first web site, build with ajax technology, exclusivelyconsisting on protocols, my appetite on comprehending web technologies was enormous and the need to integrate myself with a root understanding over the concepts has generated my interest to obtain more advanced education. </span>
            </li>
            <li> In 2006 Graduated 'Graphics designer for printable mediums & Web' at 'AKMI' Vocational Institute , <span>and up until 2008 I have urged as one and primary target to familiarize and conform myself with the new business environment that had arose at ‘Sanofi Aventis’. Starting from the same year, up until 2008 I was gradually assigned to provide office assistance for the 'Facility and HSEDepartment' by recording, maintaining and draw out monthly reports for the data housekeeping.</span>
            </li>
            <li> In 2005, while feeling the need to integrate a 'Graphic Designer' certificate that would ground further my qualifications in the area,<span>I have enrolled a full-year class at 'AKMI' Vocational Institute labeled 'Graphics Designer for Printable Mediums and Web'.There I had my original experience with web concepts, namely site design and development, since we gained practicing skills on Macromedia's web tools such as Dreamweaver & Flash. At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical, there was a 'sudden mergerannounced by our company with 'Sanofi' Pharmaceutical. The merger was of a great value since the new-constitute company would climb high above previous competitive levels, gaining huge market shares would now strive c ompeting top ranking pharmaceuticals world-wide. </span>
            </li>
            <li> In 2002 Graduated 3D-Animation class at 'AKMI' vocational
                institute<span>and for the following 3 years I primarily focused on my job, while as a hobby I continued to practice my skills with graphics design and 3D Animation components, as Adobe Photoshop, Corel Draw and 3D-Max respectively.</span></li>
            <li> In 2001 Employed by ‘aventis pharma’ world-wide pharmaceutical enterprise , maintaining headquarters to France and establised subsidiaries word-wide.</li>
            <li> In 2000 Enrolled 2 years class, ‘3D Animation & Desktop Publishing’ at ‘AKMI’ Athenian private vocational institute.<span>For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while also studying 'Art History' and 'Typography History'. The next year I had my first experience with computing usingtools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3'</span>
            </li>
        </ul>
        `
    }

run()