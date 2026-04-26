import {groupByTool, groupTools, parseDomain, parseDomainSection} from "/src/service/store";
import {DOMA, EVT, STORE} from "/src/service/env";
import {theme} from "/src/service/theme";
import {css, html, LitElement} from 'lit';
import store from "../indexdb/store";


customElements.define('content-tablet',

    class ContentTablet extends LitElement {

        static properties = {
            tool: {type: String},
            assets: {type: Array},
            domain: {type: String},
        };

        #store = null;
        #assets = null;
        #domainCurr = null;
        #toolCurr = null;
        #viewCurr = '';
        #viewAvail = {
            project: () => {
                return html`
                    <nav class="mi-tablet"
                         style="background-image: url('/micv/images/tech_logos/${this.tool}.jpg')">
                        ${this.#assets.map((o) => html`
                            <a href="#" id="${o.id}" class="${o.domain.toLowerCase()}"
                               style="background-image: url('${o.shots[0]}')"
                               @click="${this.chooseProject}">
                                <small>${o.category}</small>
                                <strong class="mi-txt-h2 ${o.domain.toLowerCase()}">${o.title}
                                    <small class="mi-txt-min pill ${o.domain.toLowerCase()}">${o.id}</small>
                                </strong>
                                <p>
                                    <span>${o.description.substring(0, 200)}<em>&nbsp&nbsp;...more</em></span>
                                </p>
                            </a>
                        `)}
                    </nav>
                `
            },
            tool: () => {
                return html`
                    <nav class="mi-tablet">
                        ${this.#assets.map(
                                val => html`
                                    <a id="${val}" class="tool mi-tool"
                                       style="background-image: url('/micv/images/tech_logos/${val}.jpg')"
                                       @click="${this.chooseTool}">
                                        <h4>${val.replaceAll("_", " ").toUpperCase()}</h4>
                                        <span>
                                            <img src="/micv/images/tech_logos/${val}.jpg" alt="${val}"/>
                                        </span>
                                    </a>
                                `
                        )}
                    </nav>
                `
            }
        }


        constructor() {
            super();
        }

        async connectedCallback() {
            console.log(" -- CONTENT-TABLET -- CONNECTE-CALLBACK")
            super.connectedCallback();

            this.#store = await store(STORE.ITEM);
            // this.#assets = await this.#store.query(groupTools)
        }

        async updated(changedProperties) {
            super.updated(changedProperties);
            console.log(" -- CONTENT-TABLET -- UPDATEID")
            debugger

            if (!this.#store) return;


            if ([DOMA.WORK, DOMA.STUD].includes(this.domain)) {
                this.#toolCurr = null;
                if (this.#domainCurr !== this.domain) {
                    this.#domainCurr = this.domain;
                    this.#assets = await this.#store.queryIndex("domain", this.domain, parseDomain)
                    this.#viewCurr = this.#viewAvail.project()
                    this.requestUpdate();
                }
            }

            if ([DOMA.TOOL].includes(this.domain) && !(this.tool)) {
                if (this.#domainCurr !== this.domain) {
                    this.#domainCurr = this.domain;
                    this.#assets = await this.#store.query(groupTools)
                    this.#viewCurr = this.#viewAvail.tool()
                    this.requestUpdate();
                }
            }

            if ([DOMA.TOOL].includes(this.#domainCurr) && this.tool) {
                this.#domainCurr = this.domain;
                if (this.#toolCurr !== this.tool) {
                    this.#toolCurr = this.tool;
                    const entries = await this.#store.queryIndex("tools", this.tool, groupByTool)
                    this.#assets = await this._packProjects(entries)
                    this.#viewCurr = this.#viewAvail.project()
                    this.requestUpdate();
                }
            }
        }


        async _packProjects(entries) {
            debugger
            const pack = []
            const codes = entries.map(a => a[0]).flat()
            for (const code of codes) {
                pack.push(await this.#store.query(code))
            }
            debugger
            return pack;
        }


        chooseTool(evt) {
            this.tool = evt.target.id;

            this.dispatchEvent(new CustomEvent(EVT.TOOL_CHANGE, {
                detail: {tool: evt.target.id},
                bubbles: true,
                composed: true
            }));
        }


        chooseProject(evt) {
            evt.preventDefault()
            this.dispatchEvent(
                new CustomEvent(EVT.CONTENT_TRANSIT, {
                    detail: {
                        transit: true,
                        entryId: evt.target.id
                    },
                    bubbles: true,
                })
            )
        }


        render = (x, y, z) => {
            console.log(" -- CONTENT-TABLET -- RENDER INVOKED")
            return this.#viewCurr;
            // const view = this.domain !== DOMA.TOOL
            //     ? this.#view.project()
            //     : this.#view.tool()
            // debugger
            // return view
        }


        static styles = [
            theme,
            css`
                nav {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 10px;
                    position: relative;
                    z-index: 5;
                    font-family: Tahoma, Geneva, sans-serif;
                    height: 90vh;
                    overflow: auto;
                    background-blend-mode: multiply;
                    background-position: 50%;
                    background-color: rgba(0, 0, 0, .9);
                    background-size: 600px;
                    padding: 50px 10px;


                    a {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        position: relative;
                        color: white;
                        text-decoration: none;
                        padding: 10px;
                        margin: 10px;
                        width: 250px;
                        height: 400px;
                        overflow: hidden;
                        background-color: #444;
                        background-blend-mode: multiply;
                        background-repeat: no-repeat;
                        background-position: 150px;
                        //border: 4px solid #222;
                        border: 4px solid #aaa;

                        &:hover {
                            border-color: inherit;
                        }

                        * {
                            pointer-events: none;
                        }

                        &.mi-tool {
                            justify-content: flex-start;
                            // font-size: 18px;
                            height: 175px;
                            background-size: 100%;

                            span {
                                position: absolute;
                                left: 5px;
                                bottom: 5px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 100px;
                                height: 100px;
                                background-color: white;

                                img {
                                    max-width: 64px;
                                    max-height: 64px;
                                    padding: 4px 8px;
                                    border-radius: 4px;
                                    pointer-events: none;

                                }
                            }
                        }

                        p {
                            color: white;
                        }

                        strong {
                            width: 50%;
                        }

                        small {
                            color: goldenrod;
                            width: 50%;
                        }


                        &:hover {
                            img {
                                left: 40%;
                            }

                        }

                    }
                }

            `
        ]

    }
)
;
