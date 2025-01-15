import {html} from 'lit';


const assets = [
    ['about', 'INTRO'],
    ['projects', 'CONT'],
    ['certificates', "CERT"],
];
const target = "#site_menu a";


export default (elem) => html`
    <ul id="site_menu">
        ${assets.map(([val, code], i) => html`
            <li><a title="${val}"
                   class="${elem.active === i + 1 ? 'active' : ''}"
                   @click="${(evt) => _fn(evt, () => {
                       // elem.action(i + 1);
                       elem.dispatchEvent(
                               new CustomEvent('page-transit', {
                                   detail: {code},
                                   bubbles: true,        // Event travels up the DOM tree
                                   composed: true        // Event crosses shadow DOM boundaries
                               }));

                   })}">
                ${val}
            </a></li>
        `)}
    </ul>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
