import {html} from 'lit';


const assets = [
    'web',
    'studies',
    'work'
];

const target = "a";


export default (elem) => html`
    <nav id="menu_tabs">
            ${assets.map(
                    (val) => html`
                        <a id="domain_${val}" href="#"
                           class="${elem.active === val ? 'active' : ''}"
                           @click="${(evt) => _fn(evt, () => elem.action(val))}">
                            ${val.toUpperCase()}
                        </a>
                    `)}
        </ul>
    </nav>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
