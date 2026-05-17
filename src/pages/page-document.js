import {work, study, tool, lang,  arendi, free} from "/src/indexdb/data-cv";
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
                    <div class="personal">
                        <br/>
                        <h1>MANOS ZALOKOSTAS</h1>
                        <em>mail: manos.zalokostas@gmail.com | mob: +30 6944266295</em>
                        <br/>
                        <em>addr:12 midias str, piraeus, greece</em>
                    </div>
                    <div class="occupational">
                        <br/>
                        <h2>creative - structured - disciplined - committed</h2>
                        <em>https://gr.linkedin.com/in/manos-zalokostas-93798332</em>
                        <br/>
                        <u>
                            <em>online: https://appjoi.online/micv</em>
                        </u>
                        </p>
                    </div>
                </header>
                
                <div class="topic bgless">
                    <em class="topic-title"></em>
                    Senior Full Stack Engineer with 10+ years of experience, built upon a foundation of 15+ years of continuous study and development. My core focus has been architecting and building complete,end-to-end systems - from creating new applications based on high-level business proposals, to modernizing chaotic legacy processes into robust, scalable, and secure web applications and their portable infrastructures.</i>
                </div>
                <br/>

                <!-- TECHNICAL EXPERIENCE -->
                <!-- =======================================-->
                <div class="topic techinical">
                    <em class="topic-title">technical</em>
                    <p class="columns">
                        ${tool.map(({tasks}, i) => html`
                            <section>
                                <nav>
                                    ${tasks.map(([title, detail], ii) => html`
                                        <a>
                                            <h4>${title.toUpperCase()}</h4>
                                            <p>${detail}</p>
                                        </a>
                                    `)}
                                </nav>
                            </section>
                        `)}
                    </p>
                </div>

                <!-- OCCUPAITONAL EXPERIENCE -->
                <!-- =======================================-->
                <div class="topic occupational">
                    <em class="topic-title">organizations</em>
                    ${work.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                ${tasks.map(([title, detail], ii) => html`
                                    <a>
                                        <h4>${title.toUpperCase()}</h4>
                                        <p>${detail}</p>
                                    </a>
                                `)}
                            </nav>
                        </section>
                    `)}
                </div>

                <!-- FREELANCING EXPERIENCE -->
                <!-- =======================================-->
                <div class="topic freelance">
                    <em class="topic-title">freelance</em>
                    ${free.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                ${tasks.map(([title, detail], ii) => html`
                                    <a>
                                        <h4>${title.toUpperCase()}</h4>
                                        <p>${detail}</p>
                                    </a>
                                `)}
                            </nav>
                        </section>
                    `)}
                </div>

                <!-- PERSONAL R&D-->
                <!-- =======================================-->
                <div class="topic research">
                    <em class="topic-title">research / publications</em>
                    ${arendi.map(({type, tasks}, i) => html`
                        <section>
                            <nav>
                                <h3 class="margless">&nbsp;&nbsp;&nbsp;${type.toUpperCase()}</h3>
                                ${tasks.map(detail => html`
                                    <a>
                                        <p>${detail}</p>
                                    </a>
                                `)}
                            </nav>
                        </section>
                    `)}
                </div>

                <!-- EDUCATION & TRAINING -->
                <!-- =======================================-->
                <div class="topic education">
                    <em class="topic-title">education</em>
                    ${study.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                ${tasks.map(detail => html`
                                    <a>
                                        <p>${detail}</p>
                                    </a>
                                `)}
                            </nav>
                        </section>
                    `)}
                </div>

            </article>
        `;

        static styles = [
            theme,
            css`
                article {
                    font-size: 0.7em;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 1000px;
                    max-width: 100%;
                    background: white;
                    font-family: var(--sgs-font-family);
                    margin: auto;

                    > header {
                        display: flex;
                        width: 95%;
                        justify-content: space-between;
                        align-items: center;
                        margin: 0 0 25px 0;

                        .personal {

                        }

                        .occupational {
                            text-align: right;
                        }

                        h1 {
                            text-transform: capitalize;
                            padding: 0;
                            margin: 0;
                            font-size: 2em;
                        }

                        h2 {
                            text-transform: capitalize;
                            text-align: right;
                            padding: 0;
                            margin: 0;
                            font-size: 1.3em;
                        }

                        p {
                            text-align: right;
                            padding: 0;
                            margin: 0;
                        }

                        em {
                            color: #888;
                            font-style: normal;
                            font-size: 0.9em;
                        }
                    }
                }

                .topic {
                    position: relative;
                    background-color: #eee;
                    width: 90%;
                    left: 3%;
                    margin: 15px 0 0 0;

                    &.bgless {
                        background-color: transparent;
                    }

                    .margless {
                        margin: 0;
                    }

                    .topic-title {
                        position: relative;
                        top: -13px;
                        float: right;
                        color: #999;
                        font-style: normal;
                    }

                    p.columns {
                        columns: 2;
                    }
                }

                section {
                    position: relative;
                    left: -50px;
                    width: 100%;

                    header {
                        border-bottom: 2px solid #222;
                        margin: 15px 0 5px 0;

                        h3 {
                            padding: 0;
                            margin: 0;
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

                            h4 {
                                text-decoration: underline;
                            }

                            p {
                                color: #444;

                                &.t
                            }

                            > * {
                                padding: 0;
                                margin: 0;
                            }

                            &.side-task {
                                position: relative;
                                right: -50px;
                                width: 100%;
                                border-left: 1px solid #ccc;
                                border-bottom: 1px solid #ccc;
                                padding-bottom: 5px;
                            }

                        }

                        sub {
                            position: relative;
                            right: -70px;
                            top: -5px;
                            width: 100%;
                            text-align: right;
                            color: #777;
                            background: #eee;
                            font-size: xx-small;
                        }

                    }
                }
            `]
    }
);
