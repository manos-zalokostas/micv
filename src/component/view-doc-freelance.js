import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

customElements.define('view-doc-freelance',

    class ViewDocFreelance extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`

            ${free.map(({type, tasks}, i) => html`
                <section>
                    <header>
                        <h3>${type.toUpperCase()}</h3>
                    </header>
                    <nav>
                        ${tasks.map(([title, detail], ii) => html`
                            <a>
                                <h4><sup>&#8594;&nbsp;</sup>${title.toUpperCase()}</h4>
                                <p>${detail}</p>
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

                    header {
                        border-bottom: 2px solid #999;
                        margin: 15px 0 5px 0;

                        h3 {
                            margin: 0;
                            background: linear-gradient(90deg, #ccc, transparent);
                            padding: 5px;
                            max-width: 700px;
                        }
                    }

                    nav {
                        display: flex;
                        flex-direction: column;
                        margin-left: 50px;
                        width: 98%;

                        a {
                            margin: 0 0 5px 10px;
                            padding: 5px;

                            

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