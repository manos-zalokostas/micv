import {html, css, LitElement} from 'lit';
import {_DEV, PAGE, VIEW} from "/src/service/env";
import {theme} from "/src/service/theme";


customElements.define('page-introduction',

    class PageIntroduction extends LitElement {

        static properties = {
            // active: {type: Number},
            activeContent: {type: String, default: VIEW.LAND.INTRO},
        };

        constructor() {
            super();
            this.activeContent = VIEW.LAND.INTRO
        }

        // action(idx) {
        //     this.active = idx;
        // }

        evtIntroTransit(evt) {
            this.activeContent = evt.detail.code
        }

        evtMonitorContent(evt) {
            const Monitor = this.shadowRoot.querySelector('joi-monitor');
            Monitor.forceConent(evt.detail.code)
        }

        render = () => html`

            <article
                    @intro-transit="${this.evtIntroTransit}"
                    @monitor-content="${this.evtMonitorContent}">

                <header>
                    <intro-menu></intro-menu>
                </header>

                <aside id="mi-monitor">
                    <joi-monitor></joi-monitor>
                </aside>

                <main>
                    ${
                            (VIEW.LAND.INTRO === this.activeContent && html`
                                <quote-intro></quote-intro>
                            `)
                            || (VIEW.LAND.RESU === this.activeContent && html`
                                <joi-timeline></joi-timeline>
                            `)
                            // || (VIEW.LAND.DOCU === this.activeContent && html`
                            //     <timeline-interactive></timeline-interactive>
                            // `)
                            || ''
                    }
                </main>

            </article>

        `;


        static styles = [
            theme,
            css`

            article {

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 25px;
                width: 100vw;
                height: 100vh;

                aside {
                    height: 375px;
                    margin: 10px 0 50px 0;
                }

                main {
                    height: calc(100vh - 475px);
                    overflow: auto;
                }

            }
        `]
    }
);
