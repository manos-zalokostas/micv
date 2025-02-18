import {html, css, LitElement} from 'lit';
import {EVT} from "/src/env";

const assets = [
    'work',
    'studies',
];


/**
 *
 */

customElements.define('content-menu',

    class ContentMenu extends LitElement {

        static properties = {
            active: {type: Number}
        };

        constructor() {
            super();
            this.active = 1
        }


        action(domain) {
            console.log(">>>>>> ", domain)
            this.active = domain;
            // Child Component (global-menu)
            this.dispatchEvent(new CustomEvent(EVT.DOMAIN_CHANGE, {
                detail: {domain},
                bubbles: true,        // Event travels up the DOM tree
                composed: true        // Event crosses shadow DOM boundaries
            }));

        }

        render = () => html`
            <nav>
                ${assets.map((val) => html`
                    <button id="domain_${val}"
                            class="${this.active === val ? 'active' : ''}"
                            @click="${(evt) => this.action(val)}">
                        ${val.toUpperCase()}
                    </button>
                `)}
                </ul>
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
                    width: 100px;
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
