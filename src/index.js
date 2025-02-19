import {html, css, LitElement} from 'lit';
import {_DEV, EVT, PAGE} from "./env";


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
            console.log("--- ", idx);
        }


        evtPageTransit(evt) {
            console.log(" >>>  ", evt.detail);
            this.display = evt.detail.code;
        }

        async evtProjectSelect(evt) {
            debugger
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
            debugger
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
                 @tool-select=${this.evtToolSelect}
            >

                <div id="wrapper">

                    <nav>
                        <global-menu>
                    </nav>

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

                #wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    //text-align: center;
                    width: 100%;
                    height: 100%;
                    padding: 15px;
                    //background-color: white;

                    nav {
                        position: absolute;
                        z-index: 20;
                        left: 50px;
                        //background: red;
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
