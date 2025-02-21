import {html, css, LitElement} from 'lit';
import {DOMA, EVT} from "/src/env";


customElements.define('content-menu',

    class ContentMenu extends LitElement {

        static properties = {
            active: {type: Number}
        };

        constructor() {
            super();
            this.active = 1
        }


        changeDomain(domain) {
            // console.log(">>>>>> ", domain)
            this.active = domain;
            // Child Component (global-menu)
            this.dispatchEvent(new CustomEvent(EVT.DOMAIN_CHANGE, {
                detail: {domain},
                bubbles: true,        
                composed: true        
            }));

        }


        render = () => html`
            <nav>
                ${Object.values(DOMA).map((domain) => html`
                    <button class="${this.active === domain ? 'active' : ''}"
                            @click="${() => this.changeDomain(domain)}">
                        ${domain}
                    </button>
                `)}
            </nav>
        `;


        static styles = css`

            nav {
                text-align: center;

                button {
                    //text-transform: uppercase;
                    //font-family: Tahoma, Geneva, sans-serif;
                    //border: none;
                    //outline: none;
                    //border-bottom: 1px solid #ccc;
                    //padding: 5px 10px;
                    //width: 100px;
                    //margin: 5px;
                    //text-align: right;
                    //background: white;

                    &:hover,
                    &.active {
                        color: darkgoldenrod;
                    }
                }

            }


        `
    }
);
