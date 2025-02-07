import {html} from 'lit';


const assets = [
    'web',
    'studies',
    'work'
];

const target = "a";


export default (elem) => html`
    <nav>
        ${assets.map(
                (val) => html`
                    <button id="domain_${val}"
                            class="${elem.active === val ? 'active' : ''}"
                            @click="${(evt) => _fn(evt, () => elem.action(val))}">
                        ${val.toUpperCase()}
                    </button>
                `)}
        </ul>
    </nav>
`;


const _fn = (evt, fn) => evt.target.matches(target) && fn();
