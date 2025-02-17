import {html, css, LitElement} from 'lit';
import "/src/component/monitor-view-project"
import "/src/component/monitor-view-tool"
import {itemById} from "../../_core/store";

const assets = {
    auto: [
        ['tool', 'tools', 'TOOL',],
        ['project', 'projects', 'PROJ'],
    ],
    manual: [
        'pause', 'prev', 'next'
    ],
}


customElements.define('joi-monitor',

    class JoiMonitor extends LitElement {


        static properties = {
            activeContent: {type: String},
        };

        constructor() {
            super();
            // this.activeContent = 'INTRO'
            this.activeContent = 'TOOL'
        }

        loopContent(val) {
            console.log("-- ", val)
            this.activeContent = val
        }

        controContent(val) {
            const View = this.activeContent === "PROJ"
                ? this.shadowRoot.querySelector("monitor-view-project")
                : this.shadowRoot.querySelector("monitor-view-tool")

            if ('pause' === val) return View.pause()

            if ('prev' === val) return View.prev()

            View.next();
        }

        forceConent(code) {

            this.activeContent = 'PROJ'
            const ViewProject = this.shadowRoot.querySelector("monitor-view-project")
            ViewProject.pause();

            ViewProject.project = itemById(code)
        }


        render = () => html`
            <article>

                <header>
                    <div class="mbuttons">
                        ${assets.auto.map(
                                ([title, label, code]) => html`
                                    <button title="${title}"
                                            @click="${() => elem.loopContent(code)}">
                                        ${label}
                                    </button>
                                `)}
                    </div>

                    <div class="mcontrols">
                        ${assets.manual.map(
                                val => html`
                                    <button title="${val}"
                                            @click="${() => elem.controContent(val)}">
                                        ${val}
                                    </button>
                                `)}
                    </div>
                </header>

                <section>
                    <nav>
                        <a id="mi-monitor-view">
                            ${
                                    ('PROJ' === elem.activeContent && html`
                                        <monitor-view-project></monitor-view-project>
                                    `)
                                    || ('TOOL' === elem.activeContent && html`
                                        <monitor-view-tool></monitor-view-tool>
                                    `)
                                    || ('REFF' === elem.activeContent && html`
                                        <monitor-view-reference></monitor-view-reference>
                                    `)
                                    || ""
                            }
                        </a>
                    </nav>
                </section>

            </article>
        `;


        static styles = css`

            article {
                position: relative;
                width: 96vw;
                margin: 0 2vw;
                height: 400px;
                cursor: pointer;
                overflow: hidden;
                border-bottom: 4px solid black;
                padding: 15px 5px 5px;
                background-color: #444;

                header {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    justify-content: space-between;
                    background: linear-gradient(0, #555, #444);
                    width: 100%;

                    button {
                        color: white;
                        font-family: verdana;
                        padding: 4px 10px;
                        margin: 2px;
                        border: none;
                        outline: none;
                        width: 75px;
                        background: #555
                    }

                }

            }
        `
    }
);
