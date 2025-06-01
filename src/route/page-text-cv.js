import {html, css, LitElement} from 'lit';
import {theme} from "../theme";
import data from "./data-cv";

customElements.define('page-text-cv',

    class PageTextCv extends LitElement {

        static properties = {
            // activeContent: {type: String, default: VIEW.LAND.INTRO},
        };

        constructor() {
            super();
            // this.activeContent = VIEW.LAND.INTRO
        }


        render = () => html`

            <article>
                ${data.map(({employ, tasks}) => html`
                    <section>
                        <header>
                            <h3>${employ.toUpperCase()}</h3>
                        </header>
                        <nav>
                            ${tasks.map(([title, detail]) => html`
                                <a >
                                    <h4>${title.toUpperCase()}</h4>
                                    <p>${detail}</p>
                                </a>
                            `)}
                        </nav>
                    </section>
                `)}
            </article>
        `;


        static styles = [
            theme,
            css`
                article {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: auto;
                    padding: 0 100px;
                    height: 95vh;
                    width: 75%;
                    max-width: 1200px;
                    overflow: auto;
                    background: rgba(255, 255, 255, .7);
                    font-family: var(--sgs-font-family);


                    section {
                        margin: 50px 0 25px;
                        width: 100%;

                        header {
                            border-bottom: 4px solid #000;
                        }

                        nav {
                            display: flex;
                            flex-direction: column;
                            margin-left: 50px;
                            //gap: 50px;

                            a {
                                margin: 25px 0 15px 0;

                                h4 {
                                    text-decoration: underline;
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
