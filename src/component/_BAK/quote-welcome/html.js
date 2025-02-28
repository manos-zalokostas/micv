import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <div id="introduction_cv_field">
        <div class="main_txt">
            <h2>Welcome</h2>
            <p>
                <span>Hi! My name is Manos.</span>
                For near the last and a half decade I have been studying and practicing my skills on diverse
                domains of educational interest,
                attending a bachelor degree from an English University while also taking multiple full-year
                trainings on Athenian private vocational institutes.
                The aspects of my study and research could be, in an abstruct manner, summarized to 'Web and
                Desktop Applications Development','Business Management and Marketing' and 'Graphics Design'.
                At the same time, speaking of my occupational experience, for more than a decade I have been
                occupied and have been evolving my competences and communication in a
                top-competent,world-wide extending
                pharmaceutical company, complying and assimilating to my profile highly strict and demanding
                business procedures.
            </p>
        </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
