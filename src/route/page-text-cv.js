import {html, css, LitElement} from 'lit';
import {theme} from "../theme";
import {work, study, tool, ide, os, lang} from "./data-cv";

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
                <header>
                    <div class="personal">
                        <br/>
                        <h1>MANOS ZALOKOSTAS</h1>
                        <em>mail: manos.zalokostas@gmail.com | mob: +30 6944266295</em>
                        <br/>
                        <em>address:12 midias str, piraeus, greece</em>
                    </div>
                    <div class="occupational">
                        <br/>
                        <br/>
                        <h2>creative - structured - disciplined - commtted</h2>
                        <em>https://gr.linkedin.com/in/manos-zalokostas-93798332</em>
                        <br/>
                        <em>online portfolio: https://appjoi.online/micv</em>
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
                    <em class="topic-title">studies & training</em>
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
                    ${tool.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                <a>
                                    ${tasks.map(detail => html`
                                        <p>${detail}</p>
                                        </a>
                                    `)}
                            </nav>
                        </section>
                    `)}
                </div>


                <div class="topic">
                    <em class="topic-title">operating systems</em>
                    ${os.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                <a>
                                    ${tasks.map(detail => html`
                                        <p>${detail}</p>
                                        </a>
                                    `)}
                            </nav>
                        </section>
                    `)}
                </div>

                <div class="topic">
                    <em class="topic-title">integrated enviroments</em>
                    ${ide.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                <a>
                                    ${tasks.map(detail => html`
                                        <p>${detail}</p>
                                        </a>
                                    `)}
                            </nav>
                        </section>
                    `)}
                </div>

                <div class="topic">
                    <em class="topic-title">language</em>
                    ${lang.map(({type, tasks}, i) => html`
                        <section>
                            <header>
                                <h3>${type.toUpperCase()}</h3>
                            </header>
                            <nav>
                                <a>
                                    ${tasks.map(detail => html`
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
                    position: absolute;
                    left: calc((100vw - 1000px) / 2);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 100px;
                    height: 95vh;
                    width: 1000px;
                    max-width: 100%;
                    overflow: auto;
                    background: white;
                    font-family: var(--sgs-font-family);

                    > header {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        align-items: center;

                        .personal {
                            
                        }
                        .occupational {
                            text-align: right;
                        }
                        
                        h1 {
                            text-transform: capitalize;
                            padding: 0;
                            margin: 0;
                        }

                        h2 {
                            text-transform: uppercase;
                            font-size: medium;
                            text-align: right;
                            padding: 0;
                            margin: 0;
                        }

                        p {
                            font-size: x-small;
                            text-align: right;
                            padding: 0;
                            margin: 0;
                        }
                        
                        em {
                            font-size: small;
                        }
                    }
                }


                .topic {
                    position: relative;
                    background-color: #eee;
                    width: 105%;
                    top: 150px;
                    left: 3%;
                    margin: 0 0 50px 0;

                    .topic-title {
                        position: relative;
                        top: -20px;
                        float: right;
                        color: #aaa;
                    }
                }

                section {
                    position: relative;
                    left: -50px;
                    margin: 50px 0 25px;
                    width: 100%;

                    header {
                        border-bottom: 4px solid #000;

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
                            margin: 20px 0 10px 10px;
                            padding: 5px;

                            h4 {
                                text-decoration: underline;
                            }

                            > * {
                                padding: 0;
                                margin: 0;
                            }

                            &.side-task {
                                position: relative;
                                right: -50px;
                                width: 100%;
                                border-bottom: 2px solid #bbb;
                                padding-bottom: 10px;
                            }
                        }

                        sub {
                            position: relative;
                            right: -40px;
                            top: -5px;
                            width: 100%;
                            text-align: right;
                            color: #aaa;
                            font-size: small;
                        }

                    }
                }
            `]
    }
);
