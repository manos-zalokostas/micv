import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {css, html, LitElement} from 'lit';
import {SVGI} from "../_core/svg-icon";
import {EVT, PAGE} from "/src/env";
import {theme} from "../theme";


const assets = [
    ['RESUME', PAGE.LAND, SVGI.INTRO],
    ['HIGHLIGHT', PAGE.WORK, SVGI.STARS],
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
            this.activeElem = idx
        }

        render = () => html`
            <nav>
                <div>
                    ${assets.map(([val, code, svg], i) => html`
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
                            <strong>${val}</strong>
                            <span class="buttonico">
                                ${unsafeHTML(svg({color: "#ccc"}))}
                            </span>
                        </button>
                    `)}
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
