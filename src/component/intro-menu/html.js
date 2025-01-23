import {html} from 'lit';


const assets = [
    ['introduction', 'INTRO'],
    ['resume', 'RESU'],
    ['interactive', 'INTER'],
    ['document', 'DOCU']
];


export default (elem) => html`
    <nav id="introduction_menu">
        ${assets.map(([val, code], i) => html`
            <button class="${elem.active === i + 1 ? 'active' : ''}"
                    @click="${(evt) => _fn(evt, () => {
                        elem.action(i + 1);
                        elem.dispatchEvent(
                                new CustomEvent('intro-transit', {
                                    detail: {code},
                                    bubbles: true,
                                }))
                    })}">
                ${val}
            </button>
        `)}
    </nav>
`;


const target = "#introduction_menu button";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
