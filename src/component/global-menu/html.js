import {html} from 'lit';


const assets = [
    ['about', 'INTRO'],
    ['projects', 'CONT'],
    ['certificates', "CERT"],
];
const target = "#site_menu button";


export default (elem) => html`
    <nav id="site_menu">
        ${assets.map(([val, code], i) => html`
            <button title="${val}"
               class="${elem.activeElem === code ? 'active' : ''}"
               @click="${(evt) => _fn(evt, () => {
                   console.log("--------- CLICKCKCKCKCKCKCKC")
                   elem.action(code);
                   elem.dispatchEvent(
                           new CustomEvent('page-transit', {
                               detail: {code},
                               bubbles: true,        // Event travels up the DOM tree
                               composed: true        // Event crosses shadow DOM boundaries
                           }));
               })}">
                ${val}
            </button>
        `)}
    </nav>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
