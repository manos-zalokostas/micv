import {css, html, LitElement} from 'lit';
import {EVT, PAGE} from "/src/env";


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
                ${assets.map(([val, code], i) => html`
                    <button title="${val}"
                            class="${this.activeElem === code ? 'active' : ''}"
                            @click="${(evt) => {
                                this.action(code);
                                this.dispatchEvent(
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


        static styles = css`

            nav {

                button {
                    //color: white;
                    //text-transform: uppercase;
                    //font-family: Tahoma, Geneva, sans-serif;
                    //width: 125px;
                    //outline: none;
                    //padding: 10px;
                    //border: 1px solid #ddd;
                    //background: none;
                }

            }

        `
    });
