import {css, html, LitElement} from 'lit';
import {EVT, PAGE} from "/src/env";
import {theme} from "../theme";


const assets = [
    ['RESUME', PAGE.LAND],
    ['PROJECTS', PAGE.WORK],
    // ['certificates', PAGE.CERT],
];

customElements.define('global-menu',

    class GlobalMenu extends LitElement {

        static properties = {
            activeElem: {type: String}
        };

        constructor() {
            super();
            this.activeElem = PAGE.LAND
        }


        action(idx) {
            // console.log('IDX: :', idx)
            // console.log('DO SOMETHING ! ')
            this.activeElem = idx
        }

        render = () => html`
            <nav>
                <div>
                    ${assets.map(([val, code], i) => html`
                        <button title="${val}"
                                class="${this.activeElem === code ? 'active' : ''}"
                                @click="${(evt) => {
                                    this.action(code);
                                    this.dispatchEvent(
                                            new CustomEvent(EVT.PAGE_TRANSIT, {
                                                        detail: {code},
                                                        bubbles: true,
                                                        composed: true
                                                    }
                                            )
                                    )
                                }}">
                            ${val}
                        </button>
                    `)}
                </div>
                <div>
                    <global-search></global-search>
                </div>
            </nav>
        `;


        static styles = [
            theme,
            css`
                nav {
                    display: flex;
                    justify-content: space-between;
                }
            `
        ]
    });
