import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

const [bach, ...certs] = study;

customElements.define('view-doc-education',

    class ViewDocEducation extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`
            <section>
                <header>
                    <h3>${bach.type.toUpperCase()}</h3>
                </header>
                <nav>
                    ${bach.tasks.map(detail => html`
                        <a>
                            <p>${detail}</p>
                        </a>
                    `)}
                </nav>
                <aside>
                    ${certs.map(({type, tasks}, i) => html`
                        <div>
                        ${tasks.map(detail => html`
                            <h4>${type.toUpperCase()}</h4>
                            <p>${detail}</p>
                        `)}
                        </div>
                    `)}
                </aside>
            </section>

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

                    aside {
                        display: flex;
                        padding: 20px;
                        gap: 20px;
                        position: relative;
                        left: 50px;

                        div > * {
                            margin: 0;
                            padding: 0;
                        }
                    }
                }
            `]

    }
);