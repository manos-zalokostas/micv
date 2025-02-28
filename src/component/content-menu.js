import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {SVGI} from "../_core/svg-icon";
import {html, css, LitElement} from 'lit';
import {DOMA, EVT} from "/src/env";
import {theme} from "../theme";

const SVGS = [
    SVGI.WORK,
    SVGI.STUDY,
    SVGI.TOOL,
]

customElements.define('content-menu',

    class ContentMenu extends LitElement {

        static properties = {
            active: {type: Number, default: DOMA.WORK},
            activeTool: {type: String, default: null},
        };

        constructor() {
            super();
            this.active = DOMA.WORK
        }


        changeDomain(domain) {
            if (this.active === domain) return;

            this.activeTool = '';
            this.active = domain;
            this.dispatchEvent(new CustomEvent(EVT.DOMAIN_CHANGE, {
                detail: {domain},
                composed: true,
                bubbles: true,
            }));

        }


        render = () => html`
            <nav>
                ${Object.values(DOMA).map((domain, i) => html`
                    <button class="mi-button ${domain.toLowerCase()} ${this.active === domain ? 'active' : ''} "
                            @click="${() => this.changeDomain(domain)}">
                        ${(domain === DOMA.TOOL && this.activeTool
                                && html`
                                    <aside>
                                        <img src="/micv/images/tech_logos/${this.activeTool}.jpg" alt="tech logo">
                                        <small>${this.activeTool.replaceAll("_", " ")}</small>
                                    </aside>`
                        ) || ''}
                        <strong>${domain}</strong>
                        <span class="buttonico">
                            ${unsafeHTML(SVGS[i]({color: "#ccc"}))}
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

                    button {
                        position: relative;

                        aside {
                            display: flex;
                            align-items: center;
                            padding: 0 10px;
                            border-radius: 30px;
                            border: none;

                            img {
                                padding: 2px;
                                width: 20px;
                                height: 20px;
                                margin: 0 5px;
                                background-color: white;
                            }

                            small {
                                color: var(--color-tool)
                            }
                        }
                    }
                }
            `]
    }
);
