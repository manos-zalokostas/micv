import {html, css, LitElement} from 'lit';
import {groupProjects, groupTools, itemById, itemByIndex} from "/src/_core/store";
import {theme} from "../theme";
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

        #step = 12;

        constructor() {
            super();
            this.active = 1;
            this.tools = null;

            this.activeIndex = 0;
            this.slice = null;

            // this.tools = Monitor.curr().tools || []; // Default tools array from the current monitor object
            // this.tools = itemByIndex(20).tools
        }

        display() {
            const start = this.activeIndex * this.#step,
                end = start + this.#step;

            this.tools = list.slice(start, end)
        }

        loop() {
            this.timer = setInterval(
                () => {
                    this.display()
                    this.activeIndex++;
                    if (!this.tools.length) this.activeIndex = 0;
                }, 5000
            )
        }

        pause() {
            clearInterval(this.timer)
            // this.tools = null;
        }


        next() {

            this.pause();
            this.activeIndex++;
            console.log(this.activeIndex, "<<<<<<<<<<<** ")
            if (((this.activeIndex * this.#step) > list.length - 1)) this.activeIndex = 0;
            this.display()
        }

        prev() {
            this.pause();
            this.activeIndex--;
            if (this.activeIndex < 0) this.activeIndex = (list.length / this.#step) - 1;
            this.display()
        }


        clear() {
            clearInterval(this.timer)
            this.tools = null;
        }

        connectedCallback() {
            super.connectedCallback();
            // console.log('Element launced the DOM!');
            this.loop();
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            // console.log('Element removed from the DOM!');
            this.clear()
        }


        chooseTool(evt) {
            evt.preventDefault();

            this.dispatchEvent(
                new CustomEvent(EVT.TOOL_SELECT, {
                        detail: {tool: evt.target.id},
                        bubbles: true,
                        composed: true
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
                                    <h4>${val.replaceAll("_", " ").toUpperCase()}</h4>
                                    <span>
                                        <img src="/images/tech_logos/${val}.jpg" alt="${val}"/>
                                    </span>
                                </a>
                            `
                    )}
                </div>
            `;
        }

        static styles = [
            theme,
            css`
                #view-tool {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 30px 15px 15px;

                    a {
                        display: flex;
                        justify-content: space-between;
                        font-size: large;
                        font-family: var(--font);
                        color: var(--color-tool);
                        padding: 6px;
                        border-bottom: 2px solid black;
                        width: 20%;

                        &:hover {
                            text-decoration: underline;
                        }

                        span {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 80px;
                            height: 80px;
                            padding: 4px 8px;
                            border-radius: 8px;
                            border: 2px solid;
                            background-color: white;

                            img {
                                max-width: 72px;
                                max-height: 72px;
                                pointer-events: none;
                                //padding: 4px 8px;
                                border-radius: 4px;
                            }
                        }

                    }
                }
            `
        ]
    }
);
