// src/route/page-content.js

// 1. UPDATED IMPORT: Swap the old store for the new DB function.
import {StoreItem} from '../indexdb';
import {html, css, LitElement} from 'lit';
import {_DEV, DOMA, EVT, VIEW} from "/src/service/env";

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

        // 2. THE ONLY CHANGE: This method is now async.
        async evtContentTransit(evt) {
            const nodeWrap = this.shadowRoot.querySelector('main');
            const nodeDetail = this.shadowRoot.querySelector('content-detail');

            if (!evt.detail.transit) return nodeWrap.classList.remove(CSSCLASS_TRANSIT)

            // --- THE SURGICAL REPLACEMENT ---
            // OLD: const entry = itemById(evt.detail.entryId);
            // NEW:
            const entry = await StoreItem.id(evt.detail.entryId);
            // --- END REPLACEMENT ---

            nodeDetail.asset = entry;
            nodeWrap.classList.add(CSSCLASS_TRANSIT);
        }

        // --- NO CHANGES to render or styles ---
        render = () => html`
            <article @tool-change=${this.evtToolChange}
                     @content-transit=${this.evtContentTransit}
                     @domain-change=${this.evtDomainChange}>
                <header>
                    <content-menu></content-menu>
                </header>
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
