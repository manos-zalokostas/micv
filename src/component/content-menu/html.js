import {html} from 'lit';


const assets = [
    'web',
    'study',
    'work'
];

const target = "a";


export default (elem) => html`
    <div id="menu_tabs">
        <ul>
            ${assets.map(
                    (val, i) => html`
                        <li>
                            <a id="domain_${val}" href="#"
                               class="${elem.active === val ? 'active' : ''}"
                               @click="${(evt) => _fn(evt, () => elem.action(val))}">
                                ${val.toUpperCase()}
                            </a>
                        </li>
                    `)}
        </ul>
    </div>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
