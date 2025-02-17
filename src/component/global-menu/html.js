import {html} from 'lit';
import {EVT, PAGE} from "../../env";


const assets = [
    ['RESUME', PAGE.LAND],
    ['PROJECTS', PAGE.WORK],
    // ['certificates', PAGE.CERT],
];


export default (elem) => html`
    <nav>
        ${assets.map(([val, code], i) => html`
            <button title="${val}"
                    class="${elem.activeElem === code ? 'active' : ''}"
                    @click="${(evt) => {
                        console.log("--------- CLICKCKCKCKCKCKCKC")
                        elem.action(code);
                        elem.dispatchEvent(
                                new CustomEvent(EVT.PAGE_TRANSIT, {
                                            detail: {code},
                                            bubbles: true,        // Event travels up the DOM tree
                                            composed: true        // Event crosses shadow DOM boundaries
                                        }
                                )
                        )
                    }}">
                ${val}
            </button>
        `)}
    </nav>
`;
