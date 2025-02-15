import {html} from 'lit';


const assets = [
    'work',
    'studies',
];


export default (elem) => html`
    <nav>
        ${assets.map((val) => html`
            <button id="domain_${val}"
                    class="${elem.active === val ? 'active' : ''}"
                    @click="${(evt) => elem.action(val)}">
                ${val.toUpperCase()}
            </button>
        `)}
        </ul>
    </nav>
`;
