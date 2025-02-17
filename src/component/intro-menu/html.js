import {html} from 'lit';
import {EVT, PAGE, VIEW} from "../../env";


const assets = [
    ['welcome', VIEW.LAND.INTRO],
    ['timeline', VIEW.LAND.RESU],
];


export default (elem) => html`
    <nav>
        ${assets.map(
                ([val, code], i) => html`
                    <button
                            class="${elem.active === i + 1 ? 'active' : ''}"
                            @click="${() => {
                                elem.action(i + 1);
                                elem.dispatchEvent(
                                        new CustomEvent(EVT.INTRO_TRANSIT, {
                                                    detail: {code},
                                                    bubbles: true,
                                                }
                                        )
                                )
                            }
                            }">
                        ${val}
                    </button>
                `)}
    </nav>
`;


const target = "#introduction_menu button";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
