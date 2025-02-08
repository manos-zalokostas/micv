import {html} from 'lit';
import {PAGE} from "../../env";


const assets = [
    ['about', PAGE.LAND],
    ['projects', PAGE.WORK],
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
                                new CustomEvent('page-transit', {
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
