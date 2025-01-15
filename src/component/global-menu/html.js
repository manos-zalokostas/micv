import {html} from 'lit';


const assets = [
    ['about', 'INTRO'],
    ['projects', 'CONT'],
    ['certificates', "CERT"],
];
const target = "#site_menu a";


export default (elem) => html`
    <nav id="site_menu">
        ${assets.map(([val, code], i) => html`
            <a title="${val}"
               class="${elem.activeElem === code ? 'active' : ''}"
               @click="${(evt) => _fn(evt, () => {
                   elem.action(code);
                   elem.dispatchEvent(
                           new CustomEvent('page-transit', {
                               detail: {code},
                               bubbles: true,        // Event travels up the DOM tree
                               composed: true        // Event crosses shadow DOM boundaries
                           }));
               })}">
                ${val}
            </a>
        `)}
    </nav>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
