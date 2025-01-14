import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <div id="skills_preview" class="monitor">
        <div id="skill_fields" class="mbuttons">
            <b title="tool">skills</b>
            <b title="project">projects</b>
        </div>

        <div id="skill_controls" class="mcontrols">
            <b title="prev">&lt;</b>
            <b title="pause">||</b>
            <b title="next">&gt;</b>
        </div>

        <ul>
            <li id="mi-monitor-view"></li>
        </ul>
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
