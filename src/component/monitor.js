import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {_DEV, MONIT, STORE} from "/src/service/env";
import {theme} from "/src/service/theme";
import {html, css, LitElement} from 'lit';
import {SVGI} from "../service/svg-icon";
import store from "../indexdb/store";


const assets = {
    auto: [
        ['project', 'work', MONIT.WORK, SVGI.WORK],
        ['tool', 'tool', MONIT.TOOL, SVGI.TOOL],
    ],
    manual: [
        ['pause', MONIT.PAUS, SVGI.PAUS],
        ['prev', MONIT.PREV, SVGI.PREV],
        ['next', MONIT.NEXT, SVGI.NEXT],
    ],
}


customElements.define('joi-monitor',

    class JoiMonitor extends LitElement {

        #store = null;

        static properties = {
            activeContent: {type: String},
            activePause: {type: Boolean, default: false}
        };

        constructor() {
            super();
            // this.activeContent = 'INTRO'
            this.activeContent = MONIT.WORK
        }


        async connectedCallback() {
            super.connectedCallback();

            this.#store = await store(STORE.ITEM);
        }

        loopContent(val) {
            // console.log("-- ", val)
            this.activeContent = val
        }

        controContent(val) {

            const View = this.activeContent === MONIT.WORK
                ? this.shadowRoot.querySelector("monitor-view-project")
                : this.shadowRoot.querySelector("monitor-view-tool")


            if (MONIT.PREV === val) return View.prev()

            if (MONIT.NEXT === val) return View.next()

            View.pause()
            this.activePause = !this.activePause;
        }

        async forceConent(code) {

            this.activeContent = MONIT.WORK
            const ViewProject = this.shadowRoot.querySelector("monitor-view-project")
            ViewProject.pause();

            ViewProject.project = await this.#store.query(code)
        }


        render = () => html`
            <article>

                <header>
                    <div class="mbuttons">
                        ${assets.auto.map(
                                ([title, label, code, svg]) => html`
                                    <button title="${title}"
                                            class="${code.toLowerCase()} ${this.activeContent === code ? 'active' : ''}"
                                            @click="${() => this.loopContent(code)}">
                                        <strong>${label}</strong>
                                        <span class="buttonico">
                                            ${unsafeHTML(svg({color: "white"}))}
                                        </span>
                                    </button>
                                `)}
                    </div>

                    <div class="mcontrols">
                        ${assets.manual.map(
                                ([name, val, svg]) => html`
                                    <button title="${name}"
                                            class="${val === MONIT.PAUS && this.activePause ? 'active' : ''}"
                                            @click="${() => this.controContent(val)}">
                                        ${name}
                                        <span class="buttonico">
                                            ${unsafeHTML(svg({color: "#999"}))}
                                        </span>
                                    </button>
                                `)}
                    </div>
                </header>

                <section>
                    <nav>
                        <a id="mi-monitor-view">
                            ${
                                    (MONIT.WORK === this.activeContent && html`
                                        <monitor-view-project></monitor-view-project>
                                    `)
                                    || (MONIT.TOOL === this.activeContent && html`
                                        <monitor-view-tool></monitor-view-tool>
                                    `)
                                    // || ('REFF' === this.activeContent && html`
                                    //     <monitor-view-reference></monitor-view-reference>
                                    // `)
                                    || ""
                            }
                        </a>
                    </nav>
                </section>

            </article>
        `;


        static styles = [
            theme,
            css`
                article {
                    position: relative;
                    overflow: hidden;
                    font-family: var(--font);
                    border: 1px solid #999;
                    //// font-size: large;
                    //border-bottom: 4px solid black;
                    padding: 15px 5px 5px;
                    margin: auto;
                    height: 400px;
                    width: 96vw;
                    //background-color: #444;
                    cursor: pointer;

                    header {
                        position: relative;
                        z-index: 10;
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        background: linear-gradient(270deg, white, transparent)
                    }
                }
            `]
    }
);
