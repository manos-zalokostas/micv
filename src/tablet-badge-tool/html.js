import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <h4 id="itools">Keywords:
        ${
                o.tools.tool.map(
                        val => `<span><a href="#">${val}</a></span>`
                ).join("")
        }
    </h4>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
