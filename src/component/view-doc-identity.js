import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

customElements.define('view-doc-identity',

    class ViewDocIdentity extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`

        <div class="identity">
            
            <div class="personal">
                <h1>MANOS ZALOKOSTAS</h1>
                <em>manos.zalokostas@gmail.com | +30 6944266295</em>
                <br/>
                <em>12 midias str, piraeus, greece</em>
            </div>

            <div class="occupational">
                <h2>creative - structured - disciplined - committed</h2>
                <em>https://gr.linkedin.com/in/manos-zalokostas-93798332</em>
                <br/>
                <u>
                    <em>https://appjoi.online/micv</em>
                </u>
                </p>
            </div>

        </div>
        `;

        static styles = [
            theme,
            css`

                .identity {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    margin: 10px 0 25px 0;

                    .personal {

                    }

                    .occupational {
                        text-align: right;
                    }

                    h1 {
                        font-size: 2em;
                        text-transform: capitalize;
                        padding: 0;
                        margin: 0;
                    }

                    h2 {
                        font-size: 1.3em;
                        text-transform: capitalize;
                        text-align: right;
                        padding: 0;
                        margin: 0;
                    }

                    p {
                        text-align: right;
                        padding: 0;
                        margin: 0;
                    }

                    em {
                        font-style: normal;
                        font-size: 0.9em;
                        color: #888;
                    }
                }

            `]
    }
);