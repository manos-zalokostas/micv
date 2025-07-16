import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {SVGI} from "../service/svg-icon";
import {css, html, LitElement} from 'lit';
import {EVT, VIEW} from "/src/service/env";
import {theme} from "/src/service/theme";

const assets = [
    ['WELCOME', VIEW.LAND.INTRO, SVGI.USER],
    ['TIMELINE', VIEW.LAND.RESU, SVGI.RESU],
];


customElements.define('intro-menu',

    class IntroMenu extends LitElement {

        static properties = {
            active: {type: Number}
        };

        constructor() {
            super();
            this.active = 1
        }


        action(idx) {
            // console.log(">>>>>> ", idx)
            this.active = idx;

            // console.log('CLICKED INTROD PAGE MENU');
        }

        render = () => html`
            <nav>
                ${assets.map(
                        ([val, code, svg], i) => html`
                            <button
                                    class=" generic ${this.active === i + 1 ? 'active' : ''}"
                                    @click="${() => {
                                        this.action(i + 1);
                                        this.dispatchEvent(
                                                new CustomEvent(EVT.INTRO_TRANSIT, {
                                                            detail: {code},
                                                            bubbles: true,
                                                        }
                                                )
                                        )
                                    }
                                    }">
                                <strong>${val}</strong>
                                <span class="buttonico">
                                    ${unsafeHTML(svg({color: "#ccc"}))}
                                </span>
                            </button>
                        `)}
            </nav>
        `;

        static styles = [
            theme,
            css`
                nav {
                    text-align: center;
                }
            `]
    }
);
