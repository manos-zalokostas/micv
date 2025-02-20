import {css, html, LitElement} from 'lit';
import {itemById, itemByIndex} from "/src/_core/store";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {EVT} from "/src/env";

/**
 *
 */


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
                            composed: true,        // Event crosses shadow DOM boundaries
                            bubbles: true,        // Event travels up the DOM tree
                        }))
                }">
                    back
                </button>

                <h3>
                    <span>${this.asset.title}</span>
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


        static styles = css`

            header {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                max-height: 175px;


                h3 {
                    font-size: 2em;
                    color: orange;
                }

                button {
                    //color: white;
                    //text-transform: uppercase;
                    //font-family: verdana;
                    //width: 125px;
                    //border: none;
                    //outline: none;
                    //padding: 10px;
                    //background-color: #444;
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
                //margin: 100px 50px;
                line-height: 2;
                padding: 25px;
                height: calc(100vh - 300px);
                overflow: auto;
            }

            footer {
                background: dodgerblue;
            }
        `


    }
);
