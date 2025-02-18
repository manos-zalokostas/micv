import {css, html, LitElement} from 'lit';
import {EVT, VIEW} from "/src/env";

const assets = [
    ['welcome', VIEW.LAND.INTRO],
    ['timeline', VIEW.LAND.RESU],
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
            console.log(">>>>>> ", idx)
            this.active = idx;

            console.log('CLICKED INTROD PAGE MENU');
        }

        render = () => html`
            <nav>
                ${assets.map(
                        ([val, code], i) => html`
                            <button
                                    class="${this.active === i + 1 ? 'active' : ''}"
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
                                ${val}
                            </button>
                        `)}
            </nav>
        `;

        static styles = css`

            nav {
                text-align: right;

                button {
                    text-transform: uppercase;
                    font-family: Tahoma, Geneva, sans-serif;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid #ccc;
                    padding: 5px 10px;
                    width: 150px;
                    margin: 5px;
                    text-align: right;
                    background: white;

                    &:hover,
                    &.active {
                        color: darkgoldenrod;
                    }
                }

            }


        `
    }
);
