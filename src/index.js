import {html, css, LitElement} from 'lit';
import {_DEV, EVT, PAGE} from "./env";

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

import SWRegister from "/src/micv-sw-register";
SWRegister();


customElements.define('site-index',


    class SiteIndex extends LitElement {

        static properties = {
            active: {type: Number},
            display: {type: String}
        };

        constructor() {
            super();
            this.display = _DEV.PAGE
        }

        action(idx) {
            this.active = idx;
            // console.log("--- ", idx);
        }


        evtPageTransit(evt) {
            // console.log(" >>>  ", evt.detail);
            this.display = evt.detail.code;
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

        render = () => html`

            <div id="view"
                 @page-transit=${this.evtPageTransit}
                 @project-select=${this.evtProjectSelect}
                 @tool-select=${this.evtToolSelect}>

                <div id="wrapper">

                    <header>
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

                                // || (PAGE.CERT === this.display && html`
                                //     <div id="credentials">
                                //         <page-reference></page-reference>
                                //     </div>
                                // `)

                                || ''

                        }
                    </article>
                </div>

            </div>
        `;


        static styles = css`

            #view {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: linear-gradient(180deg, black, transparent);

                #wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    padding: 15px;

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
    }
);
