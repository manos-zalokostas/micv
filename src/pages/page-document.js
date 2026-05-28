import {work, study, tool, lang, arendi, free} from "/src/indexdb/data-cv";
import {theme} from "/src/service/theme";
import {html, css, LitElement} from 'lit';

customElements.define('page-document',

    class PageTextCv extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`

            <article>

                <header>
                    <div class="global">
                        <view-doc-identity></view-doc-identity>
                    </div>
                </header>

                <main>

                    <div class="global">
                        <view-doc-statement></view-doc-statement>
                    </div>

                    <div class="global">
                        <view-doc-technology></view-doc-technology>
                    </div>

                </main>


                <!-- OCCUPAITONAL EXPERIENCE -->
                <!-- =======================================-->
                <div class="topic occupational">
                    <em class="topic-title">organizations</em>
                    <view-doc-occupation></view-doc-occupation>
                </div>

                <!-- PERSONAL R&D-->
                <!-- =======================================-->
                <div class="topic research highlight">
                    <em class="topic-title">research</em>
                    <view-doc-research></view-doc-research>
                </div>

                <!-- FREELANCING EXPERIENCE -->
                <!-- =======================================-->
                <div class="topic freelance">
                    <em class="topic-title">freelance</em>
                    <view-doc-freelance></view-doc-freelance>
                </div>


                <!-- EDUCATION & TRAINING -->
                <!-- =======================================-->
                <div class="topic education">
                    <em class="topic-title">education</em>
                    <view-doc-education></view-doc-education>
                </div>

            </article>
        `;

        static styles = [
            theme,
            css`
                article {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    font-family: var(--sgs-font);
                    font-size: 0.7em;
                    margin: auto;
                    width: 1000px;
                    max-width: 100%;
                    background: white;

                    header {
                        display: flex;
                        width: 95%;
                        justify-content: space-between;
                        align-items: center;
                        margin: 0 0 25px 0;

                    }

                    main {
                        width: 92%;
                        text-align: center;
                        //background: darkseagreen;
                    }

                }

                .global {
                    position: relative;
                    width: 100%;
                }

                    .highlight {
                        color: white;
                        background: #ccc;
                    }

                    .bgless {
                        background-color: transparent;
                    }

                    .borderless {
                        border: none;
                    }

                    .margless {
                        margin: 0;
                    }

                .topic {
                    position: relative;
                    left: 3%;
                    margin: 15px 0 0 0;
                    border: 2px solid #ddd;
                    width: 90%;


                    .topic-title {
                        float: right;
                        color: white;
                        text-align: center;
                        font-style: normal;
                        padding: 2px 6px;
                        background: #999;
                        width: 100px;
                    }

                }

            `]
    }
);
