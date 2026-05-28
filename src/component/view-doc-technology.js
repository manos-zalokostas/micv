import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

customElements.define('view-doc-technology',

    class ViewDocTechnology extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`
            <div class="techno">

                ${tool.map(({tasks}, i) => html`
                    ${tasks.map(([title, detail], ii) => html`
                        <p>
                            <strong>${title.toUpperCase()}</strong>
                            <br/>
                            ${detail.replaceAll(" ", "")
                                    .split(",")
                                    .map((item) => html`
                                        <span>${item}</span><br/>
                                    `)}
                        </p>
                    `)}
                `)}
            </div>

        `;

        static styles = [
            theme,
            css`
                .techno {
                    display: flex;
                    justify-content: space-evenly;

                    p {
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        line-height: 0.8;
                    }
                }
            `]
    }
);