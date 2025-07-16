import {work, study, tool, lang} from "/src/indexdb/data-cv";
import {html, css, LitElement} from 'lit';
import {theme} from "/src/service/theme";

customElements.define('page-document',

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
                <div class="topic">
                    <em class="topic-title">occupational experience</em>
                    ${work.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                ${tasks.map(([title, detail], ii) => html`
                                    <a class="${i === 0 && [1, 4].includes(ii) ? 'side-task' : ''}">
                                        <h4>${title.toUpperCase()}</h4>
                                        <p>${detail}</p>
                                    </a>
                                    ${i === 0 && [1, 4].includes(ii) ? html`<sub>side project</sub>` : ''}
                                `)}
                            </nav>
                        </section>
                    `)}
                </div>

                <div class="topic">
                    <em class="topic-title">education & training</em>
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

                <div class="topic">
                    <em class="topic-title">technologies applied</em>
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
                </div>


                <div class="topic">
                    <em class="topic-title">languages</em>
                    ${lang.map(({ tasks}, i) => html`
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
                </div>


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
                    //border: 1px solid #ddd;

                    > header {
                        display: flex;
                        width: 95%;
                        justify-content: space-between;
                        align-items: center;
                        margin: 0 0 35px 0;

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

                    .topic-title {
                        position: relative;
                        top: -13px;
                        float: right;
                        color: #bbb;
                        font-style: normal;
                    }
                }

                section {
                    position: relative;
                    left: -50px;
                    //margin: 50px 0 25px;
                    width: 100%;

                    header {
                        border-bottom: 2px solid #222;
                        margin: 15px 0 5px 0;

                        h3 {
                            padding: 0;
                            margin: 0;
                            //color: red;
                        }
                    }

                    nav {
                        display: flex;
                        flex-direction: column;
                        margin-left: 50px;
                        //gap: 50px;

                        a {
                            margin: 0 0 5px 10px;
                            padding: 5px;

                            h4 {
                                text-decoration: underline;
                            }

                            p {
                                color: #444;
                            }

                            > * {
                                padding: 0;
                                margin: 0;
                            }

                            &.side-task {
                                position: relative;
                                right: -50px;
                                width: 100%;
                                border-bottom: 1px solid #aaa;
                                padding-bottom: 5px;
                            }

                        }

                        sub {
                            position: relative;
                            right: -40px;
                            top: -5px;
                            width: 100%;
                            text-align: right;
                            color: #aaa;
                            //font-size: small;
                        }

                    }
                }
            `]
    }
);
