import {html, css, LitElement} from 'lit';
import {assets} from "./timeline_asset";
import {theme} from "../theme";
import {EVT} from "/src/env";


customElements.define('joi-timeline',


    class JoiTimeline extends LitElement {

        static properties = {
            active: {type: Number}
        };

        constructor() {
            super();
            this.active = 0
        }


        action(idx) {
            this.active = !this.active
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
                                                <em>${title}</em>
                                                <small class="${this.active ? 'active' : ''}">${info}</small>
                                            </p>
                                        </header>

                                        <div>
                                            ${codes && codes.map(code => html`
                                                <button @click="${() => this.dispatchEvent(
                                                        new CustomEvent(EVT.MONITOR_CONTENT, {
                                                            detail: {code},
                                                            bubbles: true,
                                                        }))}">
                                                    ${code}
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
                        text-align: right;
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

                            header {
                                display: flex;
                                align-items: flex-start;
                                gap: 40px;
                                text-align: left;
                                padding: 10px;

                                strong {
                                    font-size: 1.5em;
                                    width: 50px;
                                }

                                em {
                                    font-style: initial;
                                }

                                small {
                                    font-size: initial;
                                    opacity: 0;
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
