import Visual from "../core/visual.mjs";

function listen() {
    document.addEventListener(
        'click', (event) => {
            const target = event.target;

            // if (!target.matches('#cv_comments')) return;
            //
            // const comments = document.querySelectorAll('#cv_description i');
            //
            // [...comments].forEach(
            //     o => {
            //         if (o.style.display === 'none' || !o.hasAttribute('style')) {
            //             o.style.display = 'block';
            //             return Visual.opacity(o, 1);
            //         }
            //         Visual.opacity(o, 0);
            //     }
            // )
        }
    )
}


function html() {

    return `
             <div id="resume_cv_field">
                    <div class="aux_txt">
                        <h3>Timeline <span>comments<input type="checkbox" id="cv_comments"/></span></h3>
                        <p id="cv_description">

                            <strong> 2023 </strong> Contracted by ICCS as standalone Full Stack Developer to design and
                            develop "EcoEMS" consisting of 2 energy apps with Sveltekit.js / Nest.js / Sql Server /
                            Docker,<i> The project was a part of European - Indian endeavor “Re-empowered” and its scope
                            was to perform simulations so that renewable energy could find and claim its effective
                            margin on the daily demand.</i>
                            <br/><br/>

                            <strong> 2021 </strong> Contracted by ICCS as standalone Full stack Developer to design and
                            develop "Synergy" 2 energy apps and infrastructure with Next.js / Mysql / Docker <i>
                            Deliverable was a part of multi European big-data project ‘Synergy” that roots and founded
                            by greater movement “Horizon 2020”. Project
                            customers are major national suppliers across Europe</i>
                            <br/><br/>

                            <strong> 2020 </strong> Contracted by ICCS as standalone Full stack Developer to design /
                            develop "Hybrid" Energy App with Next.js / Mysql / Docker <i>Core scopes of the project:
                            Power
                            Production / Load / Availability, Technical status of units and ultimately alignment with
                            the official Schedule announced by the national supplier on daily basis</i>
                            <br/><br/>

                            <strong> 2018<sup>/6</sup></strong> Employeed by Cosmores I designed and developed
                            Rateparity as standalone Frontend Developer with Js / React.js <i> Decoupled,
                            customizable, one-line-installation CORS Widgets for enriching the user experience on
                            customers sites. Additionally developing the configuration app in the backend for widgets
                            customization and usage monitoring and evaluation.</i>
                            <br/><br/>

                            <strong> 2017<sup>/7</sup></strong> Employeed by Cosmores as in-house Fullstack Developer to
                            maintain / extend proprietary product with the Php / Mysql / Js / Jquery <i>in the backend
                            and frontend respectively. The mission was to upgrade, extend, maintain and enforce security
                            processes on many parts of the
                            company's daily routines.</i>
                            <br/><br/>

                            <strong> 2017<sup>/1</sup></strong> Contracted as freelance, standalone Full stack Developer
                            to design and build a warehouse inventory for Ecep Technologies Laravel (Php) / Mysql <i>
                            The English, London enterpreneur needed a .weba monitoring system that could keep track of
                            products, purchases,
                            deliveries and sales activities of the company. The tool that was used was Laravel 5.1
                            MVC</i>
                            <br/><br/>

                            <strong> 2016</strong> Contracted as freelance, standalone Full stack Developer for American
                            project Noblelinx CRM upgrades and extensions with Php / Mysql
                            <br/><br/>

                            <strong> 2015</strong> Contracted by Interactive Data as freelance Front-end Developer for
                            its new intranet project "Infobroker" hosted by Commerbank Germany with Js / Php / Mysql
                            <br/><br/>

                            <strong> 2014</strong> Short passings from "DeltaCosmos Security" and "CCS Education" as
                            Fullstack PHP and Frontend Javascript Develper respectively
                            <br/><br/>

                            <strong> 2013</strong> Self-occupied as freelance "Web Developer and Graphics Designer"
                            working with PHP and Js ecosystems.
                            <br/><br/>

                            <strong> 2012</strong> Graduated College with a 'first class honors' degree <i>and attached
                            a 'student of the year' distinction for last year performance.</i>
                            <br/><br/>

                            <strong> 2011 </strong> I was released from Sanofi aventis after 11 years employment.<i>The
                            recession that stroke the country has led company to unleash almost half of the crew in
                            near three years time.</i>
                            <br/><br/>

                            <strong> 2009</strong> <i>I have decided to pursue a bachelor diploma on the domain of web
                            technology. Nevertheless, while still occupied by 'sanofi aventis', has modified my decision
                            in a way to select a title that would add value on the company as well. With those in
                            mind </i> Enrolled 'Internet Engineering and Web Management' class from University of
                            Greenwich associated with 'New York' College.
                            <br/><br/>

                            <strong> 2008</strong> Enrolled full-year class at Athenian Vocational Institute
                            ‘Integraphics’ labeled ‘Web Designed & Development’. <i>During the class, I faced a well
                            structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting
                            experience with PHP, MySQL and Apache. While the training turned out really advantageous and
                            the outcome was my first web site, build with ajax technology, exclusively consisting on
                            protocols, my appetite on comprehending web technologies was enormous and the need to
                            integrate myself with a root understanding over the concepts has generated my interest to
                            obtain more advanced education.</i>
                            <br/><br/>


                            <strong> 2006</strong> Graduated 'Graphics designer for printable mediums & Web' at 'AKMI'
                            Vocational Institute<i>, and up until 2008 I have urged as one and primary target to
                            familiarize and conform myself with the new business environment that had arose at ‘Sanofi
                            Aventis’. Starting from the same year, up until 2008 I was gradually assigned to provide
                            office assistance for the 'Facility and HSE Department' by recording, maintaining and draw
                            out monthly reports for the data housekeeping.</i>
                            <br/><br/>

                            <strong> 2005</strong>, <i>while feeling the need to integrate a 'Graphic Designer'
                            certificate that would ground further my qualifications in the area,</i> I have enrolled a
                            full-year class at 'AKMI' Vocational Institute labeled 'Graphics Designer for Printable
                            Mediums and Web'. <i>There I had my original experience with web concepts, namely site
                            design and development, since we gained practicing skills on Macromedia's web tools such as
                            Dreamweaver & Flash. At the same time in 2005 , while still occupied by 'Aventis Pharma'
                            Pharmaceutical, there was a 'sudden merger announced by our company with 'Sanofi'
                            Pharmaceutical. The merger was of a great value since the new-constitute company would climb
                            high above previous competitive levels, gaining huge market shares would now strive c
                            ompeting top ranking pharmaceuticals world-wide. </i>
                            <br/><br/>

                            <strong> 2002</strong> Graduated 3D-Animation class at 'AKMI' vocational institute <i> and
                            for the later 3 years I primarily focused on my job, while as a hobby I continued to
                            practice my skills with graphics design and 3D Animation components, as Adobe Photoshop,
                            Corel Draw and 3D-Max respectively.
                        </i>
                            <br/><br/>


                            <strong> 2001</strong> Employed by ‘aventis pharma’ world-wide pharmaceutical enterprise <i>,
                            maintaining headquarters to France and establised subsidiaries word-wide.</i>
                            <br/><br/>

                            <strong> 2000</strong> Enrolled 2 years class, ‘3D Animation & Desktop Publishing’ at ‘AKMI’
                            Athenian private vocational institute.
                            <i>For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand
                                Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while
                                also studying 'Art History' and 'Typography History'. The next year I had my first
                                experience
                                with computing using tools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3'</i>
                            <br/><br/>

                        </p>
                    </div>
                </div>
                ${css()}
`

}

function css() {
    return `
    <style>
    
 #resume_cv_field h2 {
    font-size: 4em;
}


 #resume_cv_field p i {
    font-style: normal;
    font-weight: normal;
    display: none;
    opacity: 0;
    font-size: .8em;
}

 #resume_cv_field p strong {
    margin-left: 1%;
    margin-right: 1%;
    font-size: 1.2em;
}

 #resume_cv_field p strong:before {
    content: ' -';
}

.citation #resume_cv_field h3 {

}

 #resume_cv_field h3 span {
    float: right;
    font-size: 0.5em;
    color: gainsboro;
    position: absolute;
    left: 6%;
    top: 85%;
}

</style>
    `
}


function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    listen,
    html,
}