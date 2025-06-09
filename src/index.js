import {html, css, LitElement} from 'lit';
import {_DEV, BASEPATH, DOMA, EVT, PAGE} from "./env";
import {theme} from "./theme";

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

import "/src/route/page-content.js";
import "/src/route/page-introduction.js";
import "/src/route/page-document.js";
import DATA, {T} from "/src/_core/_data"

const IDS = Object.values(DATA).map(o => o.id),
    TOOLS = Object.values(T);

const PATH = {
    DOCU: 'document',
    PROJ: 'project',
    TOOL: 'tool',
}

import SWRegister from "/src/micv-sw-register";

// @TODO:: ENABLE / DISABLE SW FOR PROD / DEV
// await SWRegister();


customElements.define('site-index',


    class SiteIndex extends LitElement {

        #route = () => {
            const {pathname} = window.location;

            // DOCUMENT
            if (pathname === ["", BASEPATH, PATH.DOCU].join("/")) return true

            const parts = pathname.split("/");
            if (parts.length !== 4) return false;

            let [, , type, id] = parts;

            // TOOL
            if (PATH.TOOL === type && TOOLS.includes(id)) return !this.evtToolSelect({detail: {tool: id}})

            // WORK | STUDY
            id = id.toUpperCase();
            if (PATH.PROJ === type && IDS.includes(id)) return !this.evtProjectSelect({detail: {id}})


            return false;
        }

        static properties = {
            active: {type: Number},
            display: {type: String}
        };

        constructor() {
            super();
            this.display = PAGE.LAND
        }

        action(idx) {
            this.active = idx;
            // console.log("--- ", idx);
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
                        //padding: 15px;

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

                }

            `
        ]
    }
)
;
