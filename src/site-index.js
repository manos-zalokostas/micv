import {_DEV, BASEPATH, DOMA, EVT, PAGE} from "/src/service/env";
import {html, css, LitElement} from 'lit';
import {theme} from "/src/service/theme";

import "/src/component/badge-category.js";
import "/src/component/badge-tool.js";
import "/src/component/content-detail.js";
import "/src/component/content-menu.js";
import "/src/component/content-tablet.js";
import "/src/component/global-menu.js";
import "/src/component/global-search.js";
import "/src/component/image-slider.js";
import "/src/component/intro-menu.js";
import "/src/component/monitor.js";
import "/src/component/monitor-view-project.js";
import "/src/component/monitor-view-reference.js";
import "/src/component/monitor-view-tool.js";
import "/src/component/project-tool.js";
import "/src/component/quote-intro.js";
import "/src/component/timeline.js";
import "/src/component/timeline_asset.js";

import "/src/pages/page-content.js";
import "/src/pages/page-introduction.js";
import "/src/pages/page-document.js";

import Seeder from "./indexdb/seeder"
import Cache from "/src/service/cache";
import Router from "/src/service/router";


import SWRegister from "/src/swr";

// @TODO:: ENABLE / DISABLE SW FOR PROD / DEV
// await SWRegister();


customElements.define('site-index',


    class SiteIndex extends LitElement {

        #route = Router

        static properties = {
            active: {type: Number},
            display: {type: String}
        };

        constructor() {
            super();
            this.display = PAGE.LAND
        }


        /**
         * The connectedCallback lifecycle method orchestrates our entire app startup.
         */
        async connectedCallback() {
            super.connectedCallback();

            await Seeder.init();
            await Cache.init()
        }

        action(idx) {
            this.active = idx;
        }


        async evtPageTransit(evt) {

            this.display = evt.detail.code;

            if (this.display !== PAGE.WORK) return;

            await this.updateComplete;

            const pageContent = this.shadowRoot.querySelector('page-content');

            pageContent.evtDomainChange({
                detail: {domain: DOMA.WORK},
                composed: true,
                bubbles: true,
            })
        }

        async evtProjectSelect(evt) {

            this.display = PAGE.WORK;

            await this.updateComplete;

            const pageContent = this.shadowRoot.querySelector('page-content');

            pageContent.evtContentTransit({
                detail: {
                    transit: true,
                    entryId: evt.detail.id
                }
            })
        }

        async evtToolSelect(evt) {

            this.display = PAGE.WORK;

            await this.updateComplete;

            const pageContent = this.shadowRoot.querySelector('page-content');

            pageContent.evtToolChange({
                detail: {
                    tool: evt.detail.tool
                }
            })
        }


        render = () => {
            if (this.#route()) return html`
                <div id="document">
                    <page-document></page-document>
                </div>
            `;
            return [PAGE.LAND, PAGE.WORK].includes(this.display)
                && html`
                        <div id="view"
                             @page-transit=${this.evtPageTransit}
                             @project-select=${this.evtProjectSelect}
                             @tool-select=${this.evtToolSelect}>

                            <div id="wrapper">

                                <header class="noprint">
                                    <global-menu></global-menu>
                                    <global-search></global-search>
                                </header>

                                <article>
                                    ${
                                            (PAGE.LAND === this.display && html`
                                                <div id="introduction">
                                                    <page-introduction></page-introduction>
                                                </div>
                                            `)

                                            || (PAGE.WORK === this.display && html`
                                                <div id="content">
                                                    <page-content></page-content>
                                                </div>
                                            `)
                                            || ''
                                    }
                                </article>
                            </div>

                        </div> `
        }


        static styles = [
            theme,
            css`
                html, body {
                    float: left;
                    padding: 0;
                    margin: 0;
                    border: 0;
                    width: 100%;
                    height: 100%;
                }

                #view {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                    background: linear-gradient(180deg, black, transparent);

                    #wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        width: 100vw;
                        height: 100vh;

                        header {
                            position: relative;
                            display: flex;
                            justify-content: space-between;
                            width: 95vw;
                            padding: 10px 25px;
                        }

                        article {
                            position: absolute;
                            left: 0;
                            width: 100vw;
                            height: 100vh;

                            #introduction {
                                top: 0;
                            }

                            #content {
                                top: 100%;
                            }

                            #credentials {
                                top: 200%;
                            }
                        }
                    }
                } `
        ]
    });
