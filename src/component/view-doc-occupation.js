import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

customElements.define('view-doc-occupation',

    class ViewDocOccupation extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`

            ${work.map(({type, tasks}, i) => html`
                <section>
                    <header>
                        <h3>${type.toUpperCase()}</h3>
                    </header>
                    <nav>
                        ${tasks.map(([title, detail, links], ii) => html`
                            <a>
                                <h4><sup>&#8594;&nbsp;</sup>${title.toUpperCase()}</h4>
                                ${links && Array.isArray(links) && html`
                                    <aside>
                                        ${(links).map(
                                                link => html`
                                                    <a href=${link} target="_blank">
                                                        &nbsp;&#9741;
                                                        ${link}
                                                    </a>
                                                `)}
                                    </aside>`
                                }
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
                            
                        p {
                            color: #444;
                            padding: 0;
                            margin: 0;
                        }
                            
                        a {
                            margin: 0 0 5px 10px;
                            padding: 5px;

                            h4 {
                            padding: 0;
                            margin: 0;
                           }

                            aside {
                             display: flex;
                             justify-content: flex-start;
                             gap: 5px;
                             
                             a {
                             font-size: 6pt;
                             text-decoration: none;
                             color: #aaa;
                             margin: 0;
                             padding: 0;
                             
                             img {
                             width: 16px;
                             vertical-align: middle;
                             }
                            }


                        }


                    }
                }
            `]

    }
);