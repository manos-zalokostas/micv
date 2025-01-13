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
                    (v, i) => html`
                        <li>
                            <a id="domain_${v}" href="#"
                               class="${elem.active === i + 1 ? 'active' : ''}"
                               @click="${(evt) => _fn(evt, () => elem.action(i+1))}">
                                ${v.toUpperCase()}
                            </a>
                        </li>
                    `)}
        </ul>
    </div>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
