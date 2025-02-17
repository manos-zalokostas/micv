import {html, css, LitElement} from 'lit';
import {assets} from "./asset";
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

            <article>

                <fieldset>
                    <label>comments</label>
                    <input type="checkbox" @click="${this.action}"/>
                </fieldset>

                <nav>
                    <p>
                        ${assets.map(
                                ([year, title, info, codes]) => html`

                                    <section>

                                        <header>
                                            <strong>${year}</strong>
                                            <em>${title}</em>
                                            <small class="${this.active ? 'active' : ''}">${info}</small>
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

            </article>
        `;

        static styles = css`

            article {
                padding: 25px;

                fieldset {
                    text-align: right;
                    border: none;
                    margin: 10px 0;
                }

                nav {
                    display: flex;
                    margin: auto;


                    p {
                        overflow: auto;
                        margin: auto;
                        width: 100%;
                    }

                    section {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #bbb;

                        header {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            text-align: left;
                            padding: 10px;

                            small {
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
    }
);
