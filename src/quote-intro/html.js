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

        <div class="aux_txt">
            <h3>What is the site about</h3>
            <p>
                On site you may resume both of my occupational and educational timelines, how the two were
                drawn and evolve in parellel during previous years. Context may be indexed in detail,
                either as bulleted descriptions or guided by an interactive timeline. Along with the
                descriptive context you may also have an overview on some of the most critical projects that
                I have encountered.
                Therefore you may find available work-samples while working as a freelance developer on the
                Web, as officer occupied by pharmaceutical company, and last but not least as student at
                university.
                For the latter you may additionally index the scores attained, instructors’ comments, while
                also documentation and video reference whenever appropriate.
                Finally on the last page there are available links to the officials sites for each cited
                organization. You are suggested to request for reference where available. If you wish you
                may contact me
                using any of my personal accounts provided for some of the most popular social networks.
                Please suggest the context if you feel like.
            </p>
        </div>

    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
