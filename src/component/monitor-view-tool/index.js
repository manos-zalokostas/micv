import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {itemByIndex} from "/src/_service/store";


/**
 *
 */
class MonitorViewTool extends LitElement {

    static properties = {
        active: {type: Number},
        tools: { type: Array },
    };

    constructor() {
        super();
        this.active = 1;
        // this.tools = Monitor.curr().tools.tool || []; // Default tools array from the current monitor object
        this.tools = itemByIndex(20).tools.tool
    }


    action(changedProperties) {
        // if (changedProperties.has('tools')) {
        //     Handle tools updates here if necessary
        // }
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('monitor-view-tool', MonitorViewTool);
