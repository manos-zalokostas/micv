import {html, css, LitElement} from 'lit';
import {groupProjects, groupTools, itemById, itemByIndex} from "/src/_core/store";
import {EVT} from "../env";

const list = groupTools();

/**
 *
 */


customElements.define('monitor-view-tool',


    class MonitorViewTool extends LitElement {

        static properties = {
            active: {type: Number},
            tools: {type: Array},
            activeIndex: {type: Number, state: true},
            timer: {type: Object, state: true}
        };

        constructor() {
            super();
            this.active = 1;
            this.tools = null;

            this.activeIndex = 0;
            this.slice = null;

            // this.tools = Monitor.curr().tools.tool || []; // Default tools array from the current monitor object
            // this.tools = itemByIndex(20).tools.tool
        }

        loop() {
            this.timer = setInterval(
                () => {
                    const step = 12;
                    const start = this.activeIndex * step,
                        end = start + step;
                    // const pid = list[this.activeIndex][0]
                    this.tools = list.slice(start, end)
                    this.activeIndex++;
                    if (!this.tools.length) this.activeIndex = 0;
                    console.log({start, end, index: this.activeIndex})
                    // this.clear();
                }, 5000
            )
        }

        pause() {
            clearInterval(this.timer)
            // this.tools = null;
        }

        clear() {
            clearInterval(this.timer)
            this.tools = null;
        }

        connectedCallback() {
            super.connectedCallback();
            console.log('Element launced the DOM!');
            this.loop();
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            console.log('Element removed from the DOM!');
            this.clear()
        }


        chooseTool(evt) {
            debugger
            evt.preventDefault();
            console.log(">>>>>> ", evt.target.id)
            // this.active = id;

            this.dispatchEvent(
                new CustomEvent(EVT.TOOL_SELECT, {
                        detail: {tool: evt.target.id},
                        bubbles: true,        // Event travels up the DOM tree
                        composed: true        // Event crosses shadow DOM boundaries
                    }
                )
            )
        }

        render = () => {
            if (!this.tools) return '';

            return html`
                <div id="view-tool">
                    ${this.tools.map(
                            val => html`
                                <a id="${val}"
                                   @click="${this.chooseTool}">
                                    <h4>${val.replaceAll("_", " ")}</h4>
                                    <img src="/images/tech_logos/${val}.jpg" alt="${val}"/>
                                </a>
                            `
                    )}
                </div>
            `;
        }

        static styles = css`
            #view-tool {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 15px;
                padding: 30px 15px 15px;

                a {
                    display: flex;
                    justify-content: space-between;
                    color: white;
                    width: 20%;
                    padding: 0 10px;
                    background: #444;
                    border-bottom: 2px solid #555;

                    img {
                        width: 100px;
                        height: 100px;
                        pointer-events: none;
                    }
                }
            }

        `
    }
);
