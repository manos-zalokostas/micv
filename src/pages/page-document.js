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
                <div class="topic bgless">
                    <em class="topic-title"></em>
                    Senior Full Stack Engineer with 10+ years of experience, built upon a foundation of 15+ years of
                    continuous study and development. My core focus has been architecting and building complete,
                    end-to-end systems—from creating new applications based on high-level business proposals, to
                    modernizing chaotic legacy processes into robust, scalable, and secure web applications and
                    their portable infrastructures.</i>
                </div>
                <br/>
                <div class="topic">
                    <em class="topic-title">technical experience</em>
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
                    <em class="topic-title">publications & research</em>
                    <section>
                        <nav>
                            <a>
                                <h4>SYNERGY: A Big Data Platform for the Facilitation of the Energy Transition</h4>
                                <p>Co-authored a technical paper on the SYNERGY platform's architecture, detailing
                                    its design as a big data solution for the energy transition.
                                    Published: 2023 International Conference on Future Energy Solutions (FES) / IEEE
                                    Xplore.
                                    Official Link: https://ieeexplore.ieee.org/author/37089912710</p>
                            </a>
                        </nav>
                    </section>
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
                    <em class="topic-title">languages</em>
                    ${lang.map(({tasks}, i) => html`
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
                    
                    &.bgless {
                        background-color: transparent;
                    }

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
                            //padding: 2px;
                            //font-size: small;
                        }

                    }
                }
            `]
    }
);
