import {itemById, itemByIndex} from "/src/_core/store";
import {html, css, LitElement} from 'lit';
import {_DEV, DOMA, EVT, VIEW} from "/src/env";

const CSSCLASS_TRANSIT = 'mi-transit-detail';

customElements.define('page-content',

    class PageContent extends LitElement {

        static properties = {
            active: {type: Number}
        };

        constructor() {
            super();
            this.active = 1;
            this.transit = false;
        }


        action(idx) {
            this.active = idx;
        }

        evtDomainChange(evt) {
            const child = this.shadowRoot.querySelector('content-tablet');
            child.domain = evt.detail.domain;
            this.evtContentTransit({detail: {transit: false}})
        }

        evtToolChange(evt) {
            const childMenu = this.shadowRoot.querySelector('content-menu');
            childMenu.activeTool = evt.detail.tool
            childMenu.active = DOMA.TOOL;

            const childTablet = this.shadowRoot.querySelector('content-tablet');
            childTablet.tool = evt.detail.tool;
            this.evtContentTransit({detail: {transit: false}})

        }


        evtContentTransit(evt) {
            const nodeWrap = this.shadowRoot.querySelector('main');
            const nodeDetail = this.shadowRoot.querySelector('content-detail');

            if (!evt.detail.transit) return nodeWrap.classList.remove(CSSCLASS_TRANSIT)

            const entry = itemById(evt.detail.entryId);
            nodeDetail.asset = entry;
            nodeWrap.classList.add(CSSCLASS_TRANSIT)
        }


        render = () => html`

            <article
                    @tool-change=${this.evtToolChange}
                    @content-transit=${this.evtContentTransit}
                    @domain-change=${this.evtDomainChange}>

                <header>
                    <content-menu></content-menu>
                </header>

                    <!--                <main class="${_DEV.VIEW === VIEW.WORK.CONT ? CSSCLASS_TRANSIT : ''}">-->
                <main>

                    <div>
                        <content-tablet></content-tablet>
                    </div>

                    <div>
                        <content-detail></content-detail>
                    </div>

                </main>

            </article>

        `;


        static styles = css`

            article {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 100vw;
                height: 100vh;

                header {
                    flex-basis: 100px;
                }

                main {
                    flex-basis: calc(100vh - 100px);
                    position: relative;
                    top: 0;
                    left: 0;
                    width: 200%;
                    transition: all;


                    &.mi-transit-detail {
                        left: -100%;
                    }

                    > div {
                        position: relative;
                        float: left;
                        padding: 50px 0;
                        width: 50%;

                    }

                }
            }
        `
    }
)
;
