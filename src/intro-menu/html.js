import {html} from 'lit';


const assets = [
    'introduction',
    'resume',
    'interactive',
    'document'
];



export default (elem) => html`
    <div id="introduction_menu">
        <ul>
            ${assets.map((val, i) => html`
                <li>
                    <a title="${val}"
                       class="${elem.active === i + 1 ? 'active' : ''}"
                       @click="${(evt) => _fn(evt, () => elem.action(i + 1))}"
                    >
                        ${val}
                    </a>
                </li>
            `)}
        </ul>
    </div>
`;


const target = "#introduction_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
