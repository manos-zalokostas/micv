import {html, css, LitElement} from 'lit';
import {DOMA, EVT} from "/src/env";
import {theme} from "../theme";


customElements.define('content-menu',

    class ContentMenu extends LitElement {

        static properties = {
            active: {type: Number},
            activeTool: {type: String, default: null},
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
                        <strong>${domain}</strong>
                        ${(domain === DOMA.TOOL && this.activeTool && html`
                            <span>
                                <img src="/images/tech_logos/${this.activeTool}.jpg" alt="tech logo">
                                <small>${this.activeTool.replace("_", " ")}</small>
                            </span>
                        `) || ''}
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

                        span {
                            position: absolute;
                            left: 90%;
                            bottom: -12px;
                            display: flex;
                            align-items: center;
                            padding: 10px;
                            border-radius: 30px;
                            border: 4px solid var(--color-tool);
                            background: white;

                            img {
                                width: 24px;
                                padding: 4px;
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
