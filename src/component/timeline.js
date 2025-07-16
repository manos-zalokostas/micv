import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {html, css, LitElement} from 'lit';
import {assets} from "./timeline_asset";
import {SVGI} from "../service/svg-icon";
import {theme} from "/src/service/theme";
import {EVT} from "/src/service/env";


customElements.define('joi-timeline',


    class JoiTimeline extends LitElement {

        static properties = {
            activeWork: {type: String},
            activeComment: {type: Boolean, default: false}
        };

        constructor() {
            super();
        }


        action() {
            this.activeComment = !this.activeComment;
        }

        render = () => html`

            <div>

                <fieldset>
                    <label>comments</label>
                    <input type="checkbox" @click="${this.action}"/>
                </fieldset>

                <article>
                    <p>
                        ${assets.map(
                                ([year, title, info, codes]) => html`

                                    <section>

                                        <header>
                                            <strong>${year}</strong>
                                            <p>
                                                <em class="mi-txt-mid">${title}</em>
                                                <small class="${this.activeComment ? 'active' : ''}">${info}</small>
                                            </p>
                                        </header>

                                        <div>
                                            ${codes && codes.map(code => html`
                                                <button class="work ${code === this.activeWork ? 'active' : ''}"
                                                        @click="${() => {
                                                            this.activeWork = code;
                                                            this.dispatchEvent(
                                                                    new CustomEvent(EVT.MONITOR_CONTENT, {
                                                                        detail: {code},
                                                                        bubbles: true,
                                                                    }))
                                                        }
                                                        }">
                                                    <strong>${code}</strong>
                                                    <span class="buttonico">
                                                        ${unsafeHTML(SVGI.STAR({color: "#ccc"}))}
                                                    </span>
                                                </button>
                                            `)}
                                        </div>

                                    </section>
                                `)}
                    </p>

            </div>

            </div>
        `;

        static styles = [
            theme,
            css`
                div {
                    padding: 10px;

                    fieldset {
                        color: #ddd;
                        text-align: right;
                        font-family: var(--font);
                        border: none;
                        margin: 10px 0;
                    }

                    article {
                        display: flex;
                        margin: auto;

                        p {
                            font-family: var(--font);
                            overflow: auto;
                            margin: auto;
                            width: 100%;
                        }

                        section {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            border-bottom: 1px solid #bbb;

                            &:hover {
                                //color: indianred;
                                text-decoration: underline;
                                background-color: #eee;
                                border-color: #888;
                            }

                            header {
                                display: flex;
                                align-items: flex-start;
                                gap: 40px;
                                text-align: left;
                                padding: 10px;

                                strong {
                                    // font-size: 1.5em;
                                    width: 50px;
                                }

                                em {
                                    font-style: initial;
                                }

                                small {
                                    // font-size: initial;
                                    display: none;

                                    &.active {
                                        display: initial;
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    }
                }
            `
        ]
    }
);
