import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

customElements.define('view-doc-research',

    class ViewDocResearch extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`

            ${arendi.map(({type, tasks, links}, i) => html`
                <section>
                    <nav>
                        <h3 class="margless"><sup>&#8594;&nbsp;</sup>${type.toUpperCase()}</h3>
                        ${tasks.map((detail) => html`
                            <a>
                                <p>${detail}</p>
                                ${links && Array.isArray(links) && html`
                                    &nbsp;&#9741;
                                    <a target="_blank" href="${links[1]}">${links[0]}: ${links[1]}</a>
                                `}
                            </a>
                        `)}
                    </nav>
                </section>
            `)}

        `;

        static styles = [
            theme,
            css`
                section {
                    position: relative;
                    left: -45px;
                    width: 100%;


                    h3 {
                        margin: 0;
                        padding: 5px;
                        max-width: 700px;
                    }

                    nav {
                        display: flex;
                        flex-direction: column;
                        margin-left: 50px;
                        width: 98%;

                        a {
                        color: #999;
                            margin: 0 0 5px 10px;
                            padding: 5px;

                        a {
                        text-decoration: none;
                        font-size: x-small;
                            }
                            

                            p {
                                color: #444;
                            }

                            > * {
                                padding: 0;
                                margin: 0;
                            }

                        }

                    }
                }
            `]
    }
);