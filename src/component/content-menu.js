import {html, css, LitElement} from 'lit';
import {DOMA, EVT} from "/src/env";
import {theme} from "../theme";


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
            this.active = domain;
            this.dispatchEvent(new CustomEvent(EVT.DOMAIN_CHANGE, {
                detail: {domain},
                composed: true,
                bubbles: true,
            }));

        }


        render = () => html`
            <nav>
                ${Object.values(DOMA).map((domain) => html`
                    <button class="mi-button ${domain.toLowerCase()} ${this.active === domain ? 'active' : ''} "
                            @click="${() => this.changeDomain(domain)}">
                        ${domain}
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
