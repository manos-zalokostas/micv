import {html} from 'lit';


const assets = [
    'about',
    'projects',
    'certificates'
];
const target = "#site_menu a";


export default (elem) => html`
    <ul id="site_menu">
        ${assets.map((val, i) => html`
            <li>
                <a title="${val}"
                   class="${elem.active === i + 1 ? 'active' : ''}"
                   @click="${(evt) => _fn(evt, () => elem.action(i+1))}"
                >
                    ${val}
                </a>
            </li>
        `)}
    </ul>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
