export default (params, app) => ({
    css: _css,
    content: `
<div id="resume_cv_field">
    <div class="aux_txt">
        <h3>Timeline
            <span>comments
             <input type="checkbox" id="cv_comments"/></span>
        </h3>
        <p id="cv_description">
            ${data}
        </p>
    </div>
</div>
    `
})

const data = [
    "<strong> In 2000</strong> After concluding studying at official domestic 12 year education and army obligations for the country, I started to inquiry knowledge that would ideally fit properly to my potentials. Driven by wide require for creativity, inclination on graphic design, and regarded technologies gaining high popularity back on 2000 I have decided to continue my education. Enrolled 2 years class, ‘3D Animation & Desktop Publishing’ at ‘AKMI’ Athenian private vocational institute. For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while also studying 'Art History' and 'Typography History'. The next year I had my first experience with computing using tools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3'",
    " <strong> In 2001</strong> Employed by ‘aventis pharma’ world-wide pharmaceutical enterprise , maintaining headquarters to France and establised subsidiaries word-wide. ",
    " <strong> In 2002</strong> Graduated 3D-Animation class at 'AKMI' vocational institute and for the later 3 years I primarily focused on my job, while as a hobby I continued to practice my skills with graphics design and 3D Animation components, as Adobe Photoshop, Corel Draw and 3D-Max respectively. ",
    " <strong> In 2005</strong> , while feeling the need to integrate a 'Graphic Designer' certificate that would ground further my qualifications in the area, I have enrolled a full-year class at 'AKMI' Vocational Institute labeled 'Graphics Designer for Printable Mediums and Web'. There I had my original experience with web concepts, namely site design and development, since we gained practicing skills on Macromedia's web tools such as Dreamweaver & Flash. At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical, there was a 'sudden merger announced by our company with 'Sanofi' Pharmaceutical. The merger was of a great value since the new-constitute company would climb high above previous competitive levels, gaining huge market shares would now strive c ompeting top ranking pharmaceuticals world-wide. ",
    " <strong> In 2006</strong> Graduated 'Graphics designer for printable mediums & Web' at 'AKMI' Vocational Institute , and up until 2008 I have urged as one and primary target to familiarize and conform myself with the new business environment that had arose at ‘Sanofi Aventis’. Starting from the same year, up until 2008 I was gradually assigned to provide office assistance for the 'Facility and HSE Department' by recording, maintaining and draw out monthly reports for the data housekeeping. ",
    " <strong> In 2008</strong> Enrolled full-year class at Athenian Vocational Institute ‘Integraphics’ labeled ‘Web Designed & Development’. During the class, I faced a well structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL and Apache. While the training turned out really advantageous and the outcome was my first web site, build with ajax technology, exclusively consisting on protocols, my appetite on comprehending web technologies was enormous and the need to integrate myself with a root understanding over the concepts has generated my interest to obtain more advanced education. ",
    "<strong> In 2009</strong> I have decided to pursue a bachelor diploma on the domain of web technology. Nevertheless, while still occupied by 'sanofi aventis', has modified my decision in a way to select a title that would add value on the company as well. With those in mind Enrolled 'Internet Engineering and Web Management' class from University of Greenwich associated with 'New York' College. ",
    " <strong> In 2011 (closing), </strong> I was released from Sanofi aventis after 11 years employment. The recession that stroke the country has led company to unleash almost half of the crew in near three years time.",
    " <strong> In 2012</strong> Graduated College with a 'first class honors' degree and attached a 'student of the year' distinction for last year performance. ",
    " <strong> In 2013</strong> Self-occupied as freelance Web Developer and Graphics Designer",
    " <strong> In 2014</strong> Short passings from DeltaCosmos Security and CCS Education as Full stack and Javascript Develper respectively",
    " <strong> In 2015</strong> Contracted by Interactive Data as freelance Front-end Developer for its new intranet project Infobroker hosted by Commerbank Germany.",
    "<strong> In 2016</strong> Contracted as freelance, standalone Full stack Developer for American project Noblelinx CRM upgrades and extensions"
];


const _css = `
    <style>
    
    #introduction #resume_cv_field h2 {
        font-size: 4em;
    }

    .citation #resume_cv_field .main_txt > p {
        font-size: 1em;
        width: 100%;
    }

    .citation #resume_cv_field .aux_txt > p {
        width: 80%;
        height: 77%;
        float: left;
        text-align: left;
        font-size: 1.2em;
        overflow: auto;
        position: absolute;
        top: 10%;
    }

    #introduction #resume_cv_field p i {
        font-style: normal;
        font-weight: normal;
        display: none;
        opacity: 0;
        font-size: .8em;
    }

    #introduction #resume_cv_field p strong {
        margin-left: 1%;
        margin-right: 1%;
        font-size: 1.2em;
    }

    #introduction #resume_cv_field p strong:before {
        content: ' -';
    }

    .citation #resume_cv_field h3 {

    }

    #introduction #resume_cv_field h3 span {
        float: right;
        font-size: 0.5em;
        color: gainsboro;
        position: absolute;
        left: 6%;
        top: 85%;
    }

    #resume_cv_field .main_txt {
        float: right;
        width: 25%;
        height: 100%;
    }

    #resume_cv_field .aux_txt {
        width: 100%;
        float: left;
        height: 100%;
        overflow: hidden;
    }

    #resume_cv_field .aux_txt > h3 {
        float: left;
        width: 80%;
        height: 10%;
        margin-bottom: 2%;
        position: relative;
        top: 25%;
        left: 0;
        text-align: left;
        padding: 1%;
        color: orange;
    }

    #resume_cv_field .main_txt {
        width: 24%;
        margin: 0;
        font-size: 0.9em;
    }

    #resume_cv_field .aux_txt {
        width: 100%;
        overflow: hidden;
    }

    .citation #resume_cv_field .aux_txt > p {
        width: 93%;
        height: 70%;
        float: left;
        text-align: left;
        font-size: 1.2em;
        overflow: auto;
        position: absolute;
        top: 10%;
        left: 5%;
    }

    .citation #resume_cv_field .main_txt {
        display: none;
    }

    #resume_cv_field .main_txt {
        width: 24%;
        margin: 0;
        font-size: 0.9em;
    }

    .citation #resume_cv_field h3 {
        font-size: 5em;
        top: 1%;
        left: 20%;
    }

    .citation #resume_cv_field h3 > span {
        display: none
    }

    #resume_cv_field .aux_txt {
        width: 98%;
        height: 100%;
        bottom: 1%;
    }
</style>
`;
