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

// At the top of src/index.js

// Import our new cache initializer function.
import { initializeCache } from './indexdb/cache-asset.js'; // <-- ADD THIS LINE

// ... your other imports like 'saveAsset', 'DATA', etc. remain ...
import { getAllItems, saveItem, saveAsset } from './indexdb';
import DATA, { T, C, D, S } from "/src/_core/_data";


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

        // --- ADD THE FOLLOWING TWO NEW METHODS ---

// Inside your SiteIndex class in src/index.js

        /**
         * The connectedCallback lifecycle method orchestrates our entire app startup.
         */
        async connectedCallback() {
            super.connectedCallback();

            // We make this an async function to control the startup order.
            console.log('APP STARTUP: Kicking off initialization sequence...');

            // 1. First, ensure the database is seeded. `await` makes sure this completes
            //    before we move to the next step.
            await this._seedDatabaseIfNeeded();

            // 2. Second, now that we know the DB is ready, initialize our in-memory cache.
            await initializeCache();

            console.log('APP STARTUP: Initialization sequence complete. Application is ready.');

            // Now, you could set a property to hide a global loading spinner, e.g.
            // this.isAppReady = true;
        }

        /**
         * This is our self-contained seeding logic. It checks the database
         * and only populates it if it's empty.
         */
// Inside your SiteIndex class in src/index.js

        async _seedDatabaseIfNeeded() {
            try {
                console.log('PHASE 2: Checking database status...');
                const itemsInDB = await getAllItems();

                // If the item store is empty, we assume a full seeding is needed.
                if (itemsInDB.length === 0) {
                    console.log('PHASE 2: Database is empty. Seeding "item" and "asset" stores...');

                    // --- Step 1: Seed the 'item' store (same as before) ---
                    const initialItems = DATA;
                    await Promise.all(initialItems.map(item => saveItem(item)));
                    console.log(` > ${initialItems.length} items saved.`);

                    // --- Step 2: Seed the 'asset' store (NEW) ---
                    await Promise.all([
                        saveAsset('T', T),
                        saveAsset('C', C),
                        saveAsset('D', D),
                        saveAsset('S', S)
                    ]);
                    console.log(` > 4 asset configurations saved.`);

                    console.log('PHASE 2: Seeding complete.');
                } else {
                    console.log('PHASE 2: Database already populated. No seeding needed.');
                }
            } catch (error) {
                console.error('PHASE 2: An error occurred during database seeding:', error);
            }
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
