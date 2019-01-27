const VIEWS = ['project', 'reference', 'tools'];
const o = {
    display: VIEWS[0],
};

export default (data = {}) => {

    return {
        selector: '#skills_preview',
        content: `<div id="skills_preview" class="part monitor">
    
    <div id='skill_fields' class='mbuttons'>
        <b title='project'>projects</b>
        <b title="reference">references</b>
        <b title="tool">skills</b>
        <em>||</em>
    </div>
    
    <div id="welcome">
        <h3>Web Development</h3>
        <h3>Web Design</h3>
        <h3>Graphics Design</h3>
        <h3 style="color:goldenrod">Welcome</h3>
    </div>

    <ul>
        <li id='${o.display.toLowerCase()}' class='slide_animated'>
            <div class='mitem'>
            ${
        (o.display === 'project' && _uiProject())
        || (o.display === 'reference' && _uiReference())
        || (o.display === 'tools' && _uiTools())
            }
            </div>
            <div>&nbsp;</div>
        </li>

    </ul>
</div>
    `
    }
}


/**
 *
 * @param project
 * @returns {string}
 * @private
 */
const _uiProject = (project = {}) => {

    return `
                <h2>Projects</h2>
                <h3>Project Name</h3>
                <h4>Tech Field</h4>
                <p>Description</p>
                <img/>
`
};


/**
 *
 * @param ref
 * @returns {string}
 * @private
 */
const _uiReference = (ref = {}) => {
    ref = {};

    return `
                <h2>References</h2>
                <h3>Instructor</h3>
                <h4>Instructor Title</h4>
                <p>Comment</p>
                <img/>
`
};


/**
 *
 * @param tools
 * @returns {string}
 * @private
 */
const _uiTools = (tools = [1, 2, 3, 4, 5, 6, 7, 8]) => {

    let items = tools.map(tool => `
    <div class='mgroupi'>
        <h4>Tools</h4>
        ${tool}
    </div>
`);

    return `<h2>Skills</h2>${items.join().replace(/\n/g, '')}`

};

// const _CSS = () => `
// <style>
// .part {
//     box-sizing:border-box;
//     width:100% !important;
// }
//
// #introduction {
//     height: 100%;
//     position: relative;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
// }
//
// #introduction h1 {
//     float: right;
//     padding: 0;
//     margin: 0;
//     position: absolute;
//     right: 32%;
//     color: darkkhaki;
//     font-family: arial;
// }
//
// #introduction #introduction_cv_field p:first-letter {
//     padding-left: 2%;
// }
//
// #introduction #introduction_cv_field .main_txt p {
//     top: 5%;
// }
//
// #introduction #resume_cv_field h2 {
//     font-size: 4em;
// }
//
// #introduction #resume_cv_field p i {
//     font-style: normal;
//     font-weight: normal;
//     display: none;
//     opacity: 0;
//     font-size: .8em;
// }
//
// #introduction #resume_cv_field p strong {
//     margin-left: 1%;
//     margin-right: 1%;
//     font-size: 1.2em;
// }
//
// #introduction #resume_cv_field p strong:before {
//     content: ' -';
// }
//
//
// #introduction #resume_cv_field h3 span {
//     float: right;
//     font-size: 0.5em;
//     color: gainsboro;
//     position: absolute;
//     left: 6%;
//     top: 85%;
// }
//
//
//
// #interactive_cv_field #timeline_btns {
//     list-style-type: none;
//     position: absolute;
//     left: 0%;
//     top: 19%;
//     padding: 0;
//     margin: 0;
//     width: 10%;
//     height: 60%;
//     float: left;
//     margin-right: 1%;
//     margin-top: 3%;
// }
//
// #introduction #interactive_cv_field #timeline_btns li {
//     float: left;
//     width: 100%;
//     margin: 4%;
//     overflow: hidden;
// }
//
//
// #introduction #interactive_cv_field #timeline_btns li a:hover {
//     border-bottom: 2px solid #ddd;
// }
//
// #introduction #document_cv_field {
//     overflow: auto;
// }
//
// #introduction #document_cv_field img {
//     width: 100%;
//     border: solid #ddd;
// }
//
// #interactive_cv_field #objectives {
//     list-style-type: none;
//     position: absolute;
//     left: 15%;
//     top: 30%;
//     padding: 0;
//     margin: 0;
//     width: 74%;
//     height: 58%;
//     opacity: 0;
// }
//
// #introduction #interactive_cv_field #objectives #label {
//     list-style-type: none;
//     padding-left: 2%;
//     padding-bottom: 1%;
//     margin: 1%;
//     margin-top: 5%;
//     width: 35%;
//     font-family: calibri;
//     color: darkcyan;
//     font-weight: bold;
//     font-size: 2em;
//     border-bottom: solid 2px #aaa;
// }
//
// #introduction #interactive_cv_field #objectives #skills {
//     padding-left: 4%;
//     padding-top: 2%;
//     margin: 1%;
//     width: 92%;
//     height: 70%;
//     color: #888;
//     font-family: calibri;
//     text-align: left;
//     font-size: 1.5em;
// }
//
// #interactive_cv_field #timeline {
//     position: absolute;
//     background-color: #bbb;
//     width: 70%;
//     height: 2px;
//     padding: 0 1%;
//     font-size: 0.8em;
//     font-weight: bold;
//     font-family: calibri;
//     float: left;
//     list-style-type: none;
//     top: 12%;
//     left: 15%;
// }
//
// #introduction #interactive_cv_field #timeline li {
//     position: relative;
//     margin: 0 2.5%;
//     float: left;
//     background-color: #ccc;
//     width: 1px;
//     font-family: arial;
//     border-radius: 20px;
// }
//
// #introduction #interactive_cv_field #timeline li p {
//     visibility: hidden;
//     height: 1px;
// }
//
// #introduction #interactive_cv_field #timeline li.default {
//     color: #bbb;
//     font-size: inherit;
//     text-decoration: none;
//     position: relative;
//     bottom: 0px;
//     left: -6px;
//     float: left;
// }
//
// #introduction #interactive_cv_field #timeline li.job_start {
//     color: #ca8;
//     font-size: 1.5em;
//     bottom: 20px;
//     background-color: #ca8;
// }
//
// #introduction #interactive_cv_field #timeline li.job_end {
//     color: darkkhaki;
//     margin-left: 19px;
//     font-size: 0.8em;
// }
//
// #introduction #interactive_cv_field #timeline li.std_start {
//     color: teal;
//     font-size: 1.5em;
//     position: relative;
//     margin-left: 22px;
//     bottom: 20px;
//     background-color: teal;
// }
//
// #introduction #interactive_cv_field #timeline li.std_start a {
//     left: -16px;
//     bottom: 20px;
// }
//
// #introduction #interactive_cv_field #timeline li.job_start a {
//     left: -15px;
//     bottom: 21px;
//     padding-bottom: 42px;
// }
//
// #introduction #interactive_cv_field #timeline li.std_end {
//     color: teal;
//     font-size: 0.8em;
// }
//
// #introduction #interactive_cv_field #timeline li.job_start_off, #introduction #interactive_cv_field #timeline li.job_end_off, #introduction #interactive_cv_field #timeline li.std_start_off, #introduction #interactive_cv_field #timeline li.std_end_off {
//     color: #aaa;
//     font-size: 0.8em;
// }
//
// #introduction #interactive_cv_field #timeline li a {
//     color: inherit;
//     font-size: inherit;
//     text-decoration: none;
//     position: relative;
//     bottom: 10px;
//     left: -8px;
//     float: left;
// }
//
// #introduction #interactive_cv_field #timeline li a.default {
//     color: #888;
//     font-size: 0.8em;
//     text-decoration: none;
//     position: relative;
//     bottom: 10px;
//     left: -8px;
//     float: left;
// }
//
// #introduction #interactive_cv_field #timeline li a:hover {
//     font-size: 1.5em;
//     bottom: 1.5em;
//     padding: 0 0.5em;
//     padding-bottom: 2em;
//     left: -1.5em;
// }
//
// #introduction #interactive_cv_field #timeline li a.selected {
//     font-size: 1.5em;
//     bottom: 1.5em;
//     left: -1em;
//     font-weight: bold;
// }
//
// .monitor {
//     position: absolute;
//     top: 8%;
//     border: solid 12px #ccc;
//     border-radius: 10px;
//     border-top-left-radius: 30px;
//     background-color: #555;
//     margin-left: 1%;
//     cursor: pointer;
//     width: 75%;
//     height: 30%;
// }
//
// .mbuttons {
//     /* background-color: #444; */
//     position: absolute;
//     right: 8%;
//     top: -3%;
//     z-index: 30;
//     height: 8%;
//     border-radius: 2px;
//     width: 45%;
// }
//
// .mbuttons > * {
//     background-color: slategray;
//     font-family: calibri;
//     border-radius: 2px;
//     color: #eee;
//     font-size: 1em;
//     border: 1px solid #ccc;
//     margin: 0;
//     padding: 0;
//     margin-left: 3px;
//     height: 80%;
//     width: 31%;
//     float: left;
//     top: -100%;
//     position: relative;
//     /* border: solid 1px white; */
// }
//
// .mbuttons > b {
//     opacity: 0;
//     border: solid 4px #555;
//     margin: 0;
//     border-radius: 0;
// }
//
// .mbuttons > em {
//     border-radius: 30px;
//     px;
//     */ position: absolute;
//     top: 0;
//     right: -200%;
//     background-color: slategrey;
//     border: 2px solid #555;
//     font-style: normal;
//     width: 10%;
//     display: none;
//     left: 100%;
// }
//
// .mbuttons > em.paused, .mbuttons > em:hover {
//     display: block;
//     background-color: rgba(255, 255, 255, 0.3);
//     color: white;
//     border: 2px solid #555;
// }
//
// #skills_preview #skill_fields > b.filteron, #skills_preview #skill_fields > b:hover {
//     background-color: tomato;
//     color: white;
//     border-bottom: 1px solid tomato;
// }
//
// #introduction .monitor > ul {
//     float: left;
//     width: 100%;
//     height: 100%;
//     padding: 0;
//     margin: 0;
//     overflow: hidden;
// }
//
// #introduction #skills_preview #welcome {
//     position: absolute;
//     left: 4%;
//     font-family: arial;
//     font-size: 2em;
//     text-align: center;
//     height: 100%;
//     width: 95%;
// }
//
// #welcome h2 {
//     float: left;
//     width: 40%;
//     text-align: left;
//     font-size: 2em;
// }
//
// #welcome h3 {
//     float: left;
//     width: 100%;
//     margin: 0;
//     position: absolute;
//     top: 30%;
//     opacity: 0;
//     color: white;
// }
//
// #introduction .monitor > ul > li {
//     width: 100%;
//     height: 100%;
//     float: left;
//     margin: 2px;
//     position: absolute;
//     padding: 0;
//     margin: 0;
//     left: -150%;
//     overflow: hidden;
// }
//
// .monitor > ul > li > div:last-child {
//     /* display: none; */
//     position: absolute;
//     right: 0%;
//     top: 0%;
//     height: 100%;
//     opacity: 0.1;
//     width: 70%;
// }
//
// #introduction #skills_preview ul li > #reference {
//     display: block;
// }
//
// #reference .mitem > h3 a {
//     color: cadetblue;
// }
//
// #introduction #skills_preview ul li#reference > div > p:before {
//     content: '"..';
// }
//
// #introduction #skills_preview ul li#reference > div > p:after {
//     content: '.."';
// }
//
// .monitor #tool {
//     top: -4%;
// }
//
// #tool .mitem h2 {
//     position: relative;
//     top: 0%;
//     left: 0%;
//     margin: 1% 0;
// }
//
// #introduction #skills_preview ul li#tool > div > div:hover {
//     cursor: default;
// }
//
// #introduction .mgroupi {
//     height: 40%;
//     width: 23%;
// }
//
// .mgroupi > h4 {
//     float: left;
//     font-size: 1.5em;
//     font-family: calibri;
//     width: 44%;
//     margin-top: 6%;
// }
//
// .mgroupi > img {
//     position: relative;
//     bottom: -5%;
//     right: -100%;
//     border-radius: 6px;
//     width: 28%;
//     border: 4px solid gainsboro;
// }
//
// .mgroupi > img:hover {
//     cursor: pointer;
//     border: 4px solid gold;
// }
//
// .mitem {
//     position: absolute;
//     left: 0%;
//     top: 0%;
//     width: 100%;
//     height: 100%;
//     padding: 0;
//     margin: 0;
//     overflow: hidden;
//     font-family: verdana;
//     z-index: 10;
// }
//
// .mitem > * {
//     margin: 0;
//     padding: 0;
//     position: absolute;
//     text-decoration: none;
//     color: white;
//     text-align: right;
// }
//
// .mitem > * * {
//     text-decoration: none;
//     padding: 0;
//     margin: 0;
// }
//
// #project .mitem > h2 {
// }
//
// #project .mitem > h3 {
//     bottom: 9%;
//     left: 1%;
//     color: goldenrod;
// }
//
// .mitem > h4 {
//     bottom: 15%;
//     left: 2%;
// }
//
// #project .mitem > p {
//     left: 1%;
//     top: 25%;
//     width: 65%;
//     font-size: 0.8em;
// }
//
// #project .mitem > img {
//     bottom: 0%;
//     right: 0%;
//     max-width: 30%;
//     max-height: 80%;
// }
//
// .mitem > h2 {
//     top: 5%;
//     left: 0%;
//     width: 10%;
//     text-align: left;
//     border-top-right-radius: 15px;
//     border-bottom-right-radius: 15px;
//     background-color: tomato;
//     padding: 1%;
//     font-size: 1em;
// }
//
// .mitem > h3 {
//     width: 65%;
//     height: 10%;
//     text-align: left;
//     font-size: 2.8em;
// }
//
// #project .mitem > h4 {
//     width: 65%;
//     height: 10%;
//     text-align: left;
//     font-size: 1em;
// }
//
// .mgroupi div > div {
//     height: 24%;
//     width: 30%;
//     float: left;
//     margin: 2px;
//     position: relative;
//     overflow: hidden;
//     cursor: pointer;
//     border-radius: 4px;
//     border: 2px solid #ddd;
//     list-style-type: none;
// }
//
// #reference .mitem > h3 {
//     bottom: 11%;
//     left: 22%;
// }
//
// #reference .mitem > h4 {
//     bottom: 18%;
//     left: 22%;
// }
//
// .mitem > p > * {
//     margin: 0;
//     padding: 0;
//     display: inline;
// }
//
// #reference .mitem > p {
//     right: 5%;
//     top: 15%;
//     width: 70%;
//     height: 50%;
//     font-size: 1.2em;
//     overflow: hidden;
//     font-style: italic;
// }
//
// #reference .mitem img {
//     bottom: 0%;
//     left: 4%;
//     width: 15%;
// }
// </style>
// `;