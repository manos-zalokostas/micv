import {css, html, LitElement} from 'lit';
import {itemById, itemByIndex} from "/src/_core/store";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {theme} from "../theme";
import {EVT} from "/src/env";


customElements.define('content-detail',

    class ContentDetail extends LitElement {

        static properties = {
            active: {type: Number},
            asset: {type: Object}
        };

        constructor() {
            super();
            this.active = 1
            this.asset = itemById('WK13')
            // console.log(">>> ", this.asset)
        }


        action(idx) {
            this.active = idx;
            // console.log("--- ", idx);
        }

        render = () => html`

            <header>

                <button @click="${() => this.dispatchEvent(
                        new CustomEvent(EVT.CONTENT_TRANSIT, {
                            detail: {transit: false},
                            composed: true,
                            bubbles: true,
                        }))
                }">
                    back
                </button>

                <h3> 
                    ${this.asset.title} 
                    <sup class="pill ${this.asset.domain.toLocaleLowerCase()}">${this.asset.domain}</sup> 
                </h3>

                <badge-category entry="${this.asset.category}"></badge-category>

                <project-tool .entries="${this.asset.tools.tool}"></project-tool>

            </header>

            <main>

                <div>
                    ${unsafeHTML(this.asset.description)}
                </div>

                <image-slider .asset="${this.asset}"></image-slider>

            </main>

            <footer>

                <badge-tool .entries="${this.asset.tools.tool}"></badge-tool>

            </footer>

        `;


        static styles = [
            theme,
            css`

                header {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    font-family: var(--font);
                    width: 100%;
                    max-height: 175px;

                    h3 {
                        font-size: 2em;
                        color: orange;
                    }
                }

                main {
                    position: relative;
                    z-index: 5;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 50px;
                    font-family: Verdana, Geneva, sans-serif;
                    text-align: left;
                    line-height: 2;
                    padding: 25px;
                    height: calc(100vh - 300px);
                    overflow: auto;
                }

                footer {
                    background: dodgerblue;
                }
            `

        ]

    }
);
