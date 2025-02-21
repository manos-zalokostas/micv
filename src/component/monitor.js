import {html, css, LitElement} from 'lit';
import {itemById} from "/src/_core/store";
import {_DEV, MONIT} from "../env";
import {theme} from "../theme";

const assets = {
    auto: [
        ['tool', 'tools', MONIT.TOOL],
        ['project', 'projects', MONIT.WORK],
    ],
    manual: [
        ['pause', MONIT.PAUS],
        ['prev', MONIT.PREV],
        ['next', MONIT.NEXT],
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
            this.activeContent = MONIT.WORK
        }

        loopContent(val) {
            // console.log("-- ", val)
            this.activeContent = val
        }

        controContent(val) {

            const View = this.activeContent === MONIT.WORK
                ? this.shadowRoot.querySelector("monitor-view-project")
                : this.shadowRoot.querySelector("monitor-view-tool")

            if (MONIT.PAUS === val) return View.pause()

            if (MONIT.PREV === val) return View.prev()

            View.next();
        }

        forceConent(code) {

            this.activeContent = MONIT.WORK
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
                                    <button title="${title}" class="${this.activeContent === code ? 'active' : ''}"
                                            @click="${() => this.loopContent(code)}">
                                        ${label}
                                    </button>
                                `)}
                    </div>

                    <div class="mcontrols">
                        ${assets.manual.map(
                                ([name, val]) => html`
                                    <button title="${name}"
                                            @click="${() => this.controContent(val)}">
                                        ${name}
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
                        width: 100%;
                    }
                }
            `]
    }
);
