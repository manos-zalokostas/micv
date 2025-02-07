import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {groupProjects, groupTools, itemById, itemByIndex} from "/src/_core/store";

const list = groupTools();

/**
 *
 */
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
                if(!this.tools.length) this.activeIndex = 0;
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

    static styles = _style();
    render = () => this.tools ? _html(this) : ''
}

customElements.define('monitor-view-tool', MonitorViewTool);
