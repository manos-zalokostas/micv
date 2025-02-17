import {itemById, itemByIndex} from "/src/_core/store";
import {html, css, LitElement} from 'lit';
import {_DEV, VIEW} from "/src/env";



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
            console.log("--- ", idx);
        }

        evtDomainChange(evt) {
            console.log(' -- DOMAIN CHANGE FUNCTION: ', evt.detail.domain)
            const child = this.shadowRoot.querySelector('content-tablet');
            child.domain = evt.detail.domain;
        }

        evtContentTransit(evt) {
            console.log(' -- CONTENT TRANSIT FUNCTION: ', evt.detail)
            const nodeWrap = this.shadowRoot.querySelector('main');
            const nodeDetail = this.shadowRoot.querySelector('content-detail');
            if (evt.detail.transit) {
                const entry = itemById(evt.detail.entryId);
                console.log("--- ", {entry})
                nodeDetail.asset = entry;
                return nodeWrap.classList.add('mi-transit-detail')
            }
            nodeWrap.classList.remove('mi-transit-detail')
        }

        render = () => html`

            <article
                    @content-transit=${this.evtContentTransit}
                    @domain-change=${this.evtDomainChange}>

                <header>
                    <content-menu></content-menu>
                </header>

                <main class="${_DEV.VIEW === VIEW.WORK.CONT ? 'mi-transit-detail' : ''}">

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
                //padding: 25px;

                header {
                    flex-basis: 100px;
                }

                main {
                    flex-basis: calc(100vh - 100px);
                    position: relative;
                    //z-index: 5;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 200%;
                    transition: all;
                    //padding: 25px;

                    &.mi-transit-detail {
                        left: -100%;
                    }

                    > div {
                        position: relative;
                        float: left;
                        width: 50%;
                        height: 100%;
                    }

                }
            }
        `
    }
);
